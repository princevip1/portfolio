"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, TypeScript, Node.js, Express.js, PHP, Laravel, MongoDB, MySQL, and PostgreSQL. I also work with Tailwind CSS, GraphQL, WebSocket, and various payment integrations.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes! I'm based in Bangladesh and open to remote work globally. I've collaborated with clients across different time zones and always ensure clear communication and reliable delivery.",
  },
  {
    question: "What types of projects do you build?",
    answer:
      "I build SaaS platforms, multivendor ecommerce systems, OTT streaming platforms, real-time applications, payment integration systems, bulk email validation tools, and custom APIs — essentially any complex web application.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A simple web app might take 2–4 weeks, while a full SaaS platform or ecommerce system could take 2–3 months. I'll provide a detailed timeline after understanding your requirements.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Absolutely. I offer post-launch support including bug fixes, feature additions, performance optimization, and server maintenance. We can set up a monthly retainer or handle it on a per-request basis.",
  },
  {
    question: "What is your development process?",
    answer:
      "I follow an agile approach: requirement gathering → architecture planning → iterative development with regular updates → testing → deployment. You'll have full visibility throughout the process with clean, well-documented code.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
      >
        <span className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
              {faq.answer}
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
      className="py-24 lg:py-32 bg-gray-50/80 dark:bg-gray-950/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about my work, process, and availability.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
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
