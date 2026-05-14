import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-40 md:pt-48 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="label-mono">404 — Not found</p>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.05]">
              The page you were
              <br /> looking for isn&apos;t here.
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-foreground/80 leading-relaxed">
              It may have moved, been renamed, or never existed in the first
              place. None of those are very satisfying answers — sorry about
              that.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Back home
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/work"
                className="text-sm text-foreground/80 hover:text-foreground link-underline"
              >
                See selected work →
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10 border-t border-border lg:border-t-0 pt-6 lg:pt-2">
            <p className="label-mono mb-5">Try instead</p>
            <ul className="space-y-3">
              {[
                { href: "/work", label: "Selected work" },
                { href: "/writing", label: "Writing" },
                { href: "/uses", label: "Uses — tools & setup" },
                { href: "/#contact", label: "Get in touch" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-sm text-foreground/85 hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight
                      size={13}
                      className="text-muted"
                      strokeWidth={1.5}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
