"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "onLoad"> & {
  /** Shown under the image while the optimized asset loads. */
  showWoodPlaceholder?: boolean;
};

const WOOD_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwA/AL+AAf/Z";

/** next/image with wood-tone loading state — Vercel serves WebP/AVIF automatically. */
export default function OptimizedImage({
  className = "",
  showWoodPlaceholder = true,
  placeholder = "blur",
  blurDataURL = WOOD_BLUR,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {showWoodPlaceholder && (
        <div
          className={`reki-image-shimmer absolute inset-0 transition-opacity duration-500 ease-out ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        />
      )}
      <Image
        {...props}
        placeholder={showWoodPlaceholder ? "empty" : placeholder}
        blurDataURL={showWoodPlaceholder ? undefined : blurDataURL}
        className={`${className} transition-opacity duration-500 ease-out ${
          loaded ? "opacity-100" : showWoodPlaceholder ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
