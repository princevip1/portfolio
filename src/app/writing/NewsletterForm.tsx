"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <div className="mt-16 lg:mt-24 border-t border-border pt-10 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7">
        <p className="label-mono">Subscribe</p>
        <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight max-w-xl leading-snug">
          Get new pieces in your inbox. No schedule, no filler.
        </h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-5 flex flex-col sm:flex-row sm:items-end gap-4 lg:justify-end"
      >
        <div className="flex-1 sm:max-w-xs">
          <label htmlFor="newsletter-email" className="label-mono block mb-2">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full bg-transparent border-b border-border focus:border-foreground outline-none transition-colors pb-2 text-base placeholder:text-muted/70"
          />
        </div>
        <button
          type="submit"
          className={`group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
            done
              ? "bg-emerald-600 text-white"
              : "bg-foreground text-background hover:opacity-90"
          }`}
        >
          {done ? (
            <>
              <Check size={14} /> Subscribed
            </>
          ) : (
            <>
              Subscribe
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
