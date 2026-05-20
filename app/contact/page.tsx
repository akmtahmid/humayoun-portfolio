const contactCards = [
  {
    title: "Email",
    value: "akmhumayounalom@gmail.com",
    href: "mailto:akmhumayounalom@gmail.com",
  },
  {
    title: "Phone",
    value: "01748303987",
    href: "tel:01748303987",
  },
  {
    title: "Facebook",
    value: "Akm tahmidul Alom Tahmid",
    href: "/contact",
  },
  {
    title: "Location",
    value: "Bangladesh",
    href: "/about",
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell section-space">
      <section className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">Contact</p>
        <h1 className="section-heading mt-5 text-white">Let&apos;s Get In Touch</h1>
        <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
          Reach out if you want a polished business website, a modern portfolio,
          or a custom Next.js project with a clear and collaborative process.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card) => (
          <a key={card.title} href={card.href} className="panel rounded-[1.8rem] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              {card.title}
            </p>
            <p className="mt-4 text-xl font-semibold text-white">{card.value}</p>
          </a>
        ))}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-2xl font-semibold text-white">Available for work</p>
          <p className="mt-5 text-base leading-8 text-white/62">
            I work on single-page portfolios, service websites, landing pages,
            WordPress builds, and custom Next.js interfaces. If you have a
            project in mind, email is the fastest way to start.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:akmhumayounalom@gmail.com"
              className="purple-button inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white"
            >
              Send Email
            </a>
            <a
              href="tel:01748303987"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/72 hover:text-white"
            >
              Call Now
            </a>
          </div>
        </article>

        <article className="panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">
            Quick Info
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/65">
            <p>Name: Akm Humayoun Alom</p>
            <p>Profession: Full Stack Web App Developer</p>
            <p>LinkedIn: Not added yet</p>
            <p>GitHub: Not added yet</p>
            <p>Facebook: Akm tahmidul Alom Tahmid</p>
          </div>
        </article>
      </section>
    </main>
  );
}
