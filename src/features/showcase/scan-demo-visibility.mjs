export const SCAN_DEMO_VISIBILITY_THRESHOLD = 0.35;

export function playTimelineWhenVisible({
  element,
  reducedMotion = false,
  play,
  stop,
  createObserver = undefined,
}) {
  let cleanedUp = false;
  let hasPlayed = false;
  let observer = null;

  const playOnce = () => {
    if (cleanedUp || hasPlayed) return;
    hasPlayed = true;
    play();
    observer?.disconnect();
    observer = null;
  };

  const observerFactory =
    createObserver ??
    (typeof IntersectionObserver === 'undefined'
      ? null
      : (callback, options) => new IntersectionObserver(callback, options));

  if (reducedMotion || !element || !observerFactory) {
    playOnce();
  } else {
    observer = observerFactory(
      ([entry]) => {
        if (
          !entry?.isIntersecting ||
          entry.intersectionRatio < SCAN_DEMO_VISIBILITY_THRESHOLD
        ) {
          return;
        }
        playOnce();
      },
      { threshold: SCAN_DEMO_VISIBILITY_THRESHOLD },
    );
    observer.observe(element);
  }

  return () => {
    if (cleanedUp) return;
    cleanedUp = true;
    observer?.disconnect();
    observer = null;
    stop();
  };
}
