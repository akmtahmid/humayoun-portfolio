import { BarChart3, Clock3, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { DemoProject } from "@/lib/demoProjects";

type DemoCardProps = DemoProject;

const complexityBadgeStyles: Record<DemoProject["complexity"], string> = {
  Complex: "border-red-200 bg-red-50 text-red-600",
  Moderate: "border-amber-200 bg-amber-50 text-amber-700",
  Easy: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

function formatTechPreview(technologies: string[]) {
  const visibleItems = technologies.slice(0, 3);
  const remainingCount = technologies.length - visibleItems.length;

  return remainingCount > 0
    ? [...visibleItems, `+${remainingCount} more`]
    : visibleItems;
}

export default function DemoCard({
  slug,
  title,
  complexity,
  timeline,
  priceRange,
  technologies,
  overview,
  imageSrc,
}: DemoCardProps) {
  const techPreview = formatTechPreview(technologies);

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(59,130,246,0.16)]">
      <div className="relative h-[190px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
        <span
          className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm ${complexityBadgeStyles[complexity]}`}
        >
          {complexity}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 overflow-hidden text-sm leading-6 text-slate-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
          {overview}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techPreview.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm">
          <div className="flex items-center gap-3 text-slate-700">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600">
              <DollarSign className="h-4 w-4" />
            </span>
            <span className="font-medium">{priceRange}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600">
              <Clock3 className="h-4 w-4" />
            </span>
            <span className="font-medium">{timeline}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 text-violet-600">
              <BarChart3 className="h-4 w-4" />
            </span>
            <span className="font-medium">{complexity}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <Link
            href={`/demo/${slug}`}
            className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(124,58,237,0.28)] hover:bg-violet-700"
          >
            View Details
          </Link>
          <Link
            href={`/contact?demo=${slug}`}
            className="text-sm font-semibold text-violet-700 hover:text-violet-800"
          >
            Inquire -&gt;
          </Link>
        </div>
      </div>
    </article>
  );
}
