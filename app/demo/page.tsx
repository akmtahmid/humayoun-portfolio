"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import DemoCard from "@/components/DemoCard";
import DemoFilter from "@/components/DemoFilter";
import { demoProjects } from "@/lib/demoProjects";

const navCategories = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Branding",
  "SEO",
  "Social Media",
  "Inventory",
] as const;

const filters = ["All Projects", ...navCategories] as const;

export default function DemoPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return demoProjects;
    }

    return demoProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
              Demo Projects
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Browse Demo Projects
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Explore a clean collection of ready-made website concepts across
              business categories. Filter by service, compare complexity and
              timeline, and choose a strong starting point for your next build.
            </p>
          </div>
        </div>
      </section>

      <section
        id="filters"
        className="sticky top-[72px] z-30 border-b border-slate-200 bg-[#f8fafc]/95 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <DemoFilter
            filters={[...filters]}
            activeFilter={activeFilter}
            onChange={(filter) => setActiveFilter(filter as (typeof filters)[number])}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Demo Projects</h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing {filteredProjects.length} project
              {filteredProjects.length === 1 ? "" : "s"}
            </p>
          </div>
          <Link
            href="/contact"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-slate-300 hover:text-slate-900 md:inline-flex"
          >
            Contact About Demo
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <DemoCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Interested in a Custom Demo?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Don&apos;t see exactly what you&apos;re looking for? I can create a
            custom demo tailored to your business needs and requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(124,58,237,0.28)] hover:bg-violet-700"
            >
              Request Custom Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900"
            >
              Contact Me
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
            <a
              href="mailto:akmhumayounalom@gmail.com"
              className="hover:text-violet-700"
            >
              akmhumayounalom@gmail.com
            </a>
            <a href="tel:01748303987" className="hover:text-violet-700">
              01748303987
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
