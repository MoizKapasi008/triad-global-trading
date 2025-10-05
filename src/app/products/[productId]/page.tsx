import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductGallery from "@/components/products/product-gallery";
import ProductDetails from "@/components/products/product-details";
import ProductSpecs from "@/components/products/product-specs";
import ProductOrigin from "@/components/products/product-origin";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import ProductRelated from "@/components/products/product-related";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = getProductBySlug(productId);
  if (!product) return notFound();

  return (
    <main>
      <ProductHeroSection
        title={product.title}
        description={product.description}
        heroImage={product.heroImage}
      />

      <section className="py-10">
        <div className="mx-auto w-full px-6 md:px-3 max-w-[1140px] grid gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
          <ProductGallery image={product.image} title={product.title} />
          <ProductDetails
            detailSections={product.detailSections}
            badges={product.badges}
          />
        </div>

        <ProductSpecs
          physicalSpecs={product.physicalSpecs}
          chemicalSpecs={product.chemicalSpecs}
        />

        <ProductOrigin originMapSrc={product.originMapSrc} />

        <ProductRelated relatedProducts={product.related_products} />
      </section>
    </main>
  );
}
