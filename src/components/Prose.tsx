import type { Block } from "@/lib/writing";

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 max-w-2xl">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p
                key={i}
                className="text-base md:text-lg leading-[1.75] text-foreground/85"
              >
                {b.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="pt-6 text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-snug"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="pt-4 text-xl md:text-2xl font-medium tracking-tight"
              >
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-0">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-4 text-base md:text-lg leading-[1.75] text-foreground/85"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[11px] text-muted pt-[0.55em] shrink-0 w-5"
                    >
                      —
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5 pl-0">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-4 text-base md:text-lg leading-[1.75] text-foreground/85"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[11px] text-muted pt-[0.55em] shrink-0 w-5"
                    >
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-foreground pl-6 my-4 text-lg md:text-xl italic leading-[1.6] text-foreground/90"
              >
                {b.text}
                {b.cite && (
                  <footer className="mt-3 not-italic font-mono text-[11px] uppercase tracking-wider text-muted">
                    — {b.cite}
                  </footer>
                )}
              </blockquote>
            );
          case "code":
            return (
              <div
                key={i}
                className="my-4 rounded-lg border border-border bg-subtle overflow-hidden"
              >
                {b.lang && (
                  <div className="flex items-center justify-between px-5 py-2.5 border-b border-border">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {b.lang}
                    </span>
                  </div>
                )}
                <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-[1.7] font-mono text-foreground/90">
                  <code>{b.text}</code>
                </pre>
              </div>
            );
          case "hr":
            return (
              <div
                key={i}
                aria-hidden="true"
                className="my-10 flex items-center justify-center gap-2 text-muted"
              >
                <span className="w-1 h-1 rounded-full bg-muted" />
                <span className="w-1 h-1 rounded-full bg-muted" />
                <span className="w-1 h-1 rounded-full bg-muted" />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
