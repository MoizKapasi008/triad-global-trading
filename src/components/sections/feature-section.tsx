"use client";

import { features } from "@/lib/feature";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

function BentoCard({ title, description, icon: Icon, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card p-6 shadow-sm border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-6 inline-flex p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 w-fit">
          <Icon className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Background Icon */}
      <Icon className="absolute -bottom-6 -right-6 w-40 h-40 text-primary/5 group-hover:text-primary/10 transition-all duration-500 transform -rotate-12 group-hover:rotate-0" />
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide">
            Why Choose <span className="font-bold text-primary">Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg font-light">
            We deliver excellence in every grain. Here is why we are the preferred choice for global spice trading.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(220px,auto)]">
          {/* Hero Image - Spans 2x2 */}
          <div className="md:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden shadow-lg group min-h-[300px]">
            <Image
              src="/images/chilli-harvesting_1.jpg"
              alt="Harvesting"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide">Rooted in Quality</h3>
              <p className="text-white/90 text-sm md:text-base font-light">Sourced directly from certified farms ensuring 100% purity and authenticity in every batch.</p>
            </div>
          </div>

          {/* Features */}
          <BentoCard {...features[0]} />
          <BentoCard {...features[1]} />
          <BentoCard {...features[3]} className="lg:col-span-2" />
          <BentoCard {...features[2]} />
          <BentoCard {...features[4]} />
          <BentoCard {...features[5]} />
          <BentoCard {...features[6]} />
        </div>
      </div>
    </section>
  );
}
