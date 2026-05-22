import Link from "next/link";
import DemoProjectDetails from "@/components/DemoProjectDetails";
import { demoProjects, getDemoProjectBySlug } from "@/lib/demoProjects";

type DemoProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demoProjects.map((project) => ({ slug: project.slug }));
}

export default async function DemoProjectPage({
  params,
}: DemoProjectPageProps) {
  const { slug } = await params;
  const project = getDemoProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f8fafc] px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-slate-200 bg-white px-8 py-14 text-center shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">
            Project Not Found
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
            This demo project could not be found
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The project details page you requested does not exist or may have
            moved. You can return to the demo listing and continue browsing.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(124,58,237,0.28)] hover:bg-violet-700"
          >
            Back to Demo Projects
          </Link>
        </div>
      </main>
    );
  }

  return <DemoProjectDetails project={project} />;
}
