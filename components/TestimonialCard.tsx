type TestimonialCardProps = {
  title: string;
  quote: string;
  person: string;
  role: string;
};

export default function TestimonialCard({
  title,
  quote,
  person,
  role,
}: TestimonialCardProps) {
  return (
    <article className="panel rounded-[1.9rem] p-6 sm:p-7">
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="mt-5 text-sm leading-7 text-white/64">&quot;{quote}&quot;</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
          {person
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{person}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}
