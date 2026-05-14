import { posts, type Block } from "@/lib/writing";

const siteUrl = "https://princemahmud.dev";
const siteTitle = "Prince Mahmud — Writing";
const siteDescription =
  "Notes on building production web systems — payments, real-time, multi-tenant, and the messier parts of full-stack work.";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function blockToText(b: Block): string {
  switch (b.type) {
    case "p":
    case "h2":
    case "h3":
      return b.text;
    case "ul":
    case "ol":
      return b.items.join(" — ");
    case "quote":
      return `“${b.text}”${b.cite ? ` — ${b.cite}` : ""}`;
    case "code":
      return b.text;
    case "hr":
      return "";
  }
}

function postToHtml(body: Block[]): string {
  return body
    .map((b) => {
      switch (b.type) {
        case "p":
          return `<p>${escapeXml(b.text)}</p>`;
        case "h2":
          return `<h2>${escapeXml(b.text)}</h2>`;
        case "h3":
          return `<h3>${escapeXml(b.text)}</h3>`;
        case "ul":
          return `<ul>${b.items.map((i) => `<li>${escapeXml(i)}</li>`).join("")}</ul>`;
        case "ol":
          return `<ol>${b.items.map((i) => `<li>${escapeXml(i)}</li>`).join("")}</ol>`;
        case "quote":
          return `<blockquote><p>${escapeXml(b.text)}</p>${
            b.cite ? `<footer>— ${escapeXml(b.cite)}</footer>` : ""
          }</blockquote>`;
        case "code":
          return `<pre><code>${escapeXml(b.text)}</code></pre>`;
        case "hr":
          return "<hr/>";
      }
    })
    .join("\n");
}

export async function GET() {
  const lastBuildDate = new Date().toUTCString();
  const items = posts
    .map((post) => {
      const link = `${siteUrl}/writing/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const description = post.body.map(blockToText).filter(Boolean).join("\n\n").slice(0, 400) + "…";
      const html = postToHtml(post.body);
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.topic)}</category>
      <description>${escapeXml(description)}</description>
      <content:encoded><![CDATA[${html}]]></content:encoded>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${siteUrl}/writing</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-US</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
