export function createDemoLoop({
  target,
  reducedMotion = false,
  threshold = 0.35,
  cycleMs,
  holdMs = 2000,
  play,
  showFinal,
  reset,
  stop,
  Observer = globalThis.IntersectionObserver,
  pageDocument = globalThis.document,
  schedule = globalThis.setTimeout,
  cancelScheduled = globalThis.clearTimeout,
}) {
  let observer = null;
  let repeatTimer = null;
  let generation = 0;
  let inViewport = false;
  let active = false;
  let detachedReplay = false;
  let controlled = false;
  let cleaned = false;
  const staticFinalState = reducedMotion || typeof Observer !== 'function';

  const pageIsHidden = () => Boolean(pageDocument?.hidden);

  const invalidateCallbacks = () => {
    generation += 1;
  };

  const clearRepeatTimer = () => {
    if (repeatTimer === null) return;
    cancelScheduled(repeatTimer);
    repeatTimer = null;
  };

  const canRepeat = () => (
    !cleaned
    && !controlled
    && inViewport
    && !pageIsHidden()
  );

  const scheduleRepeat = () => {
    if (!canRepeat()) return;
    const callbackGeneration = generation;

    const scheduledTimer = schedule(() => {
      if (repeatTimer === scheduledTimer) repeatTimer = null;
      if (callbackGeneration !== generation || !canRepeat()) return;

      active = false;
      stop();
      reset();
      if (!canRepeat()) return;

      active = true;
      play();
      scheduleRepeat();
    }, cycleMs + holdMs);
    repeatTimer = scheduledTimer;
  };

  const stopAndReset = () => {
    invalidateCallbacks();
    clearRepeatTimer();
    active = false;
    detachedReplay = false;
    stop();
    reset();
  };

  const startVisiblePass = () => {
    if (!canRepeat()) return;
    if (detachedReplay) stopAndReset();
    if (active) return;
    invalidateCallbacks();
    active = true;
    play();
    scheduleRepeat();
  };

  const handleVisibilityChange = () => {
    if (cleaned || controlled) return;

    if (pageIsHidden()) {
      if (active) stopAndReset();
      return;
    }

    startVisiblePass();
  };

  const replay = () => {
    if (cleaned) return;

    controlled = false;
    invalidateCallbacks();
    clearRepeatTimer();
    active = false;
    stop();

    if (staticFinalState) {
      showFinal();
      return;
    }

    reset();
    active = true;
    play();
    detachedReplay = !canRepeat();
    scheduleRepeat();
  };

  const takeControl = () => {
    if (cleaned || controlled) return;
    controlled = true;
    invalidateCallbacks();
    clearRepeatTimer();
    active = false;
    detachedReplay = false;
    stop();
  };

  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    invalidateCallbacks();
    clearRepeatTimer();
    active = false;
    detachedReplay = false;
    observer?.disconnect();
    pageDocument?.removeEventListener?.('visibilitychange', handleVisibilityChange);
    stop();
  };

  if (staticFinalState) {
    showFinal();
    return { replay, takeControl, cleanup };
  }

  observer = new Observer((entries) => {
    if (cleaned) return;
    const entry = entries.find((candidate) => candidate.target === target) ?? entries[0];
    if (!entry) return;

    const wasInViewport = inViewport;
    inViewport = entry.isIntersecting !== false && entry.intersectionRatio >= threshold;

    if (controlled) return;
    if (!inViewport) {
      if (wasInViewport || active) stopAndReset();
      return;
    }

    if (!pageIsHidden()) startVisiblePass();
  }, { threshold });

  observer.observe(target);
  pageDocument?.addEventListener?.('visibilitychange', handleVisibilityChange);

  return { replay, takeControl, cleanup };
}
