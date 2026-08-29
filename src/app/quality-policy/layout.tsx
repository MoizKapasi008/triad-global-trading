import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Policy",
  description: "Learn about Triad Global Trading's strict quality control measures. We are premier Indian import export traders committed to delivering the purest agro products for global trade.",
  keywords: ["import", "export", "trading", "triad", "global", "trade", "traders", "indian import export", "quality policy", "export quality"],
};

export default function QualityPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
