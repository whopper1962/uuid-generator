import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { ThemeInit } from "../../.flowbite-react/init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hellouuid.com",
  ),
  title: "hellouuid.com",
  description:
    "Generate UUIDs instantly in all versions (v1, v3, v4, v5, v6, v7). Create time-based, random, or name-based UUIDs for databases, applications, and distributed systems.",
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
  openGraph: {
    type: "website",
    siteName: "hellouuid.com",
    title: "hellouuid.com",
    description:
      "Generate UUIDs instantly in all versions (v1, v3, v4, v5, v6, v7). Create time-based, random, or name-based UUIDs for databases, applications, and distributed systems.",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "UUID Generator",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "hellouuid.com",
    description:
      "Generate UUIDs instantly in all versions (v1, v3, v4, v5, v6, v7). Create time-based, random, or name-based UUIDs for databases, applications, and distributed systems.",
    images: ["/icon-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col font-google-sans-code`}
      >
        <ThemeInit />
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
