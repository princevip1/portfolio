"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Full-stack web applications",
    desc: "End-to-end product builds in React, Next.js, and Node.js — from data model and API design through deployment, observability, and handoff.",
    tags: ["Next.js", "Node.js", "TypeScript"],
  },
  {
    n: "02",
    title: "SaaS & subscription systems",
    desc: "Multi-tenant architecture, subscription billing, role-based access, and the admin surfaces a growing business actually needs to run itself.",
    tags: ["Multi-tenant", "Billing", "Auth"],
  },
  {
    n: "03",
    title: "Payment gateway integration",
    desc: "Stripe, PayPal, and regional gateways done carefully — idempotent webhooks, reconciliation, and edge cases that surface only after launch.",
    tags: ["Stripe", "Webhooks", "Reconciliation"],
  },
  {
    n: "04",
    title: "Custom API development",
    desc: "REST and GraphQL APIs designed for the long haul — versioned, rate-limited, well-documented, and shaped to the domain rather than the framework.",
    tags: ["REST", "GraphQL", "OpenAPI"],
  },
  {
    n: "05",
    title: "Real-time applications",
    desc: "WebSocket-driven chat, presence, live collaboration, and video conferencing — with the backpressure and reconnection logic that production needs.",
    tags: ["WebSockets", "Pub/Sub", "Video"],
  },
  {
    n: "06",
    title: "Email & SMTP architecture",
    desc: "Bulk validation, transactional pipelines, deliverability tuning. The dull, infrastructural work that quietly makes the rest of the product trustable.",
    tags: ["SMTP", "Queues", "Deliverability"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-28 lg:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="label-mono">04 — Services</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.025em] leading-[1.05]">
              How I can help.
            </h2>
          </div>
          <p className="lg:col-span-7 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl lg:pt-3">
            Engagements typically run from a few weeks for focused work to
            multiple months for full product builds. I work either as the
            lead developer or alongside an existing team.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group border-b border-border"
            >
              <div className="grid lg:grid-cols-12 gap-x-10 gap-y-4 py-8 lg:py-10">
                <div className="lg:col-span-1 flex items-baseline gap-3 lg:block">
                  <span className="font-mono text-[11px] text-muted tracking-wider">
                    {s.n}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="lg:col-span-5 text-sm md:text-base leading-relaxed text-foreground/75 max-w-xl">
                  {s.desc}
                </p>
                <div className="lg:col-span-2 flex flex-wrap gap-x-3 gap-y-1.5 lg:justify-end items-start">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-muted whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 lg:mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <p className="text-base md:text-lg text-foreground/85 max-w-md leading-relaxed">
            Working on something not listed here? Let&apos;s talk anyway —
            most of the work I find interesting starts with an awkward fit.
          </p>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start a conversation
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
