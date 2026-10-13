/**
 * Public media is hosted on the aiCONTENT asset origin rather than copied into
 * every aiNOW deployment. Keep active component references here so a media
 * migration cannot leave a page pointing at removed local files.
 */
export const AI_MEDIA_ORIGIN = 'https://aicontent.ge';

export const aiMedia = {
  graphicsVideos: Array.from({ length: 15 }, (_, index) => `${AI_MEDIA_ORIGIN}/videos/${index + 1}.mp4`),
  influencerShowcase: `${AI_MEDIA_ORIGIN}/images/ai-influencer/showcase.mp4`,
  mascotShowcase: `${AI_MEDIA_ORIGIN}/images/ai-characters/mascot-showcase.mp4`,
  landingReel: `${AI_MEDIA_ORIGIN}/landing/reel.mp4`,
  landingProductReel: `${AI_MEDIA_ORIGIN}/landing/reel_product.mp4`,
  partnersVideo: `${AI_MEDIA_ORIGIN}/videos/ainow-partners.mp4`,
} as const;
