import Link from "next/link";
import ImageCard from "@/components/ImageCard";

export default function HomePage() {
  return (
    <main className="hero-glow">
      <section className="page-shell section-space relative overflow-hidden">
        <div className="absolute left-10 top-12 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-6 top-1/3 h-44 w-44 rounded-full bg-white/4 blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative">
            <div className="dark-card gradient-frame overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <ImageCard
                src="/profile.png"
                alt="Akm Humayoun Alom profile"
                className="min-h-[420px] rounded-[1.6rem] sm:min-h-[560px]"
                priority
                label="Akm Humayoun Alom"
                fallbackTitle="Profile Preview"
                fallbackDescription="Professional image placeholder for your personal portfolio hero section."
              />
            </div>

            <div className="dark-card absolute bottom-4 left-4 rounded-full p-2 sm:-bottom-8 sm:-left-8">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/12 bg-[#131313] text-center text-sm font-bold uppercase tracking-[0.22em] text-white sm:h-28 sm:w-28">
                <span>Hire</span>
                <span>Me</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <p className="eyebrow">Full Stack Portfolio</p>
            <h1 className="section-title mt-5 max-w-4xl text-white">
              My purpose is to elevate aspiring and established projects to the
              next level
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications, modern websites, and
              user-centered digital experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white px-7 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#111111]"
              >
                Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111111] hover:bg-white/90"
              >
                Contact
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="dark-card-soft rounded-[1.5rem] p-5">
                <p className="text-3xl font-black tracking-tight text-white">
                  26+
                </p>
                <p className="mt-2 text-sm text-white/65">Satisfied Clients</p>
              </div>
              <div className="dark-card-soft rounded-[1.5rem] p-5">
                <p className="text-3xl font-black tracking-tight text-white">
                  26+
                </p>
                <p className="mt-2 text-sm text-white/65">Projects Completed</p>
              </div>
              <div className="dark-card-soft rounded-[1.5rem] p-5">
                <p className="text-3xl font-black tracking-tight text-white">
                  3+
                </p>
                <p className="mt-2 text-sm text-white/65">Years Experience</p>
              </div>
            </div>

            <div className="dark-card absolute bottom-0 right-0 hidden w-52 rounded-[1.75rem] p-4 xl:block">
              <div className="rounded-[1.35rem] border border-white/10 bg-[#151515] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">💡</span>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                    Idea
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  Clean strategy, modern design, and production-ready code in
                  one workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
