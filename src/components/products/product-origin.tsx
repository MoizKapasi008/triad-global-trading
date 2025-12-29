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
    <div className="mx-auto w-full px-6 lg:px-12 max-w-7xl mt-16 space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="relative mb-8 overflow-hidden py-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-secondary/50" />
          <h3 className="text-3xl font-black text-primary tracking-[0.2em] uppercase">
            Product Origin
          </h3>
          <div className="h-px w-12 bg-secondary/50" />
        </div>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[4/3] lg:aspect-[5/2] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white p-3 bg-white/80 backdrop-blur-xl transition-transform duration-700 group-hover:-translate-y-2">
          {isLoading && <Skeleton className="w-full h-full absolute inset-0 rounded-2xl" />}
          <Image
            src={originMapSrc || "/world-map-with-india-highlighted.png"}
            alt="Product origin map"
            fill
            className="object-cover rounded-2xl"
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
