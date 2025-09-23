import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-secondary border border-secondary text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Text Side */}
        <article className="flex flex-col justify-center px-6 md:px-12 py-8 md:py-12 space-y-6">
          <h2 className="text-heading font-bold text-primary">
            Hi, We Are Triad Global Trading!
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
            Since 2015, we&apos;ve been exporting and importing spices,
            oilseeds, and herbs worldwide. Currently, we export to over 81
            countries and import from more than 9 countries. Our rapid growth
            over these 9 years is a testament to our commitment to quality. As
            our tagline says,
          </p>
          <h4 className="text-xl font-bold text-primary">
            &quot;We grow Quality, We harvest Trust.&quot;
          </h4>
        </article>

        {/* Image Side */}
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/images/landing_page.jpg"
            alt="Triad Global Trading - Spices and Herbs"
            width={800}
            height={600}
            className="w-full h-full max-h-[600px] object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
