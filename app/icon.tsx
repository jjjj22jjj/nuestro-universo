import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
            top: 70,
            left: 80,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 16px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 120,
            right: 90,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 12px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 230,
            right: 60,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 10px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 130,
            left: 100,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 14px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 90,
            right: 110,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 16px #ffe49a",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 230,
            left: 70,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ffe49a",
            boxShadow: "0 0 10px #ffe49a",
          }}
        />

        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #fffbe8 0%, #ffe49a 60%, #d4a13f 100%)",
            boxShadow:
              "0 0 100px rgba(255, 228, 154, 0.7), 0 0 150px rgba(255, 228, 154, 0.4)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}