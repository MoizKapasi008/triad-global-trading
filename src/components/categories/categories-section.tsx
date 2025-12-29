import CategoryCard from "./category-card";
import { categories, Category } from "@/lib/categories";

export default function CategoriesSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Categories</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat: Category) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
