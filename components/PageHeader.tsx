type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: PageHeaderProps) {
  return (
    <div className={`${centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"} animate-fade-up`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="section-heading mt-5 text-white">{title}</h1>
      {description ? (
        <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
