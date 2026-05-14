import { ImageResponse } from "next/og";

export const alt = "Prince Mahmud — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
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
            letterSpacing: "0.04em",
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
          <span style={{ marginLeft: "auto", color: "#737373", fontSize: "16px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Portfolio — 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "120px",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Prince Mahmud.</span>
            <span style={{ color: "#a3a3a3" }}>Full-stack developer.</span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a3a3a3",
              maxWidth: "880px",
              lineHeight: 1.4,
              marginTop: "12px",
            }}
          >
            Building durable web systems — SaaS, payments, real-time, and OTT
            infrastructure with React, Next.js, and Node.js.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "18px",
            color: "#737373",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            borderTop: "1px solid #1f1f1f",
            paddingTop: "28px",
          }}
        >
          <span>Dhaka, BD — UTC+6</span>
          <span style={{ color: "#fafafa" }}>princemahmud.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
