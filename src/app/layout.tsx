import ClarityAnalytics from "@/components/ClarityAnalytics";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import WhatsAppButton from "@/components/shared/whatsapp";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triadglobaltrading.com"),
  title: {
    default: "Triad Global Trading | Premium Spices, Herbs & Agro Products",
    template: "%s | Triad Global Trading",
  },
  description:
    "Triad Global Trading is a premier Indian import export company and global traders specializing in high-quality spices, herbs, oilseeds, and agro products for the global trade market.",
  keywords: [
    "import",
    "export",
    "trading",
    "triad",
    "global",
    "trade",
    "traders",
    "indian import export",
    "Triad Global Trading",
    "spices exporter",
    "agro products",
    "wholesale spices",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://triadglobaltrading.com",
    title: "Triad Global Trading | Premium Spices & Agro Products",
    description:
      "Premier Indian import export company and global traders specializing in high-quality spices, herbs, and agro products.",
    siteName: "Triad Global Trading",
    images: [
      {
        url: "/images/landing_page.jpg",
        width: 1200,
        height: 630,
        alt: "Triad Global Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triad Global Trading",
    description:
      "Premier import-export company based in India, specializing in high-quality spices, herbs, and agro products.",
    images: ["/images/landing_page.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <WhatsAppButton />
        <Footer />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
