"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

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
    <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center text-primary-foreground overflow-hidden">
      {/* ✅ Skeleton while image loads */}
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      )}

      {/* ✅ Background image using Next/Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={staticHeroImage}
          alt="About Us Background"
          fill
          priority
          className="object-cover"
          onLoadingComplete={() => setIsLoading(false)}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ✅ Hero text content */}
      <div
        className={`relative z-10 text-center px-4 transition-all duration-700 ${
          isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
