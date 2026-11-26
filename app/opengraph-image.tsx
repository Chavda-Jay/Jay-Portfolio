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
          backgroundColor: "#08090C",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow ambient background effects in signature Amber */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "350px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "rgba(255, 153, 0, 0.18)",
            filter: "blur(130px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "rgba(255, 153, 0, 0.12)",
            filter: "blur(140px)",
          }}
        />

        {/* Top Header: Logo + Brand Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #FF9900 0%, #E68A00 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#08090C",
                fontSize: "26px",
                fontWeight: 800,
                boxShadow: "0 4px 20px rgba(255, 153, 0, 0.35)",
              }}
            >
              JC
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "24px",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                }}
              >
                JAY CHAVDA
              </span>
              <span
                style={{
                  color: "#FF9900",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "monospace",
                  letterSpacing: "1.5px",
                }}
              >
                AI/ML &amp; GENERATIVE AI ENGINEER
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              color: "#34D399",
              fontSize: "14px",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            Available for Opportunities
          </div>
        </div>

        {/* Middle Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-1.8px",
              margin: 0,
            }}
          >
            Building AI That Works in the <br />
            <span
              style={{
                color: "#FF9900",
              }}
            >
              Real World.
            </span>
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "880px",
            }}
          >
            Specializing in Generative AI, RAG Systems, FastAPI Microservices, and
            Production LLM Applications.
          </p>
        </div>

        {/* Bottom Feature Badges & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["RAG & LLMs", "FastAPI & Python", "ChromaDB", "React.js", "Docker"].map(
              (pill, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    color: "#E2E8F0",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  {pill}
                </div>
              )
            )}
          </div>

          <span
            style={{
              color: "#FF9900",
              fontSize: "16px",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            chavdajay510@gmail.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
