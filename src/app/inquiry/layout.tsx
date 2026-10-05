import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Bulk Quote & Commercial Inquiry | Triad Global Trading",
  description:
    "Submit a commercial inquiry for bulk agro commodity orders, spice containers, custom packaging, and sample requests from Triad Global Trading.",
  keywords: [
    "spice export quote",
    "request agro commodity quotation",
    "bulk spices inquiry",
    "Indian spices commercial RFQ",
    "Triad Global Trading quotation",
  ],
  alternates: {
    canonical: "https://triadglobaltrading.com/inquiry",
  },
  openGraph: {
    title: "Request a Bulk Quote & Commercial Inquiry | Triad Global Trading",
    description:
      "Submit your requirements for container orders, custom specifications, and FOB/CIF quotations.",
    url: "https://triadglobaltrading.com/inquiry",
    images: ["/images/landing_page.jpg"],
  },
};

const inquiryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://triadglobaltrading.com/inquiry#inquirypage",
      url: "https://triadglobaltrading.com/inquiry",
      name: "Request an Export Quote",
      description: "Submit a bulk order or sample inquiry to Triad Global Trading.",
      isPartOf: {
        "@id": "https://triadglobaltrading.com/#website",
      },
      mainEntity: {
        "@id": "https://triadglobaltrading.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://triadglobaltrading.com/inquiry#breadcrumbs",
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
          name: "Inquiry",
          item: "https://triadglobaltrading.com/inquiry",
        },
      ],
    },
  ],
};

export default function InquiryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inquiryJsonLd) }}
      />
      {children}
    </>
  );
}
