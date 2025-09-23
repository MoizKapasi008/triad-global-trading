import CategoryCard from "./category-card";
import { categories, Category } from "@/lib/categories";

export default function CategoriesSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-tertiary">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-primary">
        Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat: Category) => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  );
}
