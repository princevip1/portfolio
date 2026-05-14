import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Hardware, editor setup, services, and the day-to-day tools I rely on.",
};

const groups: { label: string; items: { name: string; note: string }[] }[] = [
  {
    label: "Hardware",
    items: [
      { name: "MacBook Pro 14″ — M3 Pro, 36 GB", note: "Daily driver" },
      { name: "LG UltraFine 27UL850 4K", note: "External display" },
      { name: "Keychron K3 Pro (low-profile brown)", note: "Mechanical keyboard" },
      { name: "Logitech MX Master 3S", note: "Pointer" },
      { name: "Sennheiser HD 6XX", note: "Headphones for deep work" },
    ],
  },
  {
    label: "Editor & shell",
    items: [
      { name: "VS Code", note: "With Vim mode, ESLint, GitLens" },
      { name: "Geist Mono", note: "Editor font, ligatures off" },
      { name: "iTerm2 + zsh", note: "Powerlevel10k, fzf, ripgrep" },
      { name: "Tmux", note: "Long-running sessions per project" },
      { name: "Claude Code", note: "Daily pair, mostly for triage" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js (App Router)", note: "Default for product work" },
      { name: "TypeScript", note: "End-to-end, strict mode" },
      { name: "Tailwind CSS", note: "With a thin design-tokens layer" },
      { name: "Framer Motion", note: "Used sparingly, on purpose" },
      { name: "Radix UI / shadcn", note: "When primitives are needed" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js + Express", note: "Preferred over Laravel for new work" },
      { name: "PostgreSQL", note: "When the data has shape" },
      { name: "MongoDB", note: "When it doesn't" },
      { name: "Redis", note: "Caching, pub/sub, queues" },
      { name: "BullMQ", note: "Background jobs I trust" },
      { name: "Prisma / Drizzle", note: "Depending on the project age" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Vercel", note: "For Next.js front of house" },
      { name: "Hetzner / DigitalOcean", note: "For Node services" },
      { name: "Caddy", note: "Reverse proxy, HTTPS by default" },
      { name: "GitHub Actions", note: "CI for tests, lint, deploys" },
      { name: "Sentry", note: "Errors I actually triage" },
      { name: "Better Stack", note: "Logs, uptime" },
    ],
  },
  {
    label: "Services I pay for",
    items: [
      { name: "Linear", note: "Issue tracking" },
      { name: "1Password", note: "Secrets" },
      { name: "Cron-job.org", note: "External scheduler" },
      { name: "Postmark", note: "Transactional email" },
      { name: "Cloudflare", note: "DNS, R2, image proxy" },
    ],
  },
];

export default function UsesPage() {
  return (
    <section className="pt-36 md:pt-44 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <header className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <p className="label-mono">03 — Uses</p>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.025em] leading-[1.03]">
              The tools behind the work.
            </h1>
          </div>
          <p className="lg:col-span-5 text-base leading-relaxed text-foreground/80 max-w-xl lg:pt-3">
            People ask, so here it is — the hardware, editor, services, and
            quiet utilities that make up a regular working day. Updated when
            something actually changes, not when the affiliate links pay
            better.
          </p>
        </header>

        <div className="space-y-20 lg:space-y-24">
          {groups.map((g, gi) => (
            <div key={g.label} className="grid lg:grid-cols-12 gap-10 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {g.label}
                  </h2>
                </div>
              </div>
              <ul className="lg:col-span-8 border-t border-border">
                {g.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-8 items-baseline py-4 border-b border-border"
                  >
                    <span className="text-base">{item.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 lg:mt-32 border-t border-border pt-10">
          <p className="text-sm text-muted max-w-xl">
            Inspired by{" "}
            <a
              href="https://uses.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              uses.tech
            </a>{" "}
            — last reviewed{" "}
            <span className="font-mono text-foreground">May 2026</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
