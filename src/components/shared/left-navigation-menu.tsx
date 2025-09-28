"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

export function LeftNavigationMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="text-sm">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-blue-900 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:text-secondary-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent">
            PRODUCTS
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            {/* Wrap categories + products together */}
            <div
              className="flex text-primary"
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Categories List */}
              <ul className="gap-2 text-sm w-fit text-primary whitespace-nowrap">
                {categories.map((category) => (
                  <li key={category.id}>
                    <NavigationMenuLink
                      onMouseEnter={() => setActiveCategory(category.id)}
                      className="px-4 py-2 hover:bg-gray-100  cursor-pointer relative"
                      asChild
                    >
                      <Link href={`/categories/${category.id}`}>
                      {category.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>

              {/* Product List - hidden initially */}
              <div
                className={`hidden md:block  ml-2 overflow-hidden text-primary transition-all duration-300 ease-in-out ${
                  activeCategory ? "w-[200px] opacity-100" : "w-0 opacity-0"
                }`}
              >
                <ul className="text-sm">
                  {activeCategory &&
                    products
                      .filter((p) => p.categoryId === activeCategory)
                      .map((product) => (
                        <li key={product.id}>
                          <NavigationMenuLink
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                            asChild
                          >
                            <Link href={`/products/${product.id}`}>
                              {product.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:text-secondary-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent">
            ABOUT US
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 text-primary text-sm">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Infrastructure</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Global Export</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Our Team</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent font-medium text-primary-foreground hover:bg-transparent hover:text-secondary-foreground "
          >
            <Link href="#">HARVEST CHART</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
