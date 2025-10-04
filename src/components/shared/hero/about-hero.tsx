"use client";

interface AboutHeroSectionProps {
  title: string;
  description: string;
}

export default function AboutHeroSection({
  title,
  description,
}: AboutHeroSectionProps) {
  const staticHeroImage = "/images/aboutus.jpg"; // Static image path

  return (
    <section
      className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center text-secondary-foreground"
      style={{
        backgroundImage: `url(${staticHeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
