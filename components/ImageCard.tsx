"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  label?: string;
  fallbackTitle: string;
  fallbackDescription: string;
};

export default function ImageCard({
  src,
  alt,
  className = "",
  priority = false,
  label,
  fallbackTitle,
  fallbackDescription,
}: ImageCardProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`gradient-frame flex h-full w-full flex-col justify-end overflow-hidden border border-white/10 bg-[#151515] p-6 ${className}`}
      >
        {label ? (
          <span className="mb-4 w-fit rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
            {label}
          </span>
        ) : null}
        <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
          <p className="text-2xl font-black tracking-tight text-white">
            {fallbackTitle}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
            {fallbackDescription}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-[#141414] ${className}`}
    >
      {label ? (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/68 backdrop-blur">
          {label}
        </span>
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(min-width: 1024px) 42vw, 100vw"
        onError={() => setHasError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
