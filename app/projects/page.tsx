import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Digital Agency Website",
    description:
      "Modern agency website built with Next.js and Tailwind CSS for business growth and lead generation.",
    techStack: ["Next.js", "Tailwind CSS", "Lead Gen"],
  },
  {
    title: "WordPress Service Website",
    description:
      "Responsive WordPress website using Elementor, custom sections, and SEO-friendly structure.",
    techStack: ["WordPress", "Elementor", "SEO"],
  },
  {
    title: "Business Landing Page",
    description:
      "High converting landing page for online services, portfolio, and business promotion.",
    techStack: ["Landing Page", "Responsive", "UI Design"],
  },
  {
    title: "Full Stack Dashboard",
    description:
      "Dashboard concept using Next.js, Node.js, MongoDB, and REST API.",
    techStack: ["Next.js", "MongoDB", "REST API"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell section-space">
      <section className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">Projects</p>
        <h1 className="section-heading mt-5 text-white">
          A Showcase of My Recent Projects
        </h1>
        <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
          Selected website concepts and product-style builds presented in the
          same visual language as the homepage.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}
