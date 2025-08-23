import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex h-screen w-full bg-[url(/images/landing_page.jpg)] bg-cover bg-center relative">
        <div className="flex flex-col items-left text-white px-6 md:px-12 py-10">
          <p className="text-3xl font-bold text-left md:text-4xl">
            Discover the World's Best Spices: <br />
            From Tradition to Innovation!
          </p>
          <Button
            variant="default"
            className="hidden md:block my-3 w-32 bg-primary border border-white hover:text-secondary px-2 py-2 rounded-full"
          >
            KNOW MORE
          </Button>
        </div>
      </div>
      <div className="bg-secondary border border-secondary text-white h-auto w-full">
        {/* Container fluid equivalent */}
        <div className="w-full px-0">
          {/* Row equivalent with proper grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Text Content - Left Side (col-md-6 equivalent) */}
            <div className="flex flex-col justify-center px-6 md:px-12 py-8 md:py-12">
              <div className="space-y-6">
                {/* Title section */}
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
                    Hi, We Are Triad Global Trading !
                  </h2>
                </div>

                {/* Content section */}
                <div className="space-y-4">
                  <p className="text-base md:text-lg lg:text-xl font-light text-left leading-relaxed">
                    Since 2015, we've been exporting and importing spices,
                    oilseeds and herbs worldwide. Currently, we export to over
                    81 countries and import from more than 9 countries. Our
                    rapid growth over these 9 years is a testament to our
                    commitment to quality. As our tagline says,
                  </p>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-left">
                    "We grow Quality, We harvest Trust."
                  </h4>
                </div>
              </div>
            </div>

            {/* Image - Right Side (col-md-6 equivalent) */}
            <div className="hidden md:flex items-center justify-center p-0.2">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/images/landing_page.jpg"
                  alt="Triad Global Trading - Spices and Herbs"
                  className="w-full h-full max-h-[600px] object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full bg-tertiary">
        <div className=""></div>
      </div>
    </main>
  );
}
