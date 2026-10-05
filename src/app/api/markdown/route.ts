import { NextRequest, NextResponse } from "next/server";
import { products, getProductBySlug, getProductsByCategory } from "@/lib/products";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { aboutSections } from "@/lib/aboutUs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const rawPath = searchParams.get("path") || "";
  const cleanPath = rawPath.replace(/^\//, "").replace(/\/$/, "");

  const mdResponse = (content: string, status = 200) => {
    return new NextResponse(content, {
      status,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  };

  // 1. Home / Root
  if (cleanPath === "") {
    const md = `# Triad Global Trading

> Premier Indian Merchant Exporter & Wholesale Supplier of High-Grade Spices, Culinary Herbs, Oilseeds, and Agro Commodities.

## Company Overview
- **Headquarters**: Rajkot, Gujarat, India (Bhomeshwar Plot, Jamnagar Road, 360006)
- **Primary Sea Ports**: Mundra Port, Kandla Port, Pipavav Port (Gujarat, India)
- **Certifications & Compliance**: APEDA, Spices Board of India, FSSAI
- **Contact**: info@triadglobaltrading.com | +91 79904 29441
- **Official Website**: [https://triadglobaltrading.com](https://triadglobaltrading.com)

## Core Export Categories
${categories.map((c) => `- [${c.title}](/categories/${c.id}): ${c.description.slice(0, 120)}...`).join("\n")}

## Quick Links for AI Agents & Search Engines
- **Full Product Catalog**: [/products](/products) (49 export commodities)
- **Seasonal Harvest Calendar**: [/harvest](/harvest)
- **Quality Policy & Lab Standards**: [/quality-policy](/quality-policy)
- **Request a Commercial Quote**: [/inquiry](/inquiry)
- **Machine-Readable LLMs Manifest**: [/llms.txt](/llms.txt)
- **XML Sitemap**: [/sitemap.xml](/sitemap.xml)
`;
    return mdResponse(md);
  }

  // 2. Products List
  if (cleanPath === "products") {
    const md = `# Triad Global Trading - Complete Agro Commodities Catalog

Below is the verified list of all ${products.length} export products available from Triad Global Trading.

${categories
  .map((cat) => {
    const catProds = products.filter((p) => p.categoryId === cat.id);
    if (!catProds.length) return "";
    return `### Category: ${cat.title}
${catProds.map((p) => `- [${p.title}](/products/${p.id}) - Sourced from India. Standard packaging: 25kg/50kg PP/Jute bags.`).join("\n")}
`;
  })
  .filter(Boolean)
  .join("\n")}

## Procurement & Inquiries
To request technical specifications, Certificate of Analysis (COA), or FOB/CIF quotes:
- **Email**: info@triadglobaltrading.com
- **Inquiry Form**: [https://triadglobaltrading.com/inquiry](https://triadglobaltrading.com/inquiry)
`;
    return mdResponse(md);
  }

  // 3. Single Product: products/[productId]
  if (cleanPath.startsWith("products/")) {
    const slug = cleanPath.replace("products/", "");
    const product = getProductBySlug(slug);

    if (!product) {
      return mdResponse(`# 404 - Product Not Found\n\nThe product \`${slug}\` was not found. Browse all products at [/products](/products).`, 404);
    }

    const physicalSpecs = [
      ...(product.physicalSpecs || []),
      ...(product.physicalSpecs2 || []),
    ];
    const chemicalSpecs = product.chemicalSpecs || [];
    const nutritionalSpecs = product.nutritionalSpecs || [];

    const md = `# ${product.title} - Wholesale Export Specifications

- **Product ID / Slug**: \`${product.id}\`
- **Category**: ${product.categoryId}
- **Country of Origin**: India
- **Exporter**: Triad Global Trading (Rajkot, Gujarat, India)
- **Shipping Ports**: Mundra Port, Kandla Port, Pipavav Port
- **Canonical URL**: [https://triadglobaltrading.com/products/${product.id}](https://triadglobaltrading.com/products/${product.id})

## Description
${product.description}

${
  product.detailSections && product.detailSections.length > 0
    ? product.detailSections
        .map(
          (sec) => `### ${sec.title}
${sec.items.map((it) => `- ${it}`).join("\n")}`
        )
        .join("\n\n")
    : ""
}

${
  physicalSpecs.length > 0
    ? `## Physical Specifications
| Parameter | Value |
| --- | --- |
${physicalSpecs.map((s) => `| ${s.parameter} | ${s.value} |`).join("\n")}`
    : ""
}

${
  chemicalSpecs.length > 0
    ? `## Chemical Specifications
| Parameter | Value |
| --- | --- |
${chemicalSpecs.map((s) => `| ${s.parameter} | ${s.value} |`).join("\n")}`
    : ""
}

${
  nutritionalSpecs.length > 0
    ? `## Nutritional Value (Typical per 100g)
| Nutrient | Value |
| --- | --- |
${nutritionalSpecs.map((s) => `| ${s.parameter} | ${s.value} |`).join("\n")}`
    : ""
}

## Export & B2B Procurement Summary
- **Minimum Order Quantity (MOQ)**: 1 x 20ft Full Container Load (FCL) or custom mixed-commodity container.
- **Export Standards**: APEDA, Spices Board of India, FSSAI, Phytosanitary certification.
- **Packaging Options**: 25kg / 50kg PP bags, HDPE bags, paper bags, jute sacks, vacuum packaging, or custom private label retail boxes.
- **Incoterms**: FOB (Indian ports), CIF, CFR worldwide.
- **Inquiry**: Submit bulk RFQ at [https://triadglobaltrading.com/inquiry](https://triadglobaltrading.com/inquiry) or email info@triadglobaltrading.com.
`;
    return mdResponse(md);
  }

  // 4. Category: categories/[categoryId]
  if (cleanPath.startsWith("categories/")) {
    const slug = cleanPath.replace("categories/", "");
    const category = await getCategoryBySlug(slug);

    if (!category) {
      return mdResponse(`# 404 - Category Not Found\n\nBrowse all categories at [/products](/products).`, 404);
    }

    const catProducts = await getProductsByCategory(slug);

    const md = `# ${category.title} - Wholesale Export from India

## Category Overview
${category.description}

## Available Products (${catProducts.length})
${catProducts.map((p) => `- [${p.title}](/products/${p.id}) - ${p.description.slice(0, 100)}...`).join("\n")}

## Request a Quote
Contact Triad Global Trading for bulk export pricing and customized packaging:
- **Email**: info@triadglobaltrading.com
- **Inquiry Form**: [https://triadglobaltrading.com/inquiry](https://triadglobaltrading.com/inquiry)
`;
    return mdResponse(md);
  }

  // 5. Harvest Chart
  if (cleanPath === "harvest") {
    const md = `# Triad Global Trading - Indian Spice Harvest Calendar

Peak seasonal availability for Indian agro commodities to support timely international procurement:

| Commodity | Peak Harvest Months |
| --- | --- |
| Cardamom | August - January |
| Red Chilies | January - March, August - December |
| Cumin Seeds | February - April |
| Turmeric | February - April |
| Coriander Seeds | February - April |
| Fennel Seeds | February - May |
| Sesame Seeds | October - December |
| Mustard Seeds | February - April |
| Fenugreek | February - April |

## Harvest & Supply Notes
- Prices typically reach optimal competitiveness immediately following the peak harvest period.
- Warehousing: Stored in temperature-controlled facilities to preserve volatile oil content and color.
- Inquiry: [https://triadglobaltrading.com/inquiry](https://triadglobaltrading.com/inquiry)
`;
    return mdResponse(md);
  }

  // 6. Quality Policy
  if (cleanPath === "quality-policy") {
    const md = `# Quality Policy & Export Compliance - Triad Global Trading

Triad Global Trading implements rigorous quality assurance across all spice, herb, and agro commodity export operations.

## Key Compliance Pillars
1. **APEDA & Spices Board Compliance**: Sourcing and cleaning under authorized Indian agricultural export standards.
2. **Laboratory Testing**: Every export lot is tested for moisture %, purity %, total ash, volatile oil, microbial load, and aflatoxin limits.
3. **Phytosanitary Certification**: Official fumigation and plant health certificates issued by Indian quarantine authorities.
4. **Hygienic Warehousing & Packing**: Food-grade PP/paper/jute packaging with moisture barriers and tamper-evident sealing.

## Contact Quality Division
- **Email**: info@triadglobaltrading.com
`;
    return mdResponse(md);
  }

  // 7. About Pages
  if (cleanPath.startsWith("about")) {
    const aboutId = cleanPath.replace("about/", "").replace("about", "");
    const sec = aboutSections.find((s) => s.id === aboutId) || aboutSections[0];

    const md = `# About Triad Global Trading: ${sec ? sec.title : "Company Profile"}

Triad Global Trading is a leading Indian merchant exporter and global trader specializing in the export of premium spices, herbs, oilseeds, and agro products for the global trade market.

- **Location**: Rajkot, Gujarat, India
- **Core Operations**: Sourcing, mechanical cleaning, grading, custom packaging, and international container freight dispatch.
- **Port Logistics**: Convenient access to Mundra, Kandla, and Pipavav ports.
- **Inquiry**: [https://triadglobaltrading.com/inquiry](https://triadglobaltrading.com/inquiry)
`;
    return mdResponse(md);
  }

  // 8. Contact & Inquiry
  if (cleanPath === "contact" || cleanPath === "inquiry") {
    const md = `# Triad Global Trading - Export Inquiries & Contact

- **Company Name**: Triad Global Trading
- **Address**: Bhomeshwar Plot, Jamnagar road, Rajkot, Gujarat 360006, India
- **Phone**: +91 79904 29441
- **Email**: info@triadglobaltrading.com
- **Business Hours**: Monday to Saturday, 9:00 AM - 7:00 PM IST
- **Inquiry Form**: [https://triadglobaltrading.com/inquiry](https://triadglobaltrading.com/inquiry)
`;
    return mdResponse(md);
  }

  // 9. Fallback 404
  const notFoundMarkdown = `# 404 - Page Not Found

The requested markdown path \`/${cleanPath}\` does not exist.

## Recovery Links
- [Agent Instructions](/llms.txt)
- [Complete Product Catalog](/products)
- [XML Sitemap](/sitemap.xml)
- [Home](/)
`;
  return mdResponse(notFoundMarkdown, 404);
}
