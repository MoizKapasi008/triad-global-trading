import CategoryCard from "./category-card";
import { categories, Category } from "@/lib/categories";

export default function CategoriesSection() {
    return (
    <section className="w-full px-12 py-12 bg-tertiary">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat: Category) => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  );

}
