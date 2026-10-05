import ProductCard from "@/components/products/product-card";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import { getCategoryBySlug } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}): Promise<Metadata> {
  const { categoryId } = await params;
  const category = await getCategoryBySlug(categoryId);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const title = `${category.title} Exporter & Wholesale Supplier | Triad Global Trading`;
  const description = `${category.description} Sourced and exported globally by Triad Global Trading from Gujarat, India. APEDA certified, bulk wholesale packaging, and international compliance.`;
  const canonicalUrl = `https://triadglobaltrading.com/categories/${category.id}`;

  return {
    title,
    description,
    keywords: [
      category.title,
      `${category.title} exporter India`,
      `${category.title} wholesale supplier`,
      "Indian agro export",
      "Triad Global Trading",
      "bulk spice trading Rajkot",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: category.image,
          width: 800,
          height: 600,
          alt: category.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  const category = await getCategoryBySlug(categoryId);
  const relatedProducts = await getProductsByCategory(categoryId);

  if (!category) return notFound();

  const categoryUrl = `https://triadglobaltrading.com/categories/${category.id}`;

  const categoryJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${categoryUrl}#collection`,
        url: categoryUrl,
        name: `${category.title} - Wholesale & Export`,
        description: category.description,
        isPartOf: {
          "@id": "https://triadglobaltrading.com/#website",
        },
        about: {
          "@id": "https://triadglobaltrading.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${categoryUrl}#breadcrumbs`,
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
            name: "Categories",
            item: "https://triadglobaltrading.com/products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category.title,
            item: categoryUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${categoryUrl}#itemlist`,
        name: `${category.title} Catalog`,
        itemListElement: relatedProducts.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: p.title,
          url: `https://triadglobaltrading.com/products/${p.id}`,
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      <ProductHeroSection
        title={category.title}
        description={category.description}
        heroImage={category.image}
      />

      <section className="py-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
