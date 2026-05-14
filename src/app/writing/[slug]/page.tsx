import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Prose } from "@/components/Prose";
import ReadingProgress from "@/components/ReadingProgress";
import { getAdjacentPosts, getPostBySlug, posts } from "@/lib/writing";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: `${post.title} — Prince Mahmud`,
      description: post.excerpt,
      url: `/writing/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — Prince Mahmud`,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <article className="pt-32 md:pt-40 pb-24 lg:pb-32">
      <ReadingProgress />
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          All writing
        </Link>

        <header className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {post.topic}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {post.date}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {post.readTime} read
              </span>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.03]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-foreground/75 max-w-2xl">
              {post.excerpt}
            </p>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10 lg:pt-2">
            <p className="label-mono mb-5">By</p>
            <p className="text-sm font-medium">Prince Mahmud</p>
            <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
              Full-stack developer based in Dhaka, working on payments,
              real-time, and multi-tenant systems.
            </p>
            <Link
              href="/#about"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              About →
            </Link>
          </aside>
        </header>

        <section className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-3 hidden lg:block">
            <p className="label-mono sticky top-28">Essay</p>
          </div>
          <div className="lg:col-span-9">
            <Prose blocks={post.body} />
          </div>
        </section>

        <nav className="mt-24 lg:mt-32 border-t border-border pt-10 grid sm:grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={`/writing/${prev.slug}`}
              className="group block sm:text-left"
            >
              <p className="label-mono mb-3">Previous</p>
              <p className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/writing/${next.slug}`}
              className="group block sm:text-right"
            >
              <p className="label-mono mb-3">Next</p>
              <p className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4">
                {next.title} →
              </p>
            </Link>
          ) : (
            <div className="sm:text-right">
              <p className="label-mono mb-3">Next</p>
              <Link
                href="/writing"
                className="group inline-flex items-center gap-2 text-lg font-medium tracking-tight"
              >
                All writing
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </article>
  );
}
