import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  href = "/contact",
}: ProjectCardProps) {
  return (
    <article className="panel group overflow-hidden rounded-[2rem]">
      <div className="relative border-b border-white/10 p-5 sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_22%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:auto,28px_28px,28px_28px]" />
        <div className="relative rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,41,59,0.95),rgba(76,29,149,0.68),rgba(15,23,42,0.95))] p-5">
          <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span>Case Study</span>
              <span>Live Preview</span>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="h-40 rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
              <div className="grid grid-cols-[1.4fr_0.8fr] gap-3">
                <div className="h-16 rounded-[1rem] border border-white/10 bg-white/5" />
                <div className="grid gap-3">
                  <div className="h-6 rounded-full bg-violet-400/30" />
                  <div className="h-6 rounded-full bg-sky-400/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={href}
            className="purple-button inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white"
          >
            Check Live Site
          </Link>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
          >
            <span>External Link</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
