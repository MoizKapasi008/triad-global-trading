import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Triad Global Trading, premier Indian import export global traders, for any inquiries regarding our premium spices and agro products for global trade.",
  keywords: ["import", "export", "trading", "triad", "global", "trade", "traders", "indian import export", "contact triad global trading"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
