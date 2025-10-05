"use client";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/categories";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

export default function CategoryCard({ id, title, image }: Category) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Link href={`/categories/${id}`}>
      <div className="rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transition cursor-pointer">
        {isLoading && <Skeleton className="w-full h-full absolute inset-0" />}
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-48"
          priority
          onLoadingComplete={() => setIsLoading(false)}
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
