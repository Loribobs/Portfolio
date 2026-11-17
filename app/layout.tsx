import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loromi — Product Designer",
  description:
    "Loromi is a London-based product designer with six years of experience across fintech, B2B SaaS and emerging technology.",
};

export const viewport: Viewport = { themeColor: "#0D0D0D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
