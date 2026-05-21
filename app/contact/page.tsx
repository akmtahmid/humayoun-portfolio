import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";

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

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "I work on portfolio websites, business websites, landing pages, WordPress service sites, and custom Next.js web apps.",
  },
  {
    question: "What is the easiest way to contact you?",
    answer:
      "Email is the fastest option, but phone and Facebook details are also available here for direct communication.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. I work remotely from Bangladesh and collaborate comfortably across different time zones.",
  },
];

export default function ContactPage() {
  return (
    <main className="page-shell section-space">
      <AnimatedSection>
        <PageHeader
          eyebrow="Contact"
          title="Let’s Build Something Great Together"
          description="A dedicated contact page for quick reach-out options, message form UI, and a few common questions."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4" delayClassName="animation-delay-150">
        {contactCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="panel hover-card rounded-[1.8rem] p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">{card.title}</p>
            <p className="mt-4 text-xl font-semibold text-white">{card.value}</p>
          </a>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" delayClassName="animation-delay-300">
        <article className="panel rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Contact Form</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-violet-400/40"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">Email</span>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-violet-400/40"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm text-white/70">Subject</span>
              <input
                type="text"
                placeholder="Project subject"
                className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-violet-400/40"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm text-white/70">Message</span>
              <textarea
                rows={6}
                placeholder="Tell me about your project"
                className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-violet-400/40"
              />
            </label>
          </div>
          <button
            type="button"
            className="purple-button mt-6 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white"
          >
            Send Message
          </button>
        </article>

        <div className="grid gap-6">
          <article className="panel rounded-[2rem] p-8">
            <p className="eyebrow">Contact Info</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
              <p>Name: Akm Humayoun Alom</p>
              <p>Profession: Full Stack Web App Developer, Expert Next.js Developer, Web Designer, WordPress Developer</p>
              <p>Email: akmhumayounalom@gmail.com</p>
              <p>Phone: 01748303987</p>
              <p>Facebook: Akm tahmidul Alom Tahmid</p>
              <p>LinkedIn: Not added yet</p>
              <p>GitHub: Not added yet</p>
            </div>
          </article>

          <article className="panel rounded-[2rem] p-8">
            <p className="eyebrow">FAQ</p>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-lg font-semibold text-white">{faq.question}</p>
                  <p className="mt-3 text-sm leading-7 text-white/62">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </AnimatedSection>
    </main>
  );
}
