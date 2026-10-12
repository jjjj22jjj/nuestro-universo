import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Para mi negrita",
    short_name: "Mi negrita",
    description: "Un pequeño universo hecho para vos.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#060a1e",
    theme_color: "#060a1e",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}