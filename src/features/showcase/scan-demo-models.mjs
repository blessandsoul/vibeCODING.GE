export const DEMO_DURATION_MS = 7_200;

export const RLS_STAGES = [
  'open-reading',
  'open-result',
  'enabling',
  'locked-reading',
  'locked-result',
];

export const FIX_STAGES = [
  'scanning',
  'exposed',
  'revoking',
  'server-side',
  'rescanning',
  'clean',
];

export const RLS_REQUEST = 'GET /rest/v1/customers?select=*';

const FICTIONAL_ROWS = [
  {
    id: 1,
    name: 'Marta Reinholt',
    email: 'marta@northwind.example',
    phone: '+1 555 0142',
    total: '1,240.00',
  },
  {
    id: 2,
    name: 'Yusuf Demir',
    email: 'y.demir@northwind.example',
    phone: '+1 555 0198',
    total: '89.00',
  },
  {
    id: 3,
    name: 'Clara Okafor',
    email: 'clara.o@northwind.example',
    phone: '+1 555 0107',
    total: '3,410.00',
  },
  {
    id: 4,
    name: 'Tomas Halloran',
    email: 't.halloran@northwind.example',
    phone: '+1 555 0166',
    total: '220.00',
  },
  {
    id: 5,
    name: 'Anja Kessler',
    email: 'anja.k@northwind.example',
    phone: '+1 555 0173',
    total: '640.00',
  },
];

const RLS_FRAMES = {
  'open-reading': {
    rulesEnabled: false,
    status: 'reading',
    httpStatus: null,
    rows: [],
  },
  'open-result': {
    rulesEnabled: false,
    status: 'complete',
    httpStatus: 200,
    rows: FICTIONAL_ROWS,
  },
  enabling: {
    rulesEnabled: true,
    status: 'enabling',
    httpStatus: null,
    rows: [],
  },
  'locked-reading': {
    rulesEnabled: true,
    status: 'reading',
    httpStatus: null,
    rows: [],
  },
  'locked-result': {
    rulesEnabled: true,
    status: 'complete',
    httpStatus: 200,
    rows: [],
  },
};

export function rlsFrame(stage) {
  const frame = RLS_FRAMES[stage];
  if (!frame) throw new RangeError(`Unknown RLS stage: ${stage}`);

  return {
    stage,
    request: RLS_REQUEST,
    ...frame,
    rows: frame.rows.map((row) => ({ ...row })),
  };
}
const REDACTED_BROWSER_KEY = 'sk_live_\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u20222VwQ';

const FIX_FRAMES = {
  scanning: {
    browserKey: null,
    revoked: false,
    replacementLocation: null,
    rescanComplete: false,
    findingCount: null,
    clean: false,
  },
  exposed: {
    browserKey: REDACTED_BROWSER_KEY,
    revoked: false,
    replacementLocation: null,
    rescanComplete: false,
    findingCount: 1,
    clean: false,
  },
  revoking: {
    browserKey: REDACTED_BROWSER_KEY,
    revoked: false,
    replacementLocation: null,
    rescanComplete: false,
    findingCount: 1,
    clean: false,
  },
  'server-side': {
    browserKey: REDACTED_BROWSER_KEY,
    revoked: true,
    replacementLocation: 'server',
    rescanComplete: false,
    findingCount: 1,
    clean: false,
  },
  rescanning: {
    browserKey: REDACTED_BROWSER_KEY,
    revoked: true,
    replacementLocation: 'server',
    rescanComplete: false,
    findingCount: null,
    clean: false,
  },
  clean: {
    browserKey: REDACTED_BROWSER_KEY,
    revoked: true,
    replacementLocation: 'server',
    rescanComplete: true,
    findingCount: 0,
    clean: true,
  },
};

export function fixFrame(stage) {
  const frame = FIX_FRAMES[stage];
  if (!frame) throw new RangeError(`Unknown repair stage: ${stage}`);

  return {
    stage,
    browserKeyUsable: false,
    ...frame,
  };
}

export function createTimelinePlayer({
  stages,
  durationMs = DEMO_DURATION_MS,
  schedule = setTimeout,
  cancel = clearTimeout,
  reducedMotion = false,
  onStage,
}) {
  if (!Array.isArray(stages) || stages.length === 0) {
    throw new TypeError('createTimelinePlayer requires at least one stage');
  }
  if (!Number.isFinite(durationMs) || durationMs < 0) {
    throw new TypeError('createTimelinePlayer requires a non-negative duration');
  }
  if (typeof schedule !== 'function' || typeof cancel !== 'function' || typeof onStage !== 'function') {
    throw new TypeError('createTimelinePlayer requires schedule, cancel, and onStage functions');
  }

  let timerIds = [];
  let runId = 0;

  function stop() {
    runId += 1;
    timerIds.forEach((timerId) => cancel(timerId));
    timerIds = [];
  }

  function play() {
    stop();
    const activeRun = runId;

    if (reducedMotion || stages.length === 1) {
      onStage(stages.at(-1));
      return;
    }

    onStage(stages[0]);
    stages.slice(1).forEach((stage, index) => {
      const position = index + 1;
      const delay = Math.round((durationMs * position) / (stages.length - 1));
      const timerId = schedule(() => {
        if (runId === activeRun) onStage(stage);
      }, delay);
      timerIds.push(timerId);
    });
  }

  return {
    play,
    replay: play,
    stop,
  };
}
