"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "xprincemahmud@gmail.com",
    href: "mailto:xprincemahmud@gmail.com",
  },
  {
    label: "Phone",
    value: "+880 1797 328282",
    href: "tel:+8801797328282",
  },
  {
    label: "GitHub",
    value: "github.com/princevip1",
    href: "https://github.com/princevip1",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/devprincemahmud",
    href: "https://www.linkedin.com/in/devprincemahmud/",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-28 lg:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="label-mono">06 — Contact</p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.05]">
              Have a project
              <br /> in mind?
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
              Send a note with a little context about what you&apos;re
              building and the rough shape of the timeline. I reply within
              24 hours, almost always with a candid yes or no.
            </p>

            <div className="mt-10 border-t border-border">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group grid grid-cols-[88px_1fr_24px] items-center gap-4 py-4 border-b border-border hover:bg-foreground/2 transition-colors -mx-2 px-2 rounded-sm"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {c.label}
                  </span>
                  <span className="text-sm md:text-base text-foreground truncate">
                    {c.value}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted group-hover:text-foreground transition-colors justify-self-end"
                  />
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 lg:border-l lg:border-border lg:pl-16 xl:pl-20"
          >
            <p className="label-mono mb-8">Send a message</p>

            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Field id="name" label="Name" placeholder="Your name" required />
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="project-type" className="label-mono block mb-3">
                  Project type
                </label>
                <select
                  id="project-type"
                  required
                  defaultValue=""
                  className="select-caret w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors pb-3 pr-8 text-base text-foreground appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select one…
                  </option>
                  <option value="web-app">Web application</option>
                  <option value="saas">SaaS platform</option>
                  <option value="ecommerce">Ecommerce system</option>
                  <option value="api">API development</option>
                  <option value="real-time">Real-time system</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label-mono block mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about what you're building."
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors pb-3 text-base text-foreground placeholder:text-muted/70 resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    submitted
                      ? "bg-emerald-600 text-white"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check size={15} />
                      Message sent
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-mono block mb-3">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors pb-3 text-base text-foreground placeholder:text-muted/70"
      />
    </div>
  );
}
