import AboutHeroSection from "@/components/shared/hero/about-hero";

export default async function HarvestChartPage({}) {
  // Harvest data for different commodities
  const harvestData = [
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
      nov: "",
      dec: "",
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
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <main>
      <AboutHeroSection
        title="Harvest Chart"
        description="Track your harvest over time and make informed decisions about your crop's health and growth."
      />
      <section className="py-10 px-4 md:px-8  from-yellow-50 via-yellow-100 to-yellow-200">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full bg-yellow-100 border-collapse">
              <thead>
                <tr className="bg-primary">
                  <th className="px-4 py-3 text-left font-bold text-primary-foreground  border sticky left-0 bg-primary z-10">
                    COMMODITIES
                  </th>
                  {months.map((month) => (
                    <th
                      key={month}
                      className="px-4 py-3 text-center font-bold text-primary-foreground border min-w-[80px]"
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
                    className="hover:bg-secondary transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-red-600 border border-primary sticky left-0 bg-primary-foreground z-40">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.jan}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.feb}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.mar}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.apr}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.may}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.jun}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.jul}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.aug}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.sep}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.oct}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.nov}
                    </td>
                    <td className="px-4 py-3 text-center text-2xl border bg-primary-foreground border-primary">
                      {item.dec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
