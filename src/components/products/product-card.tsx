import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function ProductCard({
  id,
  title,
  description,
  image,
}: ProductCardProps) {

  return (
    <Card className="group w-full h-full flex flex-col p-0 overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
      <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="p-4 sm:p-5 flex flex-col flex-1">
        <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600 line-clamp-3 flex-1">
          {description}
        </CardDescription>

        <Link
          href={`/products/${id}`}
          className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm sm:text-base font-medium hover:bg-primary/20 transition-all"
        >
          Read More
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </CardHeader>
    </Card>
  );
}
