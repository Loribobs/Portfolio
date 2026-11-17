import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/700.css";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Loromi — Product Designer",
  description:
    "Loromi is a London-based product designer with six years of experience across fintech, B2B SaaS and emerging technology.",
};

export const viewport: Viewport = { themeColor: "#0D0D0D" };

// Runs before the first paint: marks JS as available (for scroll reveals) and, on the
// home page, arms the intro curtain. If the app hasn't started the intro within 2.5s
// (slow connection), it's dropped so nobody stares at a blank curtain.
const prePaint = `(function(){var d=document.documentElement;d.classList.add('js');try{if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('intro');setTimeout(function(){if(!d.classList.contains('intro-run'))d.classList.remove('intro')},2500)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
      </head>
      <body>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
