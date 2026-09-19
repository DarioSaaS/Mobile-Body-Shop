import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Mobile Dent, Scratch & Paint Repair in Mesa & Phoenix`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    "Mobile Body Shop brings professional panel painting, bumper repair, and scratch touch-ups directly to your home or office across Mesa, Phoenix, and the East Valley. Text a photo for an instant quote.",
  keywords: [
    "mobile dent repair",
    "mobile body shop",
    "panel painting Mesa",
    "bumper repair Phoenix",
    "scratch repair near me",
    "mobile auto body repair",
  ],
  openGraph: {
    title: `${siteConfig.businessName} | Mobile Dent, Scratch & Paint Repair`,
    description:
      "We come to you. Professional panel painting, bumper repair, and scratch touch-ups across the Phoenix metro area.",
    type: "website",
    locale: "en_US",
  },
  verification: {
    google: "mrkj1wAgyeIKgppQQ6zZ0OeZfJnMTQ_ManjBvp-8PPk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
