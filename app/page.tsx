import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import BentoCard from "@/components/BentoCard";
import ProfileImage from "@/components/ProfileImage";
import ProjectCard from "@/components/ProjectCard";

const introCards = [
  {
    title: "Full Stack Web App Developer",
    description:
      "Building fast, business-focused web experiences with clear structure and reliable code.",
    accent: "bg-violet-500/18",
  },
  {
    title: "Expert Next.js Developer",
    description:
      "Crafting App Router websites with modern layouts, good performance, and scalable sections.",
    accent: "bg-blue-500/16",
  },
  {
    title: "Web Designer + WordPress Developer",
    description:
      "Combining visual polish and practical editing workflows for service websites and landing pages.",
    accent: "bg-fuchsia-500/16",
  },
];

const projectPreviews = [
  {
    title: "Digital Agency Website",
    description:
      "A polished, lead-focused website concept designed to make a digital service brand feel trusted and modern.",
    techStack: ["Next.js", "Tailwind CSS", "Lead Gen"],
  },
  {
    title: "Full Stack Dashboard",
    description:
      "A dashboard experience for data-rich workflows with clear visual hierarchy and responsive panels.",
    techStack: ["Next.js", "MongoDB", "Dashboard"],
  },
];

const servicePreview = [
  "Full Stack Web Apps",
  "Next.js Development",
  "UI-Focused Web Design",
  "WordPress Service Sites",
  "SEO-Friendly Structure",
  "Responsive Landing Pages",
];

export default function HomePage() {
  return (
    <main className="pb-8">
      <section className="page-shell pt-10">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-20 w-20 rounded-full bg-violet-500/20 blur-3xl animate-glow-pulse" />
            <p className="eyebrow animate-fade-up opacity-0 [animation-fill-mode:forwards]">
              Dynamic Web Magic With MERN Stack (Next.js)
            </p>
            <h1 className="hero-heading mt-6 max-w-4xl text-white animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-150">
              Transforming Concepts into Seamless{" "}
              <span className="text-gradient">User Experience</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg animate-fade-in opacity-0 [animation-fill-mode:forwards] animation-delay-300">
              Hi, I&apos;m Akm Humayoun Alom, a Full Stack Web App Developer based
              in Bangladesh.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-450">
              <a
                href="mailto:akmhumayoun@gmail.com?subject=Resume%20Request"
                className="purple-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white"
              >
                Get Resume
              </a>
              <Link
                href="/contact"
                className="outline-button inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/78 hover:border-white/20 hover:text-white"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="animate-scale-in opacity-0 [animation-fill-mode:forwards] animation-delay-300">
            <div className="panel-strong relative overflow-hidden rounded-[2rem] p-4 animate-float-slow">
              <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/72">
                AKM HUMAYOUN
              </div>
              <ProfileImage
                src="/profile.jpg"
                alt="Akm Humayoun Alom profile image"
                priority
                className="min-h-[24rem] sm:min-h-[31rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="page-shell section-space pb-0" delayClassName="animation-delay-150">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {introCards.map((card) => (
            <BentoCard
              key={card.title}
              title={card.title}
              description={card.description}
              accent={card.accent}
            >
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/68">
                Professional, collaborative, and focused on smooth user experience from first click to final launch.
              </div>
            </BentoCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="page-shell section-space" delayClassName="animation-delay-300">
        <div className="flex items-end justify-between gap-6 pb-8">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-heading mt-4 text-white">Project Previews</h2>
          </div>
          <Link href="/projects" className="hidden text-sm font-medium text-white/72 hover:text-white sm:inline-flex">
            View All Projects
          </Link>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {projectPreviews.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/projects" className="purple-button inline-flex rounded-full px-5 py-3 text-sm font-medium text-white">
            View All Projects
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="page-shell section-space pt-0" delayClassName="animation-delay-450">
        <div className="panel rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow">Skills Snapshot</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Small service and skill preview
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {servicePreview.map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm font-medium uppercase tracking-[0.18em] text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="page-shell section-space pt-0" delayClassName="animation-delay-600">
        <div className="panel-strong rounded-[2.2rem] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <p className="eyebrow">Final CTA</p>
          <h2 className="section-heading mx-auto mt-5 max-w-4xl text-white">
            Let&apos;s build a polished digital presence that feels modern and performs with purpose.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            From business websites to full stack interfaces, I focus on clarity, speed, and a user experience that feels premium.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="purple-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white"
            >
              Start A Project
            </Link>
            <Link
              href="/about"
              className="outline-button inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/78 hover:border-white/20 hover:text-white"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
