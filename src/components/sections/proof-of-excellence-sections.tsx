"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

// Define the product type
interface Product {
  id: string | number;
  image: string;
  title: string;
}

// Define props interface
interface ProofOfExcellenceSectionsProps {
  relatedProducts?: Product[];
}

export default function ProofOfExcellenceSections({
  relatedProducts = [],
}: ProofOfExcellenceSectionsProps) {
  const [loadingStates, setLoadingStates] = useState<
    Record<string | number, boolean>
  >(
    relatedProducts.reduce(
      (acc, product) => ({ ...acc, [product.id]: true }),
      {}
    )
  );

  const handleImageLoad = (productId: string | number) => {
    setLoadingStates((prev) => ({ ...prev, [productId]: false }));
  };

  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1140px] mt-10 space-y-8">
      <h3 className="text-center text-3xl font-bold text-primary mb-6">
        Proof of Excellence
      </h3>
      {relatedProducts.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {relatedProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="border rounded-lg overflow-hidden bg-primary-foreground hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative w-full aspect-square">
                    {loadingStates[product.id] && (
                      <Skeleton className="w-full h-full absolute inset-0" />
                    )}
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority
                      onLoad={() => handleImageLoad(product.id)}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold line-clamp-2">
                      {product.title}
                    </h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      ) : (
        <p className="text-center text-gray-500">No related products found.</p>
      )}
    </div>
  );
}
