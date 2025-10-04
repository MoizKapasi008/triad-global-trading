import { Button } from "../../ui/button";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-start h-[60vh] md:h-[50vh] sm:h-[70vh] lg:h-screen w-full bg-cover bg-center bg-[url(/images/landing_page.jpg)]">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col text-secondary-foreground px-4 sm:px-6 md:px-12 py-8 max-w-lg sm:max-w-xl lg:max-w-2xl">
        <h1 className="text-xl sm:text-3xl md:text-3xl font-bold leading-snug sm:leading-tight lg:leading-snug">
          Discover the World&apos;s Best Spices: <br />
          From Tradition to Innovation!
        </h1>

        <Button
          variant="default"
          className=" mt-4 sm:mt-6 w-28 sm:w-32 bg-primary border border-white hover:text-secondary px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base transition duration-300 hover:bg-white hover:border-2"
        >
          KNOW MORE
        </Button>
      </div>
    </section>
  );
}
