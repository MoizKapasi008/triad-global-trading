"use client";

import { products } from "@/lib/products";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProductsSection() {
  // Start with first 3 to match server-side rendering (SSR) and avoid hydration mismatch
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 3));

  useEffect(() => {
    // Shuffle array on client-side only
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 3));
  }, []);

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide">
            Featured <span className="font-bold text-primary">Products</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light">
            Explore our premium selection of spices, herbs, and oilseeds, sourced directly from the finest farms to ensure unmatched quality and purity.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
