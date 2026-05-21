import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import ProfileImage from "@/components/ProfileImage";
import StatCard from "@/components/StatCard";

const stats = [
  { value: "26+", label: "Satisfied Clients" },
  { value: "26+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "REST API",
  "WordPress",
  "Elementor",
  "SEO Structure",
];

export default function AboutPage() {
  return (
    <main className="page-shell section-space">
      <AnimatedSection>
        <PageHeader
          eyebrow="About"
          title="Passion Programming Purpose!"
          description="A focused look at the biography, strengths, and long-term direction behind AKM HUMAYOUN."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" delayClassName="animation-delay-150">
        <div className="panel-strong rounded-[2rem] p-4 sm:p-5">
          <ProfileImage
            src="/profile.jpg"
            alt="Akm Humayoun Alom profile image"
            className="min-h-[28rem] sm:min-h-[36rem]"
          />
        </div>

        <article className="panel rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Biography</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Akm Humayoun Alom
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62">
            I&apos;m a Full Stack Web App Developer from Bangladesh with a strong
            focus on modern user experience, clean frontend structure, and practical
            business value. I enjoy turning ideas into websites that feel polished,
            fast, and easy to navigate.
          </p>
          <p className="mt-5 text-base leading-8 text-white/62">
            My work spans Next.js, responsive UI design, WordPress development, and
            custom web interfaces for portfolios, service businesses, and growing brands.
            I care about both the visual first impression and the long-term usability of a site.
          </p>
          <p className="mt-5 text-base leading-8 text-white/62">
            Collaboration matters to me. I like building with clear communication,
            dependable progress, and a final result that supports real goals instead of
            just looking attractive.
          </p>
        </article>
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 md:grid-cols-3" delayClassName="animation-delay-300">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" delayClassName="animation-delay-450">
        <article className="panel rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Tools and strengths I use to build modern products
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white/72"
              >
                {skill}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6">
          <article className="panel hover-card rounded-[2rem] p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-2xl font-semibold text-white">
              Build websites that help brands communicate clearly and convert confidently.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/62">
              I aim to create web experiences that balance speed, trust, beauty, and usability for real-world business goals.
            </p>
          </article>

          <article className="panel hover-card rounded-[2rem] p-8">
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-2xl font-semibold text-white">
              Grow a recognizable development brand rooted in quality, consistency, and modern design.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/62">
              My long-term direction is to deliver premium digital work that feels timeless, useful, and reliable across devices.
            </p>
          </article>
        </div>
      </AnimatedSection>
    </main>
  );
}
