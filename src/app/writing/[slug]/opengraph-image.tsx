import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/writing";

export const alt = "Essay — Prince Mahmud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return new ImageResponse(<div>Not found</div>, { ...size });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            color: "#a3a3a3",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              backgroundColor: "#fafafa",
              display: "block",
            }}
          />
          <span style={{ color: "#fafafa", fontWeight: 500 }}>
            Prince Mahmud
          </span>
          <span
            style={{
              marginLeft: "auto",
              color: "#737373",
              fontSize: "16px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Essay / {post.topic}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: post.title.length > 45 ? "64px" : "84px",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#a3a3a3",
              lineHeight: 1.5,
              maxWidth: "880px",
            }}
          >
            {post.excerpt}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "16px",
            color: "#737373",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            borderTop: "1px solid #1f1f1f",
            paddingTop: "28px",
          }}
        >
          <span>{post.date}</span>
          <span style={{ color: "#fafafa" }}>{post.readTime} read</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
