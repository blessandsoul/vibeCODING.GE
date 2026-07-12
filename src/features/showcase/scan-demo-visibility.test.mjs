import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  FIX_STAGES,
  createTimelinePlayer,
} from './scan-demo-models.mjs';

const HELPER_URL = new URL('./scan-demo-visibility.mjs', import.meta.url);

async function loadVisibilityHelper() {
  try {
    const helper = await import(HELPER_URL.href);
    assert.equal(
      typeof helper.playTimelineWhenVisible,
      'function',
      'the production visibility helper must export playTimelineWhenVisible',
    );
    return helper.playTimelineWhenVisible;
  } catch (error) {
    if (error?.code === 'ERR_MODULE_NOT_FOUND') {
      assert.fail('the production scan-demo-visibility helper must exist');
    }
    throw error;
  }
}

function createObserverHarness() {
  let callback;
  let options;
  const observed = [];
  let disconnectCount = 0;

  return {
    createObserver(nextCallback, nextOptions) {
      callback = nextCallback;
      options = nextOptions;
      return {
        disconnect() {
          disconnectCount += 1;
        },
        observe(element) {
          observed.push(element);
        },
      };
    },
    emit(entry) {
      assert.equal(typeof callback, 'function', 'observer callback must be registered');
      callback([entry]);
    },
    get disconnectCount() {
      return disconnectCount;
    },
    get observed() {
      return observed;
    },
    get options() {
      return options;
    },
  };
}

test('autoplay stays idle before a meaningful intersection', async () => {
  const playTimelineWhenVisible = await loadVisibilityHelper();
  const observer = createObserverHarness();
  const element = { id: 'scan-box' };
  let playCount = 0;

  const cleanup = playTimelineWhenVisible({
    element,
    play: () => {
      playCount += 1;
    },
    stop: () => undefined,
    createObserver: observer.createObserver,
  });

  assert.equal(playCount, 0);
  assert.deepEqual(observer.observed, [element]);
  assert.deepEqual(observer.options, { threshold: 0.35 });

  observer.emit({ intersectionRatio: 0, isIntersecting: false });
  observer.emit({ intersectionRatio: 0.34, isIntersecting: true });
  assert.equal(playCount, 0);

  cleanup();
});

test('the first meaningful intersection starts exactly one automatic pass', async () => {
  const playTimelineWhenVisible = await loadVisibilityHelper();
  const observer = createObserverHarness();
  let playCount = 0;

  const cleanup = playTimelineWhenVisible({
    element: { id: 'scan-box' },
    play: () => {
      playCount += 1;
    },
    stop: () => undefined,
    createObserver: observer.createObserver,
  });

  observer.emit({ intersectionRatio: 0.35, isIntersecting: true });
  observer.emit({ intersectionRatio: 1, isIntersecting: true });

  assert.equal(playCount, 1);
  assert.equal(observer.disconnectCount, 1);

  cleanup();
});

test('cleanup before visibility disconnects and prevents a late play', async () => {
  const playTimelineWhenVisible = await loadVisibilityHelper();
  const observer = createObserverHarness();
  let playCount = 0;
  let stopCount = 0;

  const cleanup = playTimelineWhenVisible({
    element: { id: 'scan-box' },
    play: () => {
      playCount += 1;
    },
    stop: () => {
      stopCount += 1;
    },
    createObserver: observer.createObserver,
  });

  cleanup();
  observer.emit({ intersectionRatio: 1, isIntersecting: true });

  assert.equal(playCount, 0);
  assert.equal(stopCount, 1);
  assert.equal(observer.disconnectCount, 1);
});

test('reduced motion immediately emits the real final repair frame', async () => {
  const playTimelineWhenVisible = await loadVisibilityHelper();
  const seen = [];
  const player = createTimelinePlayer({
    stages: FIX_STAGES,
    reducedMotion: true,
    schedule: () => assert.fail('reduced motion must not schedule timers'),
    cancel: () => undefined,
    onStage: (stage) => seen.push(stage),
  });

  const cleanup = playTimelineWhenVisible({
    element: { id: 'scan-box' },
    reducedMotion: true,
    play: player.play,
    stop: player.stop,
    createObserver: () => assert.fail('reduced motion must not create an observer'),
  });

  assert.deepEqual(seen, ['clean']);
  cleanup();
});

test('both components wire the visibility helper to their real demo boxes', async () => {
  for (const filename of ['ScanRls.tsx', 'ScanFixRescan.tsx']) {
    const source = await readFile(new URL(`./${filename}`, import.meta.url), 'utf8');

    assert.match(source, /playTimelineWhenVisible/u, `${filename} must use the production helper`);
    assert.match(
      source,
      /const demoRef = useRef<HTMLDivElement>\(null\);/u,
      `${filename} must own a ref for its rendered box`,
    );
    assert.match(
      source,
      /playTimelineWhenVisible\(\{[\s\S]*?element: demoRef\.current,/u,
      `${filename} must pass the rendered box to the helper`,
    );
    assert.match(
      source,
      /<div\s+ref=\{demoRef\}\s+className="mt-10 overflow-hidden rounded-3xl bg-white/u,
      `${filename} must observe the real visual demo box`,
    );
    assert.doesNotMatch(
      source,
      /^\s*player\.play\(\);/mu,
      `${filename} must not autoplay directly from mount`,
    );
  }
});
