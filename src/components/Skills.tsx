"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", since: "2021" },
      { name: "React.js", since: "2020" },
      { name: "Next.js", since: "2021" },
      { name: "Tailwind CSS", since: "2021" },
      { name: "React Native (Expo)", since: "2023" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", since: "2019" },
      { name: "Express.js", since: "2019" },
      { name: "PostgreSQL", since: "2020" },
      { name: "MongoDB / Mongoose", since: "2019" },
      { name: "MySQL", since: "2018" },
      { name: "REST · GraphQL", since: "2020" },
      { name: "PHP · Laravel", since: "2018" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Bull / Redis queues", since: "2021" },
      { name: "SMTP & deliverability", since: "2021" },
      { name: "Payment gateways", since: "2020" },
      { name: "Linux (CentOS, Debian)", since: "2019" },
      { name: "Git / GitHub Actions", since: "2019" },
      { name: "System architecture", since: "—" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-28 lg:py-32 border-t border-border bg-subtle/40"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-14 lg:mb-16">
          <div className="lg:col-span-5">
            <p className="label-mono">02 — Stack</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.025em] leading-[1.05]">
              Tools I reach for,
              <br className="hidden md:block" /> and why.
            </h2>
          </div>
          <p className="lg:col-span-7 text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl lg:pt-3">
            A short, deliberate stack picked over years of shipping. Nothing
            here is fashionable for its own sake — each tool earns its place
            by holding up in production, under load, with real users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-border">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
              className={[
                "py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0",
                gi !== 0 ? "md:border-l border-border" : "",
                gi !== 0 ? "border-t md:border-t-0" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-sm font-medium tracking-wide">
                  {g.label}
                </h3>
                <span className="font-mono text-[10px] text-muted tracking-wider">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <ul>
                {g.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between py-3 border-b border-border/70 last:border-b-0"
                  >
                    <span className="text-sm">{item.name}</span>
                    <span className="font-mono text-[10px] text-muted tracking-wider">
                      {item.since}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
