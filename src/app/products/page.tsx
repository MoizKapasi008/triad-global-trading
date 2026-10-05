import ProductCard from "@/components/products/product-card";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import { products } from "@/lib/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | Wholesale Indian Spices & Agro Commodities Catalog",
  description:
    "Explore our complete export catalog of premium Indian spices, culinary herbs, oilseeds, millets, and dehydrated products. Sourced and exported globally by Triad Global Trading.",
  keywords: [
    "Indian spices catalog",
    "wholesale spices export",
    "bulk agro commodities",
    "spices supplier India",
    "Triad Global Trading products",
    "Mundra export products",
  ],
  alternates: {
    canonical: "https://triadglobaltrading.com/products",
  },
  openGraph: {
    title: "All Products | Wholesale Indian Spices & Agro Commodities Catalog",
    description:
      "Explore our complete export catalog of premium Indian spices, culinary herbs, oilseeds, millets, and dehydrated products.",
    url: "https://triadglobaltrading.com/products",
    images: ["/images/landing_page.jpg"],
  },
};

export default function AllProductsPage() {
  const catalogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://triadglobaltrading.com/products#collection",
        url: "https://triadglobaltrading.com/products",
        name: "All Agro Export Products Catalog",
        description:
          "Complete catalog of premium Indian spices, herbs, oilseeds, and agro commodities exported by Triad Global Trading.",
        isPartOf: {
          "@id": "https://triadglobaltrading.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://triadglobaltrading.com/products#breadcrumbs",
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
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://triadglobaltrading.com/products#itemlist",
        name: "Export Products List",
        numberOfItems: products.length,
        itemListElement: products.map((product, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: product.title,
          url: `https://triadglobaltrading.com/products/${product.id}`,
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <ProductHeroSection
        title="All Products"
        description="Explore our extensive catalog of globally sourced premium spices, herbs, oilseeds, and agro products. As leading global traders, we ensure the highest quality for every commodity."
        heroImage="/images/landing_page.jpg"
      />

      <section className="py-12 bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="products-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#products-dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
