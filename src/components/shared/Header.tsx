"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X, ChevronDown, ChevronUp } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";
import { LeftNavigationMenu } from "./left-navigation-menu";
import { RightNavigationMenu } from "./right-navigation-menu";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";
import { aboutSections } from "@/lib/aboutUs";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Mobile Menu Accordion State
  const [openCategory, setOpenCategory] = useState<string | null>(null);


  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleCategory = (categoryId: string) => {
    if (categoryId === openCategory) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };



  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenCategory(null);
  };

  if (!isMounted) return null;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-[1000] w-full transition-all duration-500 ease-in-out border-b-2",
          isScrolled
            ? "bg-primary shadow-lg py-2 border-secondary/50"
            : "bg-transparent py-4 border-transparent"
        )}
      >
        {/* Top Info Bar - Collapses on scroll */}
        <div
          className={cn(
            "w-full overflow-hidden transition-all duration-500 ease-in-out border-b border-white/5 hidden lg:block",
            isScrolled ? "h-0 opacity-0" : "h-10 opacity-100 mb-2"
          )}
        >
          <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between text-white/90 text-[13px] font-medium tracking-wide">
            <div className="flex items-center gap-6">
              <Link
                href="mailto:info@triadglobaltrading.com"
                className="flex items-center gap-2 hover:text-secondary transition-colors group"
              >
                <IoMdMail size={16} className="group-hover:scale-110 transition-transform text-secondary" />
                <span>info@triadglobaltrading.com</span>
              </Link>
              <div className="h-3 w-[1px] bg-white/20" />
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span>+91 7990429441</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="hidden lg:inline-block opacity-80 italic text-secondary/90">Global Excellence in Every Product</span>
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:text-secondary hover:-translate-y-0.5 transition-all p-1.5 hover:bg-white/5 rounded-full"><FaFacebook size={16} /></Link>
                <Link href="#" className="hover:text-secondary hover:-translate-y-0.5 transition-all p-1.5 hover:bg-white/5 rounded-full"><FaInstagramSquare size={16} /></Link>
                <Link href="#" className="hover:text-secondary hover:-translate-y-0.5 transition-all p-1.5 hover:bg-white/5 rounded-full"><FaLinkedin size={16} /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Left Nav (Desktop) */}
            <div className="hidden lg:block flex-1">
              <LeftNavigationMenu isScrolled={isScrolled} />
            </div>

            {/* Logo - Centered */}
            <Link href="/" className="relative z-10 group" onClick={closeMobileMenu}>
              <div className={cn(
                "relative transition-all duration-500",
                isScrolled ? "w-28 h-9 lg:w-36 lg:h-12" : "w-32 h-10 lg:w-48 lg:h-16"
              )}>
                <Image
                  src="/triad_global_trading_logo_v8.png"
                  alt="Triad Global Trading"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
            </Link>

            {/* Right Nav (Desktop) */}
            <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
              <RightNavigationMenu isScrolled={isScrolled} />

              <Button
                size="sm"
                className={cn(
                  "rounded-full px-6 py-5 text-xs font-bold tracking-widest transition-all duration-300 shadow-lg hover:shadow-secondary/50 hover:-translate-y-0.5",
                  isScrolled
                    ? "bg-secondary text-primary hover:bg-white hover:text-primary"
                    : "bg-white/10 text-white border border-white/20 hover:bg-secondary hover:text-primary backdrop-blur-sm"
                )}
              >
                BROCHURE
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden relative z-[1001]">
              <Button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
        </div>

        {/* MODERN MOBILE MENU OVERLAY - ORIGINAL COLORS */}
        <div
          className={cn(
            "fixed inset-0 z-[2000] lg:hidden flex flex-col bg-white transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
          )}
        >
          {/* Menu Header - Original bg-primary */}
          <div className="w-full px-6 py-5 flex items-center justify-between bg-primary shadow-md z-10">
            <div className="w-32 h-10 relative">
              <Image
                src="/triad_global_trading_logo_v8.png"
                alt="Triad Global Trading"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <Button
              onClick={closeMobileMenu}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X size={32} strokeWidth={1.5} />
            </Button>
          </div>

          {/* Menu Content - Original bg-white */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white">
            <div className="flex flex-col min-h-full px-6 py-8 space-y-2">
              
              {/* Products */}
              <div className="flex flex-col">
                <button
                  onClick={() => toggleCategory("products")}
                  className="w-full flex items-center justify-between text-left group py-3"
                >
                  <span className="text-xl md:text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">Products</span>
                  <ChevronDown
                    size={20}
                    className={cn("text-gray-400 transition-transform duration-500", openCategory === "products" && "rotate-180 text-secondary")}
                  />
                </button>
                <div className={cn("grid transition-all duration-500 ease-in-out", openCategory === "products" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden flex flex-col pl-4 border-l-2 border-gray-100">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.id}`}
                        onClick={closeMobileMenu}
                        className="block py-2.5 text-base text-gray-600 hover:text-primary transition-colors font-medium"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* About Us */}
              <div className="flex flex-col">
                <button
                  onClick={() => toggleCategory("about")}
                  className="w-full flex items-center justify-between text-left group py-3"
                >
                  <span className="text-xl md:text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">About Us</span>
                  <ChevronDown
                    size={20}
                    className={cn("text-gray-400 transition-transform duration-500", openCategory === "about" && "rotate-180 text-secondary")}
                  />
                </button>
                <div className={cn("grid transition-all duration-500 ease-in-out", openCategory === "about" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden flex flex-col pl-4 border-l-2 border-gray-100">
                    {aboutSections.map((section) => (
                      <Link
                        key={section.id}
                        href={section.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5 text-base text-gray-600 hover:text-primary transition-colors font-medium"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/harvest" onClick={closeMobileMenu} className="block py-3 text-xl md:text-2xl font-semibold text-primary hover:text-secondary transition-colors">Harvest Chart</Link>
              <Link href="/inquiry" onClick={closeMobileMenu} className="block py-3 text-xl md:text-2xl font-semibold text-primary hover:text-secondary transition-colors">Inquiry</Link>
              <Link href="/quality-policy" onClick={closeMobileMenu} className="block py-3 text-xl md:text-2xl font-semibold text-primary hover:text-secondary transition-colors">Quality Policy</Link>
              <Link href="/contact" onClick={closeMobileMenu} className="block py-3 text-xl md:text-2xl font-semibold text-primary hover:text-secondary transition-colors">Contact</Link>

              <div className="pt-6">
                <Button className="w-full rounded-full bg-secondary text-primary hover:bg-primary hover:text-white font-bold tracking-widest py-6 text-sm shadow-md transition-all duration-300 uppercase">
                  GET BROCHURE
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 pb-4">
                <Link href="#" className="p-2.5 bg-gray-50 text-gray-500 rounded-full hover:text-primary hover:bg-gray-100 transition-all"><FaFacebook size={18} /></Link>
                <Link href="#" className="p-2.5 bg-gray-50 text-gray-500 rounded-full hover:text-primary hover:bg-gray-100 transition-all"><FaInstagramSquare size={18} /></Link>
                <Link href="#" className="p-2.5 bg-gray-50 text-gray-500 rounded-full hover:text-primary hover:bg-gray-100 transition-all"><FaLinkedin size={18} /></Link>
              </div>

            </div>
          </div>
        </div>

      </header>
    </>
  );
}
