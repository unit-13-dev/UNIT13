import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press",
});

export const metadata: Metadata = {
  title: "UNIT13 — Creative & Digital Collective",
  description:
    "UNIT13 is a creative collective crafting bold brands, immersive websites, and digital experiences that refuse to blend in.",
    icons: {
    icon: [`/unit13.png.png`],
    shortcut: [`/unit13.png.png`],
    apple: [`/unit13.png.png`]
  },
  keywords: [
    "UNIT13",
    "creative collective",
    "web design",
    "branding",
    "digital studio",
    "development",
  ],
  openGraph: {
    title: "UNIT13 — Creative & Digital Collective",
    description:
      "Bold brands, immersive websites, and digital experiences that refuse to blend in.",
    url: "https://linktr.ee/thisisunit13",
    siteName: "UNIT13",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${press.variable} font-sans bg-ink text-white antialiased selection:bg-brand selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
