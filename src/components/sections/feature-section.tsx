import { Feature, features } from "@/lib/feature";
import Image from "next/image";

function FeatureCard({ icon, title }: Feature) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg">
      {/* Icon Badge */}
      <div className="relative p-2 rounded-lg flex items-center justify-center flex-shrink-0  bg-primary icon-badge overflow-hidden">
        <Image
          src={icon}
          alt="Triad Global Trading - Spices and Herbs"
          width={60}
          height={60}
          className="w-12 h-12 object-cover shadow-lg relative z-10"
          priority
        />
      </div>

      {/* Title */}
      <div>
        <h3 className="font-bold mb-1 text-secondary-foreground text-base md:text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="bg-secondary border border-secondary text-white w-full my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px] lg:min-h-[500px] gap-6 lg:gap-8">
        {/* Image Side */}
        <div className="w-full h-[250px] sm:h-[300px] lg:h-full">
          <Image
            src={"/images/chilli-harvesting_1.jpg"}
            alt="Triad Global Trading - Spices and Herbs"
            width={800}
            height={600}
            className="w-full h-full object-cover shadow-lg"
            priority
          />
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4  py-6 lg:py-10 items-center">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
