"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/work";

const featured = projects.slice(0, 3);

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="py-24 md:py-28 lg:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-12 lg:mb-14">
          <div className="lg:col-span-5">
            <p className="label-mono">03 — Selected work</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.025em] leading-[1.05]">
              Recent projects
              <br className="hidden md:block" /> worth a closer look.
            </h2>
          </div>
          <p className="lg:col-span-7 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl lg:pt-3">
            A short walk through three representative engagements. Each one
            opens into a longer case study covering the problem, approach,
            and what shipped.
          </p>
        </div>

        <div className="border-t border-border">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={`/work/${p.slug}`}
                className="group block border-b border-border py-8 lg:py-10 -mx-4 px-4 lg:-mx-6 lg:px-6 hover:bg-foreground/2 rounded-sm transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-x-10 gap-y-4 items-start">
                  <div className="lg:col-span-1 flex items-baseline gap-3 lg:block">
                    <span className="font-mono text-[11px] text-muted tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] text-muted tracking-wider lg:block lg:mt-3">
                      {p.year}
                    </span>
                  </div>
                  <div className="lg:col-span-6">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight leading-snug group-hover:opacity-90">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground/75 max-w-xl">
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
                      strokeWidth={1.5}
                      className="text-muted group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm md:text-base text-foreground/75 max-w-md">
            More case studies, plus client work I can&apos;t name in public.
          </p>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
          >
            See all projects
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
