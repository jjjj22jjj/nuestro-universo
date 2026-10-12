import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Para mi negrita ❤️",
  description: "Un pequeño universo hecho para vos.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mi negrita",
  },
  openGraph: {
    title: "Para mi negrita ❤️",
    description: "Un pequeño universo hecho para vos.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060a1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${serif.variable} ${hand.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}