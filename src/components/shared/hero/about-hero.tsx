"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface AboutHeroSectionProps {
  title: string;
  description: string;
}

export default function AboutHeroSection({
  title,
  description,
}: AboutHeroSectionProps) {
  const staticHeroImage = "/images/aboutus.jpg";
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden bg-primary/90">
      {/* Background Image */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-700 ease-in-out",
        isLoading ? "opacity-0" : "opacity-100"
      )}>
        <Image
          src={staticHeroImage}
          alt="About Us"
          fill
          priority
          className="object-cover object-center scale-105"
          onLoadingComplete={() => setIsLoading(false)}
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {isLoading && <Skeleton className="absolute inset-0 w-full h-full bg-gray-800 animate-pulse" />}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl uppercase">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
