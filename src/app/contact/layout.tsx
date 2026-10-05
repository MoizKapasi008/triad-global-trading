import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Indian Agro Export Inquiries | Triad Global Trading",
  description:
    "Get in touch with Triad Global Trading export sales division in Rajkot, Gujarat. Inquire for wholesale pricing, container bookings, and custom agro product packaging.",
  keywords: [
    "contact Triad Global Trading",
    "spices exporter contact",
    "agro export enquiry",
    "Rajkot Gujarat spice exporter",
    "bulk spices contact number",
  ],
  alternates: {
    canonical: "https://triadglobaltrading.com/contact",
  },
  openGraph: {
    title: "Contact Us | Indian Agro Export Inquiries | Triad Global Trading",
    description:
      "Connect with our export sales team for commercial pricing, custom packaging, and CIF/FOB shipments.",
    url: "https://triadglobaltrading.com/contact",
    images: ["/images/landing_page.jpg"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://triadglobaltrading.com/contact#contactpage",
      url: "https://triadglobaltrading.com/contact",
      name: "Contact Triad Global Trading",
      description: "Contact page for Triad Global Trading export inquiries.",
      isPartOf: {
        "@id": "https://triadglobaltrading.com/#website",
      },
      mainEntity: {
        "@id": "https://triadglobaltrading.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://triadglobaltrading.com/contact#breadcrumbs",
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
          name: "Contact Us",
          item: "https://triadglobaltrading.com/contact",
        },
      ],
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
