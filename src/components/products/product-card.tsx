"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  specs?: Record<string, string>;
  badges?: string[];
};

export default function ProductCard({
  id,
  title,
  description,
  image,
  specs,
  badges,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Extract key info for quick view
  const origin = specs?.["Origin"];

  return (
    <Link href={`/products/${id}`} className="block h-full cursor-pointer group">
      <div className="relative h-full bg-card rounded-xl overflow-hidden border border-border/40 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
        {/* Image Section - Compact Aspect Ratio */}
        <div className="relative aspect-[16/11] overflow-hidden bg-muted">
          {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
          <Image
            src={image}
            alt={title}
            width={500}
            height={350}
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${isLoading ? "opacity-0" : "opacity-100"
              }`}
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badges Floating Top Right */}
          {badges && badges.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {badges.slice(0, 2).map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary backdrop-blur-sm rounded-md shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Section - Compact Padding */}
        <div className="p-4 flex flex-col h-[calc(100%-aspect-[16/11])]">
          <div className="flex justify-between items-start mb-2">
            <div>
              {origin && (
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1 mb-1">
                  Origin: {origin}
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4 flex-1">
            {description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-border/50 mt-auto">
            <span className="text-xs font-semibold text-primary group-hover:underline decoration-border/0 group-hover:decoration-current underline-offset-4 transition-all">
              View Specifications
            </span>
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:translate-x-1">
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
