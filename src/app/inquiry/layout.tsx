import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry",
  description: "Request a quote or send an inquiry for bulk orders of spices, herbs, and agro products from Triad Global Trading, your trusted Indian import export traders.",
  keywords: ["import", "export", "trading", "triad", "global", "trade", "traders", "indian import export", "inquiry", "bulk spice export"],
};

export default function InquiryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
