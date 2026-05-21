import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubHref?: string;
  projectHref?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubHref = "/contact",
  projectHref = "/contact",
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`panel hover-card group relative overflow-hidden rounded-[2rem] ${
        featured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""
      }`}
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/18 blur-3xl opacity-70 group-hover:opacity-100" />

      <div className="relative border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
        <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(67,56,202,0.62),rgba(7,10,20,0.95))] p-5">
          <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/55">
              <span>{featured ? "Featured Project" : "Project Preview"}</span>
              <span>Modern UI</span>
            </div>
            <div className="mt-6 grid gap-3">
              <div className={`rounded-[1rem] border border-white/10 bg-white/[0.06] ${featured ? "h-56" : "h-40"}`} />
              <div className="grid grid-cols-[1.5fr_0.9fr] gap-3">
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

      <div className="relative p-6 sm:p-8">
        <p className="eyebrow">{featured ? "Flagship Build" : "Case Study"}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">{description}</p>

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

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href={githubHref}
            className="outline-button inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/78 hover:border-white/20 hover:text-white"
          >
            GitHub
          </Link>
          <Link
            href={projectHref}
            className="purple-button inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
}
