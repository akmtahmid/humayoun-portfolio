import Link from "next/link";

const projects = [
  {
    title: "Digital Agency Website",
    description:
      "A premium service-focused web experience with bold messaging, modern layouts, and strong conversion flow for digital businesses.",
    featured: true,
  },
  {
    title: "Business Landing Page",
    description:
      "A focused marketing page designed to present offers clearly, build credibility quickly, and increase client inquiries.",
    featured: false,
  },
  {
    title: "WordPress Service Website",
    description:
      "A clean and manageable WordPress website created for local services, lead generation, and straightforward content updates.",
    featured: false,
  },
  {
    title: "Full Stack Portfolio Website",
    description:
      "A complete portfolio platform combining frontend presentation, backend logic, and responsive user-centered design.",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell section-space">
      <section className="text-center">
        <p className="eyebrow">Projects</p>
        <h1 className="section-title mt-5">Imagination Trumps mastery!</h1>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`dark-card overflow-hidden rounded-[2rem] ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className={`grid gap-0 ${
                project.featured ? "xl:grid-cols-[1.1fr_0.9fr]" : ""
              }`}
            >
              <div className="gradient-frame flex min-h-[260px] items-end p-6 sm:min-h-[320px] sm:p-8">
                <div className="w-full rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="eyebrow">Project 0{index + 1}</p>
                  <div className="mt-6 h-36 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))] sm:h-48" />
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <p className="eyebrow">
                  {project.featured ? "Featured Project" : "Case Study"}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#111111]"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] hover:bg-white/90"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
