type StatCardProps = {
  value: string;
  label: string;
  centered?: boolean;
  icon?: string;
};

export default function StatCard({
  value,
  label,
  centered = false,
  icon = "S",
}: StatCardProps) {
  return (
    <article
      className={`dark-card-soft group rounded-[1.7rem] p-6 hover:border-[#9f67ff]/28 hover:shadow-[0_24px_60px_-42px_rgba(124,58,237,0.9)] ${
        centered ? "text-center" : ""
      }`}
    >
      <div
        className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#9f67ff]/24 bg-[#9f67ff]/12 text-xs font-black text-white ${
          centered ? "mx-auto" : ""
        }`}
      >
        {icon}
      </div>
      <p className="text-4xl font-black tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm font-semibold text-white/62">{label}</p>
    </article>
  );
}
