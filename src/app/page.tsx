import CategoriesSection from "@/components/categories/categories-section";
import ProductsSection from "@/components/products/product-section";
import { AboutSection } from "@/components/sections/about-section";
import WhyChooseUsSection from "@/components/sections/feature-section";
import PackagingSection from "@/components/sections/packaging-section";
import ProofOfExcellenceSections from "@/components/sections/proof-of-excellence-sections";
import { HeroSection } from "@/components/shared/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <AboutSection />
      <div className="flex w-full bg-background py-8 md:py-8">
        <ProductsSection />
      </div>
      <div className="flex w-full bg-background py-8 md:py-8">
        <CategoriesSection />
      </div>
      <div className="flex w-full bg-background text-secondary-foreground py-8 md:py-8">
        <WhyChooseUsSection />
      </div>
      <div className="flex w-full bg-background py-6 md:py-6">
        <ProofOfExcellenceSections />
      </div>
      <div className="flex w-full bg-background py-4 md:py-4">
        <PackagingSection />
      </div>
    </main>
  );
}
