import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductDetails({
  detailSections,
  badges,
}: {
  detailSections?: { title: string; items: string[] }[];
  badges?: string[];
}) {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {detailSections?.map((group, idx) => (
          <div
            key={group.title}
            className="animate-in fade-in slide-in-from-right-8 duration-700"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="h-0.5 w-12 bg-secondary" />
              <h3 className="text-lg font-black text-primary uppercase tracking-[0.3em]">
                {group.title}
              </h3>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-card backdrop-blur-xl supports-[backdrop-filter]:bg-card rounded-3xl p-8 border border-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5 text-gray-700 font-medium">
                  {group.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-4 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary/40 rounded-full blur-sm group-hover/item:scale-150 transition-transform duration-500" />
                        <span className="relative block w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(255,193,7,0.5)]" />
                      </div>
                      <span className="text-sm md:text-base leading-snug group-hover/item:text-primary transition-colors">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      {badges?.length ? (
        <div className="flex flex-wrap gap-3 py-6 border-y border-gray-200/50">
          {badges.map((b) => (
            <Badge key={b} variant="outline" className="px-6 py-2 text-[9px] font-black tracking-[0.25em] uppercase border-primary/10 bg-white/80 text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-500 rounded-full shadow-sm">
              {b}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Buttons */}
      <div className="pt-4">
        <Button asChild className="group relative overflow-hidden w-full md:w-auto min-w-[280px] bg-primary text-secondary px-10 py-8 rounded-full transition-all duration-700 font-black text-sm tracking-[0.3em] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(255,193,7,0.2)] hover:-translate-y-1 active:scale-95">
          <Link href="/inquiry" className="relative z-10 inline-flex items-center justify-center gap-4">
            INQUIRY NOW
            <div className="relative flex items-center">
              <div className="w-8 h-[2px] bg-secondary group-hover:w-16 transition-all duration-500 ease-out" />
              <div className="absolute right-0 w-2 h-2 border-t-2 border-r-2 border-secondary rotate-45 group-hover:translate-x-8 transition-all duration-500 ease-out" />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
