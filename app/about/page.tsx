import ImageCard from "@/components/ImageCard";

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

const stats = [
  { value: "26+", label: "Satisfied Clients" },
  { value: "26+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <main className="page-shell section-space">
      <section className="text-center">
        <p className="eyebrow">About</p>
        <h1 className="section-title mt-5">Passion Programming Purpose!</h1>
      </section>

      <section className="mt-16 grid gap-8 xl:grid-cols-[1fr_0.8fr_0.85fr]">
        <article className="dark-card rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Biography</p>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Akm Humayoun Alom
          </h2>
          <p className="mt-4 text-lg font-semibold text-white/80">
            Expert Next.js Developer, Web Designer, WordPress Developer
          </p>
          <p className="mt-8 text-base leading-8 text-white/72 sm:text-lg">
            Hi, I&apos;m Humayoun Alom - a passionate Web Designer and WordPress
            Developer. I create modern, responsive, and user-friendly websites
            using WordPress, Elementor, HTML, CSS, and JavaScript. I love
            building clean and professional websites that help businesses grow
            online.
          </p>
          <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
            My approach combines visual clarity with practical development so
            every project feels premium, works smoothly across devices, and
            supports real business goals.
          </p>
        </article>

        <div className="dark-card gradient-frame rounded-[2rem] p-4 sm:p-5">
          <ImageCard
            src="/about.png"
            alt="About Akm Humayoun Alom"
            className="min-h-[420px] rounded-[1.6rem] sm:min-h-[540px]"
            label="About Preview"
            fallbackTitle="About Image"
            fallbackDescription="Dark placeholder for your about page image card."
          />
        </div>

        <div className="grid gap-5">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="dark-card-soft rounded-[1.8rem] p-7 sm:p-8"
            >
              <p className="text-5xl font-black tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-base text-white/65">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Technologies and tools I use to build modern experiences
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="dark-card-soft rounded-[1.5rem] px-5 py-4 text-sm font-semibold text-white/88 hover:border-white/30 hover:bg-white/5"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
