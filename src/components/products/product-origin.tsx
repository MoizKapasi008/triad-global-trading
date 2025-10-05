"use client";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProductOrigin({
  originMapSrc,
}: {
  originMapSrc?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1140px] mt-10 space-y-8">
      <h3 className="text-center text-heading text-primary mb-6">
        Product Origin
      </h3>

      {/* Responsive container */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[4/3] lg:aspect-[5/2] overflow-hidden rounded-md">
        {isLoading && <Skeleton className="w-full h-full absolute inset-0" />}
        <Image
          src={originMapSrc || "/world-map-with-india-highlighted.png"}
          alt="Product origin map"
          fill
          className="object-cover"
          priority
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
