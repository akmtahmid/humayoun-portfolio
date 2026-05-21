import Link from "next/link";

type ArticleCardProps = {
  index: number;
  title: string;
  description: string;
};

export default function ArticleCard({
  index,
  title,
  description,
}: ArticleCardProps) {
  return (
    <article className="panel hover-card group overflow-hidden rounded-[2rem]">
      <div className="relative border-b border-white/10 p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_22%)]" />
        <div className="glass-panel relative flex min-h-[220px] items-end rounded-[1.5rem] p-5">
          <span className="rounded-full border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d1bcff]">
            Article 0{index}
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black tracking-tight text-white">{title}</h3>
        <p className="mt-5 text-base leading-8 text-white/70">{description}</p>
        <Link
          href="/contact"
          className="purple-button mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
