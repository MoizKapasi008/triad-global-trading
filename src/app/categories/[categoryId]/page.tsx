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

  return {
    title: category.title,
    description: `${category.description} Provided by Triad Global Trading, experts in Indian import export and global trade.`,
    keywords: ["import", "export", "trading", "triad", "global", "trade", "traders", "indian import export", category.title, "wholesale export"],
    openGraph: {
      title: category.title,
      description: `${category.description} Provided by Triad Global Trading, experts in Indian import export and global trade.`,
      images: [category.image],
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  // Await the params first
  const { categoryId } = await params;

  const category = await getCategoryBySlug(categoryId);
  const relatedProducts = await getProductsByCategory(categoryId);

  if (!category) return notFound();

  return (
    <main>
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
