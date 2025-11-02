export type SpecRow = { parameter: string; value: string };

export type Product = {
  id: string;
  title: string;
  categoryId: string;
  subtitle?: string;
  description: string;
  image: string;
  heroImage?: string;
  specs?: Record<string, string>;
  badges?: string[];
  detailSections?: { title: string; items: string[] }[];
  physicalSpecs?: SpecRow[];
  physicalSpecs2?: SpecRow[];
  chemicalSpecs?: SpecRow[];
  nutritionalSpecs?: SpecRow[];
  originMapSrc?: string;
  related_products?: { id: string; title: string; image: string }[];
};

export const products: Product[] = [
  // -------------------- SPICES --------------------
  {
    id: "whole-chilli",
    title: "Red Chilli Peppers",
    categoryId: "spices",
    description:
      "Turn up the heat and ignite your taste budswith the fiery kick of chilli peppers!",
    image: "/images/whole-chilli.jpg",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Varieties Available",
        items: [
          "S17 Teja Chilli (High pungency, bright red color)",
          "Sanam Chilli (334) (Moderate pungency, deep red color)",
          "Byadgi Chilli (Mild pungency, rich red color, high oil content)",
          "Wonder Hot Chilli",
          "Others : Guntur Chilli, 273 Wrinkle, 341, etc.",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: ["PP/Jute Bags: 25kg / 50kg"],
      },
      {
        title: "Custom packaging available as per buyer’s requirement.",
        items: ["Pouches, cartons, jars, etc."],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container : 7-8 Metric Tons, 40 FT Container : 14-15 Metric Tons",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Uniformly dried to preserve color and pungency",
          "Free from mold, infestation, and foreign material",
          "Suitable for direct consumption, grinding, or oleoresin extraction",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Length", value: "5-15 cm (varies with variety)" },
      { parameter: "Color", value: "Bright red, deep red (variety-specific)" },
      {
        parameter: "Pungency (SHU)",
        value: "15,000 to 100,000 SHU (variety-dependent)",
      },
      { parameter: "Moisture Content", value: "8-12% max" },
      { parameter: "Skin", value: "Smooth or Wrinkled" },
      { parameter: "Foreign Matter", value: "1-2% Max" },
      { parameter: "Broken Chilli", value: "1-2% Max" },
      { parameter: "Loose Seeds", value: "1-2% Max" },
    ],
    chemicalSpecs: [
      { parameter: "Capsaicin Content", value: "0.2%–0.5%" },
      {
        parameter: "Aflatoxin Level",
        value: "Below 5-10 ppb (As per EU standards)",
      },
      { parameter: "Total Ash", value: "6-8% max" },
      { parameter: "Non-volatile Ether Extract", value: "10-12%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: { "HS Code": "090421", Origin: "India" },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "turmeric-finger",
        title: "Turmeric Fingers",
        image: "/images/turmeric-finger.jpg",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
      },
      {
        id: "dry-ginger",
        title: "Dry Ginger",
        image: "/images/dryginger.webp",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
    ],
  },
  {
    id: "turmeric-finger",
    title: "Turmeric Fingers",
    categoryId: "spices",
    description:
      "Add a pop of color and a burst of flavor to your meals with the golden spice of turmeric.",
    image: "/images/turmeric-finger.jpg",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Varieties Available",
        items: [
          "Maharashtra Turmeric (Standard variety, bright yellow color)",
          "Salem Turmeric (Polished variety with medium curcumin)",
          "Kaddapa Turmeric (Large size, rich aroma)",
          "Nizamabad Turmeric (Small to medium size)",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags with poly liner: 25kg / 50kg",
          "Custom packaging options available (pouches, cartons, jars)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–24 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High curcumin content (2-5%) ensures vibrant color and health benefits.",
          "Polished and unpolished turmeric available based on requirement.",
          "Free from dust, stones, and foreign impurities.",
          "Suitable for grinding into powder, spice blends, medicinal uses, and curcumin extraction.",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Length", value: " 3 to 6 cm" },
      { parameter: "Color", value: "Bright yellow to deep orange" },
      { parameter: "Shape", value: "Cylindrical, smooth or rough texture" },
      { parameter: "Curcumin Content", value: "2% to 5% (variety-specific)" },
      {
        parameter: "Moisture Content",
        value: "8% to 12% max",
      },
      { parameter: "Foreign Matter", value: "0.5% to 2% max" },
      { parameter: "Defective Fingers", value: "2–3% max" },
      { parameter: "Polishing", value: "Available as polished or unpolished" },
      { parameter: "Aroma", value: "Earthy, strong and natural" },
    ],
    chemicalSpecs: [
      { parameter: "Curcumin Content", value: "1% to 5%" },
      { parameter: "Moisture", value: "8% to 12%" },
      { parameter: "Ash Content", value: "6-7% max" },
      { parameter: "Ash Insoluble in Acid", value: "1% to 2% max" },
      { parameter: "Volatile Oil", value: "3% to 5%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "091030",
      Curcumin: "2–5%",
      Moisture: "< 10%",
      Admixture: "< 1%",
      Origin: "India",
      Packaging: "25kg PP | Retail pouches | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "whole-chilli",
        title: "Whole Chilli",
        image: "/images/whole-red-chili-peppers.png",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
      },
      {
        id: "dry-ginger",
        title: "Dry Ginger",
        image: "/images/dryginger.webp",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
    ],
  },
  {
    id: "turmeric-powder",
    title: "Turmeric Powder",
    categoryId: "spices",
    description:
      "Add a pop of color and a burst of flavor to your meals with the golden spice of turmeric.",
    image: "/images/turmeric-powder.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Turmeric Powder",
          "Origin : India (Telangana, Andhra Pradesh, Tamil Nadu, Maharashtra, Karnataka)",
          "Botanical Name : Curcuma longa",
          "Form :Fine Powder",
          "Color : Bright Yellow to Golden Yellow",
          "Shelf Life : Up to 2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, HDPE Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or as per buyer requirements",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–24 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High-quality turmeric powder with consistent color, aroma, and flavor.",
          "Rich in curcumin content ensuring high medicinal and nutritional value.",
          "Free from artificial colors, additives, and preservatives.",
          "Cleaned, processed, and packaged under strict hygiene standards.",
        ],
      },
      {
        title: "Grades of tumeric powder",
        items: [
          "Premium Grade	: 5% or above",
          "Regular Grade	: 3% to 4%",
          "Industrial Grade	: 2% to 3%",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Bright yellow to golden yellow" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Ash Content",
        value: "7% to 9% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1.5% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "2% to 4%",
      },
      {
        parameter: "Flavor/Aroma",
        value: "Earthy, aromatic, and mildly bitter",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Curcumin Content", value: "2% to 5% (Varies by grade)" },
      { parameter: "Total Ash", value: "7% to 9% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Lead Content (Pb)", value: "Lessthan 2.5 ppm" },
      { parameter: "Arsenic Content", value: "Lessthan 1.1 ppm" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "091030",
      Curcumin: "2–5%",
      Moisture: "< 10%",
      Admixture: "< 1%",
      Origin: "India",
      Packaging: "25kg PP | Retail pouches | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "red-chilli-powder",
        title: "Red Chilli Powder",
        image: "/images/chillii-powder.jpg",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
      {
        id: "curry-powder",
        title: "Curry Powder",
        image: "/images/currypowder.webp",
      },
    ],
  },
  {
    id: "red-chilli-powder",
    title: "Red Chilli Powder",
    categoryId: "spices",
    description:
      "Add a fiery kick to your meals with the vibrant and versatile flavor of chili powder - the perfect way to spice up your life.",
    image: "/images/chillii-powder.jpg",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Chilli Powder (Red Chili Powder)",
          "Origin : India (Karnataka, Andhra Pradesh, Telangana, Madhya Pradesh)",
          "Botanical Name : Capsicum annuum (for most varieties)",
          "Form : Ground powder from dried red chilies",
          "Color : Bright red to deep red",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from light, heat, and moisture.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, HDPE Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or as customized packaging per buyer requirements",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Made from high-quality, sun-dried red chilies of selected varieties.",
          "Uniform color, texture, and flavor.",
          "Free from additives, artificial colors, and preservatives.",
          "High capsaicin content, providing the desired spiciness and heat.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Bright red color, fine texture, minimal impurity",
          "Regular Grade	: Slightly darker color, coarser texture, with minor impurity",
          "Industrial Grade	: Coarser grind, moderate color intensity, used in bulk production",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Bright red to deep red" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      {
        parameter: "Capsaicin Content",
        value: "0.5% to 1.5% (depending on variety)",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "0.5% to 1.5%",
      },
      {
        parameter: "Flavor/Aroma",
        value: "Spicy, pungent, and aromatic",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Capsaicin Content",
        value: "0.5% to 1.5% (Varies by variety)",
      },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Lead Content (Pb)", value: "Lessthan 2.5 ppm" },
      { parameter: "Arsenic Content", value: "Lessthan 1.1 ppm" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "curry-powder",
        title: "Curry Powder",
        image: "/images/currypowder.webp",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
    ],
  },
  {
    id: "nutmeg-whole",
    title: "Nutmeg Whole",
    categoryId: "spices",
    description:
      "Grate fresh nutmeg for a rich, aromatic flavor that enhances any dish with a warm, sweet touch.",
    image: "/images/nutmeg-whole.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Whole Nutmeg",
          "Origin : India (Primarily Kerala, Tamil Nadu)",
          "Botanical Name :Myristica fragrans",
          "Form :Whole dried nutmeg seed",
          "Family :Myristicaceae",
          "Shelf Life : Up to 2 years if stored in cool, dry conditions, away from direct sunlight and moisture.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP/Jute Bags, Cartons, or as per buyer requirements",
          "Sizes: 10kg, 25kg, 50kg bags",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container : 10-12 Metric Tons (MT)",
          "40 FT Container : 20-22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Indian nutmeg is known for its strong aroma, high volatile oil content (8-15%), and rich myristicin content (4-6%).",
          "Uniform color, texture, and flavor.",
          "Free from mold, pest infestation, and impurities.",
          "Sourced from premium Indian nutmeg-growing regions.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Grade A (Premium)	: Large size (22-26 mm), uniform color, minimal defects",
          "Grade B	: Medium size (18-22 mm), slightly mixed color",
          "Grade C	: Small size (lessthan 18 mm), minor defects allowed",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Shape", value: "Oval, elliptical" },
      { parameter: "Color", value: "Light brown to dark brown" },
      {
        parameter: "Size",
        value: "18 mm to 26 mm (variety-dependent)",
      },
      {
        parameter: "Weight",
        value: "4 to 7 grams per seed",
      },
      { parameter: "Texture", value: "Hard, smooth, and firm" },
      {
        parameter: "Aroma",
        value: "Strong, warm, and aromatic",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Foreign Matter", value: "0.5% to 1% max" },
      {
        parameter: "Damaged or Defective",
        value: "1% to 2% max",
      },
    ],
    chemicalSpecs: [
      { parameter: "Volatile Oil Content", value: "8% to 15%" },
      {
        parameter: "Myristicin Content",
        value: "4% to 6%",
      },
      { parameter: "Moisture", value: "8% to 12% max" },
      { parameter: "Ash Content", value: "2% to 3% max" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "cinnamon-cassia",
        title: "Cinnamon & Cassia",
        image: "/images/cinnamon-cassia.png",
      },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "star-anise",
        title: "Star Anise",
        image: "/images/star-anise.png",
      },
    ],
  },
  {
    id: "cumin-powder",
    title: "Cumin Powder",
    categoryId: "spices",
    description: "Spice up your life with the bold flavor of cumin !",
    image: "/images/cumin-powder.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Cumin Powder (Ground Cumin)",
          "Origin : India (Rajasthan, Gujarat, Uttar Pradesh, Madhya Pradesh)",
          "Botanical Name :Cuminum cyminum",
          "Form :Fine powder made from roasted or raw cumin seeds",
          "Color :Light brown to yellowish-brown",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, HDPE Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or as customized packaging per buyer requirements",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Prepared from premium-grade cumin seeds, cleaned and ground under hygienic conditions.",
          "Rich, earthy aroma and warm, slightly bitter taste distinctive of quality cumin.",
          "Uniform texture and natural color with no artificial additives or preservatives.",
          "Retains natural essential oils for enhanced flavor and digestive benefits.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, strong aroma, uniform color",
          "Regular Grade	: Slightly coarser texture, with slight discoloration",
          "Industrial Grade	: Slightly coarser texture, with slight discoloration",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Light brown to yellowish-brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "0.5% to 1.5%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Volatile Oil Content", value: "2% to 4%" },
      { parameter: "Fat Content", value: "10% to 15%" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "red-chilli-powder",
        title: "Red Chilli Powder",
        image: "/images/chillii-powder.jpg",
      },
      {
        id: "curry-powder",
        title: "Curry Powder",
        image: "/images/currypowder.webp",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
    ],
  },
  {
    id: "cinnamon-cassia",
    title: "Cinnamon & Cassia",
    categoryId: "spices",
    description:
      "Infuse your dishes with cassia—a warm, sweet spice that adds rich flavor and a comforting aroma.",
    image: "/images/cinnamon-cassia.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product Name : Imported Cinnamon",
          "Botanical Name : Cinnamomum verum (True Cinnamon)",
          "Family : Lauraceae",
          "Types : True Cinnamon (Ceylon Cinnamon), Cassia Cinnamon",
          "Origin : Sri Lanka (Ceylon Cinnamon), Vietnam, Indonesia",
          "Description : Imported cinnamon is known for its distinct aroma, sweet-spicy flavor, and various applications in cooking, baking, and health remedies. Ceylon cinnamon is softer and more aromatic, while Cassia cinnamon is robust and spicy.",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Food-grade bags or cartons, vacuum-sealed packs available.",
          "Common sizes: 10kg, 25kg, or customized.",
        ],
      },
      {
        title: "Storage :",
        items: [
          "Store in a cool, dry place, away from direct sunlight and moisture.",
          "Shelf Life :12–18 months under proper storage conditions.",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Prepared from premium-grade cumin seeds, cleaned and ground under hygienic conditions.",
          "Rich, earthy aroma and warm, slightly bitter taste distinctive of quality cumin.",
          "Uniform texture and natural color with no artificial additives or preservatives.",
          "Retains natural essential oils for enhanced flavor and digestive benefits.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, strong aroma, uniform color",
          "Regular Grade	: Slightly coarser texture, with slight discoloration",
          "Industrial Grade	: Slightly coarser texture, with slight discoloration",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "type", value: "Ceylon Cinnamon" },
      { parameter: "Appearance", value: "Thick, hard bark sticks" },
      { parameter: "Color", value: "Dark reddish-brown" },
      {
        parameter: "Length of Quills",
        value: "5–20 cm or custom-cut",
      },
      { parameter: "Thickness", value: "1–3 mm" },
      {
        parameter: "Moisture Content",
        value: "≤ 12%",
      },
      { parameter: "Purity", value: "≥ 99%" },
      { parameter: "Foreign Matter", value: "≤ 0.5%" },
    ],
    physicalSpecs2: [
      { parameter: "type", value: "Cassia Cinnamon" },
      { parameter: "Appearance", value: "Thin, delicate quills" },
      { parameter: "Color", value: "Light tan to golden brown" },
      {
        parameter: "Length of Quills",
        value: "5–10 cm, 15 cm, or custom-cut",
      },
      { parameter: "Thickness", value: "0.2–0.35 mm" },
      {
        parameter: "Moisture Content",
        value: "≤ 12%",
      },
      { parameter: "Purity", value: "≥ 99%" },
      { parameter: "Foreign Matter", value: "≤ 0.5%" },
    ],
    chemicalSpecs: [
      {
        parameter: "Volatile Oil Content",
        value: "≥ 1% (Ceylon); ≥ 2% (Cassia)",
      },
      { parameter: "Cinnamaldehyde Content", value: "≥ 55–65%" },
      { parameter: "Coumarin Content", value: "Low in Ceylon; High in Cassia" },
      { parameter: "Ash Content", value: "≤ 4%" },
      { parameter: "Acid Insoluble Ash", value: "≤ 1%" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      {
        parameter: "Microbial Load",
        value: "Compliant with food safety standards",
      },
    ],
    nutritionalSpecs: [
      { parameter: "Energy", value: "247 kcal" },
      { parameter: "Carbohydrates	", value: "81g" },
      { parameter: "Sugars", value: "2.2g" },
      { parameter: "Dietary Fiber", value: "53g" },
      { parameter: "Protein", value: "4g" },
      { parameter: "Fat", value: "1.2g" },
      { parameter: "Calcium", value: "1002mg" },
      { parameter: "Iron", value: "8.3mg" },
    ],
    originMapSrc: "/images/cassiamap.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "star-anise",
        title: "Star Anise",
        image: "/images/star-anise.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "nutmeg-whole",
        title: "Nutmeg Whole",
        image: "/images/nutmeg-whole.webp",
      },
    ],
  },
  {
    id: "corriander-powder",
    title: "Corriander Powder",
    categoryId: "spices",
    description:
      "Add a burst of freshness to your dishes with the zesty aroma of Corriander !",
    image: "/images/cumin-powder.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Corriander Powder (Ground Corriander)",
          "Origin : India",
          "Botanical Name :Coriandrum sativum",
          "Form :Fine powder made from dried Corriander seeds",
          "Color :Light brown to yellowish-brown",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container : 10-12 Metric Tons (MT)",
          "40 FT Container : 20-22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Made from high-quality Corriander seeds that are cleaned, dried, and finely ground.",
          "Rich, citrusy flavor and aromatic profile.",
          "Free from additives, artificial colors, and preservatives.",
          "Consistent color, texture, and flavor.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, strong aroma, uniform color",
          "Regular Grade	: Slightly coarser texture, minor discoloration",
          "Industrial Grade	: Coarser grind, used in bulk food processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Light brown to yellowish-brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Flavor/Aroma",
        value: "Warm, earthy, citrus-like with a mild sweetness",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "0.5% to 1.5%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Volatile Oil Content", value: "0.5% to 1.0%" },
      { parameter: "Fat Content", value: "10% to 15%" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "red-chilli-powder",
        title: "Red Chilli Powder",
        image: "/images/chillii-powder.jpg",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
      {
        id: "fenugreek-powder",
        title: "Fenugreek Powder",
        image: "/images/fenugreek-powder.webp",
      },
    ],
  },
  {
    id: "cloves",
    title: "Cloves",
    categoryId: "spices",
    description:
      "Add a warm, aromatic touch to your dishes with cloves—a potent spice that brings depth and a hint of sweetness.",
    image: "/images/clove.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Product Name : Cloves (Whole)",
          "Botanical Name : Syzygium aromaticum",
          "Form : Whole dried flower buds",
          "Origin : India (Kerala, Tamil Nadu, Karnataka), Sri Lanka, Indonesia, Madagascar",
          "Shelf Life : Up to 2 years when stored in a cool, dry place, away from moisture and sunlight.",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/Jute Bags or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg bags",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20-22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High volatile oil and eugenol content ensuring rich aroma and strong flavor.",
          "Handpicked and machine-cleaned for premium quality.",
          "Free from foreign matter, stems, and infestation.",
          "Available in multiple grades to meet various requirements.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Handpicked Superior (HPS) : Uniform size, color, and aroma",
          "Grade 1	: Clean, dark brown, less broken",
          "Grade 2	: Slight variation in size and color",
          "Grade 3	: Broken or smaller cloves",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Whole, dried flower buds" },
      { parameter: "Color", value: "Dark brown to reddish-brown" },
      { parameter: "Size", value: "10 mm to 16 mm" },
      { parameter: "Length", value: "1.2 cm to 2.0 cm" },
      { parameter: "Head", value: "Intact, round, firm, 4-6 mm diameter" },
      { parameter: "Texture", value: "Firm, hard, and aromatic" },
      { parameter: "Moisture Content", value: "10% to 12% max" },
      { parameter: "Foreign Matter", value: "0.5% to 1% max" },
      { parameter: "Stems", value: "1% to 3% max" },
      { parameter: "Damaged/Discolored Cloves", value: "2% max" },
      {
        parameter: "Volatile Oil Content",
        value: "12% to 18% (High Eugenol Content)",
      },
      {
        parameter: "Eugenol Content",
        value: "70% to 85%",
      },
      {
        parameter: "Density",
        value: "140 to 160 grams per 100 ml",
      },
      {
        parameter: "Odor/Aroma",
        value: "Strong, spicy, and aromatic",
      },
      {
        parameter: "Taste",
        value: "Pungent, warm, and slightly bitter",
      },
    ],
    chemicalSpecs: [
      { parameter: "Volatile Oil Content", value: "12% to 18%" },
      { parameter: "Eugenol Content", value: "70% to 85%" },
      { parameter: "Moisture Content", value: "10% to 12% max" },
      { parameter: "Total Ash", value: "5% to 7% max" },
      {
        parameter: "Acid Insoluble Ash",
        value: "1% to 2% max",
      },
    ],
    originMapSrc: "/images/clovesmap.jpg",
    specs: {
      "HS Code": "090411",
      Origin: "India",
      Packaging: "25kg PP | Retail jars | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "cinnamon-cassia",
        title: "Cinnamon & Cassia",
        image: "/images/cinnamon-cassia.png",
      },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      {
        id: "star-anise",
        title: "Star Anise",
        image: "/images/star-anise.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "nutmeg-whole",
        title: "Nutmeg Whole",
        image: "/images/nutmeg-whole.webp",
      },
    ],
  },
  {
    id: "fenugreek-powder",
    title: "Fenugreek Powder",
    categoryId: "spices",
    description:
      "Boost your dishes with the unique, aromatic flavor of fenugreek powder – a perfect addition to any meal.",
    image: "/images/fenugreek-powder.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Fenugreek Powder",
          "Origin : India (Rajasthan, Gujarat, Tamil Nadu, Uttar Pradesh)",
          "Botanical Name :Trigonella foenum-graecum",
          "Form :Fine powder made from dried fenugreek seeds",
          "Color : Yellowish-brown to light brown",
          "Shelf Life :Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Prepared from premium-grade cumin seeds, cleaned and ground under hygienic conditions.",
          "Rich, earthy aroma and warm, slightly bitter taste distinctive of quality cumin.",
          "Uniform texture and natural color with no artificial additives or preservatives.",
          "Retains natural essential oils for enhanced flavor and digestive benefits.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, uniform color, and minimal impurities",
          "Regular Grade	: Slightly coarser texture, mild discoloration",
          "Industrial Grade	: Coarser grind, used for bulk production and food processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Yellowish-brown to light brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Flavor/Aromas",
        value: "Slightly bitter, earthy, and mustard-like",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "0.5% to 1.5%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Volatile Oil Content", value: "0.5% to 1.5%" },
      { parameter: "Fat Content", value: "10% to 15%" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "curry-powder",
        title: "Curry Powder",
        image: "/images/currypowder.webp",
      },
      {
        id: "red-chilli-powder",
        title: "Red Chilli Powder",
        image: "/images/chillii-powder.jpg",
      },
    ],
  },
  {
    id: "dry-ginger",
    title: "Dry Ginger",
    categoryId: "spices",
    description:
      "Add a bold, spicy kick to your dishes with the intense flavor of dry ginger.",
    image: "/images/dryginger.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Product : Dry Ginger (Whole)",
          "Origin : India (Kerala, Karnataka, Tamil Nadu, and Northeastern regions)",
          "Botanical Name :Zingiber officinale",
          "Form :Whole dried ginger roots",
          "Family :Zingiberaceae",
          "Shelf Life : Up to 2 years when stored in a cool, dry place, away from sunlight and moisture",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20-22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High volatile oil content for strong aroma and flavor.",
          "Naturally dried to retain pungency and freshness.",
          "Free from foreign matter, stems, and infestation.",
          "Sourced from premium ginger-growing regions in India.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Grade A (Premium) : Large size, uniform light color, clean",
          "Grade B : Medium size, slight discoloration",
          "Grade C : Smaller pieces, irregular shapes",
          "Splits	: Broken ginger pieces",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Clean, fibrous, whole dried roots" },
      { parameter: "Color", value: "Light brown or pale yellow" },
      { parameter: "Shape", value: "Irregular, knobby fingers" },
      { parameter: "Length", value: "4 to 12 cm" },
      { parameter: "Diameter", value: "1 to 3 cm" },
      { parameter: "Texture", value: "Hard, rough, and fibrous" },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Foreign Matter", value: "0.5% to 1% max" },
      { parameter: "Impurities", value: "1% max" },
      { parameter: "Damaged/Discolored", value: "2% max" },
      { parameter: "Flavor/Aroma", value: "Strong, pungent, and aromatic" },
    ],
    chemicalSpecs: [
      { parameter: "Volatile Oil Content", value: "1.5% to 2.5%" },
      { parameter: "Gingerol Content", value: "1% to 2.5%" },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Ash Content", value: "6% max" },
      {
        parameter: "Acid Insoluble Ash",
        value: "1.5% max",
      },
      {
        parameter: "Fiber Content",
        value: "4% to 6% max",
      },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090411",
      Origin: "India",
      Packaging: "25kg PP | Retail jars | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-finger",
        title: "Turmeric Fingers",
        image: "/images/turmeric-finger.jpg",
      },
      {
        id: "whole-chilli",
        title: "Whole Chilli",
        image: "/images/whole-red-chili-peppers.png",
      },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "cinnamon-cassia",
        title: "Cinnamon & Cassia",
        image: "/images/cinnamon-cassia.png",
      },
    ],
  },
  {
    id: "nutmeg-powder",
    title: "Nutmeg Powder",
    categoryId: "spices",
    description:
      "Boost your dishes with the unique, aromatic flavor of fenugreek powder – a perfect addition to any meal.",
    image: "/images/nutmeg-powder.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Nutmeg Powder",
          "Origin : India (Kerala, Tamil Nadu, Karnataka)",
          "Botanical Name : Myristica fragrans",
          "Form :Fine powder made from dried nutmeg seeds",
          "Color : Light brown to yellowish-brown",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Made from high-quality nutmeg seeds, carefully cleaned and ground to fine powder.",
          "Distinctive aroma with a warm, sweet flavor profile.",
          "Free from additives, artificial colors, and preservatives.",
          "Consistent color, texture, and flavor for uniform quality.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, rich flavor, and uniform aroma",
          "Regular Grade	: Slightly coarser texture, minimal discoloration",
          "Industrial Grade	: Coarser grind, used in bulk food production and processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Light brown to yellowish-brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 10% max" },
      {
        parameter: "Flavor/Aromas",
        value: "Warm, slightly sweet, and aromatic with hints of clove",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "6% to 8%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Volatile Oil Content", value: "6% to 8%" },
      { parameter: "Fat Content", value: "35% to 40%" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "cinnamon-powder",
        title: "Cinnamon Powder",
        image: "/images/nutmeg-powder.webp",
      },
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
      {
        id: "black-pepper-powder",
        title: "Black Pepper Powder",
        image: "/images/black-pepper1.png",
      },
    ],
  },
  {
    id: "black-pepper",
    title: "Black Pepper",
    categoryId: "spices",
    description:
      "Enhance your meals with black pepper—a bold and versatile spice that brings warmth and depth to any dish.",
    image: "/images/black-pepper.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Product Name : Imported Black Pepper",
          "Origin : Vietnam, Indonesia, Brazil, Sri Lanka, or other exporting countries",
          "Botanical Name :Piper nigrum",
          "Type :Whole Black Pepper",
          "Family :Piperaceae",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Food-grade polybags, jute bags with liners, or customized vacuum-sealed packs.",
          "Common sizes: 25kg, 50kg, or tailored per buyer specifications.",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20-22 Metric Tons (MT)",
        ],
      },
      {
        title: "Storage",
        items: [
          "Store in a cool, dry place, away from direct sunlight and moisture.",
          "Up to 12–18 months under optimal storage conditions.",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High piperine content for intense pungency and robust flavor.",
          "Uniform, bold, and fully matured peppercorns with rich black color.",
          "Naturally sun-dried to preserve aroma and essential oils.",
          "Free from adulteration, foreign matter, and moisture contamination.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Grade A (Premium) : Large size, uniform light color, clean",
          "Grade B : Medium size, slight discoloration",
          "Grade C : Smaller pieces, irregular shapes",
          "Splits	: Broken ginger pieces",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Round, wrinkled berries" },
      { parameter: "Color", value: "Dark brown to black" },
      { parameter: "Shape", value: "Irregular, knobby fingers" },
      { parameter: "Length", value: "4 to 12 cm" },
      { parameter: "Diameter", value: "1 to 3 cm" },
      { parameter: "Texture", value: "Hard, rough, and fibrous" },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Foreign Matter", value: "0.5% to 1% max" },
      { parameter: "Impurities", value: "1% max" },
      { parameter: "Damaged/Discolored", value: "2% max" },
      { parameter: "Flavor/Aroma", value: "Strong, pungent, and aromatic" },
    ],
    chemicalSpecs: [
      { parameter: "Volatile Oil Content", value: "1.5% to 2.5%" },
      { parameter: "Gingerol Content", value: "1% to 2.5%" },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Ash Content", value: "6% max" },
      {
        parameter: "Acid Insoluble Ash",
        value: "1.5% max",
      },
      {
        parameter: "Fiber Content",
        value: "4% to 6% max",
      },
    ],
    nutritionalSpecs: [
      { parameter: "Energy", value: "255 kcal" },
      { parameter: "Carbohydrates", value: "65g" },
      { parameter: "Sugars", value: "0g" },
      { parameter: "Dietary Fiber", value: "26g" },
      { parameter: "Protein", value: "10g" },
      { parameter: "Fat", value: "3.3g" },
      { parameter: "Calcium", value: "437mg" },
      { parameter: "Iron", value: "9.7mg" },
      { parameter: "Potassium", value: "1329mg" },
    ],
    originMapSrc: "/images/black-peppermap.jpg",
    specs: {
      "HS Code": "090411",
      Origin: "India",
      Packaging: "25kg PP | Retail jars | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-finger",
        title: "Turmeric Fingers",
        image: "/images/turmeric-finger.jpg",
      },
      {
        id: "dry-ginger",
        title: "Dry Ginger",
        image: "/images/dryginger.webp",
      },
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      {
        id: "cinnamon-cassia",
        title: "Cinnamon & Cassia",
        image: "/images/cinnamon-cassia.png",
      },
    ],
  },
  {
    id: "cinnamon-powder",
    title: "Cinnamon Powder",
    categoryId: "spices",
    description:
      "Infuse your dishes with the sweet and spicy warmth of cinnamon powder for a delightful flavor boost.",
    image: "/images/nutmeg-powder.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Cinnamon Powder",
          "Origin : Sri Lanka, India, Vietnam, Indonesia",
          "Botanical Name :Cinnamomum verum (True Cinnamon) or Cinnamomum cassia (Cassia Cinnamon)",
          "Form :Fine powder made from ground cinnamon sticks (bark)",
          "Color : Light brown to reddish-brown",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Made from high-quality cinnamon bark, carefully ground to a fine powder.",
          "Distinctive sweet, warm aroma with a slightly spicy flavor profile.",
          "Free from additives, artificial colors, and preservatives.",
          "Consistent color, texture, and flavor for uniform quality.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, rich flavor, and uniform aroma",
          "Regular Grade	: Slightly coarser texture, minimal discoloration",
          "Industrial Grade	: Coarser grind, used in bulk food production and processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Light brown to reddish-brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "10% to 12% max" },
      {
        parameter: "Flavor/Aromas",
        value: "Sweet, warm, and aromatic with hints of spice",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "1.5% to 2.5%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "10% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Volatile Oil Content", value: "1.5% to 2.5%" },
      {
        parameter: "Cinnamaldehyde Content",
        value: "60% to 75% (for Cassia Cinnamon)",
      },
      {
        parameter: "Fat Content",
        value: "5% to 7%",
      },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "nutmeg-powder",
        title: "Nutmeg Powder",
        image: "/images/nutmeg-powder.webp",
      },
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
      {
        id: "black-pepper-powder",
        title: "Black Pepper Powder",
        image: "/images/black-pepper1.png",
      },
    ],
  },
  {
    id: "star-anise",
    title: "Star Anise",
    categoryId: "spices",
    description:
      "Elevate your dishes with star anise—a unique spice that offers a sweet, licorice-like flavor and an exotic touch.",
    image: "/images/star-anise.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Product Name : Imported Star Anise",
          "Origin : China, Vietnam, India",
          "Botanical Name :Illicium verum",
          "Type :Whole, Broken, Powdered",
          "Family : Schisandraceae",
          "Description : Star anise is a fragrant spice with a distinctive star-shaped appearance, widely used for its strong licorice-like flavor in culinary, medicinal, and aromatic applications.",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Food-grade polybags or cartons, vacuum-sealed packs available.",
          "Common sizes: 10kg, 20kg, 25kg, or customized as per buyer requirements .",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container : Up to 9–10 MT (Metric Tons)",
          "40 FT Container : Up to 18–20 MT (Metric Tons)",
        ],
      },
      {
        title: "Storage",
        items: [
          "Store in a cool, dry place, away from direct sunlight and moisture.",
          "12–18 months under proper storage conditions.",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Sourced from premium-quality star-shaped pods with uniform size and natural luster.",
          "Rich in anethole, providing a strong, sweet-licorice aroma and flavor.",
          "Naturally sun-dried to retain volatile oils and aromatic intensity.",
          "Free from broken pods, foreign matter, and artificial additives.",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Star-shaped pods with 6–10 arms" },
      { parameter: "Color", value: "Reddish-brown to dark brown" },
      { parameter: "Odor", value: "Strong, sweet licorice aroma" },
      { parameter: "Size", value: "2–4 cm diameter" },
      { parameter: "Diameter", value: "1 to 3 cm" },
      { parameter: "Moisture Content", value: "≤ 13%" },
      { parameter: "Foreign Matter", value: "≤ 0.5%" },
      { parameter: "Purity", value: "≥ 99%" },
      { parameter: "Broken Pods", value: "≤ 5%" },
      { parameter: "Seeds Content", value: "≥ 70% (in whole pods)" },
    ],
    chemicalSpecs: [
      { parameter: "Essential Oil Content", value: "≥ 8%" },
      { parameter: "Trans-Anethole Content", value: "≥ 85%" },
      { parameter: "Ash Content", value: "≤ 5%" },
      { parameter: "Acid Insoluble Ash", value: "≤ 1%" },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      {
        parameter: "Aflatoxin Levels",
        value: "≤ 10 ppb (As per EU/US standards)",
      },
      {
        parameter: "Microbial Load",
        value: "Compliant with food safety standards",
      },
    ],
    nutritionalSpecs: [
      { parameter: "Energy", value: "337 kcal" },
      { parameter: "Carbohydrates", value: "50g" },
      { parameter: "Sugars", value: "0g" },
      { parameter: "Dietary Fiber", value: "14g" },
      { parameter: "Protein", value: "18g" },
      { parameter: "Fat", value: "16g" },
      { parameter: "Calcium", value: "646mg" },
      { parameter: "Iron", value: "36.96mg" },
      { parameter: "Magnesium", value: "170mg" },
    ],
    originMapSrc: "/images/star-anisemap.jpg",
    specs: {
      "HS Code": "090411",
      Origin: "India",
      Packaging: "25kg PP | Retail jars | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "cinnamon-cassia",
        title: "Cinnamon & Cassia",
        image: "/images/cinnamon-cassia.png",
      },
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "dry-ginger",
        title: "Dry Ginger",
        image: "/images/dryginger.webp",
      },
      {
        id: "green-cardamom",
        title: "Green Cardamom",
        image: "/images/cardamom.png",
      },
    ],
  },
  {
    id: "curry-powder",
    title: "Curry Powder",
    categoryId: "spices",
    description:
      "Elevate your meals with the bold, aromatic flavor of curry powder – a perfect blend for any dish.",
    image: "/images/currypowder.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Indian Curry Powder",
          "Origin : India",
          "Botanical Name :Cinnamomum verum (True Cinnamon) or Cinnamomum cassia (Cassia Cinnamon)",
          "Form :Fine powder made from a blend of various ground spices",
          "Color : Golden yellow to reddish-brown",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "A blend of high-quality spices, carefully selected and ground to ensure rich, authentic flavor.",
          "Aromatic with a balance of sweet, spicy, and earthy flavors.",
          "Free from additives, artificial colors, and preservatives.",
          "Customizable blend to suit regional preferences or specific culinary needs.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, rich flavor, and uniform aroma",
          "Regular Grade	: Slightly coarser texture, minimal discoloration",
          "Industrial Grade	: Coarser grind, used in bulk food production and processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Golden yellow to reddish-brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "10% to 12% max" },
      {
        parameter: "Flavor/Aromas",
        value:
          "Warm, earthy, aromatic, with mild heat from chilies and spiciness from cloves and cinnamon",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "1% to 3%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Volatile Oil Content", value: "1% to 3%" },

      {
        parameter: "Fat Content",
        value: "10% to 15%",
      },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "red-chilli-powder",
        title: "Red Chilli Powder",
        image: "/images/chillii-powder.jpg",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "fenugreek-powder",
        title: "Fenugreek Powder",
        image: "/images/fenugreek-powder.webp",
      },
    ],
  },
  {
    id: "green-cardamom",
    title: "Green Cardamom",
    categoryId: "spices",
    description:
      "Spice up your life with cardamom—a versatile, healthy spice that adds luxury to any dish.",
    image: "/images/cardamom.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Product Name : Green Cardamom",
          "Common Names : Elaichi, True Cardamom, Chhoti Elaichi",
          "Origin : India",
          "Botanical Name : Elettaria cardamomum",
          "Shape : Oval-shaped pods with distinct ridges",
          "color : Bright green for premium quality",
          "Shelf Life :Up to 1.5 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Food-grade poly bags, jute bags, or vacuum-sealed packs",
          "Standard Sizes: 1kg, 5kg, 25kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container : 10 Metric Tons (MT)",
          "40 FT Container : 20 Metric Tons (MT)",
        ],
      },
      {
        title: "Storage",
        items: [
          "Store in a cool, dry place, away from direct sunlight and moisture.",
          "12–18 months under proper storage conditions.",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Sourced from premium-quality star-shaped pods with uniform size and natural luster.",
          "Rich in anethole, providing a strong, sweet-licorice aroma and flavor.",
          "Naturally sun-dried to retain volatile oils and aromatic intensity.",
          "Free from broken pods, foreign matter, and artificial additives.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Grade : Bold	, Size : >8mm	, Purity : 99.5%",
          "Grade : Super Bold , Size : >10mm , Purity : 99.5%",
          "Grade : Regular Grade , Size : 6mm to 8mm , Purity : 99%",
          "Grade : Mixed Grade , Size : Various sizes	, Purity : 98%",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Oval, smooth pods with ridges" },
      { parameter: "Color", value: "Bright green (uniform)" },
      {
        parameter: "Pod Size",
        value: "6mm to 8mm (Small), 8mm to 10mm (Medium), >10mm (Large)",
      },
      { parameter: "Purity", value: "99% to 99.5%" },
      { parameter: "Diameter", value: "1 to 3 cm" },
      { parameter: "Moisture Content", value: "10% to 12% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      { parameter: "Purity", value: "≥ 99%" },
      { parameter: "Admixture", value: "0.5% max" },
      { parameter: "Seeds per Pod", value: "15 to 20 seeds on average" },
      { parameter: "Odor", value: "Strong, sweet, and aromatic" },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "10% to 12% max" },
      { parameter: "Essential Oil Content", value: "4% to 8%" },
      { parameter: "Volatile Oil Content", value: "2% to 4%" },
      { parameter: "Protein Content", value: "10% to 12%" },
      {
        parameter: "Carbohydrates",
        value: "40% to 50%",
      },
      {
        parameter: "Fiber Content",
        value: "20% to 25%",
      },
      {
        parameter: "Ash Content",
        value: "5% max",
      },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      {
        parameter: "Microbial Load",
        value: "As per food safety standards",
      },
    ],

    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090411",
      Origin: "India",
      Packaging: "25kg PP | Retail jars | Custom",
    },
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "cinnamon-cassia",
        title: "Cinnamon & Cassia",
        image: "/images/cinnamon-cassia.png",
      },
      { id: "cloves", title: "Cloves", image: "/images/clove.png" },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "dry-ginger",
        title: "Dry Ginger",
        image: "/images/dryginger.webp",
      },
      {
        id: "star-anise",
        title: "Star Anise",
        image: "/images/star-anise.png",
      },
    ],
  },
  {
    id: "black-pepper-powder",
    title: "Black Pepper Powder",
    categoryId: "spices",
    description:
      "Enhance your dishes with the bold, zesty kick of black pepper powder.",
    image: "/images/black-pepper1.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Black Pepper Powder",
          "Origin : India (Kerala, Karnataka, Tamil Nadu, Andhra Pradesh)",
          "Botanical Name :Piper nigrum",
          "Form :Fine powder made from ground black peppercorns",
          "Color : Dark brown to black",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Made from high-quality black peppercorns, finely ground to powder.",
          "Spicy, pungent flavor with a warm, woody aroma.",
          "Free from additives, artificial colors, and preservatives.",
          "Consistent quality, uniform texture, and flavor.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, rich flavor, and consistent aroma",
          "Regular Grade	: Slightly coarser texture, minimal discoloration",
          "Industrial Grade	: Coarser grind, used in bulk food production and processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Dark brown to black" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 12% max" },
      {
        parameter: "Flavor/Aromas",
        value: "Pungent, spicy, with a warm, woody aroma",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "2.5% to 4%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 12% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Piperine Content", value: "5% to 9%" },
      { parameter: "Volatile Oil Content", value: "2.5% to 4%" },
      {
        parameter: "Fat Content",
        value: "7% to 10%",
      },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "ginger-powder",
        title: "Ginger Powder",
        image: "/images/ginger-powder.webp",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "red-chilli-powder",
        title: "Red Chilli Powder",
        image: "/images/chillii-powder.jpg",
      },
    ],
  },
  {
    id: "ginger-powder",
    title: "Ginger Powder",
    categoryId: "spices",
    description:
      "Add a warm, spicy kick to your dishes with the vibrant flavor of ginger powder.",
    image: "/images/ginger-powder.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Details",
        items: [
          "Product : Ginger Powder",
          "Origin : India (Kerala, Karnataka, Tamil Nadu, Odisha, Andhra Pradesh)",
          "Botanical Name :Zingiber officinale",
          "Form :Fine powder made from dried ginger rhizomes",
          "Color :Light brown to yellowish-brown",
          "Shelf Life : Up to 1-2 years when stored in a cool, dry place, away from moisture, light, and heat.",
        ],
      },

      {
        title: "Packing and Shipping Details",
        items: [
          "PP Bags, Paper Bags, or Cartons",
          "Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–22 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Made from high-quality ginger rhizomes, carefully cleaned, dried, and ground into a fine powder",
          "Spicy, pungent flavor with a warm, earthy aroma.",
          "Free from additives, artificial colors, and preservatives.",
          "Consistent quality, uniform texture, and flavor.",
        ],
      },
      {
        title: "Grades",
        items: [
          "Premium Grade	: Fine texture, rich flavor, and consistent aroma",
          "Regular Grade	: Slightly coarser texture, minimal discoloration",
          "Industrial Grade	: Coarser grind, used in bulk food production and processing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Appearance", value: "Fine, smooth, and uniform powder" },
      { parameter: "Color", value: "Light brown to yellowish-brown" },
      {
        parameter: "Particle Size",
        value: "80-100 mesh (customizable)",
      },
      { parameter: "Moisture Content", value: "8% to 10% max" },
      {
        parameter: "Flavor/Aromas",
        value: "Spicy, pungent, with a warm and earthy aroma",
      },
      {
        parameter: "Ash Content",
        value: "6% to 8% max",
      },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Foreign Matter", value: "0.5% max" },
      {
        parameter: "Volatile Oil Content",
        value: "1% to 3%",
      },
    ],
    chemicalSpecs: [
      { parameter: "Moisture Content", value: "8% to 10% max" },
      { parameter: "Total Ash", value: "6% to 8% max" },
      { parameter: "Acid Insoluble Ash", value: "1% max" },
      { parameter: "Pungency (Gingerol content)", value: "5% to 7%" },
      { parameter: "Volatile Oil Content", value: "1% to 3%" },
      {
        parameter: "Fat Content",
        value: "5% to 8%",
      },
      {
        parameter: "Pesticide Residue",
        value: "As per international standards",
      },
      { parameter: "Microbial Load", value: "As per food safety standards" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    badges: ["FSSAI", "HACCP", "ISO 22000"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "black-pepper-powder",
        title: "Black Pepper Powder",
        image: "/images/black-pepper1.png",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-powder",
        title: "Cumin Powder",
        image: "/images/cumin-powder.png",
      },
      {
        id: "cinnamon-powder",
        title: "Cinnamon Powder",
        image: "/images/nutmeg-powder.webp",
      },
    ],
  },

  // -------------------- HERBS & LEAVES --------------------
  {
    id: "fresh-basil",
    title: "Fresh Basil",
    categoryId: "herbs-leaves",
    description: "Aromatic herb widely used in Italian and Thai cuisines.",
    image: "/images/basil-sweet-leaves.webp",
    heroImage: "/images/fresh-green-herbs-and-leaves-mint-basil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Fresh, hand-picked basil leaves",
          "Strong aroma with a sweet, peppery flavor",
          "Popular in Italian dishes like pesto and pasta",
          "Used in Thai curries and stir-fries for its fragrance",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Fresh bunches packed in ventilated cartons",
          "Options: 100g, 250g, and bulk 5kg cartons",
          "Cold-chain maintained for freshness",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Farm fresh and naturally grown",
          "No artificial colors or preservatives",
          "Rich in antioxidants and essential oils",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Bright green leaves" },
      { parameter: "Form", value: "Fresh leaves" },
      { parameter: "Moisture Content", value: "75–85%" },
    ],
    chemicalSpecs: [
      { parameter: "Essential Oil Content", value: "0.5–1.5%" },
      { parameter: "Volatile Oils", value: "Linalool, Eugenol" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "070999",
      Origin: "India",
      Packaging: "Cartons | Custom",
    },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "mint-leaves",
        title: "Mint Leaves",
        image: "/images/mint-leaves.jpg",
      },
      {
        id: "curry-leaves",
        title: "Curry Leaves",
        image: "/images/curry-leaves.jpg",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
    ],
  },

  {
    id: "mint-leaves",
    title: "Mint Leaves",
    categoryId: "herbs-leaves",
    description: "Refreshing herb used in beverages, chutneys, and medicines.",
    image: "/images/mint-leaves.jpg",
    heroImage: "/images/fresh-green-herbs-and-leaves-mint-basil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Freshly harvested mint leaves",
          "Intense cooling flavor and aroma",
          "Widely used in teas, cocktails, and chutneys",
          "Applications in culinary, medicinal, and cosmetic industries",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Packed in ventilated cartons with moisture-retaining liners",
          "Options: 100g pouches, 250g cartons, 5kg bulk packs",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Naturally grown and pesticide-free",
          "Rich in menthol and essential oils",
          "Helps in digestion and provides cooling effect",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Bright green leaves" },
      { parameter: "Form", value: "Fresh leaves" },
      { parameter: "Moisture Content", value: "70–80%" },
    ],
    chemicalSpecs: [
      { parameter: "Menthol Content", value: "40–50%" },
      { parameter: "Volatile Oils", value: "1–2%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "091099",
      Origin: "India",
      Packaging: "Cartons | Pouches | Custom",
    },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "fresh-basil",
        title: "Fresh Basil",
        image: "/images/basil-sweet-leaves.webp",
      },
      {
        id: "curry-leaves",
        title: "Curry Leaves",
        image: "/images/curry-leaves.jpg",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
    ],
  },

  {
    id: "curry-leaves",
    title: "Curry Leaves",
    categoryId: "herbs-leaves",
    description:
      "Essential herb in South Indian cooking, aromatic and flavorful.",
    image: "/images/curry-leaves.jpg",
    heroImage: "/images/fresh-green-herbs-and-leaves-mint-basil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Fresh curry leaves sourced from organic farms",
          "Unique aroma and slightly bitter taste",
          "Integral in South Indian dishes like rasam, sambhar, and curries",
          "Used for flavoring tempering (tadka) in Indian cooking",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Packed in ventilated cartons or pouches with moisture control",
          "Available in 100g, 500g, and bulk 5kg packs",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Naturally grown and hand-picked",
          "Rich in antioxidants, iron, and vitamins",
          "Retains aroma when packed under cold-chain conditions",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Dark green glossy leaves" },
      { parameter: "Form", value: "Fresh leaves" },
      { parameter: "Moisture Content", value: "70–85%" },
    ],
    chemicalSpecs: [
      {
        parameter: "Alkaloids",
        value: "Carbazole alkaloids (antioxidant properties)",
      },
      { parameter: "Volatile Oils", value: "0.5–1%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "091099",
      Origin: "India",
      Packaging: "Cartons | Pouches | Custom",
    },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "mint-leaves",
        title: "Mint Leaves",
        image: "/images/mint-leaves.jpg",
      },
      {
        id: "fresh-basil",
        title: "Fresh Basil",
        image: "/images/basil-sweet-leaves.webp",
      },
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
    ],
  },

  // -------------------- SEEDS --------------------
  {
    id: "cumin-seeds",
    title: "Cumin Seeds",
    categoryId: "seeds",
    description: "Spice up your life with the bold flavor of cumin seeds!",
    image: "/images/cumin-seeds-in-bowl.png",
    heroImage: "/images/various-seeds-sesame-sunflower-black-seeds.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "High-quality dried cumin seeds sourced from premium farms",
          "Distinctive warm, earthy, and nutty flavor",
          "Widely used in spice blends, curries, soups, and snacks",
          "Applications: Culinary, medicinal, and seasoning industries",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags with poly liner: 25kg / 50kg",
          "Custom packaging available (pouches, jars, cartons)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–24 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Naturally dried and cleaned",
          "Free from artificial colors and preservatives",
          "Rich in essential oils for strong aroma",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Form", value: "Whole dried seeds" },
      { parameter: "Color", value: "Brownish-yellow" },
      { parameter: "Moisture Content", value: "10% max" },
    ],
    chemicalSpecs: [
      { parameter: "Volatile Oil", value: "2.5–4%" },
      { parameter: "Total Ash", value: "< 9%" },
      { parameter: "Acid Insoluble Ash", value: "< 1%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090931",
      Origin: "India",
      Packaging: "25kg PP | Retail pouches | Custom",
    },
    badges: ["FSSAI", "Kosher"],
    related_products: [
      {
        id: "corriander-powder",
        title: "Corriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "sesame-seeds",
        title: "Sesame Seeds",
        image: "/images/sesame-seeds.jpg",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "flax-seeds",
        title: "Flax Seeds",
        image: "/images/flax-seeds.jpg",
      },
    ],
  },

  {
    id: "sesame-seeds",
    title: "Sesame Seeds",
    categoryId: "seeds",
    description:
      "Nutty-flavored seeds used in bakery, oil extraction, and snacks.",
    image: "/images/sesame-seeds.jpg",
    heroImage: "/images/various-seeds-sesame-sunflower-black-seeds.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality natural sesame seeds",
          "Nutty flavor with high oil content",
          "Uses: Bakery, confectionery, oil extraction, and snacks",
          "Available in varieties: White, Black, Hulled",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/Jute Bags: 25kg / 50kg",
          "Custom packaging available (retail pouches, cartons, jars)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 19–20 Metric Tons (MT)",
          "40 FT Container: 25–26 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High oil content (45–50%)",
          "Rich in protein and minerals",
          "Available in natural and hulled forms",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "White, black, or golden" },
      { parameter: "Form", value: "Whole seeds" },
      { parameter: "Moisture Content", value: "6–8% max" },
    ],
    chemicalSpecs: [
      { parameter: "Oil Content", value: "45–50%" },
      { parameter: "Protein Content", value: "18–25%" },
      { parameter: "Ash", value: "< 5%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "120740",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "flax-seeds",
        title: "Flax Seeds",
        image: "/images/flax-seeds.jpg",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
      },
      {
        id: "almonds",
        title: "Almonds",
        image: "/images/almonds.jpg",
      },
    ],
  },

  {
    id: "flax-seeds",
    title: "Flax Seeds",
    categoryId: "seeds",
    description: "Rich in omega-3, fiber, and essential nutrients.",
    image: "/images/flax-seeds.jpg",
    heroImage: "/images/various-seeds-sesame-sunflower-black-seeds.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium grade flax seeds (linseeds)",
          "Mild nutty flavor with crunchy texture",
          "Used in bakery, cereals, health foods, and oil extraction",
          "Known for high omega-3 fatty acid content",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Custom packaging available (pouches, cartons, jars)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 19–20 Metric Tons (MT)",
          "40 FT Container: 25–26 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Rich in dietary fiber and omega-3 fatty acids",
          "Gluten-free and 100% natural",
          "Suitable for health-conscious and vegan diets",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Brown or golden" },
      { parameter: "Form", value: "Whole seeds" },
      { parameter: "Moisture Content", value: "6–8% max" },
    ],
    chemicalSpecs: [
      { parameter: "Oil Content", value: "35–45%" },
      { parameter: "Protein Content", value: "18–25%" },
      { parameter: "Fiber Content", value: "20–25%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "120400",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI", "Organic"],
    related_products: [
      {
        id: "sesame-seeds",
        title: "Sesame Seeds",
        image: "/images/sesame-seeds.jpg",
      },
      {
        id: "quinoa",
        title: "Quinoa",
        image: "/images/quinoa.png",
      },
      {
        id: "almonds",
        title: "Almonds",
        image: "/images/almonds.jpg",
      },
    ],
  },

  // -------------------- MILLETS & GRAINS --------------------
  {
    id: "foxtail-millet",
    title: "Foxtail Millet",
    categoryId: "millets-grains",
    description: "Highly nutritious millet with low glycemic index.",
    image: "/images/foxtail-millet.jpg",
    heroImage: "/images/millets-and-grains-in-wooden-spoons.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality foxtail millet, naturally dried",
          "Low glycemic index, rich in protein and fiber",
          "Used for porridge, upma, dosa, and baked goods",
          "Gluten-free and suitable for health-conscious diets",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Custom packaging available (pouches, cartons, jars)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–24 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Rich in protein, fiber, and essential minerals",
          "Naturally processed, pesticide-free",
          "Gluten-free and easy to cook",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Light yellow" },
      { parameter: "Form", value: "Whole grains" },
      { parameter: "Moisture Content", value: "10% max" },
    ],
    chemicalSpecs: [
      { parameter: "Protein", value: "12–15%" },
      { parameter: "Fiber", value: "8–10%" },
      { parameter: "Fat", value: "3–5%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "100821",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "quinoa",
        title: "Quinoa",
        image: "/images/quinoa.png",
      },
      {
        id: "barley",
        title: "Barley",
        image: "/images/barley.jpg",
      },
      {
        id: "flax-seeds",
        title: "Flax Seeds",
        image: "/images/flax-seeds.jpg",
      },
    ],
  },
  {
    id: "quinoa",
    title: "Quinoa",
    categoryId: "millets-grains",
    description: "Superfood rich in protein and fiber, gluten-free grain.",
    image: "/images/quinoa.png",
    heroImage: "/images/millets-and-grains-in-wooden-spoons.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality quinoa, cleaned and sorted",
          "Rich in protein, fiber, and essential amino acids",
          "Used in salads, soups, pilaf, and health foods",
          "Gluten-free superfood for healthy diets",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Custom packaging available (pouches, cartons, jars)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–24 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High protein and fiber content",
          "Naturally processed without chemicals",
          "Gluten-free, vegan-friendly, and easy to cook",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "White, red, or black" },
      { parameter: "Form", value: "Whole grains" },
      { parameter: "Moisture Content", value: "10% max" },
    ],
    chemicalSpecs: [
      { parameter: "Protein", value: "14–18%" },
      { parameter: "Fiber", value: "7–10%" },
      { parameter: "Fat", value: "3–6%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "100850",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI", "Organic"],
    related_products: [
      {
        id: "foxtail-millet",
        title: "Foxtail Millet",
        image: "/images/foxtail-millet.jpg",
      },
      {
        id: "barley",
        title: "Barley",
        image: "/images/barley.jpg",
      },
      {
        id: "flax-seeds",
        title: "Flax Seeds",
        image: "/images/flax-seeds.jpg",
      },
    ],
  },
  {
    id: "barley",
    title: "Barley",
    categoryId: "millets-grains",
    description: "Versatile grain used in soups, brewing, and health foods.",
    image: "/images/barley.jpg",
    heroImage: "/images/millets-and-grains-in-wooden-spoons.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality barley grains, cleaned and sorted",
          "Used in soups, brewing, multigrain flour, and health foods",
          "Rich in fiber, B vitamins, and minerals",
          "Suitable for healthy diets and livestock feed",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Custom packaging available (pouches, cartons, jars)",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 10–12 Metric Tons (MT)",
          "40 FT Container: 20–24 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High fiber content for digestive health",
          "Naturally processed, pesticide-free",
          "Versatile culinary and brewing applications",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Light brown" },
      { parameter: "Form", value: "Whole grains" },
      { parameter: "Moisture Content", value: "10% max" },
    ],
    chemicalSpecs: [
      { parameter: "Protein", value: "10–12%" },
      { parameter: "Fiber", value: "8–12%" },
      { parameter: "Fat", value: "2–4%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "100300",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "quinoa",
        title: "Quinoa",
        image: "/images/quinoa.png",
      },
      {
        id: "foxtail-millet",
        title: "Foxtail Millet",
        image: "/images/foxtail-millet.jpg",
      },
      {
        id: "flax-seeds",
        title: "Flax Seeds",
        image: "/images/flax-seeds.jpg",
      },
    ],
  },

  // -------------------- DRIED FRUITS & NUTS --------------------
  {
    id: "almonds",
    title: "Almonds",
    categoryId: "dried-fruits-nuts",
    description:
      "Premium California almonds, rich in protein and healthy fats.",
    image: "/images/almonds.jpg",
    heroImage: "/images/nuts-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "High-quality California almonds",
          "Rich in protein, fiber, and healthy monounsaturated fats",
          "Used in snacks, confectionery, bakery, and health foods",
          "Naturally crunchy and flavorful",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Retail packs and custom packaging available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 8–10 Metric Tons (MT)",
          "40 FT Container: 16–20 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Rich in vitamin E and antioxidants",
          "Naturally dried, no artificial additives",
          "Ideal for healthy snacking and baking",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Light brown" },
      { parameter: "Form", value: "Whole nuts" },
      { parameter: "Moisture Content", value: "5% max" },
    ],
    chemicalSpecs: [
      { parameter: "Protein", value: "20–25%" },
      { parameter: "Fat", value: "50–55%" },
      { parameter: "Fiber", value: "10–12%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "080212",
      Origin: "USA/India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "cashews",
        title: "Cashews",
        image: "/images/cashews.jpg",
      },
      {
        id: "raisins",
        title: "Raisins",
        image: "/images/raisins.jpg",
      },
      {
        id: "sesame-seeds",
        title: "Sesame Seeds",
        image: "/images/sesame-seeds.jpg",
      },
    ],
  },
  {
    id: "cashews",
    title: "Cashews",
    categoryId: "dried-fruits-nuts",
    description: "Crunchy, buttery nuts used in snacks and confectionery.",
    image: "/images/cashews.jpg",
    heroImage: "/images/nuts-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium cashew kernels, naturally processed",
          "Buttery taste and crunchy texture",
          "Used in snacks, sweets, bakery, and cooking",
          "High in healthy fats and protein",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Custom packaging for retail and bulk available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 7–9 Metric Tons (MT)",
          "40 FT Container: 15–18 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Rich in monounsaturated fats and minerals",
          "Naturally dried, pesticide-free",
          "Ideal for healthy snacking and cooking",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Creamy white" },
      { parameter: "Form", value: "Whole nuts" },
      { parameter: "Moisture Content", value: "5–6% max" },
    ],
    chemicalSpecs: [
      { parameter: "Protein", value: "18–22%" },
      { parameter: "Fat", value: "45–50%" },
      { parameter: "Fiber", value: "3–5%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "080131",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "almonds",
        title: "Almonds",
        image: "/images/almonds.jpg",
      },
      {
        id: "raisins",
        title: "Raisins",
        image: "/images/raisins.jpg",
      },
      {
        id: "desiccated-coconut",
        title: "Desiccated Coconut",
        image: "/images/desiccated-coconut.png",
      },
    ],
  },
  {
    id: "raisins",
    title: "Raisins",
    categoryId: "dried-fruits-nuts",
    description: "Naturally sun-dried grapes, sweet and chewy.",
    image: "/images/raisins.jpg",
    heroImage: "/images/nuts-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality sun-dried grapes",
          "Sweet, chewy, and naturally flavored",
          "Used in bakery, cereals, snacks, and cooking",
          "Free from artificial colors and preservatives",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Retail and bulk packaging options available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 9–10 Metric Tons (MT)",
          "40 FT Container: 18–20 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Naturally dried, sweet flavor",
          "Rich in antioxidants and dietary fiber",
          "Perfect for healthy snacking and baking",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Golden to dark brown" },
      { parameter: "Form", value: "Whole dried grapes" },
      { parameter: "Moisture Content", value: "15% max" },
    ],
    chemicalSpecs: [
      { parameter: "Sugar Content", value: "60–70%" },
      { parameter: "Fiber", value: "5–7%" },
      { parameter: "Protein", value: "2–3%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "080620",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "almonds",
        title: "Almonds",
        image: "/images/almonds.jpg",
      },
      {
        id: "cashews",
        title: "Cashews",
        image: "/images/cashews.jpg",
      },
      {
        id: "desiccated-coconut",
        title: "Desiccated Coconut",
        image: "/images/desiccated-coconut.png",
      },
    ],
  },

  // -------------------- DEHYDRATED PRODUCTS --------------------
  {
    id: "dehydrated-onion",
    title: "Dehydrated Onion",
    categoryId: "dehydrated-products",
    description: "Flakes, kibbled, powder, and granules for food processing.",
    image: "/images/dehydrated-onion.webp",
    heroImage: "/images/dehydrated-products-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium dehydrated onion products",
          "Available as flakes, granules, and powder",
          "Used in soups, sauces, seasonings, and ready-to-eat meals",
          "Long shelf life, easy to store and use",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Custom packaging for retail and bulk available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 8–10 Metric Tons (MT)",
          "40 FT Container: 16–18 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Retains natural flavor and aroma",
          "Uniform size and texture",
          "Ideal for food processing and ready meals",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Light brown" },
      { parameter: "Form", value: "Flakes / Granules / Powder" },
      { parameter: "Moisture Content", value: "7% max" },
    ],
    chemicalSpecs: [
      { parameter: "Sugar", value: "<5%" },
      { parameter: "Protein", value: "2–3%" },
      { parameter: "Ash", value: "<2%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "071220",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "dehydrated-garlic",
        title: "Dehydrated Garlic",
        image: "/images/dehydrated-garlic.jpg",
      },
      {
        id: "dehydrated-carrot",
        title: "Dehydrated Carrot",
        image: "/images/dehydrated-carrot.webp",
      },
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
    ],
  },
  {
    id: "dehydrated-garlic",
    title: "Dehydrated Garlic",
    categoryId: "dehydrated-products",
    description: "Powder and flakes with strong aroma and long shelf life.",
    image: "/images/dehydrated-garlic.jpg",
    heroImage: "/images/dehydrated-products-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "High-quality dehydrated garlic flakes and powder",
          "Strong aroma, ideal for seasoning and food processing",
          "Long shelf life, easy to store",
          "Used in soups, sauces, and ready meals",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Retail and bulk packaging options available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 8–10 Metric Tons (MT)",
          "40 FT Container: 16–18 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Maintains natural flavor and aroma",
          "Uniform size and texture",
          "Ideal for food processing and culinary applications",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "White to off-white" },
      { parameter: "Form", value: "Flakes / Powder" },
      { parameter: "Moisture Content", value: "7% max" },
    ],
    chemicalSpecs: [
      { parameter: "Protein", value: "2–3%" },
      { parameter: "Sugar", value: "<5%" },
      { parameter: "Ash", value: "<2%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "071290",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "dehydrated-onion",
        title: "Dehydrated Onion",
        image: "/images/dehydrated-onion.webp",
      },
      {
        id: "dehydrated-carrot",
        title: "Dehydrated Carrot",
        image: "/images/dehydrated-carrot.webp",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
    ],
  },
  {
    id: "dehydrated-carrot",
    title: "Dehydrated Carrot",
    categoryId: "dehydrated-products",
    description: "Convenient dried carrots for soups and ready meals.",
    image: "/images/dehydrated-carrot.webp",
    heroImage: "/images/dehydrated-products-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality dehydrated carrot flakes and powder",
          "Used in soups, sauces, ready-to-eat meals, and baking",
          "Retains natural color, flavor, and nutrients",
          "Long shelf life, easy to store",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Retail and bulk packaging options available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 8–10 Metric Tons (MT)",
          "40 FT Container: 16–18 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Retains natural nutrients and color",
          "Uniform size and texture",
          "Ideal for food processing and ready meals",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Orange" },
      { parameter: "Form", value: "Flakes / Powder" },
      { parameter: "Moisture Content", value: "7% max" },
    ],
    chemicalSpecs: [
      { parameter: "Sugar", value: "<6%" },
      { parameter: "Protein", value: "2–3%" },
      { parameter: "Ash", value: "<2%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "071290",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "dehydrated-onion",
        title: "Dehydrated Onion",
        image: "/images/dehydrated-onion.webp",
      },
      {
        id: "dehydrated-garlic",
        title: "Dehydrated Garlic",
        image: "/images/dehydrated-garlic.jpg",
      },
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
    ],
  },

  // -------------------- COCONUT PRODUCTS --------------------
  {
    id: "desiccated-coconut",
    title: "Desiccated Coconut",
    categoryId: "coconut-products",
    description: "Finely grated, dried coconut for confectionery and bakery.",
    image: "/images/desiccated-coconut.png",
    heroImage: "/images/coconut-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium grade desiccated coconut",
          "Used in confectionery, bakery, and cooking",
          "Retains natural flavor and aroma",
          "Free from artificial additives",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Retail and bulk packaging available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 9–10 Metric Tons (MT)",
          "40 FT Container: 18–20 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Naturally processed and finely grated",
          "Retains natural flavor and aroma",
          "Ideal for baking and confectionery",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "White" },
      { parameter: "Form", value: "Grated / Powder" },
      { parameter: "Moisture Content", value: "3–5% max" },
    ],
    chemicalSpecs: [
      { parameter: "Fat", value: "60–65%" },
      { parameter: "Protein", value: "5–6%" },
      { parameter: "Fiber", value: "10–12%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "080112",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "coconut-oil",
        title: "Coconut Oil",
        image: "/images/coconut-oil.webp",
      },
      {
        id: "coconut-milk-powder",
        title: "Coconut Milk Powder",
        image: "/images/coconut-milk-powder.jpeg",
      },
      {
        id: "cashews",
        title: "Cashews",
        image: "/images/cashews.jpg",
      },
    ],
  },
  {
    id: "coconut-oil",
    title: "Coconut Oil",
    categoryId: "coconut-products",
    description:
      "Cold-pressed and refined coconut oil for cooking and cosmetics.",
    image: "/images/coconut-oil.webp",
    heroImage: "/images/coconut-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium quality coconut oil",
          "Cold-pressed and refined for culinary and cosmetic use",
          "Maintains natural aroma and nutrients",
          "Suitable for cooking, hair, and skin care",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "Tin cans, PET bottles: 1L / 5L / 20L",
          "Custom packaging available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 18–20 Metric Tons (MT)",
          "40 FT Container: 36–38 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Cold-pressed, chemical-free",
          "Maintains natural aroma and nutrients",
          "Multi-purpose use (cooking, cosmetics)",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Clear / Pale yellow" },
      { parameter: "Form", value: "Liquid" },
      { parameter: "Moisture Content", value: "0% max" },
    ],
    chemicalSpecs: [
      { parameter: "Fat", value: "99–100%" },
      { parameter: "Free Fatty Acid", value: "<0.5%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "151319",
      Origin: "India",
      Packaging: "1L/5L/20L | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "desiccated-coconut",
        title: "Desiccated Coconut",
        image: "/images/desiccated-coconut.png",
      },
      {
        id: "coconut-milk-powder",
        title: "Coconut Milk Powder",
        image: "/images/coconut-milk-powder.jpeg",
      },
      {
        id: "sesame-seeds",
        title: "Sesame Seeds",
        image: "/images/sesame-seeds.jpg",
      },
    ],
  },
  {
    id: "coconut-milk-powder",
    title: "Coconut Milk Powder",
    categoryId: "coconut-products",
    description: "Spray-dried coconut milk powder for instant use.",
    image: "/images/coconut-milk-powder.jpeg",
    heroImage: "/images/coconut-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "High-quality spray-dried coconut milk powder",
          "Instant use for beverages, desserts, and cooking",
          "Retains natural flavor and aroma",
          "Free from additives and preservatives",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 25kg / 50kg",
          "Retail and custom packaging options available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 9–10 Metric Tons (MT)",
          "40 FT Container: 18–20 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Instant soluble, natural flavor",
          "High quality and shelf-stable",
          "Suitable for beverages, desserts, and cooking",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "White" },
      { parameter: "Form", value: "Powder" },
      { parameter: "Moisture Content", value: "3–5% max" },
    ],
    chemicalSpecs: [
      { parameter: "Fat", value: "60–65%" },
      { parameter: "Protein", value: "5–6%" },
      { parameter: "Carbohydrates", value: "25–30%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "210690",
      Origin: "India",
      Packaging: "25kg PP | Retail packs | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "coconut-oil",
        title: "Coconut Oil",
        image: "/images/coconut-oil.webp",
      },
      {
        id: "desiccated-coconut",
        title: "Desiccated Coconut",
        image: "/images/desiccated-coconut.png",
      },
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
    ],
  },

  // -------------------- COFFEE --------------------
  {
    id: "arabica-coffee",
    title: "Arabica Coffee Beans",
    categoryId: "coffee",
    description: "Smooth, aromatic beans with mild acidity and flavor.",
    image: "/images/arabica-coffee.webp",
    heroImage: "/images/coffee-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium Arabica coffee beans",
          "Smooth taste with mild acidity",
          "Used in espresso, filter coffee, and blends",
          "Naturally roasted and aromatic",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 5kg / 10kg / 60kg",
          "Retail and bulk packaging available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 6–8 Metric Tons (MT)",
          "40 FT Container: 12–16 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Aromatic and smooth flavor",
          "Premium quality beans, naturally processed",
          "Ideal for cafes, restaurants, and home brewing",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Brown" },
      { parameter: "Form", value: "Whole beans" },
      { parameter: "Moisture Content", value: "10% max" },
    ],
    chemicalSpecs: [
      { parameter: "Caffeine", value: "1–1.5%" },
      { parameter: "Fat", value: "15–17%" },
      { parameter: "Protein", value: "10–12%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090111",
      Origin: "India",
      Packaging: "5kg/10kg/60kg | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "robusta-coffee",
        title: "Robusta Coffee Beans",
        image: "/images/robusta-coffee.webp",
      },
      {
        id: "ground-coffee",
        title: "Ground Coffee",
        image: "/images/ground-coffee.png",
      },
    ],
  },
  {
    id: "robusta-coffee",
    title: "Robusta Coffee Beans",
    categoryId: "coffee",
    description:
      "Strong flavor, high caffeine content, used in blends and espresso.",
    image: "/images/robusta-coffee.webp",
    heroImage: "/images/coffee-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Premium Robusta coffee beans",
          "Strong flavor, high caffeine content",
          "Used in espresso, blends, and instant coffee",
          "Naturally processed and roasted",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 5kg / 10kg / 60kg",
          "Retail and bulk packaging options available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 6–8 Metric Tons (MT)",
          "40 FT Container: 12–16 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "High caffeine content",
          "Strong aroma and flavor",
          "Ideal for espresso, blends, and commercial use",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Dark brown" },
      { parameter: "Form", value: "Whole beans" },
      { parameter: "Moisture Content", value: "10% max" },
    ],
    chemicalSpecs: [
      { parameter: "Caffeine", value: "2–2.5%" },
      { parameter: "Fat", value: "15–17%" },
      { parameter: "Protein", value: "10–12%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090112",
      Origin: "India",
      Packaging: "5kg/10kg/60kg | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "arabica-coffee",
        title: "Arabica Coffee Beans",
        image: "/images/arabica-coffee.webp",
      },
      {
        id: "ground-coffee",
        title: "Ground Coffee",
        image: "/images/ground-coffee.png",
      },
    ],
  },
  {
    id: "ground-coffee",
    title: "Ground Coffee",
    categoryId: "coffee",
    description: "Freshly roasted and ground coffee, ready for brewing.",
    image: "/images/ground-coffee.png",
    heroImage: "/images/coffee-banner.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Freshly roasted and ground coffee",
          "Ready for instant brewing",
          "Retains aroma, flavor, and caffeine content",
          "Used in espresso, filter coffee, and blends",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags: 1kg / 5kg / 10kg",
          "Retail and bulk packaging available",
        ],
      },
      {
        title: "Container Load",
        items: [
          "20 FT Container: 6–8 Metric Tons (MT)",
          "40 FT Container: 12–16 Metric Tons (MT)",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Maintains natural aroma and flavor",
          "Premium quality, freshly roasted",
          "Ideal for home and commercial use",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Brown" },
      { parameter: "Form", value: "Powder" },
      { parameter: "Moisture Content", value: "5–7% max" },
    ],
    chemicalSpecs: [
      { parameter: "Caffeine", value: "1–1.5%" },
      { parameter: "Fat", value: "15–17%" },
      { parameter: "Protein", value: "10–12%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090121",
      Origin: "India",
      Packaging: "1kg/5kg/10kg | Custom",
    },
    badges: ["FSSAI"],
    related_products: [
      {
        id: "arabica-coffee",
        title: "Arabica Coffee Beans",
        image: "/images/arabica-coffee.webp",
      },
      {
        id: "robusta-coffee",
        title: "Robusta Coffee Beans",
        image: "/images/robusta-coffee.webp",
      },
    ],
  },
];

export function getAllProductSlugs() {
  return products.map((p) => p.id);
}

export function getProductBySlug(id: string) {
  return products.find((p) => p.id === id);
}

export async function getProductsByCategory(categoryId: string) {
  const data = products.filter((p) => p.categoryId === categoryId);
  return data;
}
