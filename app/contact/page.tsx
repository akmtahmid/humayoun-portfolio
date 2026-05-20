export default function ContactPage() {
  return (
    <main className="page-shell section-space">
      <section className="max-w-5xl">
        <p className="eyebrow">Contact</p>
        <h1 className="section-title mt-5">
          Let&apos;s Build Something Great Together
        </h1>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="dark-card rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Contact Information</p>
          <div className="mt-8 space-y-6 text-base text-white/72 sm:text-lg">
            <p>
              Email:{" "}
              <a
                href="mailto:akmhumayounalom@gmail.com"
                className="font-semibold text-white hover:text-white/80"
              >
                akmhumayounalom@gmail.com
              </a>
            </p>
            <p>Phone: 01748303987</p>
            <p>Facebook: Akm tahmidul Alom Tahmid</p>
            <p>LinkedIn: Not added yet</p>
            <p>GitHub: Not added yet</p>
          </div>
        </article>

        <section className="dark-card rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Send A Message</p>
          <form className="mt-8 grid gap-5">
            <input
              type="text"
              placeholder="Name"
              className="rounded-[1.2rem] border border-white/12 bg-[#151515] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/35"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-[1.2rem] border border-white/12 bg-[#151515] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/35"
            />
            <input
              type="text"
              placeholder="Subject"
              className="rounded-[1.2rem] border border-white/12 bg-[#151515] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/35"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="thin-scrollbar rounded-[1.2rem] border border-white/12 bg-[#151515] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/35"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111111] hover:bg-white/90"
            >
              Send Message
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
