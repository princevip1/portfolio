export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  status: "Shipped" | "Ongoing" | "Archived";
  industry: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string[];
  outcome: string[];
  highlights: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "ott-streaming-platform",
    title: "OTT Streaming API Platform",
    tagline: "A subscription-aware streaming backend that scales with the catalog.",
    year: "2024",
    role: "Lead Backend Engineer",
    status: "Shipped",
    industry: "Media & Entertainment",
    stack: ["Node.js", "Express", "MongoDB", "TypeScript", "Redis", "FFmpeg"],
    summary:
      "A streaming-grade backend for a regional OTT service: tiered subscriptions, role-based access, secure content delivery, and a content pipeline that survives messy catalog updates.",
    problem:
      "The team had outgrown a CMS-stitched MVP. Subscription edge cases, role conflicts, and an unreliable ingest pipeline were costing them weekend incidents and a slow editorial workflow.",
    approach: [
      "Modeled the subscription state machine explicitly — trial, active, grace, paused, expired — with idempotent transitions driven by webhooks.",
      "Separated identity from entitlement so the same user could carry household, regional, and promotional rights without conflict.",
      "Built a queued ingest pipeline with content versioning, transcoding hooks, and a staging tier the editorial team could preview before publish.",
    ],
    outcome: [
      "p95 API latency dropped from 480ms to 110ms on the entitlement check path.",
      "Catalog publish cycle moved from same-day to under 20 minutes end to end.",
      "Zero subscription-state incidents across the first three billing cycles after launch.",
    ],
    highlights: [
      { label: "p95 latency", value: "110ms" },
      { label: "Publish cycle", value: "−92%" },
      { label: "Concurrent streams", value: "12k" },
    ],
  },
  {
    slug: "multivendor-commerce",
    title: "Multivendor Commerce Marketplace",
    tagline: "Vendor consoles, fulfilment, and payouts — without the marketplace tax.",
    year: "2024",
    role: "Full-Stack Lead",
    status: "Shipped",
    industry: "Commerce",
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Stripe Connect", "Tailwind"],
    summary:
      "A multivendor marketplace owned by the operator, not the platform — vendor dashboards, split payments, order routing, and an admin surface designed for the people actually running the floor.",
    problem:
      "Existing marketplace SaaS took double-digit cuts of revenue and didn't allow the operator to shape the vendor experience. Custom logic for regional couriers and B2B vendors kept being rejected by the platform's roadmap.",
    approach: [
      "Built vendor isolation with row-level security and per-tenant configuration — same DB, hard tenant boundaries.",
      "Designed the order lifecycle around couriers, not the cart: split shipments, regional handoffs, partial returns.",
      "Wired Stripe Connect for split payments with per-vendor payout schedules and dispute tracking.",
    ],
    outcome: [
      "Replaced a 12% platform fee with a flat infra cost — ROI inside the first quarter.",
      "Onboarded 80+ vendors in the first three months without a dedicated success team.",
      "Order-to-fulfilment time down ~40% thanks to courier-aware routing.",
    ],
    highlights: [
      { label: "Vendors live", value: "80+" },
      { label: "Platform fee", value: "0%" },
      { label: "Fulfilment time", value: "−40%" },
    ],
  },
  {
    slug: "realtime-collaboration",
    title: "Real-Time Collaboration Suite",
    tagline: "Presence, chat, and video that don't fall over under load.",
    year: "2023",
    role: "Backend Engineer",
    status: "Shipped",
    industry: "Productivity",
    stack: ["Node.js", "WebSockets", "Redis Pub/Sub", "Mediasoup", "Postgres"],
    summary:
      "A real-time stack for a remote-first team product: presence, chat, document cursors, and selective-forwarding video — built to recover gracefully when networks misbehave.",
    problem:
      "The team's first version used a single Socket.IO server and a permissive reconnection model. As soon as one rooms list crossed a thousand users, reconnections caused thundering-herd cascades.",
    approach: [
      "Moved presence and pub/sub onto Redis with consistent hashing across WebSocket workers.",
      "Replaced naïve reconnect with exponential backoff, server-side jitter, and a slow-start handshake.",
      "Picked Mediasoup over a full mesh — SFU gives quality control room and survives bandwidth dips.",
    ],
    outcome: [
      "Survived a 6x usage spike during a product launch with no operator intervention.",
      "Median reconnect time after network drop fell from 8.4s to under 900ms.",
      "Video bitrates adapt cleanly to packet loss above 5% without dropping participants.",
    ],
    highlights: [
      { label: "Reconnect (p50)", value: "<1s" },
      { label: "Capacity factor", value: "6x" },
      { label: "Packet loss tolerated", value: "5%+" },
    ],
  },
  {
    slug: "saas-billing-platform",
    title: "SaaS Billing & Subscription Platform",
    tagline: "Multi-tenant billing engineered for messy real-world plans.",
    year: "2023",
    role: "Full-Stack Lead",
    status: "Ongoing",
    industry: "B2B SaaS",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Temporal", "TypeScript"],
    summary:
      "A subscription engine for a B2B SaaS handling annual prepay, mid-cycle upgrades, custom enterprise terms, and the inevitable usage-based add-on. Built as a service, used by every other surface.",
    problem:
      "Sales was selling deals that finance couldn't reconcile and engineering couldn't implement — coupons stacking with discounts stacking with usage tiers, all with different anchor dates.",
    approach: [
      "Modeled billing as a state machine over a ledger — every change emits an entry, every invoice rebuilds from the ledger.",
      "Ran cycle math inside Temporal workflows for idempotency and replayability across long-running renewals.",
      "Built a sandbox simulator so sales could price a deal and finance could review the projected invoices before signature.",
    ],
    outcome: [
      "Reduced manual invoice corrections from 60+ per month to fewer than 3.",
      "Cut deal-to-billing time from 6 days (legal + finance + ops) to under 24 hours.",
      "Audit-grade trail for every charge — finance can answer customer questions without paging engineering.",
    ],
    highlights: [
      { label: "Manual fixes", value: "−95%" },
      { label: "Deal → billing", value: "<24h" },
      { label: "Audit completeness", value: "100%" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}
