import { GoogleAnalytics } from '@next/third-parties/google';
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
    default: "Triad Global Trading | Premium Spices, Herbs & Agro Products Exporter",
    template: "%s | Triad Global Trading",
  },
  description:
    "Triad Global Trading is a premier Indian merchant exporter and wholesale supplier of high-quality spices, herbs, oilseeds, millets, and agro products for global B2B trade.",
  keywords: [
    "Triad Global Trading",
    "Indian spices exporter",
    "spices export from India",
    "wholesale spices supplier",
    "bulk agro commodities",
    "red chilli exporter",
    "cumin seeds export India",
    "turmeric powder wholesale",
    "coriander seeds supplier",
    "sesame seeds exporter",
    "culinary herbs export",
    "millets and grains supplier",
    "dehydrated onion garlic",
    "Indian agro traders",
    "Mundra port export",
    "APEDA certified exporter",
    "Spices Board India",
    "Rajkot Gujarat spice trading",
  ],
  authors: [{ name: "Triad Global Trading", url: "https://triadglobaltrading.com" }],
  creator: "Triad Global Trading",
  publisher: "Triad Global Trading",
  category: "Agro Commodities & Global Trade",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_IN"],
    url: "https://triadglobaltrading.com",
    title: "Triad Global Trading | Premium Indian Spices & Agro Products Exporter",
    description:
      "Premier Indian import-export company specializing in wholesale spices, culinary herbs, oilseeds, and agro commodities for the worldwide market.",
    siteName: "Triad Global Trading",
    images: [
      {
        url: "/images/landing_page.jpg",
        width: 1200,
        height: 630,
        alt: "Triad Global Trading - Premium Agro Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triad Global Trading | Premium Spices & Agro Products Exporter",
    description:
      "Premier Indian merchant exporter specializing in high-grade spices, seeds, herbs, and agro commodities for global B2B trade.",
    images: ["/images/landing_page.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "WholesaleStore"],
      "@id": "https://triadglobaltrading.com/#organization",
      name: "Triad Global Trading",
      alternateName: "Triad Global",
      url: "https://triadglobaltrading.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://triadglobaltrading.com/#logo",
        url: "https://triadglobaltrading.com/triad_global_trading_logo_v8.png",
        caption: "Triad Global Trading Logo",
      },
      image: "https://triadglobaltrading.com/images/landing_page.jpg",
      description:
        "Triad Global Trading is a premier Indian merchant exporter and wholesale supplier of high-grade agro commodities, Indian spices, culinary herbs, oilseeds, millets, and dehydrated products.",
      email: "info@triadglobaltrading.com",
      telephone: "+91 79904 29441",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bhomeshwar Plot, Jamnagar road",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360006",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.3168",
        longitude: "70.7828",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 79904 29441",
          contactType: "sales",
          email: "info@triadglobaltrading.com",
          areaServed: ["Worldwide", "US", "GB", "AE", "SA", "DE", "SG", "AU"],
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
      ],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
      knowsAbout: [
        "Indian Spices Export",
        "Whole and Ground Spices",
        "Oilseeds (Sesame, Mustard, Sunflower)",
        "Herbs and Leaves",
        "Millets and Grains",
        "Dehydrated Onions and Garlic",
        "APEDA Standards",
        "FSSAI Compliance",
        "Custom B2B Packaging & Private Labeling",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://triadglobaltrading.com/#website",
      url: "https://triadglobaltrading.com",
      name: "Triad Global Trading",
      description: "Indian Agro Commodities and Spices Wholesale Exporter",
      publisher: {
        "@id": "https://triadglobaltrading.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <WhatsAppButton />
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </html>
  );
}
