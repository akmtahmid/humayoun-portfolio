"use client";

import Image from "next/image";
import { useState } from "react";

type ProfileImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function ProfileImage({
  src,
  alt,
  priority = false,
  className = "",
}: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(31,41,55,0.96),rgba(76,29,149,0.9),rgba(15,23,42,0.96))] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.24),_transparent_30%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:auto,28px_28px,28px_28px]" />
        <div className="relative flex h-full min-h-[20rem] items-end p-6">
          <div className="rounded-[1.4rem] border border-white/10 bg-black/25 px-5 py-4 backdrop-blur">
            <p className="text-lg font-semibold text-white">Profile Preview</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Add `public/profile.jpg` to show your photo here.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1220] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 28rem, (min-width: 768px) 24rem, 100vw"
        className="object-cover"
        onError={() => setHasError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.5),transparent_45%)]" />
    </div>
  );
}
