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
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url(/images/landing_page.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
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
        className={`relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 py-8 max-w-lg sm:max-w-xl lg:max-w-2xl transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-xl sm:text-3xl md:text-3xl font-bold leading-snug sm:leading-tight lg:leading-snug text-primary-foreground">
          Discover the World&apos;s Best Spices: <br />
          From Tradition to Innovation!
        </h1>

        {/* <Button
          variant="default"
          className="mt-4 sm:mt-6 w-28 sm:w-32 border border-white hover:text-primary px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base transition duration-300 hover:bg-white hover:border-2"
        >
          KNOW MORE
        </Button> */}
      </div>
    </section>
  );
}
