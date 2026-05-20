import SectionTitle from "@/components/SectionTitle";

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
    href: "/contact",
  },
];

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "I work on developer portfolios, business websites, WordPress websites, landing pages, and full stack web projects.",
  },
  {
    question: "Are your websites responsive?",
    answer:
      "Yes. Every layout is designed to work smoothly across mobile, tablet, and desktop devices.",
  },
  {
    question: "Can we start with just a discussion?",
    answer:
      "Absolutely. You can reach out first with your idea, goals, and timeline before deciding on the full project scope.",
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell section-space">
      <SectionTitle
        eyebrow="Contact"
        title="Let&apos;s Build Something Great Together"
        description="If you need a modern developer portfolio, business website, or polished digital presence, I&apos;d be happy to discuss your project."
        className="max-w-5xl"
      />

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="dark-card rounded-[1.9rem] p-7 hover:-translate-y-1 hover:border-[#9f67ff]/30 hover:shadow-[0_30px_70px_-40px_rgba(124,58,237,0.95)]"
          >
            <p className="eyebrow">{card.title}</p>
            <p className="mt-4 text-2xl font-black tracking-tight text-white">
              {card.value}
            </p>
          </a>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="dark-card rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Send A Message</p>
          <form className="mt-8 grid gap-5">
            <input
              type="text"
              placeholder="Name"
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#9f67ff]/34"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#9f67ff]/34"
            />
            <input
              type="text"
              placeholder="Subject"
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#9f67ff]/34"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="thin-scrollbar rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#9f67ff]/34"
            />
            <button
              type="submit"
              className="purple-button inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="grid gap-6">
          <article className="dark-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Contact Info</p>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/70">
              <p>Email: akmhumayounalom@gmail.com</p>
              <p>Phone: 01748303987</p>
              <p>Facebook: Akm tahmidul Alom Tahmid</p>
              <p>LinkedIn: Not added yet</p>
              <p>GitHub: Not added yet</p>
              <p>Location: Bangladesh</p>
            </div>
          </article>

          <article className="dark-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Let&apos;s Work</p>
            <p className="mt-4 text-3xl font-black tracking-tight text-white">
              Available for portfolios, business websites, WordPress builds, and
              full stack web projects.
            </p>
            <p className="mt-6 text-base leading-8 text-white/68">
              If you want a website that feels modern, premium, and responsive
              across devices, this is a good place to start the conversation.
            </p>
          </article>

          <article className="dark-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">FAQ</p>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="text-lg font-black tracking-tight text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/68">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
