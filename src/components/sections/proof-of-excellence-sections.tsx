"use client";

import { CheckCircle2, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ProofOfExcellenceSections() {
  const processes = [
    {
      title: "Premium Sourcing",
      description: "We source directly from certified farms to ensure the highest quality raw materials.",
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    },
    {
      title: "Rigorous Quality Checks",
      description: "Expert lab testing and strict quality control protocols at every stage.",
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    },
    {
      title: "Hygienic Packaging",
      description: "Advanced moisture-free packaging to preserve freshness and aroma.",
      icon: <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide">
            Proof of <span className="font-bold text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg font-light">
            Our quality is our promise. We follow a strict process to ensure that only the best reaches you.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mt-4" />
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-10 md:mb-12">
          {processes.map((process, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                {/* Clone element to override classes on hover if needed, or just let color inherit */}
                {process.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{process.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="bg-gradient-to-br from-secondary/40 to-secondary/10 border border-secondary/30 rounded-3xl p-8 md:p-10 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-10 tracking-wide">
            Certified for Global Trade
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <Image
              src="/images/certificates/fssai.png"
              alt="FSSAI Certified"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            <Image
              src="/images/certificates/apeda.jpg"
              alt="APEDA Certified"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 mix-blend-multiply"
            />
            <Image
              src="/images/certificates/iso9001.svg"
              alt="ISO 9001:2015"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            <Image
              src="/images/certificates/haccp.svg"
              alt="HACCP Certified"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            <Image
              src="/images/certificates/fda.svg"
              alt="FDA Approved"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            <Image
              src="/images/certificates/halal.svg"
              alt="Halal Certified"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            <Image
              src="/images/certificates/kosher.svg"
              alt="Kosher Certified"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            <Image
              src="/images/certificates/gmp.svg"
              alt="GMP Certified"
              width={120}
              height={120}
              className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
          </div>
          <p className="mt-10 text-base md:text-lg text-foreground/80 font-light max-w-2xl mx-auto">
            Adhering to the highest international standards for food safety and export quality.
          </p>
        </div>
      </div>
    </section>
  );
}
