import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { posts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building production web systems — payments, real-time, multi-tenant, and the messier parts of full-stack work.",
};

export default function WritingPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <header className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <p className="label-mono">02 — Writing</p>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.03]">
              Notes from inside
              <br className="hidden md:block" /> the build.
            </h1>
          </div>
          <p className="lg:col-span-5 text-base leading-relaxed text-foreground/80 max-w-xl lg:pt-3">
            Occasional writing on payments, real-time systems, multi-tenant
            data, and the rest of full-stack life. Published when there&apos;s
            something worth saying — not for streak counts.
          </p>
        </header>

        <div className="border-t border-border">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-10 border-b border-border py-10 lg:py-12 -mx-4 px-4 lg:-mx-6 lg:px-6 hover:bg-foreground/2 rounded-sm transition-colors"
            >
              <div className="lg:col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted mt-2">
                  {post.date}
                </p>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-snug">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/75 max-w-2xl">
                  {post.excerpt}
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-wrap lg:flex-col lg:items-end gap-3 lg:gap-2 lg:text-right">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {post.topic}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {post.readTime} read
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="hidden lg:block text-muted group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-1"
                />
              </div>
            </Link>
          ))}
        </div>

        <NewsletterForm />
      </div>
    </section>
  );
}
