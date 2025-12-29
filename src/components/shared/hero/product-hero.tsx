"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden bg-primary/90">
      {/* Background Image */}
      {heroImage && (
        <>
          <div className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            isLoading ? "opacity-0" : "opacity-100"
          )}>
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover object-center scale-105"
              priority
              onLoadingComplete={() => setIsLoading(false)}
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          {isLoading && <Skeleton className="absolute inset-0 w-full h-full bg-gray-800 animate-pulse" />}
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl line-clamp-2 uppercase">
            {title}
          </h1>

          {description && (
            <div className="min-h-[80px] flex items-center justify-center">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-lg line-clamp-3">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
