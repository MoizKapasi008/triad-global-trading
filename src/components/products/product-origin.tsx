
export default function ProductOrigin({ originMapSrc }: { originMapSrc?: string }) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1140px] mt-10 space-y-8">
      <h3 className="text-center text-heading text-primary mb-6">Product Origin</h3>
      <div className="overflow-hidden rounded-md">
        <img
          src={originMapSrc || "/world-map-with-india-highlighted.png"}
          alt="Product origin map"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
