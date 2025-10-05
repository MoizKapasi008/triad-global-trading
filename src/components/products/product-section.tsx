import { products } from "@/lib/products";
import ProductCard from "./product-card";

export default function ProductsSection() {
  return (
    <section className=" py-container w-full">
      <div className=" max-w-[1140px] mx-auto px-container">
        <h2 className="text-heading text-center mb-8 text-primary">
          Check Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
