"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, Rss } from "lucide-react";

const sitemap = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "Uses", href: "/uses" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-foreground" />
              Prince Mahmud
            </Link>
            <p className="mt-5 text-sm md:text-base text-foreground/75 leading-relaxed max-w-sm">
              Full-stack developer based in Dhaka, working with teams and
              founders around the world.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available for new work — Q3 2026
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="label-mono mb-5">Sitemap</p>
            <ul className="space-y-3">
              {sitemap.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="label-mono mb-5">Elsewhere</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:xprincemahmud@gmail.com"
                  className="inline-flex items-center gap-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail size={14} strokeWidth={1.5} />
                  xprincemahmud@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/princevip1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Github size={14} strokeWidth={1.5} />
                  github.com/princevip1
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devprincemahmud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Linkedin size={14} strokeWidth={1.5} />
                  linkedin.com/in/devprincemahmud
                </a>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Rss size={14} strokeWidth={1.5} />
                  RSS feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 lg:mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-muted tracking-wider uppercase">
            © 2026 Prince Mahmud — All rights reserved
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
