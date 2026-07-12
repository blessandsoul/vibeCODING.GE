import assert from 'node:assert/strict';
import test from 'node:test';

import {
  FIX_STAGES,
  RLS_STAGES,
  createTimelinePlayer,
  fixFrame,
  rlsFrame,
} from './scan-demo-models.mjs';

function createFakeClock() {
  let nextId = 1;
  const jobs = [];
  const cancelled = new Set();

  return {
    jobs,
    cancelled,
    schedule(callback, delay) {
      const id = nextId;
      nextId += 1;
      jobs.push({ callback, delay, id });
      return id;
    },
    cancel(id) {
      cancelled.add(id);
    },
    runAll() {
      jobs
        .filter(({ id }) => !cancelled.has(id))
        .sort((a, b) => a.delay - b.delay)
        .forEach(({ callback }) => callback());
    },
  };
}

test('the RLS lesson sends one request through the complete protection sequence', () => {
  assert.deepEqual(RLS_STAGES, [
    'open-reading',
    'open-result',
    'enabling',
    'locked-reading',
    'locked-result',
  ]);

  const open = rlsFrame('open-result');
  const locked = rlsFrame('locked-result');

  assert.equal(open.request, locked.request);
  assert.equal(open.httpStatus, 200);
  assert.equal(locked.httpStatus, 200);
  assert.equal(open.rulesEnabled, false);
  assert.equal(locked.rulesEnabled, true);
  assert.equal(open.rows.length, 5);
  assert.deepEqual(locked.rows, []);
  assert.ok(open.rows.every(({ email }) => email.endsWith('.example')));
});
test('the repair flow reveals only an unusable redaction', () => {
  assert.deepEqual(FIX_STAGES, [
    'scanning',
    'exposed',
    'revoking',
    'server-side',
    'rescanning',
    'clean',
  ]);

  for (const stage of FIX_STAGES) {
    const frame = fixFrame(stage);
    assert.equal(frame.browserKeyUsable, false);
    assert.doesNotMatch(JSON.stringify(frame), /sk_(?:live|test)_[A-Za-z0-9]{12,}/u);

    if (frame.browserKey) {
      assert.match(frame.browserKey, /[\u2022X*]/u);
    }
  }
});

test('the repair becomes clean only after revoke, server-side move, and rescan', () => {
  const cleanStages = FIX_STAGES.filter((stage) => fixFrame(stage).clean);
  assert.deepEqual(cleanStages, ['clean']);

  const exposed = fixFrame('exposed');
  assert.equal(exposed.revoked, false);
  assert.equal(exposed.replacementLocation, null);
  assert.equal(exposed.rescanComplete, false);
  assert.equal(exposed.findingCount, 1);

  const clean = fixFrame('clean');
  assert.equal(clean.revoked, true);
  assert.equal(clean.replacementLocation, 'server');
  assert.equal(clean.rescanComplete, true);
  assert.equal(clean.findingCount, 0);
});

test('the clean repair frame removes historical browser-key evidence', () => {
  const clean = fixFrame('clean');

  assert.equal(clean.browserKey, null);
  assert.equal(clean.findingCount, 0);
  assert.equal(clean.clean, true);
});

test('the timeline completes one automatic pass in exactly 7,200 ms', () => {
  const clock = createFakeClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: RLS_STAGES,
    schedule: clock.schedule,
    cancel: clock.cancel,
    onStage: (stage) => seen.push(stage),
  });

  player.play();
  assert.deepEqual(seen, ['open-reading']);
  assert.equal(Math.max(...clock.jobs.map(({ delay }) => delay)), 7_200);

  clock.runAll();
  assert.deepEqual(seen, RLS_STAGES);
});

test('replay resets to the first stage and cancels the previous timers', () => {
  const clock = createFakeClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: FIX_STAGES,
    schedule: clock.schedule,
    cancel: clock.cancel,
    onStage: (stage) => seen.push(stage),
  });

  player.play();
  const firstPassIds = clock.jobs.map(({ id }) => id);
  player.replay();

  assert.deepEqual(seen, ['scanning', 'scanning']);
  assert.ok(firstPassIds.every((id) => clock.cancelled.has(id)));

  player.stop();
  assert.ok(clock.jobs.every(({ id }) => clock.cancelled.has(id)));
});

test('reduced motion emits only the final frame and schedules no timers', () => {
  const clock = createFakeClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: FIX_STAGES,
    schedule: clock.schedule,
    cancel: clock.cancel,
    reducedMotion: true,
    onStage: (stage) => seen.push(stage),
  });

  player.play();

  assert.deepEqual(seen, ['clean']);
  assert.equal(clock.jobs.length, 0);
});

test('timeline reset and final-state controls cancel timers before rendering', () => {
  const clock = createFakeClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: RLS_STAGES,
    schedule: clock.schedule,
    cancel: clock.cancel,
    onStage: (stage) => seen.push(stage),
  });

  player.play();
  const playIds = clock.jobs.map(({ id }) => id);
  player.reset();
  assert.equal(seen.at(-1), RLS_STAGES[0]);
  assert.ok(playIds.every((id) => clock.cancelled.has(id)));

  player.play();
  const finalIds = clock.jobs.slice(playIds.length).map(({ id }) => id);
  player.showFinal();
  assert.equal(seen.at(-1), RLS_STAGES.at(-1));
  assert.ok(finalIds.every((id) => clock.cancelled.has(id)));
});
