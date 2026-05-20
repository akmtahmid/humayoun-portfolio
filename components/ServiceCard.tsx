type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group dark-card rounded-[2rem] p-7 hover:-translate-y-1 hover:border-[#9f67ff]/30 hover:shadow-[0_30px_70px_-40px_rgba(124,58,237,0.95)]">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9f67ff]/28 bg-[linear-gradient(135deg,rgba(159,103,255,0.24),rgba(79,156,255,0.12))] text-2xl shadow-[0_18px_40px_-28px_rgba(124,58,237,1)]">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl font-black tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-base leading-8 text-white/68">{description}</p>
    </article>
  );
}
