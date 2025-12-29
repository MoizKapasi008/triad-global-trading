"use client";

import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/categories";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { MoveRight } from "lucide-react";

export default function CategoryCard({ id, title, image }: Category) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/categories/${id}`} className="block h-full group cursor-pointer">
      <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-white/20">
        {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}

        {/* Background Image with Scale and Rotate */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
          onLoadingComplete={() => setIsLoading(false)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Content Area */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight transition-colors drop-shadow-md">
              {title}
            </h3>

            {/* Animated Underline */}
            <div className="h-1 w-12 bg-secondary mb-4 transition-all duration-300 group-hover:w-24 rounded-full" />

            <div className="flex items-center gap-2 text-white/90 text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
              <span>View Collection</span>
              <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
