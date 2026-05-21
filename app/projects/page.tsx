import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

const featuredProject = {
  title: "Full Stack Client Experience Platform",
  description:
    "A featured dashboard-style concept combining polished interface design, structured data views, scalable sections, and a premium dark visual language for a modern web product.",
  techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Dashboard UI"],
  featured: true,
};

const projects = [
  {
    title: "Digital Agency Website",
    description:
      "A strong service website for agencies that need credibility, elegant sections, and a lead-friendly flow.",
    techStack: ["Next.js", "Tailwind CSS", "Lead Gen"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal brand website designed to showcase identity, work, and credibility in a clean modern layout.",
    techStack: ["Portfolio", "UI Design", "Responsive"],
  },
  {
    title: "Business Landing Page",
    description:
      "A focused landing page layout designed to support clear messaging and stronger conversion paths.",
    techStack: ["Landing Page", "Responsive", "Marketing"],
  },
  {
    title: "WordPress Service Website",
    description:
      "A service website with WordPress-friendly structure for clients who want easy editing and modern presentation.",
    techStack: ["WordPress", "Elementor", "Service Site"],
  },
  {
    title: "SEO Optimized Website",
    description:
      "A website structure built with page clarity, speed, and discoverability in mind for business growth.",
    techStack: ["SEO", "Performance", "Content Flow"],
  },
  {
    title: "Full Stack Dashboard",
    description:
      "A dashboard concept for data management, internal workflows, and polished multi-panel user experience.",
    techStack: ["Next.js", "Node.js", "MongoDB"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell section-space">
      <AnimatedSection>
        <PageHeader
          eyebrow="Projects"
          title="Imagination Trumps Mastery!"
          description="A focused projects page with one featured concept and the full collection of project cards."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-16" delayClassName="animation-delay-150">
        <ProjectCard {...featuredProject} />
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3" delayClassName="animation-delay-300">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </AnimatedSection>
    </main>
  );
}
