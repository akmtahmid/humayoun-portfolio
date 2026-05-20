import Link from "next/link";

const articles = [
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    description:
      "A practical article on structuring reusable pagination logic and keeping the user experience smooth in React applications.",
  },
  {
    title: "How To Build A Modern Portfolio With Next.js",
    description:
      "A walkthrough of layout planning, reusable components, and creating premium frontend presentation with App Router.",
  },
  {
    title: "WordPress Website Design Tips For Beginners",
    description:
      "Simple design principles that help new WordPress users create cleaner, more trustworthy business websites.",
  },
  {
    title: "SEO Optimization For Business Websites",
    description:
      "Key on-page and technical ideas that help service websites load faster and become easier to discover online.",
  },
  {
    title: "Tailwind CSS Layout Tips",
    description:
      "Layout techniques for balancing spacing, responsiveness, and visual consistency in modern dark UI systems.",
  },
  {
    title: "Full Stack Development Roadmap",
    description:
      "A focused path for learning frontend, backend, APIs, and deployment-ready thinking as a complete developer.",
  },
];

export default function ArticlesPage() {
  return (
    <main className="page-shell section-space">
      <section className="text-center">
        <p className="eyebrow">Articles</p>
        <h1 className="section-title mt-5">Words Can Change The World!</h1>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.title}
            className="dark-card overflow-hidden rounded-[2rem]"
          >
            <div className="gradient-frame p-5">
              <div className="flex min-h-[220px] items-end rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))] p-5">
                <span className="rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/65">
                  Article 0{index + 1}
                </span>
              </div>
            </div>

            <div className="p-7">
              <h2 className="text-2xl font-black tracking-tight text-white">
                {article.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                {article.description}
              </p>
              <Link
                href="/articles"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#111111]"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
