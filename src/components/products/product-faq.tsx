import { HelpCircle, ShieldCheck, Package, Truck, FileCheck } from "lucide-react";

interface ProductFaqProps {
  productTitle: string;
}

export default function ProductFaq({ productTitle }: ProductFaqProps) {
  const faqs = [
    {
      icon: ShieldCheck,
      question: `What are the quality and export standards for ${productTitle}?`,
      answer: `${productTitle} exported by Triad Global Trading complies with international food safety benchmarks including APEDA, Spices Board of India, and FSSAI standards. Every consignment is inspected for moisture, purity, cleanliness, and sensory parameters with batch COA (Certificate of Analysis) provided.`,
    },
    {
      icon: Package,
      question: `What packaging options are available for ${productTitle}?`,
      answer: `We supply ${productTitle} in customizable export packaging including 25kg / 50kg PP bags, multi-wall paper bags, jute sacks, vacuum-sealed bags, or buyer-specific private label retail packaging with branded barcodes and custom labeling.`,
    },
    {
      icon: Truck,
      question: `What is the Minimum Order Quantity (MOQ) and shipping terms?`,
      answer: `Our standard export orders are fulfilled as 20ft (FCL) or 40ft (FCL) container loads, with mixed-container shipments available across our agro categories. We support FOB (Mundra, Kandla, Pipavav ports), CIF, and CFR Incoterms with prompt dispatch.`,
    },
    {
      icon: FileCheck,
      question: `Can I request a sample and specification sheet for ${productTitle}?`,
      answer: `Yes, commercial buyers can request pre-shipment product samples and complete technical specification sheets by reaching out via our Inquiry page or directly emailing info@triadglobaltrading.com.`,
    },
  ];

  return (
    <section className="py-12 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle className="w-5 h-5 text-secondary" />
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            B2B Procurement Guide
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          Frequently Asked Questions about {productTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/5 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
