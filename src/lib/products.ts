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
  chemicalSpecs?: SpecRow[];
  originMapSrc?: string;
  related_products?: { id: string; title: string; image: string }[];
};

export const products: Product[] = [
  // -------------------- SPICES --------------------
  {
    id: "whole-chilli",
    title: "Whole Chilli",
    categoryId: "spices",
    description:
      "Turn up the heat and ignite your taste buds with the fiery kick of chilli!",
    image: "/images/whole-red-chili-peppers.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: ["S17 Teja Chilli", "Sanam Chilli (334)", "Byadgi Chilli"],
      },
      {
        title: "Packing and Shipping Details",
        items: ["PP/Jute Bags: 25kg / 50kg"],
      },
    ],
    physicalSpecs: [
      { parameter: "Length", value: "5–15 cm" },
      { parameter: "Color", value: "Bright red" },
    ],
    chemicalSpecs: [{ parameter: "Capsaicin Content", value: "0.2%–0.5%" }],
    originMapSrc: "/images/product-origin.jpg",
    specs: { "HS Code": "090421", Origin: "India" },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "coriander-powder",
        title: "Coriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
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
        title: "Product Information",
        items: [
          "Made from high-quality turmeric rhizomes",
          "Bright yellow-orange color with strong aroma",
          "Rich in curcumin, known for anti-inflammatory properties",
          "Uses: Cooking, medicinal formulations, cosmetics, and dyes",
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
          "Naturally sun-dried and finely ground",
          "Free from artificial colors and preservatives",
          "High curcumin content for enhanced quality",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Bright yellow to orange-yellow" },
      { parameter: "Form", value: "Fine powder" },
      { parameter: "Moisture Content", value: "8–10% max" },
      { parameter: "Foreign Matter", value: "< 1%" },
    ],
    chemicalSpecs: [
      { parameter: "Curcumin Content", value: "2–5%" },
      { parameter: "Total Ash", value: "< 9%" },
      { parameter: "Acid Insoluble Ash", value: "< 1%" },
      { parameter: "Lead Content", value: "< 2.5 ppm" },
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
        id: "coriander-powder",
        title: "Coriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
      },
    ],
  },
  {
    id: "black-pepper",
    title: "Black Pepper",
    categoryId: "spices",
    description:
      "The 'King of Spices', known for its bold flavor and medicinal properties.",
    image: "/images/black-pepper.webp",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Whole dried black pepper berries sourced from premium farms",
          "Pungent aroma and sharp, biting taste",
          "Widely used as a spice and seasoning in global cuisines",
          "Applications: Cooking, sauces, spice blends, and medicinal uses",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/Jute Bags: 25kg / 50kg",
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
          "Naturally sun-dried berries",
          "Free from artificial additives",
          "High piperine content for strong flavor",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Form", value: "Whole dried berries" },
      { parameter: "Color", value: "Black to dark brown" },
      { parameter: "Moisture Content", value: "12% max" },
    ],
    chemicalSpecs: [
      { parameter: "Piperine Content", value: "3–5%" },
      { parameter: "Volatile Oil", value: "1–2.5%" },
      { parameter: "Total Ash", value: "< 7%" },
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
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "whole-chilli",
        title: "Whole Chilli",
        image: "/images/whole-red-chili-peppers.png",
      },
      {
        id: "coriander-powder",
        title: "Coriander Powder",
        image: "/images/corriander-powder.png",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
      },
    ],
  },

  {
    id: "coriander-powder",
    title: "Coriander Powder",
    categoryId: "spices",
    description: "A staple spice with a warm, citrusy flavor.",
    image: "/images/corriander-powder.png",
    heroImage: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
    detailSections: [
      {
        title: "Product Information",
        items: [
          "Made from freshly ground, high-quality coriander seeds",
          "Aromatic spice with a mild, citrusy, and nutty flavor",
          "Commonly used in curries, spice blends, soups, and pickles",
          "Adds freshness and depth to culinary preparations",
        ],
      },
      {
        title: "Packing and Shipping Details",
        items: [
          "PP/HDPE Bags with poly liner: 25kg / 50kg",
          "Custom packaging options (pouches, cartons, jars)",
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
          "Finely ground for smooth texture",
          "Free from artificial colors and preservatives",
          "Rich in natural essential oils for enhanced aroma",
        ],
      },
    ],
    physicalSpecs: [
      { parameter: "Color", value: "Light brown to greenish-brown" },
      { parameter: "Form", value: "Fine powder" },
      { parameter: "Moisture Content", value: "8–10% max" },
      { parameter: "Foreign Matter", value: "< 1%" },
    ],
    chemicalSpecs: [
      { parameter: "Volatile Oil", value: "0.3–1%" },
      { parameter: "Total Ash", value: "< 9%" },
      { parameter: "Acid Insoluble Ash", value: "< 1%" },
    ],
    originMapSrc: "/images/product-origin.jpg",
    specs: {
      "HS Code": "090921",
      Origin: "India",
      Packaging: "25kg PP | Retail pouches | Custom",
    },
    badges: ["FSSAI", "HACCP"],
    related_products: [
      {
        id: "turmeric-powder",
        title: "Turmeric Powder",
        image: "/images/turmeric-powder.png",
      },
      {
        id: "cumin-seeds",
        title: "Cumin Seeds",
        image: "/images/cumin-seeds-in-bowl.png",
      },
      {
        id: "black-pepper",
        title: "Black Pepper",
        image: "/images/black-pepper.webp",
      },
      {
        id: "curry-leaves",
        title: "Curry Leaves",
        image: "/images/curry-leaves.jpg",
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
        id: "coriander-powder",
        title: "Coriander Powder",
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
        id: "coriander-powder",
        title: "Coriander Powder",
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
        id: "coriander-powder",
        title: "Coriander Powder",
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
        id: "coriander-powder",
        title: "Coriander Powder",
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
  }  
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
