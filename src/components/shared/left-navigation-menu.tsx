"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
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

interface NavigationProps {
  isScrolled?: boolean;
}

// Desktop Navigation
function DesktopNavigation({ isScrolled = false }: NavigationProps) {
  const pathname = usePathname();

  // Check if current path matches products or categories
  const isProductsActive =
    pathname.startsWith("/products") || pathname.startsWith("/categories");

  // Check if current path matches about sections
  const isAboutActive = aboutSections.some(
    (section) => pathname === section.href
  );

  const getTriggerClassName = (isActive: boolean) => `
    !bg-transparent 
    ${isActive ? "!text-secondary" : "!text-white/90"}
    hover:!bg-transparent 
    hover:!text-secondary 
    focus:!bg-transparent 
    active:!bg-transparent
    active:!text-secondary 
    data-[state=open]:!bg-transparent
    data-[state=open]:!text-secondary 
    data-[active]:!bg-transparent
    data-[active]:!text-secondary
    transition-colors font-medium tracking-wide
  `;

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="text-sm gap-4">
        {/* PRODUCTS DROPDOWN - Simple Clean List */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={getTriggerClassName(isProductsActive)}
          >
            PRODUCTS
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-2 bg-white rounded-lg shadow-xl border border-gray-100">
              {categories.map((category) => (
                <li key={category.id}>
                  <NavigationMenuLink
                    asChild
                    className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  >
                    <Link href={`/categories/${category.id}`}>
                      {category.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ABOUT US DROPDOWN - Simple Clean List */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={getTriggerClassName(isAboutActive)}>
            ABOUT US
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-2 bg-white rounded-lg shadow-xl border border-gray-100">
              {aboutSections.map((section) => (
                <li key={section.id}>
                  <NavigationMenuLink
                    asChild
                    className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  >
                    <Link href={section.href}>{section.title}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* HARVEST CHART LINK */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`bg-transparent hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary active:bg-transparent active:text-secondary transition-colors font-medium tracking-wide ${pathname === "/harvest"
              ? "text-secondary"
              : "text-white/90"
              }`}
          >
            <Link href="/harvest">HARVEST CHART</Link>
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
        className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
        type="button"
        aria-label="Open Menu"
      >
        <svg
          className="w-7 h-7"
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
        className={`fixed inset-0 z-50 transition-visibility duration-300 ${isOpen ? "visible" : "invisible delay-300"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-primary/5">
            <h2 className="text-xl font-bold text-primary">MENU</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-primary/10 text-primary rounded-full transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-70px)] p-4">
            {/* PRODUCTS */}
            <div className="mb-2 border-b border-gray-50 pb-2">
              <button
                onClick={() => setOpenProducts(!openProducts)}
                className="flex items-center justify-between w-full px-4 py-3 text-left font-bold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                type="button"
              >
                <span>PRODUCTS</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openProducts ? "rotate-180 text-secondary" : ""
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

              <div className={`overflow-hidden transition-all duration-300 ${openProducts ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="mt-1 ml-3 space-y-1 pl-3 border-l-2 border-primary/10">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center">
                        <Link
                          href={`/categories/${category.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex-1 px-4 py-2 text-sm text-gray-700 hover:text-primary font-medium hover:bg-primary/5 rounded-md transition-colors"
                        >
                          {category.title}
                        </Link>
                        <button
                          onClick={() =>
                            setOpenCategory(
                              openCategory === category.id ? null : category.id
                            )
                          }
                          className="p-2 hover:bg-primary/5 text-gray-400 hover:text-primary rounded-md transition-colors"
                          type="button"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${openCategory === category.id ? "rotate-90" : ""
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

                      <div className={`overflow-hidden transition-all duration-300 ${openCategory === category.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="ml-6 mt-1 space-y-1">
                          {products
                            .filter((p) => p.categoryId === category.id)
                            .map((product) => (
                              <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm text-gray-500 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                              >
                                {product.title}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ABOUT US */}
            <div className="mb-2 border-b border-gray-50 pb-2">
              <button
                onClick={() => setOpenAbout(!openAbout)}
                className="flex items-center justify-between w-full px-4 py-3 text-left font-bold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                type="button"
              >
                <span>ABOUT US</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openAbout ? "rotate-180 text-secondary" : ""
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

              <div className={`overflow-hidden transition-all duration-300 ${openAbout ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="mt-1 ml-3 space-y-1 pl-3 border-l-2 border-primary/10">
                  {aboutSections.map((section) => (
                    <Link
                      key={section.id}
                      href={section.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                    >
                      {section.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* HARVEST CHART */}
            <Link
              href="/harvest"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 font-bold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors mt-1"
            >
              HARVEST CHART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeftNavigationMenu({ isScrolled }: NavigationProps) {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation isScrolled={isScrolled} />
    </>
  );
}
