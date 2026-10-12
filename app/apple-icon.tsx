import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#060a1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 25,
            left: 28,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 8px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 42,
            right: 32,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 6px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 46,
            left: 35,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 6px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 38,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 8px #ffe49a",
          }}
        />

        <div
          style={{
            width: 92,
            height: 92,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #fffbe8 0%, #ffe49a 60%, #d4a13f 100%)",
            boxShadow:
              "0 0 35px rgba(255, 228, 154, 0.7), 0 0 55px rgba(255, 228, 154, 0.4)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}