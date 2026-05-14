import type { Metadata } from "next";
import NewsletterForm from "./NewsletterForm";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building production web systems — payments, real-time, multi-tenant, and the messier parts of full-stack work.",
};

const posts: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topic: string;
}[] = [
  {
    title: "Designing webhooks that actually arrive",
    excerpt:
      "Notes from a year of payment integrations: idempotency keys you can trust, retries that don't lie, and the dead-letter queue that pays for itself.",
    date: "Mar 12, 2026",
    readTime: "9 min",
    topic: "Payments",
  },
  {
    title: "Why I still pick Express over the new defaults",
    excerpt:
      "The unfashionable case for boring middleware. What Express buys you over Fastify, Hono, and Elysia once a project crosses a couple of years.",
    date: "Feb 04, 2026",
    readTime: "7 min",
    topic: "Backend",
  },
  {
    title: "The reconnect handshake nobody writes about",
    excerpt:
      "Building WebSocket clients that survive flaky networks — exponential backoff, server-side jitter, slow-start handshakes, and other things you wish you'd added on day one.",
    date: "Dec 18, 2025",
    readTime: "11 min",
    topic: "Real-time",
  },
  {
    title: "Multi-tenant Postgres without the regrets",
    excerpt:
      "Row-level security, schema-per-tenant, or separate databases — when each model breaks, and the migration plan you wish you'd have at the start.",
    date: "Oct 27, 2025",
    readTime: "13 min",
    topic: "Data",
  },
  {
    title: "Notes on shipping under a name you respect",
    excerpt:
      "On freelancing, scope creep, when to say no, and the practical art of telling a client their idea isn't quite the right one.",
    date: "Aug 09, 2025",
    readTime: "6 min",
    topic: "Career",
  },
];

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
            <article
              key={post.title}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-10 border-b border-border py-10 lg:py-12"
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
              </div>
            </article>
          ))}
        </div>

        <NewsletterForm />
      </div>
    </section>
  );
}
