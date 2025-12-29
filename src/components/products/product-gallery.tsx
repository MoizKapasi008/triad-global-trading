"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function ProductGallery({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <div className="md:sticky md:top-32">
        <div className="relative group">
          <div className="absolute -inset-4 bg-card rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />

          <div className="overflow-hidden rounded-3xl relative shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-white p-3 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_45px_100px_rgba(0,0,0,0.18)] group-hover:-translate-y-2 animate-float">
            {isLoading && <Skeleton className="w-full aspect-square rounded-2xl" />}

            <div className="absolute top-6 left-6 z-20">
              <span className="bg-primary/90 text-secondary text-[10px] font-bold tracking-[0.2em] px-4 py-2 rounded-full shadow-xl border border-secondary/30 backdrop-blur-sm uppercase">
                Premium Selection
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-square bg-gray-100">
              <Image
                src={image || ""}
                alt={title}
                width={800}
                height={800}
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${isLoading ? "opacity-0" : "opacity-100"
                  }`}
                priority
                onLoadingComplete={() => setIsLoading(false)}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/10 opacity-60 pointer-events-none" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
