import { Metadata } from "next";
import CategoriesSection from "@/components/categories/categories-section";
import ProductsSection from "@/components/products/product-section";
import { AboutSection } from "@/components/sections/about-section";
import WhyChooseUsSection from "@/components/sections/feature-section";
import PackagingSection from "@/components/sections/packaging-section";
import ProofOfExcellenceSections from "@/components/sections/proof-of-excellence-sections";
import { HeroSection } from "@/components/shared/hero/hero";

export const metadata: Metadata = {
  title: "Triad Global Trading | Premium Indian Spices, Herbs & Agro Products Exporter",
  description:
    "Leading Indian merchant exporter of whole and ground spices, oilseeds, culinary herbs, and agro commodities. Premium quality, customized packaging, and global export compliance.",
  alternates: {
    canonical: "https://triadglobaltrading.com",
  },
};

export default function Home() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://triadglobaltrading.com/#webpage",
        url: "https://triadglobaltrading.com",
        name: "Triad Global Trading | Premium Indian Spices, Herbs & Agro Products",
        description:
          "Triad Global Trading is India's leading merchant exporter specializing in whole & ground spices, oilseeds, culinary herbs, and agro commodities for global trade.",
        isPartOf: {
          "@id": "https://triadglobaltrading.com/#website",
        },
        about: {
          "@id": "https://triadglobaltrading.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://triadglobaltrading.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What products does Triad Global Trading export from India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Triad Global Trading exports premium Indian spices (Red Chilli, Turmeric, Cumin, Coriander, Fennel, Cardamom), culinary herbs, certified oilseeds (Sesame, Sunflower, Mustard), millets, grains, and dehydrated onion & garlic products worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Triad Global Trading located and which shipping ports are used?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Triad Global Trading is headquartered in Rajkot, Gujarat, India. Shipments are dispatched through major Indian deep-water sea ports including Mundra Port, Kandla Port, and Pipavav Port.",
            },
          },
          {
            "@type": "Question",
            name: "What quality standards and export certifications are followed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All agro export batches strictly comply with APEDA (Agricultural and Processed Food Products Export Development Authority), Spices Board of India, and FSSAI standards, with comprehensive laboratory testing for purity, moisture, and microbial levels.",
            },
          },
          {
            "@type": "Question",
            name: "What packaging and private labeling options are available for bulk orders?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Triad Global Trading provides custom packaging including 25kg/50kg PP bags, multi-wall paper bags, jute bags, vacuum packaging, and private-label retail packaging tailored to international buyer specifications.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Minimum Order Quantity (MOQ) and shipping terms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard export orders are fulfilled as 20ft (FCL) or 40ft (FCL) container loads, with flexible mixed-commodity shipments available under FOB, CIF, or CFR terms.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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
