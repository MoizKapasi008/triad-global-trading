import CategoriesSection from "@/components/categories/categories-section";
import ProductsSection from "@/components/products/product-section";
import { AboutSection } from "@/components/sections/about-section";
import WhyChooseUsSection from "@/components/sections/feature-section";
import { HeroSection } from "@/components/shared/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <AboutSection />
      <div className="flex w-full bg-tertiary">
        <ProductsSection />
      </div>
      <div className="flex w-full bg-tertiary">
        <CategoriesSection />
      </div>
      <WhyChooseUsSection/>
    </main>
  );
}
