import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/lib/work";

export const alt = "Case study — Prince Mahmud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return new ImageResponse(<div>Not found</div>, { ...size });
  }
  const index = projects.findIndex((p) => p.slug === slug) + 1;
  const indexLabel = String(index).padStart(2, "0");

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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-40px",
            bottom: "-180px",
            fontSize: "640px",
            fontWeight: 500,
            letterSpacing: "-0.06em",
            lineHeight: 0.8,
            color: "rgba(250,250,250,0.05)",
            display: "flex",
          }}
        >
          {indexLabel}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            color: "#a3a3a3",
            letterSpacing: "0.04em",
            zIndex: 1,
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
            {project.year} — Case study /{" "}
            <span style={{ color: "#fafafa" }}>{indexLabel}</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 1,
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: project.title.length > 30 ? "76px" : "92px",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a3a3a3",
              lineHeight: 1.4,
              maxWidth: "820px",
            }}
          >
            {project.tagline}
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
            zIndex: 1,
          }}
        >
          <span>{project.industry}</span>
          <span style={{ color: "#fafafa" }}>
            {project.stack.slice(0, 4).join(" · ")}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
