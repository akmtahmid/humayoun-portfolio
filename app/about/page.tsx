import ProfileImage from "@/components/ProfileImage";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";

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
  ["26+", "Satisfied Clients"],
  ["26+", "Projects Completed"],
  ["3+", "Years Experience"],
];

const purposeCards = [
  {
    title: "Mission",
    description:
      "To design and develop modern websites that help businesses present themselves with confidence and grow online.",
  },
  {
    title: "Vision",
    description:
      "To become a trusted digital partner for brands that value quality design, responsive performance, and thoughtful execution.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell section-space">
      <SectionTitle
        eyebrow="About"
        title="Passion Programming Purpose!"
        description="A closer look at the story, direction, and values behind AKM HUMAYOUN."
        align="center"
        className="max-w-4xl"
      />

      <section className="mt-16 grid gap-8 xl:grid-cols-[1.03fr_0.97fr]">
        <article className="dark-card purple-glow rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Biography</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
            Akm Humayoun Alom
          </h2>
          <p className="mt-4 text-lg font-semibold text-[#d1bcff]">
            Full Stack Developer, Expert Next.js Developer, Web Designer,
            WordPress Developer
          </p>
          <p className="mt-8 text-base leading-8 text-white/70 sm:text-lg">
            Hi, I&apos;m Humayoun Alom - a passionate Web Designer and
            WordPress Developer. I create modern, responsive, and user-friendly
            websites using WordPress, Elementor, HTML, CSS, and JavaScript. I
            love building clean and professional websites that help businesses
            grow online.
          </p>
          <p className="mt-6 text-base leading-8 text-white/64 sm:text-lg">
            As my work evolved, I expanded into Next.js, React, Node.js,
            Express.js, MongoDB, and modern full-stack workflows. That blend of
            design and development lets me create websites that are not only
            attractive, but also strategic, fast, and scalable.
          </p>
          <p className="mt-6 text-base leading-8 text-white/64 sm:text-lg">
            Based in Bangladesh, I focus on building experiences that feel
            premium, intuitive, and aligned with real business goals.
          </p>
        </article>

        <div className="dark-card purple-frame purple-glow rounded-[2rem] p-4 sm:p-5">
          <ProfileImage
            src="/profile.jpg"
            alt="Akm Humayoun Alom profile"
            label="Akm Humayoun Alom"
            className="min-h-[420px] sm:min-h-[620px]"
            fallbackTitle="Developer Profile"
            fallbackDescription="A premium fallback keeps the about page polished if the profile image is unavailable."
          />
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        {stats.map(([value, label]) => (
          <StatCard
            key={label}
            value={value}
            label={label}
            icon={label.slice(0, 2).toUpperCase()}
          />
        ))}
      </section>

      <section className="mt-20">
        <SectionTitle
          eyebrow="Skills"
          title="A practical toolkit for premium websites and full stack products."
          description="The technologies below support both clean design execution and strong technical delivery."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass-panel rounded-[1.5rem] px-5 py-4 text-sm font-semibold text-white/84 hover:border-[#9f67ff]/26 hover:bg-[#9f67ff]/8"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-2">
        {purposeCards.map((card) => (
          <article key={card.title} className="dark-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">{card.title}</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
              {card.title === "Mission"
                ? "Creating websites that look premium and work hard for the business behind them."
                : "Building a long-term creative and technical identity rooted in quality and trust."}
            </h3>
            <p className="mt-6 text-base leading-8 text-white/68 sm:text-lg">
              {card.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
