const fs = require('fs');
const path = require('path');
const { products } = require('../src/lib/products.ts');
const { categories } = require('../src/lib/categories.ts');

let content = `# Triad Global Trading - Complete Knowledge Base & Product Directory (llms-full.txt)

> Official exhaustive database of all products, specifications, packaging options, and export guidelines from Triad Global Trading (Rajkot, Gujarat, India).

## Company Profile
- Legal Name: Triad Global Trading
- Location: Bhomeshwar Plot, Jamnagar road, Rajkot, Gujarat 360006, India
- Ports: Mundra Port, Kandla Port, Pipavav Port
- Export Registrations: APEDA, Spices Board of India, FSSAI
- Contact: info@triadglobaltrading.com | +91 79904 29441
- Website: https://triadglobaltrading.com
- Sitemaps: https://triadglobaltrading.com/sitemap.xml

## Standard Export Terms
- Minimum Order Quantity (MOQ): 1 x 20ft FCL or custom mixed containers
- Standard Bulk Packaging: 25kg / 50kg PP bags, HDPE, jute sacks, multi-wall paper bags, vacuum-sealed bags
- Private Labeling: Custom retail boxes, pouches, pet jars with buyer branding
- Shipping Terms: FOB (Indian ports), CIF, CFR worldwide
- Payment Terms: L/C at sight, T/T advance

---

## Complete Product Catalog (${products.length} Products)

`;

for (const cat of categories) {
  const catProds = products.filter((p) => p.categoryId === cat.id);
  if (!catProds.length) continue;

  content += `### Category: ${cat.title}
Category Description: ${cat.description}
Category URL: https://triadglobaltrading.com/categories/${cat.id}

`;

  for (const prod of catProds) {
    content += `#### ${prod.title} (Slug: ${prod.id})
- URL: https://triadglobaltrading.com/products/${prod.id}
- Markdown Endpoint: https://triadglobaltrading.com/api/markdown?path=products/${prod.id}
- Description: ${prod.description}
`;

    if (prod.detailSections && prod.detailSections.length > 0) {
      for (const sec of prod.detailSections) {
        content += `- ${sec.title}:\n`;
        for (const item of sec.items) {
          content += `  * ${item}\n`;
        }
      }
    }

    const allSpecs = [
      ...(prod.physicalSpecs || []),
      ...(prod.physicalSpecs2 || []),
      ...(prod.chemicalSpecs || []),
      ...(prod.nutritionalSpecs || []),
    ];

    if (allSpecs.length > 0) {
      content += `- Technical Specifications:\n`;
      for (const spec of allSpecs) {
        content += `  * ${spec.parameter}: ${spec.value}\n`;
      }
    }

    content += `\n`;
  }
}

const outputPath = path.join(__dirname, '../public/llms-full.txt');
fs.writeFileSync(outputPath, content, 'utf8');
console.log(`Generated public/llms-full.txt with ${products.length} products`);
