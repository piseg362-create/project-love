"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Image as ImageIcon } from "lucide-react";

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className = "",
  sizes,
  priority = false,
  fallbackLabel = "A cherished moment with Srushti",
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-blush-50 via-cream-100 to-blush-100 text-blush-700 p-6 text-center select-none ${className}`}
        style={!fill ? { width: width || "100%", height: height || "100%" } : {}}
      >
        <div className="w-14 h-14 rounded-full bg-white/90 shadow-sm flex items-center justify-center mb-3 text-blush-500 animate-pulse-gentle">
          <Heart className="w-7 h-7 fill-blush-300 stroke-blush-600" />
        </div>
        <p className="font-serif italic text-sm text-blush-900 max-w-[200px] leading-snug">
          {fallbackLabel}
        </p>
        <span className="text-[11px] text-blush-500/80 mt-2 tracking-wide font-sans">
          (Place your photo at {src})
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-blush-100/60 animate-pulse flex items-center justify-center z-10">
          <Heart className="w-6 h-6 text-blush-400 animate-bounce" />
        </div>
      )}
      <Image
        src={src}
        alt={alt || "Photo of Srushti"}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`${className} transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
