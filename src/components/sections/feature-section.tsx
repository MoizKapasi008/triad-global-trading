import { Feature, features } from "@/lib/feature";
import Image from "next/image";

function FeatureCard({ icon, title }: Feature) {
  return (
    <div className="flex items-center space-x-3 p-2 ">
      <div className="p-2 rounded-lg flex items-center bg-primary justify-center flex-shrink-0 mt-1">
        <Image
          src={icon}
          alt="Triad Global Trading - Spices and Herbs"
          width={60}
          height={60}
          className="w-12 h-12  object-cover shadow-lg"
          priority
        />
      </div>
      <div>
        <h3 className="font-bold mb-1 text-primary">{title}</h3>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
      <section className="bg-secondary border border-secondary text-white w-full my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] gap-8">
          {/* Image Side */}
           <div className="flex items-center justify-center">
            <Image
              src={"/images/chilli-harvesting_1.jpg"}
              alt="Triad Global Trading - Spices and Herbs"
              width={800}
              height={600}
              className="w-full h-full  object-cover shadow-lg"
              priority
            />
          </div>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2  px-container py-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
  );
}
