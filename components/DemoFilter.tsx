"use client";

type DemoFilterProps = {
  filters: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
};

export default function DemoFilter({
  filters,
  activeFilter,
  onChange,
}: DemoFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
              isActive
                ? "border-slate-200 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
                : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
