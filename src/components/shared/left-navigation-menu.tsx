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
import { aboutSections } from "@/lib/aboutUs";

// Desktop Navigation
function DesktopNavigation() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="text-sm">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:text-secondary-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent">
            PRODUCTS
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div
              className="flex text-primary"
              onMouseLeave={() => setActiveCategory(null)}
            >
              <ul className="gap-2 text-sm w-fit text-primary whitespace-nowrap">
                {categories.map((category) => (
                  <li key={category.id}>
                    <NavigationMenuLink
                      onMouseEnter={() => setActiveCategory(category.id)}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      asChild
                    >
                      <Link href={`/categories/${category.id}`}>
                        {category.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>

              <div
                className={`ml-2 overflow-hidden text-primary transition-all duration-300 ease-in-out ${
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
                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
            <ul className="grid w-[200px] gap-2 text-primary text-sm p-2">
              {aboutSections.map((section) => (
                <li key={section.id}>
                  <NavigationMenuLink
                    asChild
                    className="block px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <Link href={section.href}>{section.title}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
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

// Mobile Navigation
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-primary-foreground hover:bg-white/10 rounded-md"
        type="button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md"
              type="button"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-65px)] p-4">
            {/* PRODUCTS */}
            <div className="mb-3">
              <button
                onClick={() => setOpenProducts(!openProducts)}
                className="flex items-center justify-between w-full px-4 py-3 text-left font-bold text-gray-900 hover:bg-gray-100 rounded-md"
                type="button"
              >
                <span>PRODUCTS</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openProducts ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openProducts && (
                <div className="mt-2 ml-3 space-y-1">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center">
                        <Link
                          href={`/categories/${category.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                        >
                          {category.title}
                        </Link>
                        <button
                          onClick={() =>
                            setOpenCategory(
                              openCategory === category.id ? null : category.id
                            )
                          }
                          className="p-2 hover:bg-gray-100 rounded-md"
                          type="button"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              openCategory === category.id ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>

                      {openCategory === category.id && (
                        <div className="ml-6 mt-1 space-y-1 bg-gray-50 rounded-md p-2">
                          {products
                            .filter((p) => p.categoryId === category.id)
                            .map((product) => (
                              <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md"
                              >
                                • {product.title}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ABOUT US */}
            <div className="mb-3">
              <button
                onClick={() => setOpenAbout(!openAbout)}
                className="flex items-center justify-between w-full px-4 py-3 text-left font-bold text-gray-900 hover:bg-gray-100 rounded-md"
                type="button"
              >
                <span>ABOUT US</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openAbout ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openAbout && (
                <div className="mt-2 ml-3 space-y-1">
                  {aboutSections.map((section) => (
                    <Link
                      key={section.id}
                      href={section.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {section.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* HARVEST CHART */}
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 font-bold text-gray-900 hover:bg-gray-100 rounded-md"
            >
              HARVEST CHART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeftNavigationMenu() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
}
