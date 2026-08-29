import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductGallery from "@/components/products/product-gallery";
import ProductDetails from "@/components/products/product-details";
import ProductSpecs from "@/components/products/product-specs";
import ProductOrigin from "@/components/products/product-origin";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import ProductRelated from "@/components/products/product-related";
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

  return {
    title: product.title,
    description: `${product.description} Sourced by Triad Global Trading, premier Indian import export global traders.`,
    keywords: ["import", "export", "trading", "triad", "global", "trade", "traders", "indian import export", product.title, "spices export"],
    openGraph: {
      title: product.title,
      description: `${product.description} Sourced by Triad Global Trading, premier Indian import export global traders.`,
      images: [product.image],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
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

  return (
    <main>
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

        <ProductRelated relatedProducts={product.related_products} />
      </section>
    </main>
  );
}
