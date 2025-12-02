import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harong-habi.vercel.app"),
  title: "Harong-Habi | Building Smarter, Safer Filipino Homes",
  description:
    "Empowering Filipino families to build smarter, safer, and more affordable homes. We blend traditional Filipino craftsmanship with modern innovation for sustainable housing solutions.",
  keywords: [
    "Filipino homes",
    "home construction Philippines",
    "bahay kubo modern",
    "smart homes Philippines",
    "affordable housing",
    "sustainable homes",
  ],
  authors: [{ name: "Harong-Habi" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Harong-Habi | Building Smarter, Safer Filipino Homes",
    description:
      "Empowering Filipino families in building smarter, safer, and more affordable homes.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harong-Habi - Building Smarter, Safer Filipino Homes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${geistMono.variable} ${playfairDisplay.variable} bg-accent-foreground font-sans antialiased md:subpixel-antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
