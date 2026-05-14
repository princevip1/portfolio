"use client";

import { motion } from "framer-motion";

const expertise = [
  { title: "SaaS & multi-tenant platforms", note: "Billing, roles, isolation" },
  { title: "Multivendor commerce", note: "Vendor consoles, fulfilment, payouts" },
  { title: "OTT streaming systems", note: "DRM, subscriptions, content APIs" },
  { title: "Real-time applications", note: "WebSockets, video, presence" },
  { title: "Payment infrastructure", note: "Stripe, regional gateways, webhooks" },
  { title: "Email & SMTP architecture", note: "Deliverability, validation, queues" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-28 lg:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="label-mono">01 — About</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.025em] leading-[1.05]">
              I build for the
              <br className="hidden md:block" /> long arc of a product.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 lg:pt-2"
          >
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/85 max-w-2xl">
              <p>
                I&apos;m a full-stack web developer based in Bangladesh,
                focused on production-grade systems where complexity is the
                norm — subscription billing, real-time state, multi-region
                payments, content pipelines.
              </p>
              <p>
                On the backend I work primarily in Node.js with Express, with
                MongoDB or Postgres depending on what the data wants. On the
                frontend, React and Next.js with TypeScript end to end. I
                prefer Express over Laravel for the freedom it gives in
                shaping a system from first principles.
              </p>
              <p>
                Open to remote engagements globally. I bring clean
                architecture, honest documentation, and a strong sense for
                what to{" "}
                <em className="not-italic underline underline-offset-4 decoration-foreground/30">
                  not
                </em>{" "}
                build.
              </p>
            </div>

            <div className="mt-14 border-t border-border">
              <p className="label-mono mt-6 mb-6">Selected expertise</p>
              <ul className="grid sm:grid-cols-2 gap-x-10">
                {expertise.map((e, i) => {
                  const isLast = i === expertise.length - 1;
                  const isSecondLast = i === expertise.length - 2;
                  return (
                  <li
                    key={e.title}
                    className={[
                      "flex items-start gap-4 py-4 border-b border-border",
                      isLast ? "border-b-0" : "",
                      isSecondLast ? "sm:border-b-0" : "",
                    ].join(" ")}
                  >
                    <span className="font-mono text-[11px] text-muted pt-1.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {e.title}
                      </p>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {e.note}
                      </p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
