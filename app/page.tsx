import Link from "next/link";
import BentoCard from "@/components/BentoCard";
import CopyEmailButton from "@/components/CopyEmailButton";
import ExperienceCard from "@/components/ExperienceCard";
import ProfileImage from "@/components/ProfileImage";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";

const bentoCards = [
  {
    title: "I prioritize client collaboration, fostering open communication",
    description:
      "Clear communication helps every project move faster, stay aligned, and launch with confidence.",
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2",
    accent: "bg-violet-500/18",
    content: (
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Response Flow
            </p>
            <p className="mt-3 text-sm text-white/75">Fast updates, shared goals, clear direction.</p>
          </div>
          <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Outcome
            </p>
            <p className="mt-3 text-sm text-white/75">Stronger trust and smoother delivery.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "I’m very flexible with time zone communications",
    className: "lg:col-span-1",
    accent: "bg-sky-500/18",
    content: (
      <div className="flex items-center gap-3 text-sm text-white/70">
        <span className="rounded-full border border-white/10 px-4 py-2">Bangladesh</span>
        <span className="rounded-full border border-white/10 px-4 py-2">Remote Friendly</span>
      </div>
    ),
  },
  {
    title: "Continuously Enhancing My tech stack",
    className: "lg:col-span-1",
    accent: "bg-fuchsia-500/18",
    content: (
      <div className="grid grid-cols-2 gap-3 text-sm text-white/75">
        {["Next.js", "React", "TypeScript", "MongoDB"].map((item) => (
          <span
            key={item}
            className="rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 text-center"
          >
            {item}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Tech enthusiast with a passion for development.",
    description:
      "I enjoy building polished interfaces and scalable structures that feel modern from the first impression.",
    className: "md:col-span-2 lg:col-span-1",
    accent: "bg-violet-400/14",
  },
  {
    title: "Specializing in modern business websites and SEO-friendly design",
    className: "md:col-span-2 lg:col-span-2",
    accent: "bg-sky-400/12",
    content: (
      <div className="grid gap-3 sm:grid-cols-3">
        {["Landing Pages", "WordPress Sites", "Next.js Builds"].map((item) => (
          <div
            key={item}
            className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm text-white/72"
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Currently building advanced Next.js and WordPress solutions",
    className: "lg:col-span-1",
    accent: "bg-indigo-500/16",
    content: (
      <div className="space-y-3">
        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-3/4 rounded-full bg-violet-500/70" />
        </div>
        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-2/3 rounded-full bg-sky-500/60" />
        </div>
      </div>
    ),
  },
];

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

const testimonials = [
  {
    title: "Business Owner",
    quote:
      "The website felt professional, loaded quickly, and made it easier for customers to trust our business online.",
    person: "Rahim Hasan",
    role: "Local Business",
  },
  {
    title: "Entrepreneur",
    quote:
      "Communication was smooth, revisions were handled quickly, and the final design matched exactly what I needed.",
    person: "Nusrat Jahan",
    role: "Independent Founder",
  },
  {
    title: "Digital Marketer",
    quote:
      "The structure was clean, conversion focused, and noticeably better for campaign traffic and SEO clarity.",
    person: "Mahi Uddin",
    role: "Marketing Consultant",
  },
  {
    title: "Startup Founder",
    quote:
      "From layout to responsiveness, the project felt polished and reliable, with thoughtful updates throughout the process.",
    person: "Sabbir Alam",
    role: "Startup Team",
  },
];

const tools = [
  "Cloudinary",
  "Hostinger",
  "Docker",
  "Discord",
  "GCP",
  "Azure",
  "CPanel",
  "Next.js",
  "React",
  "MongoDB",
  "WordPress",
  "Elementor",
  "Tailwind CSS",
];

const experiences = [
  {
    title: "Next.js Developer",
    description:
      "Building fast, scalable, and SEO-friendly web apps with clean UI systems, reusable components, and production-ready structure.",
  },
  {
    title: "WordPress Developer",
    description:
      "Creating flexible service websites with Elementor, custom sections, and a setup that is easy for clients to maintain.",
  },
  {
    title: "Freelance Web Designer",
    description:
      "Designing business-focused websites with clear hierarchy, stronger credibility, and layouts that feel modern across devices.",
  },
  {
    title: "SEO & Website Optimization Specialist",
    description:
      "Improving website speed, structure, and content presentation so projects are easier to find and more effective to use.",
  },
];

const approaches = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    description:
      "We start by understanding your goals, users, content, and functionality so the website has a strong structure before design and development begin.",
  },
  {
    phase: "Phase 2",
    title: "Development & Progress Update",
    description:
      "After the direction is approved, I move into design and development while sharing progress updates so you always know how the project is evolving.",
  },
  {
    phase: "Phase 3",
    title: "Development & Launch",
    description:
      "Once everything is refined and approved, I prepare the final build, optimize the experience, and help launch the website smoothly.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid">
        <div className="page-shell flex min-h-[calc(100vh-5.5rem)] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow">Dynamic Web Magic With MERN Stack (Next.js)</p>
          <h1 className="hero-heading mt-6 max-w-5xl text-white">
            Transforming Concepts into Seamless{" "}
            <span className="text-gradient">User Experience</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Hi, I&apos;m Akm Humayoun Alom, a Full Stack Web App Developer based
            in Bangladesh.
          </p>
          <div className="mt-10">
            <a
              href="mailto:akmhumayounalom@gmail.com?subject=Resume%20Request"
              className="purple-button inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-white"
            >
              <span>Get Resume</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="page-shell -mt-12 pb-8">
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="panel-strong rounded-[2rem] p-4 sm:p-5">
            <ProfileImage
              src="/profile.jpg"
              alt="Akm Humayoun Alom profile image"
              priority
              className="min-h-[26rem] sm:min-h-[32rem]"
            />
          </div>

          <div className="panel rounded-[2rem] p-8 text-left sm:p-10">
            <p className="eyebrow">AKM HUMAYOUN</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Full Stack Web App Developer, Expert Next.js Developer, Web
              Designer, WordPress Developer
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              I build modern, business-focused websites that combine strong
              visual presentation with clean code, responsive layouts, and a
              reliable client experience.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                Location: Bangladesh
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                Email: akmhumayounalom@gmail.com
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                Phone: 01748303987
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space pt-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bentoCards.map((card) => (
            <BentoCard
              key={card.title}
              title={card.title}
              description={card.description}
              className={card.className}
              accent={card.accent}
            >
              {card.content}
            </BentoCard>
          ))}

          <BentoCard
            title="Do you want to start a project together? Copy my email"
            className="md:col-span-2 lg:col-span-3"
            accent="bg-violet-500/18"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-white/60">
                akmhumayounalom@gmail.com
              </p>
              <CopyEmailButton email="akmhumayounalom@gmail.com" />
            </div>
          </BentoCard>
        </div>
      </section>

      <section id="projects" className="page-shell section-space">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-white">
            A Showcase of My Recent Projects
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>
      </section>

      <section id="testimonials" className="page-shell section-space">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-white">
            Kind words from satisfied clients
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.person} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="page-shell section-space pt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="panel flex min-h-24 items-center justify-center rounded-[1.6rem] px-5 py-6 text-center text-sm font-medium uppercase tracking-[0.18em] text-white/72"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-white">My work experience</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-white">My Approach</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {approaches.map((approach) => (
            <article key={approach.phase} className="panel rounded-[1.9rem] p-6 sm:p-7">
              <p className="eyebrow">{approach.phase}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {approach.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
                {approach.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="page-shell section-space pt-4">
        <div className="panel-strong rounded-[2.4rem] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <h2 className="section-heading mx-auto max-w-4xl text-white">
            Ready to take your digital presence to the next level?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="purple-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white"
            >
              Let&apos;s Get In Touch
            </Link>
            <a
              href="mailto:akmhumayounalom@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/72 hover:text-white"
            >
              akmhumayounalom@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
