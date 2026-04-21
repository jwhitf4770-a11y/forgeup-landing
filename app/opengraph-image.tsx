import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ForgeUp — Iron sharpens iron";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #0a0a0b 0%, #1a1a20 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
            background: "linear-gradient(135deg, #ff6b35 0%, #ff6b35 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ForgeUp
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#b0b0b0",
            marginBottom: 30,
            lineHeight: 1.4,
          }}
        >
          As iron sharpens iron.
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#808080",
            maxWidth: 800,
          }}
        >
          Milo builds your strength program, then reshapes it every time you talk to him.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
