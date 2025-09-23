import Image from "next/image";

export default function ProductGallery({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div>
      <div className="md:sticky md:top-40">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image || ""}
            alt={title}
            width={600}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
