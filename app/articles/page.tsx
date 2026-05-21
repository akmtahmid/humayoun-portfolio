import AnimatedSection from "@/components/AnimatedSection";
import ArticleCard from "@/components/ArticleCard";
import PageHeader from "@/components/PageHeader";

const articles = [
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    description:
      "A practical guide to creating flexible pagination UI that stays clean, reusable, and easy to scale.",
  },
  {
    title: "How To Build A Modern Portfolio With Next.js",
    description:
      "A walkthrough of structure, sections, and dark modern styling choices for a premium portfolio website.",
  },
  {
    title: "WordPress Website Design Tips For Beginners",
    description:
      "Foundational layout and visual advice for creating better first impressions with WordPress projects.",
  },
  {
    title: "SEO Optimization For Business Websites",
    description:
      "An overview of content structure, speed, headings, and clarity decisions that support discoverability.",
  },
  {
    title: "Tailwind CSS Layout Tips",
    description:
      "Useful layout techniques for spacing, alignment, responsive rhythm, and reusable UI sections.",
  },
  {
    title: "Full Stack Development Roadmap",
    description:
      "A practical roadmap for growing from frontend basics into full stack projects with confidence.",
  },
];

export default function ArticlesPage() {
  return (
    <main className="page-shell section-space">
      <AnimatedSection>
        <PageHeader
          eyebrow="Articles"
          title="Words Can Change The World!"
          description="A full articles page for writing, insights, and educational content in the same visual system."
        />
      </AnimatedSection>

      <AnimatedSection className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3" delayClassName="animation-delay-150">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} index={index + 1} {...article} />
        ))}
      </AnimatedSection>
    </main>
  );
}
