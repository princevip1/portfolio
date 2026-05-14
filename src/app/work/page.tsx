import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies — SaaS, OTT, commerce, real-time, and payment infrastructure projects by Prince Mahmud.",
};

export default function WorkPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <header className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <p className="label-mono">01 — Work</p>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.03]">
              A short list of
              <br className="hidden md:block" /> projects worth talking about.
            </h1>
          </div>
          <p className="lg:col-span-5 text-base leading-relaxed text-foreground/80 max-w-xl lg:pt-3">
            Four representative engagements across SaaS, OTT, commerce, and
            real-time systems. Each case study covers the problem, the
            approach, and what actually shipped.
          </p>
        </header>

        <div className="border-t border-border">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group block border-b border-border py-10 lg:py-12 hover:bg-foreground/2 -mx-4 px-4 lg:-mx-6 lg:px-6 transition-colors"
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-1 flex items-baseline gap-3 lg:block">
                  <span className="font-mono text-[11px] text-muted tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] text-muted tracking-wider lg:block lg:mt-3">
                    {p.year}
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75 max-w-xl">
                    {p.tagline}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] text-muted whitespace-nowrap"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="font-mono text-[10px] text-muted">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {p.role} · {p.status}
                  </p>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end">
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-10 border-t border-border pt-12">
          <div className="lg:col-span-7">
            <p className="label-mono">More</p>
            <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight">
              Plenty more under NDA — happy to walk through anything relevant
              over a call.
            </h3>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
