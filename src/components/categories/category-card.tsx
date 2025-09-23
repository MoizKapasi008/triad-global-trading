import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/categories";

export default function CategoryCard({id, title, image }:Category) {
  return (
    <Link href={`/categories/${id}`}>
    <div className="rounded-lg shadow-lg overflow-hidden bg-white hover:scale-105 transition cursor-pointer">
      <Image src={image} alt={title} width={400} height={300} className="object-cover w-full h-48" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
    </Link>
  );
}
