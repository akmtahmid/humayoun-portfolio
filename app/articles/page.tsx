const articles = [
  {
    title: "Designing Better Business Websites with Next.js",
    description:
      "A practical look at structure, clarity, and performance when building service-focused websites.",
  },
  {
    title: "Why Clean Layout Hierarchy Improves Conversions",
    description:
      "Thoughtful spacing, contrast, and content flow can make even a simple landing page feel far more effective.",
  },
  {
    title: "WordPress and Elementor for Modern Client Projects",
    description:
      "How flexible content editing and polished presentation can work together for small business websites.",
  },
];

export default function ArticlesPage() {
  return (
    <main className="page-shell section-space">
      <section className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">Articles</p>
        <h1 className="section-heading mt-5 text-white">Notes, ideas, and process</h1>
        <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
          This route stays simple, but it follows the same dark presentation and
          content rhythm as the rest of the portfolio.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="panel rounded-[1.9rem] p-6 sm:p-7">
            <p className="text-xl font-semibold text-white">{article.title}</p>
            <p className="mt-4 text-sm leading-7 text-white/62">
              {article.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
