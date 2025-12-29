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
            ? "bg-primary backdrop-blur-xl shadow-lg py-2 border-secondary/50 supports-[backdrop-filter]:bg-primary/90"
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

        {/* MOBILE MENU DRAWER */}
        <div
          className={cn(
            "fixed inset-0 z-[2000] lg:hidden transition-all duration-300",
            isMobileMenuOpen ? "visible" : "invisible delay-300"
          )}
        >
          {/* Backdrop */}
          <div
            className={cn(
              "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={closeMobileMenu}
          />

          {/* Drawer Panel */}
          <div
            className={cn(
              "absolute top-0 left-0 w-[300px] h-screen bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-out",
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 bg-primary text-white sticky top-0 z-10 border-b border-white/10">
              <span className="font-bold tracking-widest text-lg">MENU</span>
              <Button
                onClick={closeMobileMenu}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X size={24} />
              </Button>
            </div>

            {/* Drawer Content */}
            <div className="p-4 pb-20 space-y-2">
              {/* Products Links */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleCategory("products")}
                  className="w-full flex items-center justify-between p-3 text-left font-bold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>PRODUCTS</span>
                  <ChevronDown
                    size={18}
                    className={cn("text-gray-400 transition-transform", openCategory === "products" && "rotate-180 text-secondary")}
                  />
                </button>

                <div className={cn("overflow-hidden transition-all duration-300", openCategory === "products" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0")}>
                  <div className="pl-4 flex flex-col gap-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.id}`}
                        onClick={closeMobileMenu}
                        className="w-full flex items-center justify-between py-2 px-2 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover:pl-3"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* About Us Links */}
              <div className="border-b border-gray-100 pb-2">
                <button
                  onClick={() => toggleCategory("about")}
                  className="w-full flex items-center justify-between p-3 text-left font-bold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>ABOUT US</span>
                  <ChevronDown
                    size={18}
                    className={cn("text-gray-400 transition-transform", openCategory === "about" && "rotate-180 text-secondary")}
                  />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", openCategory === "about" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                  <div className="pl-4 flex flex-col gap-1">
                    {aboutSections.map((section) => (
                      <Link
                        key={section.id}
                        href={section.href}
                        onClick={closeMobileMenu}
                        className="py-2 px-2 text-sm text-gray-600 hover:text-primary block transition-all duration-300 hover:pl-3"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Standard Links */}
              <Link href="/harvest" onClick={closeMobileMenu} className="block p-3 font-bold text-gray-800 hover:bg-gray-50 rounded-lg">HARVEST CHART</Link>
              <Link href="/inquiry" onClick={closeMobileMenu} className="block p-3 font-bold text-gray-800 hover:bg-gray-50 rounded-lg">INQUIRY</Link>
              <Link href="/quality-policy" onClick={closeMobileMenu} className="block p-3 font-bold text-gray-800 hover:bg-gray-50 rounded-lg">QUALITY POLICY</Link>
              <Link href="/contact" onClick={closeMobileMenu} className="block p-3 font-bold text-gray-800 hover:bg-gray-50 rounded-lg">CONTACT</Link>

              {/* CTA */}
              <div className="pt-6">
                <Button className="w-full bg-secondary text-primary hover:bg-primary hover:text-white font-bold tracking-wider py-6 text-md shadow-lg">
                  GET BROCHURE
                </Button>
              </div>

              {/* Socials */}
              <div className="flex justify-center gap-8 pt-8 text-gray-400">
                <FaFacebook size={24} className="hover:text-primary transition-colors cursor-pointer" />
                <FaInstagramSquare size={24} className="hover:text-primary transition-colors cursor-pointer" />
                <FaLinkedin size={24} className="hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}
