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
  const contractTarget = target?.matches?.('[data-demo-id]')
    ? target
    : (target?.closest?.('[data-demo-id]') ?? target);
  const setDemoState = (state) => {
    contractTarget?.setAttribute?.('data-landing-demo', 'true');
    contractTarget?.setAttribute?.('data-demo-state', state);
  };
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

      setDemoState('final');

      const holdGeneration = generation;
      const holdTimer = schedule(() => {
        if (repeatTimer === holdTimer) repeatTimer = null;
        if (holdGeneration !== generation || !canRepeat()) return;

        active = false;
        stop();
        reset();
        if (!canRepeat()) return;

        active = true;
        setDemoState('playing');
        play();
        scheduleRepeat();
      }, holdMs);
      repeatTimer = holdTimer;
    }, cycleMs);
    repeatTimer = scheduledTimer;
  };

  const scheduleDetachedFinal = () => {
    const callbackGeneration = generation;
    const completionTimer = schedule(() => {
      if (repeatTimer === completionTimer) repeatTimer = null;
      if (callbackGeneration !== generation || cleaned || controlled) return;
      if (pageIsHidden()) {
        stopAndReset();
        return;
      }

      active = false;
      detachedReplay = false;
      setDemoState('final');
    }, cycleMs);
    repeatTimer = completionTimer;
  };

  const stopAndReset = () => {
    invalidateCallbacks();
    clearRepeatTimer();
    active = false;
    detachedReplay = false;
    stop();
    reset();
    setDemoState('paused');
  };

  const startVisiblePass = () => {
    if (!canRepeat()) return;
    if (detachedReplay) stopAndReset();
    if (active) return;
    invalidateCallbacks();
    active = true;
    setDemoState('playing');
    play();
    scheduleRepeat();
  };

  const handleVisibilityChange = () => {
    if (cleaned) return;

    if (pageIsHidden()) {
      if (controlled) {
        stop();
        return;
      }
      if (active) stopAndReset();
      return;
    }

    if (!controlled) startVisiblePass();
  };

  const replay = () => {
    if (cleaned) return;

    controlled = false;
    invalidateCallbacks();
    clearRepeatTimer();
    active = false;
    stop();

    if (pageIsHidden()) {
      detachedReplay = false;
      reset();
      setDemoState('paused');
      return;
    }

    if (staticFinalState) {
      showFinal();
      setDemoState('final');
      return;
    }

    detachedReplay = true;
    reset();
    active = true;
    setDemoState('playing');
    play();
    if (canRepeat()) scheduleRepeat();
    else scheduleDetachedFinal();
  };

  const takeControl = () => {
    if (cleaned || controlled) return;
    controlled = true;
    setDemoState('manual');
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
    setDemoState('paused');
  };

  if (staticFinalState) {
    showFinal();
    setDemoState('final');
    return { replay, takeControl, cleanup };
  }

  setDemoState('idle');

  observer = new Observer((entries) => {
    if (cleaned) return;
    const entry = entries.find((candidate) => candidate.target === target) ?? entries[0];
    if (!entry) return;

    const wasInViewport = inViewport;
    inViewport = entry.isIntersecting !== false && entry.intersectionRatio >= threshold;

    if (controlled) {
      if (wasInViewport && !inViewport) stop();
      return;
    }
    if (!inViewport) {
      // Replay is an explicit user request. If the observed visual is already
      // below the threshold (common in tall mobile demos whose Replay control
      // remains visible), let that one story run. It still cannot schedule a
      // repeat, and a story that was visible is still paused when it leaves.
      if (detachedReplay && active) return;
      if (wasInViewport || active) stopAndReset();
      return;
    }

    if (!pageIsHidden()) startVisiblePass();
  }, { threshold });

  // Keep the compact visibility sentinel separate from the surrounding contract root.
  // Tall demos may never reach a 35% ratio when the whole section is observed.
  observer.observe(target);
  pageDocument?.addEventListener?.('visibilitychange', handleVisibilityChange);

  return { replay, takeControl, cleanup };
}
