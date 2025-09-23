export interface Category {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "spices",
    title: "Spices",
    description:
      "Asian Spices, specifically Indian Spices are famous all over the world. We at Kore Agro are one of the leading exporters of Spices across the globe. We export spices in grounded as well as whole form including Chili, Turmeric, Cumin, Fennel, Fenugreek, Coriander and many more.",
    image: "/images/various-colorful-spices-in-bowls-turmeric-red-chil.jpg",
  },
  {
    id: "herbs-leaves",
    title: "Herbs And Leaves",
    description:
      "We supply a wide variety of fresh and dried herbs and leaves such as Basil, Mint, Curry Leaves, Coriander, and more. Perfect for culinary, medicinal, and aromatic purposes, sourced directly from trusted farms.",
    image: "/images/fresh-green-herbs-and-leaves-mint-basil.jpg",
  },
  {
    id: "seeds",
    title: "Seeds",
    description:
      "Kore Agro offers a wide range of healthy seeds including Sunflower, Sesame, Pumpkin, Flax, and Chia seeds. Ideal for cooking, baking, or health supplements, our seeds are high-quality and globally certified.",
    image: "/images/various-seeds-sesame-sunflower-black-seeds.jpg",
  },
  {
    id: "millets-grains",
    title: "Millets And Grains",
    description:
      "Our collection of nutritious millets and grains includes Pearl Millet, Foxtail Millet, Quinoa, Barley, and more. Perfect for healthy diets, cereals, and food processing industries.",
    image: "/images/millets-and-grains-in-wooden-spoons.jpg",
  },
  {
    id: "dried-fruits-nuts",
    title: "Dried Fruits And Nuts",
    description:
      "We provide premium quality dried fruits and nuts like Almonds, Walnuts, Cashews, Raisins, and Dates. Ideal for snacks, baking, and confectionery, sourced with care to maintain freshness and taste.",
    image: "/images/dried-fruits-and-nuts-almonds-walnuts.jpg",
  },
  {
    id: "dehydrated-products",
    title: "Dehydrated Products",
    description:
      "Our dehydrated vegetables and fruits are perfect for ready-to-eat meals, food processing, and storage. Products include Onions, Garlic, Tomatoes, Carrots, and more, retaining natural flavor and nutrients.",
    image: "/images/dehydrated-products-dried-vegetables.jpg",
  },
  {
    id: "coconut-products",
    title: "Coconut Products",
    description:
      "Kore Agro offers a variety of coconut products such as Desiccated Coconut, Coconut Oil, Coconut Milk Powder, and Coconut Chips. Sourced from fresh coconuts for authentic taste and quality.",
    image: "/images/coconut-products-desiccated-coconut-halves.jpg",
  },
  {
    id: "coffee",
    title: "Coffee",
    description:
      "We provide high-quality coffee beans, both roasted and unroasted, suitable for home brewing and commercial use. Our coffee is rich in aroma, flavor, and sourced from top plantations.",
    image: "/images/coffee-beans-roasted-dark.jpg",
  },
];

export async function getCategoryBySlug(slug: string) {
  const category = categories.find((c) => c.id === slug);
  return category;
}
