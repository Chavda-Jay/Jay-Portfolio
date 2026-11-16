import { ImageResponse } from "next/og";

export const alt = "Jay Chavda - AI/ML Engineer & Generative AI Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#05070F",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow ambient background effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "400px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(47, 107, 255, 0.25)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.2)",
            filter: "blur(120px)",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #2F6BFF 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            JC
          </div>
          <span
            style={{
              color: "#8C97B5",
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "1px",
            }}
          >
            JAY CHAVDA · PORTFOLIO
          </span>
        </div>

        {/* Middle Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#E8ECF8",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            AI/ML Engineer &amp; <br />
            <span
              style={{
                background: "linear-gradient(135deg, #5B8CFF 0%, #8B5CF6 100%)",
                backgroundClip: "text",
                color: "#5B8CFF",
              }}
            >
              Generative AI Developer
            </span>
          </h1>

          <p
            style={{
              fontSize: "26px",
              color: "#8C97B5",
              maxWidth: "900px",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Building production LLM applications, FastAPI architectures, and
            intelligent full-stack systems.
          </p>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(16, 25, 53, 0.8)",
              border: "1px solid rgba(47, 107, 255, 0.4)",
              borderRadius: "100px",
              padding: "10px 22px",
              color: "#5B8CFF",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            FastAPI &amp; Python
          </div>
          <div
            style={{
              backgroundColor: "rgba(16, 25, 53, 0.8)",
              border: "1px solid rgba(139, 92, 246, 0.4)",
              borderRadius: "100px",
              padding: "10px 22px",
              color: "#A78BFA",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            LLMs &amp; Prompt Engineering
          </div>
          <div
            style={{
              backgroundColor: "rgba(16, 25, 53, 0.8)",
              border: "1px solid rgba(34, 211, 238, 0.4)",
              borderRadius: "100px",
              padding: "10px 22px",
              color: "#22D3EE",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            React &amp; Full-Stack
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
