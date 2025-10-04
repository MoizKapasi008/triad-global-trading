"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Menu, Phone, X } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";
import { LeftNavigationMenu } from "./left-navigation-menu";
import { RightNavigationMenu } from "./right-navigation-menu";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isMounted]);

  const mainMenu = [
    {
      id: "about",
      title: "ABOUT US",
      href: "/about",
      subItems: [
        { id: "team", title: "Our Team", href: "/about/our-team" },
        {
          id: "infrastructure",
          title: "Infrastructure",
          href: "/about/infrastructure",
        },
        {
          id: "global-export",
          title: "Global Export",
          href: "/about/global-export",
        },
      ],
    },
    { id: "harvest", title: "HARVEST CHART", href: "/harvest" },
    { id: "inquiry", title: "INQUIRY", href: "/inquiry" },
    { id: "blog", title: "BLOG", href: "/blog" },
    { id: "contact", title: "CONTACT", href: "/contact" },
  ];

  const toggleCategory = (categoryId: string) => {
    if (categoryId === openCategory) {
      setOpenCategory(null);
      setOpenSubCategory(null);
    } else {
      setOpenCategory(categoryId);
      setOpenSubCategory(null);
    }
  };

  const toggleSubCategory = (subCategoryId: string) => {
    setOpenSubCategory(
      openSubCategory === subCategoryId ? null : subCategoryId
    );
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenCategory(null);
    setOpenSubCategory(null);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMobileMenu();

    if (href.startsWith("#")) {
      e.preventDefault();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="w-full bg-secondary text-white shadow-sm">
        {/* Desktop Only */}
        <div className="hidden xl:flex items-center justify-between px-8 py-3">
          <div className="flex items-center gap-2">
            <IoMdMail size={18} />
            <Link
              href="mailto:info@traidglobaltrading.com"
              className="text-sm font-medium hover:underline hover:text-white/90 transition-all"
            >
              info@traidglobaltrading.com
            </Link>
          </div>

          <div className="text-base font-semibold">
            Your one-stop solution for all your trading needs.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm font-medium">+91 7990429441</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <FaInstagramSquare size={18} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Tablet & Mobile */}
        <div className="xl:hidden flex flex-col items-center justify-center py-2.5 px-4 gap-1.5">
          <div className="text-sm font-medium text-center">
            Your one-stop solution for all your trading needs.
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Phone size={14} />
            <span>+91 7990429441</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-primary">
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between px-8 py-4">
          <div className="flex-1">
            <LeftNavigationMenu />
          </div>

          <Link href="/" className="mx-8">
            <div className="relative w-48 h-16">
              <Image
                src="/triad_global_trading_logo_v8.png"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex-1 flex items-center justify-end gap-4">
            <RightNavigationMenu />
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              BROCHURE
            </Button>
          </div>
        </div>

        {/* Tablet & Mobile Nav */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <Button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-white/20 text-white transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="relative w-32 h-12 sm:w-40 sm:h-14 md:w-44 md:h-14">
              <Image
                src="/triad_global_trading_logo_v8.png"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="w-12"></div>
        </div>

        {/* Mobile/Tablet Sliding Menu */}
        {isMounted && isMobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={closeMobileMenu}
            />

            <div className="lg:hidden fixed top-0 left-0 w-[320px] sm:w-[360px] md:w-[400px] h-screen bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-primary to-primary/90 text-white border-b border-white/10 shadow-md">
                <h2 className="text-xl font-semibold tracking-wide">MENU</h2>
                <Button
                  onClick={closeMobileMenu}
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-white/20 text-white transition-all rounded-lg"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </Button>
              </div>

              {/* Menu Content */}
              <nav className="p-5">
                <ul className="flex flex-col gap-2">
                  {/* Products Dropdown */}
                  <li className="border-b border-gray-200 pb-2">
                    <button
                      onClick={() => toggleCategory("products")}
                      className="w-full text-left font-semibold text-gray-900 flex items-center justify-between py-3 px-3 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <span className="text-base">PRODUCTS</span>
                      {openCategory === "products" ? (
                        <ChevronUp size={20} className="text-primary" />
                      ) : (
                        <ChevronDown size={20} className="text-primary" />
                      )}
                    </button>

                    {openCategory === "products" && (
                      <ul className="mt-2 ml-3 flex flex-col gap-1 bg-gray-50 rounded-lg p-3">
                        {categories.map((category) => (
                          <li key={category.id}>
                            <button
                              onClick={() => toggleSubCategory(category.id)}
                              className="w-full text-left font-medium text-gray-800 flex justify-between items-center py-2.5 px-3 hover:bg-white rounded-lg transition-all"
                            >
                              <span className="text-sm">{category.title}</span>
                              {openSubCategory === category.id ? (
                                <ChevronUp size={18} className="text-primary" />
                              ) : (
                                <ChevronDown
                                  size={18}
                                  className="text-primary"
                                />
                              )}
                            </button>

                            {openSubCategory === category.id && (
                              <ul className="mt-1 ml-4 flex flex-col gap-1">
                                {products
                                  .filter((p) => p.categoryId === category.id)
                                  .map((product) => (
                                    <li key={product.id}>
                                      <Link
                                        href={`/products/${product.id}`}
                                        onClick={closeMobileMenu}
                                        className="block py-2.5 px-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all font-medium"
                                      >
                                        {product.title}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Other Menu Items */}
                  {mainMenu.map((item) => (
                    <li key={item.id} className="border-b border-gray-200 pb-2">
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => toggleCategory(item.id)}
                            className="w-full text-left font-semibold text-gray-900 flex items-center justify-between py-3 px-3 hover:bg-gray-100 rounded-lg transition-all"
                          >
                            <span className="text-base">{item.title}</span>
                            {openCategory === item.id ? (
                              <ChevronUp size={20} className="text-primary" />
                            ) : (
                              <ChevronDown size={20} className="text-primary" />
                            )}
                          </button>

                          {openCategory === item.id && (
                            <ul className="mt-2 ml-6 flex flex-col gap-1 bg-gray-50 rounded-lg p-3">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.id}>
                                  <Link
                                    href={subItem.href}
                                    onClick={(e) =>
                                      handleNavClick(e, subItem.href)
                                    }
                                    className="block py-2.5 px-3 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-all font-medium"
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block py-3 px-3 text-base font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}

                  {/* Brochure Button */}
                  <li className="pt-4">
                    <Button
                      onClick={closeMobileMenu}
                      className="w-full bg-primary text-white hover:bg-primary/90 px-6 py-3.5 rounded-full transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      DOWNLOAD BROCHURE
                    </Button>
                  </li>
                </ul>
              </nav>

              {/* Contact Info */}
              <div className="p-5 mt-4 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                  CONTACT US
                </h3>
                <div className="flex flex-col gap-3 text-sm text-gray-700">
                  <Link
                    href="mailto:info@traidglobaltrading.com"
                    className="flex items-center gap-2 hover:text-primary transition-all p-2 hover:bg-primary/5 rounded-lg"
                  >
                    <IoMdMail
                      size={20}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="break-all text-xs">
                      info@traidglobaltrading.com
                    </span>
                  </Link>
                  <div className="flex items-center gap-2 p-2">
                    <Phone size={20} className="text-primary flex-shrink-0" />
                    <span className="font-medium">+91 7990429441</span>
                  </div>
                  <div className="flex items-center gap-4 pt-3 pl-2">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="text-primary hover:opacity-70 hover:scale-110 transition-all duration-200"
                    >
                      <FaFacebook size={26} />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="text-primary hover:opacity-70 hover:scale-110 transition-all duration-200"
                    >
                      <FaInstagramSquare size={26} />
                    </Link>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="text-primary hover:opacity-70 hover:scale-110 transition-all duration-200"
                    >
                      <FaLinkedin size={26} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
