import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Policy & Export Standards | Triad Global Trading",
  description:
    "Strict food safety, APEDA, Spices Board of India, and FSSAI compliance. Comprehensive laboratory testing and batch quality assurance for Indian agro commodity exports.",
  keywords: [
    "quality policy",
    "export standards spices",
    "APEDA certified exporter",
    "Spices Board compliance",
    "FSSAI food safety",
    "Triad Global Trading quality control",
    "phytosanitary certification",
  ],
  alternates: {
    canonical: "https://triadglobaltrading.com/quality-policy",
  },
  openGraph: {
    title: "Quality Policy & Export Standards | Triad Global Trading",
    description:
      "Our commitment to international food safety benchmarks, batch laboratory testing, and export-grade purity.",
    url: "https://triadglobaltrading.com/quality-policy",
    images: ["/images/landing_page.jpg"],
  },
};

const qualityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://triadglobaltrading.com/quality-policy#webpage",
      url: "https://triadglobaltrading.com/quality-policy",
      name: "Quality Policy & Export Standards",
      description:
        "Overview of quality control measures and export compliance at Triad Global Trading.",
      isPartOf: {
        "@id": "https://triadglobaltrading.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://triadglobaltrading.com/quality-policy#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://triadglobaltrading.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Quality Policy",
          item: "https://triadglobaltrading.com/quality-policy",
        },
      ],
    },
  ],
};

export default function QualityPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qualityJsonLd) }}
      />
      {children}
    </>
  );
}
