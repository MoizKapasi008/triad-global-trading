"use client";

import { PackageCheck, ShieldCheck, Leaf, Stamp, Lock } from "lucide-react";
// import Image from "next/image";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../ui/carousel";

export default function PackagingSection() {
  const features = [
    {
      title: "Moisture-Proof Protection",
      description: "Advanced multi-layer barrier films to prevent moisture ingress and preserve aroma.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Hygienic Handling",
      description: "Automated packaging lines ensuring zero human contact for maximum safety.",
      icon: <PackageCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Eco-Friendly Options",
      description: "Sustainable packaging solutions available to reduce environmental footprint.",
      icon: <Leaf className="w-8 h-8 text-primary" />,
    },
    {
      title: "Custom Branding",
      description: "Tailored packaging designs to amplify your brand presence in the market.",
      icon: <Stamp className="w-8 h-8 text-primary" />,
    },
    {
      title: "Tamper-Proof Safety",
      description: "Advanced sealing technology to ensure product integrity and consumer trust.",
      icon: <Lock className="w-8 h-8 text-primary" />,
    },
  ];

  // Placeholder data for future carousel
  // const packagingImages = [
  //   { src: "/images/packaging/pack1.jpg", alt: "Bulk Packaging" },
  //   { src: "/images/packaging/pack2.jpg", alt: "Consumer Packs" },
  //   { src: "/images/packaging/pack3.jpg", alt: "Vacuum Sealed" },
  // ];

  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide max-w-4xl leading-tight">
            Premium Packaging for <span className="font-bold text-primary">Lasting Freshness</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl font-light">
            We understand that packaging is as crucial as the product itself. Our export-quality packaging ensures that every spice, herb, and seed retains its original potency, aroma, and freshness from our facility to your doorstep.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-4 bg-primary/5 rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                {/* Clone element if needed, let color inherit */}
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 
          Future Photo Carousel Section
          Uncomment this block when photos are available in public/images/packaging/
        
        <div className="w-full max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Packaging Showcase</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {packagingImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg aspect-square relative border">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        */}
      </div>
    </section>
  );
}
