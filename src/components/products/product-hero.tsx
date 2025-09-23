import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductHero({
  title,
  description,
  heroImage,
}: {
  title: string;
  description?: string;
  heroImage?: string;
}) {
  return (
   <section className="relative grid md:grid-cols-2 items-stretch h-[180px]  md:h-[220px] lg:h-[280px]">
        {/* Text Section */}
        <div
          className="relative z-10 flex items-center justify-center text-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 
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
          <Image
            src={heroImage || ""}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
            priority
          />
          {/* Dark overlay only on small screens for readability */}
          <div className="absolute inset-0 bg-black/40 md:hidden"></div>
        </div>
      </section>
  );
}
