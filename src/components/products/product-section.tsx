"use client";

import { products } from "@/lib/products";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";

export default function ProductsSection() {
  // Start with first 3 to match server-side rendering (SSR) and avoid hydration mismatch
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 3));

  useEffect(() => {
    // Shuffle array on client-side only
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore our premium selection of spices, herbs, and oilseeds, sourced directly from the finest farms to ensure unmatched quality and purity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
