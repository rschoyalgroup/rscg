import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/QuoteContext";
import QuoteDrawer from "@/components/QuoteDrawer";
import FloatingCallCTA from "@/components/FloatingCallCTA";
import UtmCapture from "@/components/UtmCapture";
import { AnalyticsScripts, AnalyticsNoScript } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RS Choyal Group | Industrial Milling & Smart Flour Plants",
  description: "Global pioneers in smart digital stone milling systems, turnkey commercial flour processing plants, emery stones, and digital stone dressing tools since 1966.",
  // Google Search Console verification carried over from the previous website
  verification: {
    google: "FhZBXycUmaizW4Cgrz7vFGdrMhSb72dtkdTbxcFB_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnalyticsNoScript />
        <AnalyticsScripts />
        <QuoteProvider>
          {children}
          <QuoteDrawer />
          <FloatingCallCTA />
          <UtmCapture />
        </QuoteProvider>
      </body>
    </html>
  );
}
