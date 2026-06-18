"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

/**
 * Wraps next/image with a graceful fallback: if the source fails to load
 * (dead link, rate limit, blocked hotlinking, etc.), shows a quiet labeled
 * placeholder instead of a broken-image icon or empty space.
 */
export default function SafeImage(props: ImageProps & { fallbackLabel?: string }) {
  const { fallbackLabel, alt, ...imageProps } = props;
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-line overflow-hidden px-1">
        <span className="label-mono text-steel text-center truncate">
          {fallbackLabel || "—"}
        </span>
      </div>
    );
  }

  return <Image {...imageProps} alt={alt} onError={() => setFailed(true)} />;
}
