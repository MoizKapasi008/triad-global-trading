import { Button } from "../../ui/button";

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full bg-cover bg-center bg-[url(/images/landing_page.jpg)]">
      <div className="flex flex-col text-white px-6 md:px-12 py-10 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Discover the World&apos;s Best Spices: <br />
          From Tradition to Innovation!
        </h1>
        <Button
          variant="default"
          className="hidden md:block my-3 w-32 bg-primary border border-white hover:text-secondary px-2 py-2 rounded-full"
        >
          KNOW MORE
        </Button>
      </div>
    </section>
  );
}
