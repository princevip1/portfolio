"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const now = [
  { k: "Building", v: "Real-time payment infrastructure" },
  { k: "Stack", v: "Next.js · Node.js · PostgreSQL" },
  { k: "Reading", v: "Designing Data-Intensive Applications" },
  { k: "Location", v: "Dhaka, Bangladesh — UTC+6" },
];

const stats = [
  { v: "5+ yrs", l: "Building production systems" },
  { v: "200+", l: "Projects shipped to date" },
  { v: "100+", l: "Clients across time zones" },
  { v: "24h", l: "Average reply window" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 lg:pt-44 pb-20 lg:pb-28"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="label-mono">Available — Q3 2026</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-medium leading-[1.02] tracking-[-0.035em]">
              Prince Mahmud.
              <br />
              <span className="text-muted">
                Full-stack developer
                <br className="hidden sm:block" /> building durable web systems.
              </span>
            </h1>

            <p className="mt-8 lg:mt-10 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              I work on the parts of the stack that don&apos;t forgive
              shortcuts — payment flows, real-time data, multi-tenant
              architecture — and ship them with React, Next.js, and Node.js
              for clients across time zones.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
              >
                Start a project
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <a
                href="/work"
                className="text-sm text-foreground/80 hover:text-foreground link-underline"
              >
                See selected work →
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-4 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-2"
          >
            <p className="label-mono mb-5">Now</p>
            <dl className="space-y-4">
              {now.map((row) => (
                <div key={row.k} className="grid grid-cols-[88px_1fr] gap-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted pt-0.5">
                    {row.k}
                  </dt>
                  <dd className="text-sm leading-relaxed">{row.v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>

        <div className="mt-20 md:mt-24 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-border pt-10">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="text-3xl md:text-4xl font-medium tracking-[-0.02em]">
                {s.v}
              </p>
              <p className="mt-2 text-xs text-muted leading-relaxed max-w-[18ch]">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
