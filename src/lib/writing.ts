export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; lang?: string; text: string }
  | { type: "hr" };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  topic: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "webhooks-that-actually-arrive",
    title: "Designing webhooks that actually arrive",
    excerpt:
      "Notes from a year of payment integrations: idempotency keys you can trust, retries that don't lie, and the dead-letter queue that pays for itself.",
    date: "Mar 12, 2026",
    readTime: "9 min",
    topic: "Payments",
    body: [
      {
        type: "p",
        text:
          "Webhooks are one of those things you ship in a sprint and pay for over years. The first version is always the same: a route that accepts JSON, runs some business logic, and returns 200. Six months later you discover the third-party retried a charge fourteen times, your worker queue is wedged on a poisoned message, and the audit log is missing two days.",
      },
      {
        type: "p",
        text:
          "Most of that pain comes from treating webhooks like HTTP requests. They aren't. They're durable messages dressed up in HTTP, and they want to be handled the way you'd handle anything from a real message queue.",
      },
      { type: "h2", text: "Trust nothing, especially the payload" },
      {
        type: "p",
        text:
          "Verify the signature before reading the body. Reject anything older than a few minutes (replay protection is free, just check the timestamp header). And treat the JSON as opaque until you've stored it — schema validation comes after you've durably captured what arrived.",
      },
      {
        type: "code",
        lang: "ts",
        text: `// 1. Verify signature with the raw body, not the parsed JSON
const signature = req.headers["x-signature"];
if (!verifyHmac(rawBody, signature, secret)) {
  return res.status(401).end();
}

// 2. Reject stale events (replay protection)
const sent = Number(req.headers["x-timestamp"]) * 1000;
if (Date.now() - sent > 5 * 60_000) {
  return res.status(401).end();
}

// 3. Persist the raw event before doing anything with it
await db.events.insert({ id: event.id, raw: rawBody, status: "pending" });
return res.status(200).end();`,
      },
      { type: "h2", text: "Acknowledge fast, process later" },
      {
        type: "p",
        text:
          "The webhook handler has one job: capture the event and tell the sender you've got it. Anything that touches business state — updating a subscription, sending a receipt, writing to the ledger — belongs in a background worker. If your 200 takes more than 200ms, you're going to retry under any kind of load.",
      },
      {
        type: "p",
        text:
          "This split also makes idempotency natural. Store the event id when you ingest, refuse to insert it twice. The worker pulls events by id and runs the actual logic. Same event arriving four times becomes one insert and three duplicate-key errors — exactly what you want.",
      },
      { type: "h2", text: "Idempotency is about the side effect, not the request" },
      {
        type: "p",
        text:
          "An idempotent endpoint isn't one that returns the same response twice. It's one whose side effects don't accumulate when called twice. There's a difference, and it bites when you start composing logic.",
      },
      {
        type: "p",
        text:
          "The pattern that's held up best for me: assign every meaningful side effect a deterministic key derived from the event, and let the database enforce uniqueness. Charge succeeded? Insert a row keyed on (event_id, account_id) before crediting the account. Refund? Same.",
      },
      {
        type: "quote",
        text:
          "If you can't replay the entire event stream against an empty database and get the same final state, your handlers aren't idempotent — they're just lucky.",
      },
      { type: "h2", text: "The dead-letter queue earns its keep" },
      {
        type: "p",
        text:
          "Eventually a webhook will arrive that your code can't handle. Bad schema, a state machine in a corner you missed, a downstream service that's down for hours. Don't let those events vanish into a retry storm and then expire. Move them to a dead-letter queue with the original payload, the exception, and the worker version.",
      },
      {
        type: "ul",
        items: [
          "Build a one-screen UI to inspect DLQ events. You will use it.",
          "Add a 'replay' button that pushes the event back onto the main queue.",
          "Log a metric per topic — DLQ depth should be a graph you check on Mondays.",
        ],
      },
      { type: "h2", text: "What I'd skip on the first pass" },
      {
        type: "p",
        text:
          "Fancy retry policies. The sender already retries. Your worker doesn't need exponential backoff for the first ninety days — it needs a clear failure path and a queue you can reason about. Add the sophistication when you have logs telling you what specifically is failing, not before.",
      },
      { type: "hr" },
      {
        type: "p",
        text:
          "None of this is novel. It's the kind of thing you internalize the second time a Stripe outage takes down your reconciliation worker at 3am and you spend the next morning replaying events by hand. Write it down the first time it bites you, and the version six months later will look almost the same.",
      },
    ],
  },
  {
    slug: "express-over-the-new-defaults",
    title: "Why I still pick Express over the new defaults",
    excerpt:
      "The unfashionable case for boring middleware. What Express buys you over Fastify, Hono, and Elysia once a project crosses a couple of years.",
    date: "Feb 04, 2026",
    readTime: "7 min",
    topic: "Backend",
    body: [
      {
        type: "p",
        text:
          "Every few months a new Node framework lands with a 2x-faster benchmark and a clever DX story. I read every one of them, build a small thing, and then keep starting new projects with Express. Here's why.",
      },
      { type: "h2", text: "Performance is rarely the bottleneck" },
      {
        type: "p",
        text:
          "The shape of a typical web request — talk to a database, talk to a cache, render JSON — spends 95% of its time in IO, not framework overhead. Saving 30 microseconds in your router gains you nothing if your Postgres query takes 12 milliseconds.",
      },
      {
        type: "p",
        text:
          "The benchmarks aren't lying — Fastify and Hono really are faster on synthetic workloads. They just aren't faster on workloads that look like business software, which is most of them.",
      },
      { type: "h2", text: "Boring composes well with time" },
      {
        type: "p",
        text:
          "Express's middleware contract is one function: (req, res, next). That's it. Every utility you'd want to write — auth, logging, rate limiting, request id, request validation — fits inside that signature without thinking. Every utility you'd want to import was written ten years ago and still works.",
      },
      {
        type: "p",
        text:
          "Newer frameworks have richer abstractions, which is great until you need to do something the abstraction doesn't anticipate. Then you're reading source, opening issues, and discovering that the maintainer is rewriting the routing internals next month.",
      },
      { type: "h3", text: "When I do reach for something else" },
      {
        type: "ul",
        items: [
          "High-volume edge functions where the cold-start budget is small — Hono is genuinely better.",
          "Greenfield projects on Bun where Elysia's type inference earns its keep.",
          "When the team is all on a single framework and consistency matters more than my preference.",
        ],
      },
      { type: "h2", text: "The hidden cost of novelty" },
      {
        type: "p",
        text:
          "Every dependency is a future migration. Express has been stable for so long that 'migrate off Express' is essentially never on a roadmap. That's a meaningful property when you're shipping something you intend to operate for five years.",
      },
      {
        type: "quote",
        text:
          "Choose technology you can keep choosing for as long as you'll be paid to maintain the thing you're building.",
      },
      { type: "h2", text: "The honest counterargument" },
      {
        type: "p",
        text:
          "Express's ecosystem isn't aging gracefully in every corner. Several core middleware packages are unmaintained, the types are inconsistent, and the async error handling story is still rougher than it needs to be. None of that is a dealbreaker for me, but I'm not going to pretend it doesn't exist.",
      },
      { type: "hr" },
      {
        type: "p",
        text:
          "Pick the boring tool until the cost of boring outweighs the cost of churn. For most of the work I do, that line is still a long way off.",
      },
    ],
  },
  {
    slug: "reconnect-handshake-nobody-writes-about",
    title: "The reconnect handshake nobody writes about",
    excerpt:
      "Building WebSocket clients that survive flaky networks — exponential backoff, server-side jitter, slow-start handshakes, and other things you wish you'd added on day one.",
    date: "Dec 18, 2025",
    readTime: "11 min",
    topic: "Real-time",
    body: [
      {
        type: "p",
        text:
          "Every WebSocket tutorial ends at on('message'). The hard part starts there. Networks drop, servers restart, certificates rotate, mobile clients background, ISPs do middlebox things you'll never fully understand. A real-time system survives all of that by being deliberate about how it reconnects, not by hoping it doesn't have to.",
      },
      { type: "h2", text: "Reconnect is a protocol, not a callback" },
      {
        type: "p",
        text:
          "The naive version is one line of code: socket.onclose = () => reconnect(). The first time a server restarts and a thousand clients all reconnect inside fifty milliseconds, you'll wish you'd treated reconnect as a small protocol with its own rules.",
      },
      {
        type: "ol",
        items: [
          "Wait a random initial delay before the first attempt — server-jittered, not client-jittered.",
          "On failure, exponentially back off with a cap (1s, 2s, 4s, 8s, 30s).",
          "On success, run a slow-start handshake before resuming normal traffic.",
          "Track reconnect attempts and abandon after a generous ceiling, surfacing the failure to the UI.",
        ],
      },
      { type: "h2", text: "Server-side jitter is the trick" },
      {
        type: "p",
        text:
          "Client-side random delays look fair but aren't — your worst-case is a few thousand clients picking similar timeouts. The cleaner pattern: the server sends a recommended reconnect window in its close frame, the client respects it. The server can spread that window deliberately based on how many clients it knows it just dropped.",
      },
      {
        type: "code",
        lang: "ts",
        text: `// Server: bias the recommended delay by load
const recommendedMs = 250 + Math.floor(Math.random() * 1750);
socket.close(1012, JSON.stringify({ reason: "restarting", retryAfter: recommendedMs }));

// Client: honour the recommendation when present
socket.onclose = (e) => {
  const payload = safeParse(e.reason);
  const delay = payload?.retryAfter ?? backoff();
  setTimeout(reconnect, delay);
};`,
      },
      { type: "h2", text: "Slow-start: don't trust a fresh socket" },
      {
        type: "p",
        text:
          "When a reconnected client comes back, it has a backlog: presence to resync, missed events to replay, subscriptions to re-establish. Doing all of that in parallel turns a reconnect into a thundering herd. Instead, define a handshake.",
      },
      {
        type: "ul",
        items: [
          "Client sends a 'resume' frame with its last-known event id.",
          "Server replies with a snapshot or a stream of missed events, capped at a sensible window.",
          "Only after the snapshot completes does the client send any user-initiated traffic.",
        ],
      },
      { type: "h2", text: "The metrics that catch trouble early" },
      {
        type: "p",
        text:
          "If you only watch one thing, watch median reconnect duration. It should be under a second for healthy users. When it crosses two, you've got a regression. When it crosses ten, you've got an incident, and the user has already noticed.",
      },
      {
        type: "quote",
        text:
          "A real-time system is only as good as its worst minute. Optimise for the worst minute.",
      },
      { type: "hr" },
      {
        type: "p",
        text:
          "Build the boring infrastructure first — backoff, jitter, slow-start, metrics — and the exciting features stop feeling fragile. You stop dreading the deploy window. The 3am pages get a lot less common.",
      },
    ],
  },
  {
    slug: "multi-tenant-postgres-without-regrets",
    title: "Multi-tenant Postgres without the regrets",
    excerpt:
      "Row-level security, schema-per-tenant, or separate databases — when each model breaks, and the migration plan you wish you'd have at the start.",
    date: "Oct 27, 2025",
    readTime: "13 min",
    topic: "Data",
    body: [
      {
        type: "p",
        text:
          "There are three honest answers to 'how do we make this multi-tenant?' and one dishonest one. The dishonest one is 'add a tenant_id column and we'll figure it out later.' The honest answers — row-level security, schema-per-tenant, database-per-tenant — each break in their own predictable ways. Picking is mostly about deciding which kind of pain you'd rather have.",
      },
      { type: "h2", text: "Shared schema with row-level security" },
      {
        type: "p",
        text:
          "Cheapest to operate, easiest to back up, hardest to get wrong twice. Postgres RLS does the heavy lifting if you commit to it — every query carries the current tenant in a session variable, and policies enforce isolation at the database. Performance is fine for surprisingly large customer counts.",
      },
      {
        type: "ul",
        items: [
          "Strong: cheap, simple operationally, easy to query across tenants for analytics.",
          "Weak: noisy-neighbour risk; a single big customer can slow every other tenant on the same indexes.",
          "Breaks when: you need per-tenant performance guarantees or per-region data residency.",
        ],
      },
      { type: "h2", text: "Schema per tenant" },
      {
        type: "p",
        text:
          "One Postgres database, many schemas. Stronger isolation, simpler mental model — every tenant lives in its own namespace, and the application sets the search_path. Easier to migrate one tenant at a time. Costs scale linearly with tenant count, but that's usually fine until you hit five-figure tenant counts.",
      },
      { type: "h2", text: "Database per tenant" },
      {
        type: "p",
        text:
          "Maximum isolation, maximum operational cost. Each tenant gets a full database, with its own backups, migrations, and connection pool. Worth it when compliance requires it, or when one tenant's failure must not touch any other tenant.",
      },
      {
        type: "quote",
        text:
          "If you're not sure you need database-per-tenant, you don't. Start with RLS and earn the upgrade when you have a real reason.",
      },
      { type: "h2", text: "The migration plan nobody writes" },
      {
        type: "p",
        text:
          "Whatever you pick on day one, you'll eventually move some tenants up the stack. Build the migration plan now, while you're early, even if you never run it. Two things make the move tractable:",
      },
      {
        type: "ol",
        items: [
          "Make every query carry the tenant id explicitly, even when RLS would enforce it. Future-you can grep for the tenant boundary.",
          "Version your schema migrations per tenant. Schema-per-tenant deployments mean tenants drift; track which version each one is on.",
        ],
      },
      { type: "hr" },
      {
        type: "p",
        text:
          "There's no model that doesn't break. There's just the model whose breakage you've planned for. Pick the one that lets you sleep at night, then write the runbook for the day it doesn't.",
      },
    ],
  },
  {
    slug: "shipping-under-a-name-you-respect",
    title: "Notes on shipping under a name you respect",
    excerpt:
      "On freelancing, scope creep, when to say no, and the practical art of telling a client their idea isn't quite the right one.",
    date: "Aug 09, 2025",
    readTime: "6 min",
    topic: "Career",
    body: [
      {
        type: "p",
        text:
          "Working under your own name changes the math. Every project becomes a small bet that whoever you ship for will say something kind to whoever asks them next. That bet pays out in years, not weeks, and the math punishes shortcuts.",
      },
      { type: "h2", text: "Saying no is the most underrated skill" },
      {
        type: "p",
        text:
          "Half of the projects I've turned down would have paid well. None of them would have paid well enough to make up for the version of me they'd have left behind. The clarity comes from knowing what you do not want to be known for.",
      },
      { type: "h2", text: "Scope creep is just a conversation you didn't have" },
      {
        type: "p",
        text:
          "Every change request is a free chance to renegotiate. Treat it that way. Not adversarially — most scope creep happens because the client's understanding of the problem deepened. That's a good thing. The bad thing is letting the new understanding ride for free on your old estimate.",
      },
      {
        type: "ul",
        items: [
          "Acknowledge the change in writing within a day.",
          "Restate what shifts as a result — timeline, cost, or tradeoff.",
          "Get a one-line approval before starting on it.",
        ],
      },
      { type: "h2", text: "Tell the truth, gently and early" },
      {
        type: "p",
        text:
          "If the project's drifting, the architecture's wrong, or the client's idea won't survive contact with reality, say so the day you notice. Not after the next milestone. Not in the post-mortem. The cost of telling the truth scales with how long you wait.",
      },
      {
        type: "quote",
        text:
          "Clients hire you to know things they don't. The honest answer is what they're paying for, even when it isn't what they want to hear.",
      },
      { type: "hr" },
      {
        type: "p",
        text:
          "Build a small body of work you're proud of, by people you respect, for problems that matter to them. That's the whole game. Everything else is overhead.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? posts[i - 1] : null,
    next: i < posts.length - 1 ? posts[i + 1] : null,
  };
}
