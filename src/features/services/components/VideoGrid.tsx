'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn } from '@/components/common/FadeIn';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { aiMedia } from '@/lib/media-assets';

const videos = aiMedia.graphicsVideos.map((src, i) => ({
  id: i + 1,
  src,
}));

const VideoCard = ({
  video,
  onClick,
}: {
  video: { id: number; src: string };
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden dodo-glass-card transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
          <svg
            className="h-12 w-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const VideoGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="relative py-8 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <FadeIn key={video.id} delay={i * 0.05}>
              <VideoCard
                video={video}
                onClick={() => setSelectedVideo(video.src)}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedVideo !== null}
        onOpenChange={(open: boolean) => !open && setSelectedVideo(null)}
      >
        <DialogContent className="max-w-4xl border-none bg-black/95 p-2" aria-describedby={undefined}>
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          {selectedVideo && (
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
