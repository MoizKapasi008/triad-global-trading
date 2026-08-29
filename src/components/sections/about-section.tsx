import { Leaf, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function AboutSection() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
      {/* Decorative Watermark - subtle and responsive */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none -mr-10 md:-mr-20 -mt-10 md:-mt-20">
        <Leaf size={250} className="md:w-[400px] md:h-[400px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <article className="flex flex-col justify-center space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-xs">
                <Sprout size={16} />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-wide">
                Cultivating Quality, <br />
                <span className="font-bold text-primary">Harvesting Trust.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                At <strong className="font-medium text-foreground">Triad Global Trading</strong>, we are more than just exporters; we are custodians of nature&apos;s finest bounties.
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

            <div className="pt-4 border-l-2 border-secondary pl-6">
              <p className="italic text-foreground/80 font-medium text-lg md:text-xl">
                &quot;From the heart of India to the world&apos;s kitchen.&quot;
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-8 py-6 text-xs font-bold tracking-widest uppercase border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
                  More About Us
                </Button>
              </Link>
            </div>
          </article>

          {/* Image Side */}
          <div className="relative group mx-auto w-full max-w-lg lg:max-w-full">
            {/* Clean, simple offset background rather than multiple rotated squares */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/20 rounded-xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 hidden md:block"></div>

            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square md:aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/landing_page.jpg"
                alt="Triad Global Trading - Quality Spices"
                fill
                className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
