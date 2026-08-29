import { Metadata } from "next";
import CategoriesSection from "@/components/categories/categories-section";
import ProductsSection from "@/components/products/product-section";
import { AboutSection } from "@/components/sections/about-section";
import WhyChooseUsSection from "@/components/sections/feature-section";
import PackagingSection from "@/components/sections/packaging-section";
import ProofOfExcellenceSections from "@/components/sections/proof-of-excellence-sections";
import { HeroSection } from "@/components/shared/hero/hero";

export const metadata: Metadata = {
  title: "Triad Global Trading | Premium Spices, Herbs & Agro Products",
  description:
    "Triad Global Trading is India's leading import export trading company. As premier global traders, we specialize in the export of premium spices, herbs, oilseeds, and agro products for global trade.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Triad Global Trading",
    description: "Triad Global Trading is India's leading import export trading company. As premier global traders, we specialize in the export of premium spices, herbs, oilseeds, and agro products for global trade.",
    url: "https://triadglobaltrading.com",
    logo: "https://triadglobaltrading.com/images/landing_page.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 79904 29441",
      contactType: "Customer Service",
      areaServed: "Global"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhomeshwar Plot, Jamnagar road",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      postalCode: "360006",
      addressCountry: "IN"
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <ProofOfExcellenceSections />
      <PackagingSection />
    </main>
  );
}
