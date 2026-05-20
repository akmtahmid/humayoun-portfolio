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
    <article className="group dark-card overflow-hidden rounded-[2rem] hover:-translate-y-1 hover:border-[#9f67ff]/30 hover:shadow-[0_30px_70px_-40px_rgba(124,58,237,0.95)]">
      <div className="purple-frame p-5">
        <div className="glass-panel flex min-h-[230px] items-end rounded-[1.5rem] p-5">
          <span className="rounded-full border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d1bcff]">
            Article 0{index}
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black tracking-tight text-white">{title}</h3>
        <p className="mt-5 text-base leading-8 text-white/70">{description}</p>
        <Link
          href="/articles"
          className="purple-button mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
