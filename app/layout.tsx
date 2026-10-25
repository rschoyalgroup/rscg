import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/QuoteContext";
import QuoteDrawer from "@/components/QuoteDrawer";
import FloatingCallCTA from "@/components/FloatingCallCTA";
import UtmCapture from "@/components/UtmCapture";

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
