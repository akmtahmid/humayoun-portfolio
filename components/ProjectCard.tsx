import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group dark-card overflow-hidden rounded-[2rem] hover:-translate-y-1 hover:border-[#9f67ff]/30 hover:shadow-[0_30px_70px_-40px_rgba(124,58,237,0.95)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`grid ${featured ? "xl:grid-cols-[1.02fr_0.98fr]" : ""}`}>
        <div className="purple-frame relative min-h-[260px] p-5 sm:min-h-[320px] sm:p-7">
          <div className="glass-panel flex h-full flex-col justify-between rounded-[1.7rem] p-5">
            <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d1bcff]">
              {featured ? "Featured Project" : "Project Showcase"}
            </span>
            <div className="space-y-4">
              <div className="h-40 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(159,103,255,0.22),rgba(79,156,255,0.1),rgba(255,255,255,0.04))] sm:h-48" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-4 rounded-full bg-[#9f67ff]/30" />
                <div className="h-4 rounded-full bg-white/10" />
                <div className="h-4 rounded-full bg-[#4f9cff]/22" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            {title}
          </h3>
          <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#9f67ff]/18 bg-[#9f67ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#9f67ff]/34 bg-[#9f67ff]/10 px-6 py-3 text-sm font-semibold text-white hover:bg-[#9f67ff]/16"
            >
              GitHub
            </Link>
            <Link
              href="/contact"
              className="purple-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
