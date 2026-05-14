import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import { getAdjacent, getProjectBySlug, projects } from "@/lib/work";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      type: "article",
      title: `${project.title} — Prince Mahmud`,
      description: project.tagline,
      url: `/work/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Prince Mahmud`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  const meta = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Industry", value: project.industry },
    { label: "Status", value: project.status },
  ];

  return (
    <article className="pt-32 md:pt-40 pb-24 lg:pb-32">
      <ReadingProgress />
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          All work
        </Link>

        <div
          aria-hidden="true"
          className="mt-12 lg:mt-16 relative flex items-end justify-between gap-6 border-b border-border pb-8 lg:pb-10 overflow-hidden"
        >
          <span className="block font-medium tracking-[-0.04em] leading-[0.85] text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] xl:text-[22rem] text-foreground/[0.07] select-none">
            {String(projectIndex + 1).padStart(2, "0")}
          </span>
          <div className="absolute inset-x-0 bottom-8 lg:bottom-10 flex items-end justify-between gap-4 px-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Case study /{" "}
              <span className="text-foreground">
                {String(projectIndex + 1).padStart(2, "0")}
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted text-right">
              {project.year}
              <span className="hidden sm:inline">
                {" "}/ {project.industry}
              </span>
            </p>
          </div>
        </div>

        <header className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.03em] leading-[1.02]">
              {project.title}
            </h1>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-foreground/80 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10 lg:pt-2">
            <p className="label-mono mb-5">Project</p>
            <dl className="space-y-4">
              {meta.map((m) => (
                <div key={m.label} className="grid grid-cols-[88px_1fr] gap-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted pt-0.5">
                    {m.label}
                  </dt>
                  <dd className="text-sm">{m.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[88px_1fr] gap-3">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted pt-0.5">
                  Stack
                </dt>
                <dd className="text-sm flex flex-wrap gap-x-3 gap-y-1">
                  {project.stack.map((s) => (
                    <span key={s} className="whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </header>

        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 border-y border-border py-10 lg:py-12">
          {project.highlights.map((h) => (
            <div key={h.label}>
              <p className="text-3xl lg:text-4xl font-medium tracking-tight">
                {h.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                {h.label}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-16 lg:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="label-mono">Overview</p>
          </div>
          <p className="lg:col-span-8 text-base lg:text-lg leading-relaxed text-foreground/85 max-w-2xl">
            {project.summary}
          </p>
        </section>

        <section className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="label-mono">The problem</p>
          </div>
          <p className="lg:col-span-8 text-base lg:text-lg leading-relaxed text-foreground/85 max-w-2xl">
            {project.problem}
          </p>
        </section>

        <section className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="label-mono">Approach</p>
          </div>
          <ol className="lg:col-span-8 max-w-2xl">
            {project.approach.map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[36px_1fr] gap-4 py-5 border-b border-border last:border-b-0"
              >
                <span className="font-mono text-[11px] text-muted pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-foreground/85">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="label-mono">Outcome</p>
          </div>
          <ul className="lg:col-span-8 max-w-2xl">
            {project.outcome.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-5 border-b border-border last:border-b-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                <p className="text-base leading-relaxed text-foreground/85">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <nav className="mt-24 lg:mt-32 border-t border-border pt-10 grid sm:grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group block sm:text-left"
            >
              <p className="label-mono mb-3">Previous</p>
              <p className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group block sm:text-right"
            >
              <p className="label-mono mb-3">Next</p>
              <p className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4">
                {next.title} →
              </p>
            </Link>
          ) : (
            <div className="sm:text-right">
              <p className="label-mono mb-3">Next</p>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-lg font-medium tracking-tight"
              >
                All projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </article>
  );
}
