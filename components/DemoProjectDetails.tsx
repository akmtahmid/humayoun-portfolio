"use client";

import { Check, ChevronLeft, Clock3, DollarSign, LayoutGrid, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { DemoProject } from "@/lib/demoProjects";

type TabKey = "overview" | "features" | "technologies";

const tabLabels: Record<TabKey, string> = {
  overview: "Overview",
  features: "Features",
  technologies: "Technologies",
};

const complexityBadgeStyles: Record<DemoProject["complexity"], string> = {
  Complex: "border-red-200 bg-red-50 text-red-600",
  Moderate: "border-amber-200 bg-amber-50 text-amber-700",
  Easy: "border-emerald-200 bg-emerald-50 text-emerald-700",
};

function buildContactHref(project: DemoProject) {
  const params = new URLSearchParams({
    demo: project.slug,
    title: project.title,
    category: project.category,
    complexity: project.complexity,
    timeline: project.timeline,
    priceRange: project.priceRange,
  });

  return `/contact?${params.toString()}`;
}

export default function DemoProjectDetails({
  project,
}: {
  project: DemoProject;
}) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const contactHref = useMemo(() => buildContactHref(project), [project]);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Demo Projects
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              {project.category}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${complexityBadgeStyles[project.complexity]}`}
            >
              {project.complexity}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            A clean, launch-ready demo concept with real business structure,
            thoughtful UX, and room for custom expansion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="relative h-[280px] overflow-hidden rounded-[1.25rem] sm:h-[420px]">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              sizes="(min-width: 1280px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {(Object.keys(tabLabels) as TabKey[]).map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-violet-200 bg-violet-600 text-white shadow-[0_12px_30px_rgba(124,58,237,0.26)]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tabLabels[tab]}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            {activeTab === "overview" ? (
              <>
                <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Project Overview
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {project.overview}
                  </p>
                </section>

                <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Project Details
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Category", value: project.category },
                      { label: "Complexity", value: project.complexity },
                      { label: "Timeline", value: project.timeline },
                      { label: "Price Range", value: project.priceRange },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <Check className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-900">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={contactHref}
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(124,58,237,0.28)] hover:bg-violet-700"
                  >
                    Inquire About This Project
                  </Link>
                  <p className="mt-4 text-sm text-slate-500">
                    Note: Fields will be pre-filled with project details on the
                    contact page.
                  </p>
                </section>
              </>
            ) : null}

            {activeTab === "features" ? (
              <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-bold text-slate-900">Features</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-medium leading-6 text-slate-800">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {activeTab === "technologies" ? (
              <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-bold text-slate-900">
                  Technologies
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <h2 className="text-xl font-bold text-slate-900">
                Project Summary
              </h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <DollarSign className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Price Range
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      {project.priceRange}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Timeline
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      {project.timeline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <LayoutGrid className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Complexity
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      {project.complexity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(124,58,237,0.28)] hover:bg-violet-700"
                >
                  Inquire About This Project
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900"
                >
                  View Live Demo
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <h2 className="text-xl font-bold text-slate-900">Need Help?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Have questions about this demo project or need more information?
                I am here to help.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  Contact Sales Team
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-lg bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-100"
                >
                  Browse More Demos
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(135deg,#eff6ff_0%,#eef2ff_55%,#f5f3ff_100%)] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-600 shadow-sm">
                <Rocket className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-900">
                Ready to customize this project?
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We can adapt layout, content, features, and technology choices
                around your business goals.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
