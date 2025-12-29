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
        "group relative overflow-hidden rounded-3xl bg-card p-4 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 w-fit">
          <Icon className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Background Icon */}
      <Icon className="absolute -bottom-4 -right-4 w-32 h-32 text-primary/5 group-hover:text-primary/10 transition-colors duration-300 transform -rotate-12 group-hover:rotate-0 transition-transform" />
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            We deliver excellence in every grain. Here is why we are the preferred choice for global spice trading.
          </p>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Hero Image - Spans 2x2 */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="/images/chilli-harvesting_1.jpg"
              alt="Harvesting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Rooted in Quality</h3>
              <p className="text-white/80 text-sm">Sourced directly from certified farms ensuring 100% purity and authenticity in every batch.</p>
            </div>
          </div>

          {/* Feature 0: Quality */}
          <BentoCard {...features[0]} />

          {/* Feature 1: Organic */}
          <BentoCard {...features[1]} />

          {/* Feature 3: Customers (Wide) - Taking slot after Hero/F0/F1? 
              Row 1: Hero(2), F0(1), F1(1) -> Full
              Row 2: Hero(2), Needs 2 more cols.
          */}
          <BentoCard {...features[3]} className="md:col-span-2" />

          {/* Row 3 - Remaining items */}
          {/* Feature 2: Delivery */}
          <BentoCard {...features[2]} />

          {/* Feature 4: Staff */}
          <BentoCard {...features[4]} />

          {/* Feature 5: Packaging */}
          <BentoCard {...features[5]} />

          {/* Feature 6: Global */}
          <BentoCard {...features[6]} />

        </div>
      </div>
    </section>
  );
}
