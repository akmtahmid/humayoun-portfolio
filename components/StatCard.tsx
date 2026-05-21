type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="panel hover-card rounded-[1.8rem] p-6 text-center">
      <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-violet-400/30 bg-violet-400/12 shadow-[0_0_35px_-15px_rgba(139,92,246,0.95)]" />
      <p className="text-4xl font-black tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm font-semibold text-white/62">{label}</p>
    </article>
  );
}
