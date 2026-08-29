import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85dvh] md:min-h-0 md:h-[80vh] lg:h-[90vh] overflow-hidden flex items-center">

      {/* Clean Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out opacity-100"
        style={{
          backgroundImage: "url(/images/landing_page.jpg)",
        }}
      >
        {/* Simple, soft dark gradient just from the bottom and left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      <Image
        src="/images/landing_page.jpg"
        alt="Hero background"
        fill
        className="hidden"
        priority
      />

      {/* Minimalist Content */}
      <div
        className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col justify-center pt-24 pb-12 md:pt-0 md:justify-end md:pb-24 h-full"
      >
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight text-white">
            Discover the World&apos;s <br />
            <span className="font-bold text-secondary">Finest Harvest</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed font-light">
            Premium quality spices, oilseeds, and herbs exported globally. Connecting you with nature&apos;s best from farm to table.
          </p>

          <div className="pt-4 flex items-center gap-6">
            <Link href="/products">
              <Button size="lg" className="rounded-full px-8 py-6 text-xs font-bold tracking-widest shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-secondary text-primary hover:bg-white hover:text-primary">
                EXPLORE PRODUCTS
              </Button>
            </Link>
            <Link href="/contact" className="text-white hover:text-secondary text-xs font-bold tracking-widest uppercase transition-colors hidden sm:block">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
