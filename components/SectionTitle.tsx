type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title mt-4 bg-[linear-gradient(180deg,#ffffff,#d9d2ff)] bg-clip-text text-transparent">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
