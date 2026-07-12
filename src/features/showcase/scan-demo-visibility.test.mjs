import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import * as lifecycle from './scan-demo-visibility.mjs';

const NARRATIVE_COMPONENTS = [
  'ScanScorecard.tsx',
  'ScanRls.tsx',
  'ScanPaywall.tsx',
  'ScanFixRescan.tsx',
  'ScanTenWays.tsx',
  'HeroProof.tsx',
];

function createObserverHarness() {
  const instances = [];

  class Observer {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      this.observed = [];
      this.disconnectCalls = 0;
      instances.push(this);
    }

    observe(target) {
      this.observed.push(target);
    }

    disconnect() {
      this.disconnectCalls += 1;
    }

    emit(target, intersectionRatio, isIntersecting = intersectionRatio > 0) {
      this.callback([{ target, intersectionRatio, isIntersecting }]);
    }
  }

  return { Observer, instances };
}

function createDocumentHarness() {
  const listeners = new Map();

  return {
    hidden: false,
    addEventListener(type, callback) {
      listeners.set(type, callback);
    },
    removeEventListener(type, callback) {
      if (listeners.get(type) === callback) listeners.delete(type);
    },
    setHidden(hidden) {
      this.hidden = hidden;
      listeners.get('visibilitychange')?.();
    },
  };
}

function createTimerHarness() {
  let nextId = 1;
  const tasks = new Map();

  return {
    schedule(callback, delay) {
      const id = nextId++;
      tasks.set(id, { callback, delay, cancelled: false, fired: false });
      return id;
    },
    cancel(id) {
      const task = tasks.get(id);
      if (task) task.cancelled = true;
    },
    fire(id) {
      const task = tasks.get(id);
      assert.ok(task, `unknown timer ${id}`);
      if (task.cancelled || task.fired) return;
      task.fired = true;
      task.callback();
    },
    pending() {
      return [...tasks.entries()].filter(([, task]) => !task.cancelled && !task.fired);
    },
  };
}

function createHarness(overrides = {}) {
  const target = { id: 'scan-story' };
  const observer = createObserverHarness();
  const pageDocument = createDocumentHarness();
  const timers = createTimerHarness();
  const calls = [];

  assert.equal(typeof lifecycle.createScanDemoLoop, 'function');
  const controller = lifecycle.createScanDemoLoop({
    target,
    cycleMs: 7200,
    play: () => calls.push('play'),
    showFinal: () => calls.push('showFinal'),
    reset: () => calls.push('reset'),
    stop: () => calls.push('stop'),
    Observer: observer.Observer,
    pageDocument,
    schedule: timers.schedule,
    cancelScheduled: timers.cancel,
    ...overrides,
  });

  return { target, observer, pageDocument, timers, calls, controller };
}

test('scan stories start at 35 percent visibility and repeat after a 2 second final hold', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  assert.deepEqual(observed.options, { threshold: 0.35 });
  observed.emit(harness.target, 0.34, true);
  assert.deepEqual(harness.calls, []);

  observed.emit(harness.target, 0.35, true);
  assert.deepEqual(harness.calls, ['play']);
  assert.equal(harness.timers.pending()[0][1].delay, 9200);

  harness.timers.fire(harness.timers.pending()[0][0]);
  assert.deepEqual(harness.calls, ['play', 'stop', 'reset', 'play']);
});

test('the shared scan lifecycle cannot weaken its threshold or final hold', () => {
  const harness = createHarness({ threshold: 0.9, holdMs: 1 });
  const observed = harness.observer.instances[0];

  assert.deepEqual(observed.options, { threshold: 0.35 });
  observed.emit(harness.target, 0.35, true);
  assert.equal(harness.timers.pending()[0][1].delay, 9200);
});

test('offscreen and hidden scan stories stop, reset, and restart cleanly', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  observed.emit(harness.target, 0.8);
  observed.emit(harness.target, 0, false);
  assert.deepEqual(harness.calls, ['play', 'stop', 'reset']);
  assert.equal(harness.timers.pending().length, 0);

  observed.emit(harness.target, 0.8);
  harness.pageDocument.setHidden(true);
  assert.deepEqual(harness.calls, ['play', 'stop', 'reset', 'play', 'stop', 'reset']);

  harness.pageDocument.setHidden(false);
  assert.equal(harness.calls.at(-1), 'play');
});

test('reduced motion renders the final scan state without observers or timers', () => {
  const harness = createHarness({ reducedMotion: true });

  assert.deepEqual(harness.calls, ['showFinal']);
  assert.equal(harness.observer.instances.length, 0);
  assert.equal(harness.timers.pending().length, 0);
});

test('manual control cancels repetition without resetting visitor input', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  observed.emit(harness.target, 0.8);
  harness.controller.takeControl();

  assert.deepEqual(harness.calls, ['play', 'stop']);
  assert.equal(harness.timers.pending().length, 0);

  observed.emit(harness.target, 0, false);
  observed.emit(harness.target, 0.8);
  assert.deepEqual(harness.calls, ['play', 'stop', 'stop']);
});

test('explicit replay releases manual ownership and restarts the visible loop', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  observed.emit(harness.target, 0.8);
  harness.controller.takeControl();
  harness.controller.replay();

  assert.deepEqual(harness.calls, ['play', 'stop', 'stop', 'reset', 'play']);
  assert.equal(harness.timers.pending().length, 1);
  assert.equal(harness.timers.pending()[0][1].delay, 9200);
});

test('all narrative scan demonstrations consume the managed loop and expose replay', () => {
  for (const component of NARRATIVE_COMPONENTS) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');

    assert.match(source, /createScanDemoLoop/u, `${component} must use the shared scan loop`);
    assert.match(source, /\.replay\(\)/u, `${component} must expose replay`);
    assert.match(source, /showFinal:/u, `${component} must define a reduced-motion final state`);
    assert.match(source, /reset:/u, `${component} must define an offscreen reset state`);
    assert.doesNotMatch(source, /playTimelineWhenVisible|setInterval/u);
  }
});

test('interactive demonstrations yield to visitor input until explicit replay', () => {
  for (const component of ['ScanScorecard.tsx', 'ScanRls.tsx', 'ScanPaywall.tsx', 'ScanTenWays.tsx']) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.match(source, /\.takeControl\(\)/u, `${component} must yield to manual input`);
    assert.match(source, /\.replay\(\)/u, `${component} must keep explicit replay`);
  }
});

test('the scorecard autoplay is a safe sample and reserves the real scan for form submission', () => {
  const source = readFileSync(new URL('ScanScorecard.tsx', import.meta.url), 'utf8');

  assert.match(source, /const SCORECARD_CYCLE_MS = 7_200/u);
  assert.match(source, /createTimelinePlayer\(\{/u);
  assert.match(source, /durationMs: SCORECARD_CYCLE_MS/u);
  assert.match(source, /cycleMs: SCORECARD_CYCLE_MS/u);
  assert.match(source, /https:\/\/sample-app\.example/u);
  assert.match(source, /onSubmit=\{[\s\S]{0,200}void scan\(\)/u);
  assert.equal(source.match(/fetch\('\/api\/scan'/gu)?.length, 1);
  const scanStart = source.indexOf('const scan = useCallback');
  const scanEnd = source.indexOf('\n  }, [', scanStart);
  const fetchCall = source.indexOf("fetch('/api/scan'");
  assert.ok(scanStart >= 0 && fetchCall > scanStart && fetchCall < scanEnd);
});
