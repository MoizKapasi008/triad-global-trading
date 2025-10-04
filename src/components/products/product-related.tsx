import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type RelatedProduct = {
  id: string;
  title: string;
  image: string;
};

export default function ProductRelated({
  relatedProducts = [],
}: {
  relatedProducts?: RelatedProduct[];
}) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1140px] mt-10 space-y-8">
      <h3 className="text-center text-heading text-primary mb-6">
        Related Products
      </h3>

      {relatedProducts.length > 0 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {relatedProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{product.title}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p className="text-center text-gray-500">No related products found.</p>
      )}
    </div>
  );
}
