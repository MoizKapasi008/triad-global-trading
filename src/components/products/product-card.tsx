"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function ProductCard({
  id,
  title,
  description,
  image,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card className="group w-full h-full flex flex-col p-0 overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
      <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
        {/* Skeleton Placeholder */}
        {isLoading && <Skeleton className="w-full h-full absolute inset-0" />}

        {/* Product Image */}
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      <CardHeader className="p-4 sm:p-5 flex flex-col flex-1">
        <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2 text-primary">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600 line-clamp-3 flex-1">
          {description}
        </CardDescription>

        <Link
          href={`/products/${id}`}
          className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm sm:text-base font-medium hover:bg-primary/20 transition-all"
        >
          Read More
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </CardHeader>
    </Card>
  );
}
