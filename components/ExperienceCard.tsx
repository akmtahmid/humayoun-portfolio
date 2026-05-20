type ExperienceCardProps = {
  title: string;
  description: string;
};

export default function ExperienceCard({
  title,
  description,
}: ExperienceCardProps) {
  return (
    <article className="panel rounded-[1.9rem] p-6 sm:p-7">
      <div className="mb-6 h-14 w-14 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(76,29,149,0.7),rgba(59,130,246,0.25))]" />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
        {description}
      </p>
    </article>
  );
}
