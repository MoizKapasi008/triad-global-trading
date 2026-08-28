import CategoryCard from "./category-card";
import { categories, Category } from "@/lib/categories";

export default function CategoriesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide">
            Our <span className="font-bold text-primary">Categories</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light">
            Browse through our wide range of carefully curated product categories.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat: Category) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
