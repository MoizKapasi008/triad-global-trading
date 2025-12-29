"use client";

import { Leaf, Sprout } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

export function AboutSection() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className="relative w-full py-8 md:py-8 bg-muted overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -mr-20 -mt-20">
        <Leaf size={400} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Side */}
          <article className="flex flex-col justify-center space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm">
                <Sprout size={18} />
                <span>Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Cultivating Quality, <br />
                <span className="text-primary">Harvesting Trust.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At <strong className="text-foreground">Triad Global Trading</strong>, we are more than just exporters; we are custodians of nature&apos;s finest bounties.
                Since our inception, we have bridged the gap between traditional Indian farms and the global market.
              </p>

              <p>
                Specializing in premium spices, oilseeds, and herbs, our mission is to deliver products that embody
                <span className="text-primary font-medium"> purity</span>,
                <span className="text-primary font-medium"> aroma</span>, and
                <span className="text-primary font-medium"> authenticity</span>.
                Every shipment is a promise of excellence kept.
              </p>
            </div>

            <div className="pt-2">
              <div className="inline-block px-6 py-4 bg-primary backdrop-blur-sm border border-primary/10 rounded-xl shadow-sm">
                <p className="italic text-secondary font-medium text-lg">
                  &quot;From the heart of India to the world&apos;s kitchen.&quot;
                </p>
              </div>
            </div>
          </article>

          {/* Image Side */}
          <div className="relative group mx-auto w-full max-w-md lg:max-w-full">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 transform rotate-3 transition-transform group-hover:rotate-1 duration-500"></div>
            <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -z-20 transform -rotate-2 transition-transform group-hover:-rotate-1 duration-500"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              {isLoading && (
                <Skeleton className="absolute inset-0 w-full h-full" />
              )}
              <Image
                src="/images/landing_page.jpg"
                alt="Triad Global Trading - Quality Spices"
                width={800}
                height={600}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
