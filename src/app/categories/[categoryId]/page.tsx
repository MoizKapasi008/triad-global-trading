import ProductCard from "@/components/products/product-card";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import { getCategoryBySlug } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { notFound } from "next/navigation";

type Params = {
  categoryId: string;
};

type Props = {
  params: Params;
};

export default async function CategoryPage({ params }: Props) {
  // Ensure your data functions are async
  const category = await getCategoryBySlug(params.categoryId);
  const relatedProducts = await getProductsByCategory(params.categoryId);

  if (!category) return notFound();

  return (
    <main>
      <ProductHeroSection
        title={category.title}
        description={category.description}
        heroImage={category.image}
      />

      <section className="py-10 bg-white">
        <div className="max-w-[1140px] mx-auto px-container">
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
