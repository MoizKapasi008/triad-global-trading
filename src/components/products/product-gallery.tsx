"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function ProductGallery({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <div className="md:sticky md:top-40">
        <div className="overflow-hidden rounded-lg relative">
          {isLoading && <Skeleton className="w-full h-[450px] rounded-lg" />}

          <Image
            src={image || ""}
            alt={title}
            width={600}
            height={450}
            className={`w-full h-auto object-cover transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
