"use client";

import { CheckCircle2, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ProofOfExcellenceSections() {
  const processes = [
    {
      title: "Premium Sourcing",
      description: "We source directly from certified farms to ensure the highest quality raw materials.",
      icon: <Globe className="w-10 h-10 text-primary" />,
    },
    {
      title: "Rigorous Quality Checks",
      description: "Expert lab testing and strict quality control protocols at every stage.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    },
    {
      title: "Hygienic Packaging",
      description: "Advanced moisture-free packaging to preserve freshness and aroma.",
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section className="w-full py-4 md:py-4 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proof of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our quality is our promise. We follow a strict process to ensure that only the best reaches you.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {processes.map((process, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {process.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-muted-foreground">{process.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Banner Placeholder */}
        <div className="bg-secondary border border-secondary/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Certified for Global Trade
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/certificates/fssai.png"
              alt="FSSAI Certified"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/certificates/apeda.jpg"
              alt="APEDA Certified"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all mix-blend-multiply"
            />
            <Image
              src="/images/certificates/iso9001.svg"
              alt="ISO 9001:2015"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/certificates/haccp.svg"
              alt="HACCP Certified"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/certificates/fda.svg"
              alt="FDA Approved"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/certificates/halal.svg"
              alt="Halal Certified"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/certificates/kosher.svg"
              alt="Kosher Certified"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/certificates/gmp.svg"
              alt="GMP Certified"
              width={100}
              height={100}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <p className="mt-8 text-md text-foreground">
            Adhering to the highest international standards for food safety and export quality.
          </p>
        </div>
      </div>
    </section>
  );
}
