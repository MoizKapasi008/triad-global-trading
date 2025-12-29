"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Skeleton } from "../../ui/skeleton";

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] sm:h-[70vh] lg:h-screen overflow-hidden">
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-none" />
      )}

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"
          }`}
        style={{
          backgroundImage: "url(/images/landing_page.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>
      <Image
        src="/images/landing_page.jpg"
        alt="Hero background"
        width={1920}
        height={1080}
        className="hidden"
        priority
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div
        className={`relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 pt-32 pb-12 sm:pt-20 max-w-4xl transition-all duration-1000 ${isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
      >
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg mb-6">
          Discover the World&apos;s Best Products <br />
          <span className="text-secondary">From Tradition to Innovation</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
          Connecting you with nature&apos;s finest harvest. Premium quality spices, oilseeds, and herbs exported globally.
        </p>
      </div>
    </section>
  );
}
