import ProfileImage from "@/components/ProfileImage";

const highlights = [
  "Full Stack Web App Developer based in Bangladesh",
  "Focused on Next.js, Tailwind CSS, WordPress, and modern business websites",
  "Strong attention to responsive layout, speed, and clean design structure",
  "Comfortable collaborating remotely with flexible time zone communication",
];

export default function AboutPage() {
  return (
    <main className="page-shell section-space">
      <section className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">About</p>
        <h1 className="section-heading mt-5 text-white">About Akm Humayoun Alom</h1>
        <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
          I create modern websites and web apps that combine clear business
          goals, polished presentation, and dependable frontend development.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="panel-strong rounded-[2rem] p-4 sm:p-5">
          <ProfileImage
            src="/profile.jpg"
            alt="Akm Humayoun Alom profile image"
            className="min-h-[28rem] sm:min-h-[36rem]"
          />
        </div>

        <article className="panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-2xl font-semibold text-white sm:text-3xl">
            AKM HUMAYOUN
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/50">
            Full Stack Web App Developer
          </p>
          <p className="mt-8 text-base leading-8 text-white/62">
            My work sits at the intersection of design clarity and practical
            development. I enjoy building websites that feel premium, guide the
            user smoothly, and support real business growth.
          </p>
          <p className="mt-5 text-base leading-8 text-white/62">
            Alongside Next.js development, I also work with WordPress and
            Elementor for clients who need flexible content management without
            sacrificing modern layout quality.
          </p>

          <div className="mt-8 grid gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
