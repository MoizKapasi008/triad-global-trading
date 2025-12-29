"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "../ui/skeleton";
import type { CarouselApi } from "@/components/ui/carousel";

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
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  const handleProductClick = (productId: string) => {
    console.log(`Navigating to product: ${productId}`);
    // You can add additional click tracking or analytics here
  };

  return (
    <div className="mx-auto w-full px-6 lg:px-12 max-w-7xl mt-16 mb-16 space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="relative mb-8 overflow-hidden py-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-secondary/50" />
          <h3 className="text-3xl font-black text-primary tracking-[0.2em] uppercase">
            Related Products
          </h3>
          <div className="h-px w-12 bg-secondary/50" />
        </div>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
      </div>

      {relatedProducts.length > 0 ? (
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full group/carousel"
        >
          <CarouselContent className="-ml-6 md:-ml-8">
            {relatedProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-6 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <Link
                  href={`/products/${product.id}`}
                  onClick={() => handleProductClick(product.id)}
                  className="block group h-full"
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-700 h-full flex flex-col group-hover:-translate-y-3">
                    <div className="relative w-full aspect-[4/5] overflow-hidden p-3">
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-50">
                        {isLoading && (
                          <Skeleton className="w-full h-full absolute inset-0" />
                        )}
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-all duration-1000 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          priority
                          onLoadingComplete={() => setIsLoading(false)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                    <div className="p-6 pb-8 flex-grow flex flex-col justify-center text-center">
                      <h4 className="text-sm font-black text-primary group-hover:text-secondary transition-colors line-clamp-2 uppercase tracking-[0.2em]">
                        {product.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-6 mt-16">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 border-white bg-white/80 backdrop-blur-md hover:bg-primary hover:text-white transition-all shadow-xl rounded-full" />
            <CarouselNext className="static translate-y-0 h-14 w-14 border-white bg-white/80 backdrop-blur-md hover:bg-primary hover:text-white transition-all shadow-xl rounded-full" />
          </div>
        </Carousel>
      ) : (
        <p className="text-center text-gray-500 italic font-medium">No related products found.</p>
      )}
    </div>
  );
}
