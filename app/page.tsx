import Link from "next/link";
import ProfileImage from "@/components/ProfileImage";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";

const services = [
  {
    icon: "WD",
    title: "Web Development",
    description:
      "Custom modern websites built with strong structure, polished interactions, and production-ready performance.",
  },
  {
    icon: "WP",
    title: "WordPress Development",
    description:
      "Professional WordPress and Elementor builds that are manageable, responsive, and ready for business growth.",
  },
  {
    icon: "UI",
    title: "Web Design",
    description:
      "Elegant layout systems with clear hierarchy, premium spacing, and modern visual presentation.",
  },
  {
    icon: "SEO",
    title: "SEO Optimization",
    description:
      "SEO-aware structure, speed improvements, and content-ready layouts that strengthen discoverability.",
  },
  {
    icon: "EC",
    title: "E-commerce Solutions",
    description:
      "Storefront and product experiences tailored for businesses that want clean interfaces and trust-building flow.",
  },
  {
    icon: "SS",
    title: "Speed & Security",
    description:
      "Performance optimization and dependable implementation that help websites feel fast, stable, and secure.",
  },
];

const featuredProjects = [
  {
    title: "Digital Agency Website",
    description:
      "A premium dark agency presentation with upscale section composition, strong hierarchy, and service-first storytelling.",
    techStack: ["Next.js", "Tailwind CSS", "UI Design"],
    featured: true,
  },
  {
    title: "Business Landing Page",
    description:
      "A responsive landing page built for clearer offers, cleaner messaging, and higher trust on first impression.",
    techStack: ["React.js", "Responsive", "SEO"],
  },
  {
    title: "WordPress Service Website",
    description:
      "A professional service website designed for businesses that need flexibility, modern visuals, and easy updates.",
    techStack: ["WordPress", "Elementor", "Brand UI"],
  },
  {
    title: "Full Stack Dashboard",
    description:
      "A data-driven interface with dashboard structure, backend-ready thinking, and a clean product design language.",
    techStack: ["Node.js", "MongoDB", "REST API"],
  },
];

const skills = [
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "Elementor",
  "SEO Optimization",
  "REST API",
  "Git/GitHub",
];

const testimonials = [
  {
    name: "Startup Founder",
    role: "Agency Client",
    quote:
      "The final website looked premium, loaded fast, and made our business feel much more established online.",
  },
  {
    name: "Business Owner",
    role: "Service Brand",
    quote:
      "Excellent communication, modern design choices, and a final result that felt custom instead of template-based.",
  },
  {
    name: "Creative Client",
    role: "Portfolio Project",
    quote:
      "The balance between design and development was exactly what I needed. Everything felt clean and professional.",
  },
];

const infoCards = [
  ["Name", "Akm Humayoun Alom"],
  [
    "Profession",
    "Full Stack Developer, Expert Next.js Developer, Web Designer, WordPress Developer",
  ],
  ["Email", "akmhumayounalom@gmail.com"],
  ["Phone", "01748303987"],
  ["Facebook", "Akm tahmidul Alom Tahmid"],
  ["LinkedIn", "Not added yet"],
  ["GitHub", "Not added yet"],
];

const stats = [
  ["26+", "Projects Completed", "PC"],
  ["26+", "Happy Clients", "HC"],
  ["3+", "Years Experience", "YE"],
  ["100%", "Responsive Design", "RD"],
] as const;

const socialButtons = [
  { href: "/contact", label: "WA" },
  { href: "/contact", label: "GH" },
  { href: "/contact", label: "LI" },
  { href: "/contact", label: "FB" },
];

export default function HomePage() {
  return (
    <main className="hero-glow">
      <section className="page-shell relative min-h-[calc(100vh-5.5rem)] overflow-hidden py-10 sm:py-14 lg:flex lg:items-center lg:py-20">
        <div className="absolute left-[-5rem] top-20 h-72 w-72 rounded-full bg-[#7c3aed]/22 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-[#4f9cff]/14 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-[#a855f7]/12 blur-3xl" />
        <div className="dot-grid absolute right-0 top-24 hidden h-56 w-40 opacity-60 lg:block" />
        <div className="dot-grid absolute bottom-24 left-1/2 hidden h-28 w-28 opacity-50 xl:block" />

        <div className="relative grid w-full gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="order-1">
            <div className="relative mx-auto max-w-[34rem] lg:mx-0">
              <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-[#a855f7]/20 blur-3xl sm:block" />
              <div className="absolute -right-10 bottom-12 hidden h-36 w-36 rounded-full bg-[#4f9cff]/14 blur-3xl sm:block" />

              <div className="rotate-[-5deg] rounded-[2rem] border border-[#9f67ff]/22 bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(79,156,255,0.06),rgba(255,255,255,0.03))] p-3 shadow-[0_30px_90px_-45px_rgba(124,58,237,0.95)]">
                <div className="dark-card overflow-hidden rounded-[1.8rem] p-3">
                  <ProfileImage
                    src="/profile.jpg"
                    alt="Akm Humayoun Alom profile photo"
                    priority
                    label="AKM HUMAYOUN"
                    className="min-h-[420px] sm:min-h-[560px] lg:min-h-[650px]"
                    fallbackTitle="Developer Portrait"
                    fallbackDescription="A premium purple gradient placeholder appears automatically if profile.jpg is unavailable."
                  />
                </div>
              </div>

              <div className="absolute -left-3 top-8 rounded-[1.35rem] border border-white/10 bg-[#100d19]/78 px-5 py-4 shadow-[0_22px_55px_-32px_rgba(124,58,237,0.96)] backdrop-blur sm:-left-10">
                <p className="text-sm font-semibold text-white">3+ Years Experience</p>
              </div>
              <div className="absolute bottom-24 -right-2 rounded-[1.35rem] border border-white/10 bg-[#100d19]/78 px-5 py-4 shadow-[0_22px_55px_-32px_rgba(124,58,237,0.96)] backdrop-blur sm:-right-8">
                <p className="text-sm font-semibold text-white">
                  100% Client Satisfaction
                </p>
              </div>
              <div className="absolute -bottom-6 left-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#9f67ff]/28 bg-[#120f1d]/88 text-center text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_22px_60px_-25px_rgba(124,58,237,0.98)] backdrop-blur sm:left-10">
                Available
                <br />
                For Work
              </div>

              <div className="absolute bottom-5 left-5 flex gap-3 sm:bottom-7 sm:left-7">
                {socialButtons.map((button) => (
                  <Link
                    key={button.label}
                    href={button.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0f0c18]/78 text-xs font-black text-white/78 backdrop-blur hover:border-[#9f67ff]/36 hover:text-white"
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="order-2">
            <div className="max-w-4xl">
              <p className="eyebrow">Full Stack Developer</p>
              <h1 className="section-title mt-5 max-w-5xl text-white">
                Building Modern{" "}
                <span className="bg-[linear-gradient(135deg,#c084fc,#8b5cf6,#60a5fa)] bg-clip-text text-transparent">
                  Websites
                </span>{" "}
                That Grow Your{" "}
                <span className="relative inline-block bg-[linear-gradient(135deg,#d8b4fe,#a855f7,#4f9cff)] bg-clip-text text-transparent">
                  Business
                  <span className="absolute left-0 right-0 top-[102%] h-2 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,0.6),rgba(79,156,255,0.25),transparent)]" />
                </span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                I design and develop fast, responsive, SEO-friendly websites
                using Next.js, React, WordPress, Elementor, and modern web
                technologies.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="purple-button inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-white"
                >
                  Hire Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-[#9f67ff]/34 bg-[#9f67ff]/10 px-7 py-4 text-sm font-semibold text-white hover:bg-[#9f67ff]/16"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white hover:border-[#9f67ff]/28 hover:bg-[#9f67ff]/10"
                >
                  Contact Me
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map(([value, label, icon]) => (
                  <StatCard key={label} value={value} label={label} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/55 lg:flex">
          <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/12 p-1">
            <span className="h-2.5 w-1.5 rounded-full bg-[#c084fc]" />
          </div>
          <span className="text-sm">v</span>
        </div>
      </section>

      <section className="page-shell pb-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(([value, label, icon]) => (
            <StatCard
              key={`${label}-center`}
              value={value}
              label={label}
              icon={icon}
              centered
            />
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionTitle
          eyebrow="About Preview"
          title="A premium developer portfolio built around modern design, clarity, and growth-focused execution."
          description="I help brands and professionals turn ideas into polished websites that feel credible, fast, and ready for serious use."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.86fr_0.62fr_1fr]">
          <article className="dark-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c9a8ff]">
              About Me
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
              Akm Humayoun Alom
            </h3>
            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              Hi, I&apos;m Humayoun Alom - a passionate Web Designer and
              WordPress Developer. I create modern, responsive, and user-friendly
              websites using WordPress, Elementor, HTML, CSS, and JavaScript. I
              love building clean and professional websites that help businesses
              grow online.
            </p>
            <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
              Alongside design, I work deeply with Next.js, React, Node.js, and
              modern frontend systems to deliver full-stack experiences with a
              premium and technical edge.
            </p>
          </article>

          <div className="dark-card purple-frame rounded-[2rem] p-4 sm:p-5">
            <ProfileImage
              src="/profile.jpg"
              alt="Akm Humayoun Alom portrait"
              label="Bangladesh"
              className="min-h-[380px] sm:min-h-[480px]"
              fallbackTitle="Profile Card"
              fallbackDescription="The same safe image component protects the layout anywhere the profile photo is used."
            />
          </div>

          <article className="dark-card rounded-[2rem] p-7 sm:p-8">
            <div className="grid gap-4">
              {infoCards.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c9a8ff]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/74">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="purple-button mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              Download CV
            </a>
          </article>
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionTitle
          eyebrow="My Services"
          title="Development and design services tailored for premium modern websites."
          description="Each service combines strong presentation, responsive implementation, and a business-first approach."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionTitle
          eyebrow="Recent Works"
          title="Selected projects that reflect the visual direction and quality of work I deliver."
          description="Modern layouts, careful spacing, responsive structure, and clean technical execution."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              featured={project.featured}
            />
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionTitle
          eyebrow="Technologies"
          title="Technologies I Work With"
          description="A full stack toolkit covering frontend, backend, CMS, design systems, and optimization."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass-panel rounded-full px-5 py-4 text-sm font-semibold text-white/84 hover:border-[#9f67ff]/26 hover:bg-[#9f67ff]/8"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Clients Say"
          description="A premium portfolio is about more than visuals. It should also feel dependable, thoughtful, and easy to work with."
          align="center"
          className="max-w-4xl"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="dark-card rounded-[2rem] p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9f67ff]/24 bg-[#9f67ff]/12 text-sm font-black text-white">
                  {testimonial.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/55">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#d8b4fe]">*****</p>
              <p className="mt-4 text-base leading-8 text-white/70">
                &quot;{testimonial.quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-space pt-4">
        <div className="purple-button rounded-[2.3rem] p-[1px]">
          <div className="rounded-[2.3rem] bg-[#0f0b18] px-8 py-12 text-center sm:px-12 lg:px-16 lg:py-16">
            <p className="eyebrow">Have a project in mind?</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Let&apos;s build something amazing together!
            </h2>
            <Link
              href="/contact"
              className="purple-button mt-8 inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
