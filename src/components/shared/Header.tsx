"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div>
        <div className="w-full bg-[#D0D958]">
          <div className="container flex h-10 items-center justify-between grid-cols-3 px-4 py-2">
            {/* Your content here */}
          </div>
        </div>
        <div className="w-full bg-[#166F59]">
          <div className="container flex h-22 items-center justify-between">
            {/* Your content here */}
          </div>
        </div>
      </div>
    </header>
  );
}
