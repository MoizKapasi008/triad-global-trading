import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center w-full px-6 text-center space-y-6 pt-32 pb-16">
      <h1 className="text-6xl md:text-8xl font-black text-primary uppercase tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Page Not Found
      </h2>
      <p className="text-lg text-muted-foreground max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="pt-4 flex gap-4">
        <Link href="/">
          <Button variant="outline" className="rounded-full px-8 uppercase tracking-widest text-xs font-bold">
            Go Home
          </Button>
        </Link>
        <Link href="/products">
          <Button className="rounded-full px-8 uppercase tracking-widest text-xs font-bold">
            View Products
          </Button>
        </Link>
      </div>

      {/* Hidden Markdown block for agent recovery parsing HTML 404s */}
      <pre id="agent-help" className="hidden" aria-hidden="true">
        {`# 404 - Not Found
The requested page could not be found. 

## Recovery Links
- [Agent Instructions](/llms.txt)
- [Sitemap](/sitemap.xml)
- [Home](/)`}
      </pre>
    </main>
  );
}
