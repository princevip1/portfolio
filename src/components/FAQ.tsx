"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What technologies do you specialize in?",
    a: "Primarily React, Next.js, and TypeScript on the frontend, with Node.js and Express on the backend. Postgres or MongoDB for data, depending on the shape of the problem. I also work in PHP/Laravel and React Native when projects call for it.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes — I work remotely with clients across time zones. I'm based in Dhaka (UTC+6) and adjust working hours to overlap meaningfully with US, EU, and APAC teams.",
  },
  {
    q: "What kinds of projects do you take on?",
    a: "SaaS platforms, multivendor commerce, OTT streaming systems, payment infrastructure, real-time applications, and custom APIs. Anything where the interesting work is in the architecture, not just the surface.",
  },
  {
    q: "How long does a typical engagement run?",
    a: "Two to four weeks for focused work or a clean MVP. Two to three months for a full SaaS or commerce build. I'll share a realistic timeline after we scope the work together — not before.",
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "Yes — bug fixes, feature work, performance tuning, server maintenance. Either as a monthly retainer or per-request, depending on what fits the rhythm of your team.",
  },
  {
    q: "How do you work with clients day to day?",
    a: "Agile in spirit, not ceremony. We agree on outcomes, I share progress on a regular cadence, and I'll tell you early when something looks like it's drifting. Code arrives clean, documented, and reviewable.",
  },
];

function Item({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-border"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full grid grid-cols-[28px_1fr_28px] items-start gap-4 py-6 lg:py-7 text-left cursor-pointer group"
        aria-expanded={Boolean(isOpen)}
      >
        <span className="font-mono text-[11px] text-muted pt-1.5">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-base md:text-lg font-medium tracking-tight leading-snug pt-0.5 group-hover:text-foreground transition-colors">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-muted pt-1 justify-self-end group-hover:text-foreground transition-colors"
        >
          <Plus size={18} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-[28px_1fr_28px] gap-4 pb-7">
              <span />
              <p className="text-sm md:text-base leading-relaxed text-foreground/75 max-w-2xl">
                {faq.a}
              </p>
              <span />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 md:py-28 lg:py-32 border-t border-border bg-subtle/40"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-12 lg:mb-14">
          <div className="lg:col-span-5">
            <p className="label-mono">05 — FAQ</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.025em] leading-[1.05]">
              Questions, answered
              <br className="hidden md:block" /> the short way.
            </h2>
          </div>
          <p className="lg:col-span-7 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl lg:pt-3">
            The things people usually ask before getting in touch. If yours
            isn&apos;t here, drop me a line — I read every message.
          </p>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, idx) => (
            <Item
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
