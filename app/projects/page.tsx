import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Digital Agency Website",
    description:
      "A premium agency website with bold hero sections, elegant dark styling, and a high-end service presentation.",
    techStack: ["Next.js", "Tailwind CSS", "Brand UI"],
    featured: true,
  },
  {
    title: "Business Landing Page",
    description:
      "A focused landing page experience designed to build trust quickly and turn visitors into leads.",
    techStack: ["React.js", "Responsive", "SEO"],
  },
  {
    title: "WordPress Service Website",
    description:
      "A polished WordPress website for service businesses that need flexibility, strong visuals, and easy updates.",
    techStack: ["WordPress", "Elementor", "UI"],
  },
  {
    title: "Full Stack Dashboard",
    description:
      "A modern dashboard product with structured layouts, data-ready logic, and a clean professional interface.",
    techStack: ["Node.js", "MongoDB", "REST API"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal brand portfolio built around strong typography, clean sections, and a dark premium experience.",
    techStack: ["Next.js", "UI Design", "Performance"],
  },
  {
    title: "SEO Optimized Website",
    description:
      "A service website designed with search visibility, content structure, and loading performance in mind.",
    techStack: ["SEO", "Next.js", "Content"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell section-space">
      <SectionTitle
        eyebrow="Projects"
        title="Imagination Trumps Mastery!"
        description="A curated showcase of projects that reflect the style, structure, and quality of my work."
        align="center"
        className="max-w-4xl"
      />

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            featured={project.featured}
          />
        ))}
      </section>
    </main>
  );
}
