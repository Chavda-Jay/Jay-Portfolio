import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "linear-gradient(135deg, #FF9900 0%, #E68A00 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#08090C",
          borderRadius: 8,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
          boxShadow: "0 2px 8px rgba(255, 153, 0, 0.4)",
        }}
      >
        JC
      </div>
    ),
    {
      ...size,
    }
  );
}
