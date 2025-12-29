import AboutHeroSection from "@/components/shared/hero/about-hero";
import { cn } from "@/lib/utils";

export default async function HarvestChartPage({ }) {
  // Harvest data for different commodities
  const harvestData = [
    // ... same data
    {
      name: "CARDAMOM",
      jan: "🌱",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "🌱",
      sep: "🌱",
      oct: "🌱",
      nov: "🌱",
      dec: "🌱",
    },
    {
      name: "CHILIES",
      jan: "🌶️",
      feb: "🌶️",
      mar: "🌶️",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "🌶️",
      sep: "🌶️",
      oct: "🌶️",
      nov: "",
      dec: "",
    },
    {
      name: "TURMERIC",
      jan: "🟡",
      feb: "🟡",
      mar: "🟡",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "MUSTARD",
      jan: "",
      feb: "🟡",
      mar: "🟡",
      apr: "🟡",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CASSIA",
      jan: "🌰",
      feb: "🌰",
      mar: "",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "FENNEL SEED",
      jan: "",
      feb: "",
      mar: "🟢",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "FENUGREEK SEED",
      jan: "",
      feb: "🟤",
      mar: "🟤",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CUMIN SEED",
      jan: "",
      feb: "🟤",
      mar: "🟤",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CORIANDER SEED",
      jan: "",
      feb: "🟤",
      mar: "🟤",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CELERY SEED",
      jan: "",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      jun: "⚪",
      jul: "⚪",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "DILL SEED",
      jan: "",
      feb: "🟢",
      mar: "🟢",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "BLACK PEPPER",
      jan: "⚫",
      feb: "",
      mar: "⚫",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "⚫",
      nov: "",
      dec: "",
    },
    {
      name: "CLOVES",
      jan: "🌺",
      feb: "",
      mar: "",
      apr: "🌺",
      may: "🌺",
      jun: "🌺",
      jul: "",
      aug: "🌺",
      sep: "🌺",
      oct: "🌺",
      nov: "🌺",
      dec: "",
    },
    {
      name: "BAY LEAVES",
      jan: "🍃",
      feb: "🍃",
      mar: "🍃",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "RED CHILLI POWDER",
      jan: "🔴",
      feb: "🔴",
      mar: "🔴",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CURRY POWDER",
      jan: "🟤",
      feb: "🟤",
      mar: "🟤",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CUMIN POWDER",
      jan: "🟤",
      feb: "🟤",
      mar: "🟤",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CORIANDER POWDER",
      jan: "🟢",
      feb: "🟢",
      mar: "🟢",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "AJWAIN SEEDS",
      jan: "🌾",
      feb: "🌾",
      mar: "🌾",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "GREEN CARDAMOM",
      jan: "🟢",
      feb: "🟢",
      mar: "🟢",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CLOVES STEM",
      jan: "🌿",
      feb: "",
      mar: "🌿",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "STAR ANISE",
      jan: "⭐",
      feb: "⭐",
      mar: "⭐",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "ONION FLAKES",
      jan: "🔴",
      feb: "🔴",
      mar: "🔴",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "HENNA LEAVES",
      jan: "🍃",
      feb: "🍃",
      mar: "🍃",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "HENNA PODS",
      jan: "🟤",
      feb: "🟤",
      mar: "🟤",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "HENNA EXTRACT",
      jan: "🟢",
      feb: "🟢",
      mar: "🟢",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "SESAME SEEDS",
      jan: "⚪",
      feb: "⚪",
      mar: "⚪",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "PEANUTS/ GROUNDNUT KERNELS",
      jan: "🥜",
      feb: "🥜",
      mar: "🥜",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "SUNFLOWER SEEDS",
      jan: "🌻",
      feb: "🌻",
      mar: "🌻",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "RICE",
      jan: "🌾",
      feb: "🌾",
      mar: "🌾",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "MILLET",
      jan: "🌾",
      feb: "",
      mar: "🌾",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CHICK PEAS",
      jan: "🫘",
      feb: "🫘",
      mar: "🫘",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "🫘",
      dec: "🫘",
    },
    {
      name: "PISTACHIO",
      jan: "🥜",
      feb: "🥜",
      mar: "🥜",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      name: "CASHEW",
      jan: "🥜",
      feb: "🥜",
      mar: "🥜",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
  ];

  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <AboutHeroSection
        title="Harvest Chart"
        description="Global availability timeline for our premium agricultural commodities."
      />

      <section className="relative py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="harvest-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#harvest-dots)" />
          </svg>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 mx-auto w-full px-6 lg:px-12 max-w-7xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-secondary/10 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white shadow-[0_35px_80px_rgba(0,0,0,0.08)] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary">
                      <th className="px-8 py-6 text-left font-black text-secondary text-[10px] tracking-[0.3em] uppercase border-b border-white/10 sticky left-0 bg-primary z-30 shadow-[5px_0_15px_rgba(0,0,0,0.1)]">
                        Commodities
                      </th>
                      {months.map((month) => (
                        <th
                          key={month}
                          className="px-6 py-6 text-center font-black text-secondary text-[10px] tracking-[0.3em] uppercase border-b border-white/10 min-w-[100px]"
                        >
                          {month}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {harvestData.map((item, index) => (
                      <tr
                        key={index}
                        className={cn(
                          "animate-in fade-in slide-in-from-bottom-4 duration-500 group/row transition-colors",
                          index % 2 === 0 ? "bg-transparent" : "bg-primary/[0.02]"
                        )}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="px-8 py-5 font-black text-primary text-sm uppercase tracking-tight border-b border-gray-100/50 sticky left-0 bg-white/95 backdrop-blur-md z-20 group-hover/row:text-secondary transition-colors">
                          {item.name}
                        </td>
                        {[
                          item.jan, item.feb, item.mar, item.apr, item.may, item.jun,
                          item.jul, item.aug, item.sep, item.oct, item.nov, item.dec,
                        ].map((monthVal, mIdx) => (
                          <td
                            key={mIdx}
                            className="px-6 py-5 text-center text-2xl border-b border-gray-100/50 group-hover/row:bg-primary/5 transition-colors cursor-default"
                          >
                            <span className="inline-block transition-transform duration-300 group-hover/row:scale-125">
                              {monthVal}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-xl px-10 py-5 rounded-full border border-white shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Harvest Ready</span>
              </div>
              <div className="h-4 w-px bg-primary/10" />
              <p className="text-[11px] font-medium text-gray-500 italic">
                * Timelines represent peak harvest periods and may vary slightly by region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

