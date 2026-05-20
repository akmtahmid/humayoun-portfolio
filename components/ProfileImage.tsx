"use client";

import Image from "next/image";
import { useState } from "react";

type ProfileImageProps = {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
};

export default function ProfileImage({
  src,
  alt,
  label,
  priority = false,
  className = "",
  fallbackTitle = "Profile Preview",
  fallbackDescription = "A premium purple gradient placeholder keeps the layout intact when the profile image is unavailable.",
}: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`purple-frame relative overflow-hidden rounded-[1.8rem] border border-[#9f67ff]/25 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(159,103,255,0.32),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(79,156,255,0.18),_transparent_26%)]" />
        <div className="relative flex h-full min-h-[24rem] flex-col justify-end p-6 sm:p-8">
          {label ? (
            <span className="mb-4 w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/72 backdrop-blur">
              {label}
            </span>
          ) : null}
          <div className="glass-panel max-w-sm rounded-[1.5rem] p-5">
            <p className="text-2xl font-black tracking-tight text-white">
              {fallbackTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/68">
              {fallbackDescription}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.8rem] border border-[#9f67ff]/28 bg-[#120f1d] ${className}`}
    >
      {label ? (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/72 backdrop-blur">
          {label}
        </span>
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 42vw, 100vw"
        onError={() => setHasError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,_rgba(7,7,12,0.36),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(159,103,255,0.16)]" />
    </div>
  );
}
