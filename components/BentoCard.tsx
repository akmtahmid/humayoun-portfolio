type BentoCardProps = {
  title: string;
  description?: string;
  accent?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function BentoCard({
  title,
  description,
  accent,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <article
      className={`panel hover-card group relative overflow-hidden rounded-[1.9rem] p-6 sm:p-7 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:28px_28px] opacity-35" />
      <div
        className={`absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl ${
          accent ?? "bg-violet-500/15"
        }`}
      />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div>
          <h3 className="max-w-md text-2xl font-semibold leading-tight text-white">{title}</h3>
          {description ? (
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </article>
  );
}
