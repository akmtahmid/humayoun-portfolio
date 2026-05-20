import ArticleCard from "@/components/ArticleCard";
import SectionTitle from "@/components/SectionTitle";

const articles = [
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    description:
      "A practical walkthrough for creating reusable pagination logic and improving navigation in React applications.",
  },
  {
    title: "How To Build A Modern Portfolio With Next.js",
    description:
      "A guide to structuring a premium portfolio using App Router, reusable UI, and dark modern layouts.",
  },
  {
    title: "WordPress Website Design Tips For Beginners",
    description:
      "Helpful design choices that make WordPress websites look more professional, modern, and trustworthy.",
  },
  {
    title: "SEO Optimization For Business Websites",
    description:
      "Simple but effective ways to improve structure, loading speed, and search visibility for service websites.",
  },
  {
    title: "Tailwind CSS Layout Tips",
    description:
      "Useful spacing, grid, and composition ideas for creating cleaner interfaces across desktop and mobile.",
  },
  {
    title: "Full Stack Development Roadmap",
    description:
      "A focused roadmap for learning frontend, backend, APIs, databases, and the mindset needed for complete web development.",
  },
];

export default function ArticlesPage() {
  return (
    <main className="page-shell section-space">
      <SectionTitle
        eyebrow="Articles"
        title="Words Can Change The World!"
        description="Ideas, tutorials, and practical notes about web design, Next.js, WordPress, and full stack development."
        align="center"
        className="max-w-4xl"
      />

      <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.title}
            index={index + 1}
            title={article.title}
            description={article.description}
          />
        ))}
      </section>
    </main>
  );
}
