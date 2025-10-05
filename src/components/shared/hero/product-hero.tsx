"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";

export default function ProductHeroSection({
  title,
  description,
  heroImage,
}: {
  title: string;
  description?: string;
  heroImage?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative grid md:grid-cols-2 min-h-[180px] md:min-h-[220px] lg:min-h-[280px] text-secondary-foreground">
      {/* Text Section */}
      <div
        className=" z-10 flex items-center justify-center text-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 
            h-full w-full bg-secondary/70 md:bg-secondary"
      >
        <div className="max-w-2xl">
          <h1 className="text-heading">{title}</h1>
          {description && (
            <p className="mt-3 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Image (background on mobile, side image on desktop) */}
      <div className="absolute inset-0 md:relative">
        {isLoading && <Skeleton className="w-full h-full absolute inset-0" />}
        <Image
          src={heroImage || ""}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 md:group-hover:scale-105"
          priority
          onLoadingComplete={() => setIsLoading(false)}
        />
        {/* Dark overlay only on small screens for readability */}
        <div className="absolute inset-0 bg-black/40 md:hidden"></div>
      </div>
    </section>
  );
}
