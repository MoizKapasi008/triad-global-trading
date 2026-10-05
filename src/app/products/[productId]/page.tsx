import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductGallery from "@/components/products/product-gallery";
import ProductDetails from "@/components/products/product-details";
import ProductSpecs from "@/components/products/product-specs";
import ProductOrigin from "@/components/products/product-origin";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import ProductRelated from "@/components/products/product-related";
import ProductFaq from "@/components/products/product-faq";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductBySlug(productId);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.title} Wholesale Exporter & Supplier | Triad Global Trading`;
  const description = `${product.description} Sourced and exported from India by Triad Global Trading (Rajkot, Gujarat). High purity, custom packaging, and international export compliance.`;
  const canonicalUrl = `https://triadglobaltrading.com/products/${product.id}`;

  return {
    title,
    description,
    keywords: [
      product.title,
      `${product.title} exporter India`,
      `${product.title} wholesale supplier`,
      `${product.title} bulk export`,
      "Indian spices exporter",
      "Triad Global Trading",
      "Rajkot Gujarat agro exports",
      product.categoryId,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = getProductBySlug(productId);
  if (!product) return notFound();

  const productUrl = `https://triadglobaltrading.com/products/${product.id}`;

  const allSpecs = [
    ...(product.physicalSpecs || []),
    ...(product.physicalSpecs2 || []),
    ...(product.chemicalSpecs || []),
    ...(product.nutritionalSpecs || []),
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        name: product.title,
        description: product.description,
        image: [product.image, product.heroImage].filter(Boolean),
        sku: product.id,
        mpn: product.id,
        category: product.categoryId,
        brand: {
          "@type": "Brand",
          name: "Triad Global Trading",
        },
        manufacturer: {
          "@id": "https://triadglobaltrading.com/#organization",
        },
        countryOfOrigin: {
          "@type": "Country",
          name: "India",
        },
        offers: {
          "@type": "Offer",
          url: productUrl,
          priceCurrency: "USD",
          price: "0",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://triadglobaltrading.com/#organization",
          },
        },
        additionalProperty: allSpecs.map((s) => ({
          "@type": "PropertyValue",
          name: s.parameter,
          value: s.value,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${productUrl}#breadcrumbs`,
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
            name: "Products",
            item: "https://triadglobaltrading.com/products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.title,
            item: productUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${productUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `What are the quality and export standards for ${product.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${product.title} exported by Triad Global Trading complies with international food safety benchmarks including APEDA, Spices Board of India, and FSSAI standards. Every consignment is inspected for moisture, purity, cleanliness, and sensory parameters with batch COA (Certificate of Analysis) provided.`,
            },
          },
          {
            "@type": "Question",
            name: `What packaging options are available for ${product.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `We supply ${product.title} in customizable export packaging including 25kg / 50kg PP bags, multi-wall paper bags, jute sacks, vacuum-sealed bags, or buyer-specific private label retail packaging with branded barcodes and custom labeling.`,
            },
          },
          {
            "@type": "Question",
            name: `What is the Minimum Order Quantity (MOQ) and shipping terms?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Our standard export orders are fulfilled as 20ft (FCL) or 40ft (FCL) container loads, with mixed-container shipments available across our agro categories. We support FOB (Mundra, Kandla, Pipavav ports), CIF, and CFR Incoterms with prompt dispatch.`,
            },
          },
          {
            "@type": "Question",
            name: `Can I request a sample and specification sheet for ${product.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, commercial buyers can request pre-shipment product samples and complete technical specification sheets by reaching out via our Inquiry page or directly emailing info@triadglobaltrading.com.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductHeroSection
        title={product.title}
        description={product.description}
        heroImage={product.heroImage}
      />

      <section className="relative py-8 bg-background">
        {/* Decorative Background Elements - Clipped in separate container to allow sticky scroll */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 mx-auto w-full px-6 lg:px-8 max-w-screen-2xl grid gap-6 lg:grid-cols-[480px_1fr]">
          <ProductGallery image={product.image} title={product.title} />
          <ProductDetails
            detailSections={product.detailSections}
            badges={product.badges}
          />
        </div>

        <ProductSpecs
          physicalSpecs={product.physicalSpecs}
          physicalSpecs2={product.physicalSpecs2}
          chemicalSpecs={product.chemicalSpecs}
          nutritionalSpecs={product.nutritionalSpecs}
        />

        {product.categoryId !== "sanitary-ware" && (
          <ProductOrigin originMapSrc={product.originMapSrc} />
        )}

        <ProductFaq productTitle={product.title} />

        <ProductRelated relatedProducts={product.related_products} />
      </section>
    </main>
  );
}
