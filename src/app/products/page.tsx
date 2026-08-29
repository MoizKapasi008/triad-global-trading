import ProductCard from "@/components/products/product-card";
import ProductHeroSection from "@/components/shared/hero/product-hero";
import { products } from "@/lib/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse our complete catalog of premium spices, herbs, oilseeds, and agro products from Triad Global Trading, premier Indian import export global traders.",
  keywords: ["import", "export", "trading", "triad", "global", "trade", "traders", "indian import export", "all products", "spices catalog"],
};

export default function AllProductsPage() {
  return (
    <main>
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
