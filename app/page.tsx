export default function Home() {
  const services = [
    "Next.js Website",
    "WordPress Design",
    "SEO Optimization",
    "Full Stack Development",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="bg-indigo-50 text-sm text-slate-600">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-3">
          <p>Sat - Thu: 9:00 AM - 6:00 PM</p>
          <p>Email: akmhumayounalom@gmail.com | Phone: 01748303987</p>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-400 text-2xl font-bold text-white">
              H
            </div>
            <h1 className="text-3xl font-bold text-indigo-600">
              Humayoun<span className="text-sky-500">Fix</span>
            </h1>
          </div>

          <div className="hidden items-center gap-8 font-medium text-slate-700 md:flex">
            <a href="#" className="text-indigo-600">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg"
          >
            Start A Project
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-6 inline-block rounded-full border border-indigo-200 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
            Digital Technology Partner
          </p>

          <h2 className="mb-6 text-5xl font-extrabold leading-tight text-slate-950 md:text-6xl">
            Empowering <br />
            Brands with <br />
            <span className="bg-gradient-to-r from-indigo-600 to-sky-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
            Hi, I am Humayoun Alom. I build modern, responsive, and professional
            websites using Next.js, React.js, WordPress, Elementor, Tailwind CSS,
            and SEO-friendly web design.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-indigo-700"
            >
              Let's Start
            </a>

            <a
              href="#services"
              className="rounded-lg border border-sky-400 px-8 py-4 font-bold text-indigo-600 hover:bg-sky-50"
            >
              Discover Solutions
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-slate-950 p-8 shadow-2xl">
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-lg bg-gradient-to-br from-slate-900 to-indigo-950 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-400 text-4xl font-bold text-white">
              H
            </div>

            <h3 className="text-4xl font-extrabold text-white">
              Humayoun<span className="text-sky-400">Fix</span>
            </h3>

            <p className="mt-3 text-slate-300">Dynamic Digital Solution</p>

            <p className="mt-10 text-xl font-bold uppercase text-white">
              Future-ready solutions for business.
            </p>

            <div className="mt-6 h-1 w-64 rounded-full bg-white"></div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-4xl font-bold">About Me</h3>
          <p className="max-w-4xl text-lg leading-8 text-slate-600">
            I am a passionate Web Designer and WordPress Developer. I create
            clean, professional, responsive, and user-friendly websites that help
            businesses grow online.
          </p>
        </div>
      </section>

      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-10 text-4xl font-bold">My Services</h3>

          <div className="grid gap-6 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
              >
                <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-400"></div>
                <h4 className="text-xl font-bold">{service}</h4>
                <p className="mt-3 text-slate-600">
                  Professional, modern, and business-focused digital solution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-4xl font-bold">Contact Me</h3>
          <p className="text-lg text-slate-300">Email: akmhumayounalom@gmail.com</p>
          <p className="mt-2 text-lg text-slate-300">Phone: 01748303987</p>
          <p className="mt-2 text-lg text-slate-300">
            Facebook: Akm tahmidul Alom Tahmid
          </p>
        </div>
      </section>
    </main>
  );
}
