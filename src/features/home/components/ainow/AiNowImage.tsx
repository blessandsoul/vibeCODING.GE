"use client";

import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AiNowImageState = "loading" | "loaded" | "error";

export interface AiNowImageProps extends ImageProps {
  /** Classes applied to the stable frame around the image. */
  frameClassName?: string;
  /** Classes applied to the non-blocking failed-image fallback. */
  fallbackClassName?: string;
}

/**
 * Homepage image primitive: the owning frame reserves its dimensions while
 * the bitmap fades in, and a failed request leaves an explicit, accessible
 * fallback instead of a blank or shifting card.
 */
export function AiNowImage({
  alt,
  className,
  fill,
  frameClassName,
  fallbackClassName,
  onError,
  onLoad,
  src,
  ...props
}: AiNowImageProps) {
  const sourceKey =
    typeof src === "string"
      ? src
      : "src" in src
        ? src.src
        : src.default.src;
  const [loadedSource, setLoadedSource] = useState<string | null>(null);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || !image.complete) return;

    const settleCachedImage = () => {
      if (image.naturalWidth > 0) {
        setLoadedSource(sourceKey);
      } else {
        setFailedSource(sourceKey);
      }
    };

    queueMicrotask(settleCachedImage);
  }, [sourceKey]);

  const handleLoad: NonNullable<ImageProps["onLoad"]> = (event) => {
    setLoadedSource(sourceKey);
    onLoad?.(event);
  };

  const handleError: NonNullable<ImageProps["onError"]> = (event) => {
    setFailedSource(sourceKey);
    onError?.(event);
  };

  const state: AiNowImageState =
    failedSource === sourceKey
      ? "error"
      : loadedSource === sourceKey
        ? "loaded"
        : "loading";
  const isFailed = state === "error";
  const frameClasses = cn(
    "ainow-image-frame",
    fill ? "absolute inset-0" : "relative inline-block",
    "transition-opacity duration-300 ease-out motion-reduce:transition-none",
    state === "loading" ? "opacity-0" : "opacity-100",
    frameClassName,
  );

  return (
    <span className={frameClasses} data-ainow-image-state={state}>
      <Image
        {...props}
        ref={imageRef}
        src={src}
        fill={fill}
        alt={isFailed ? "" : alt}
        aria-hidden={isFailed ? true : props["aria-hidden"]}
        className={cn(
          isFailed ? "opacity-0" : "opacity-100",
          className,
        )}
        onLoad={handleLoad}
        onError={handleError}
      />

      {isFailed ? (
        <span
          className={cn(
            "ainow-image-fallback absolute inset-0 grid place-items-center bg-slate-100/70 text-slate-400 dark:bg-white/[0.06] dark:text-slate-500",
            fallbackClassName,
          )}
          {...(alt
            ? { role: "img" as const, "aria-label": alt }
            : { "aria-hidden": true })}
        >
          <ImageOff aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </span>
      ) : null}
    </span>
  );
}
