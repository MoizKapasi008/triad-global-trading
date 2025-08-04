"use client";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from "react";
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
   <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div>
    {/* Yellow Top Bar */}
    <div className="hidden md:flex w-full bg-[#849bce]">
      <div className="container flex h-10 items-center justify-between px-4 py-2">
        <div className="text-center text-xs font-sans font-bold">
          <p>Email</p>
        </div>
        <div className="text-center text-xs font-sans font-bold">
          <p>Tagline</p>
        </div>
        <div className="text-center text-xs font-sans font-bold">
          <p>Number</p>
        </div>
      </div>
    </div>

    {/* Green Bottom Bar */}
    <div className="w-full bg-[#0d2861]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Burger Menu - shown only on mobile */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => {
              const menu = document.getElementById("mobileMenu");
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex justify-start">
          <ul className="flex space-x-6 text-xs text-white font-sans font-semibold">
            <li className="hover:text-[#849bce]">
              <a href="#" className="flex items-center">
                PRODUCTS <ChevronDownIcon className="w-5 h-5 ml-1" />
              </a>
            </li>
            <li className="hover:text-[#849bce]">
              <a href="#" className="flex items-center">
                ABOUT US <ChevronDownIcon className="w-5 h-5 ml-1" />
              </a>
            </li>
            <li className="hover:text-[#849bce]">
              <a href="#" className="flex items-center">
                HARVEST CHART
              </a>
            </li>
          </ul>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-xs text-white font-sans font-semibold">
            <li className="hover:text-[#849bce]"><a href=''>INQUIRY</a></li>
            <li className="hover:text-[#849bce]"><a href=''>BLOG</a></li>
            <li className="hover:text-[#849bce]"><a href=''>CONTACT</a></li>
            <li>
             <button className={`hidden md:block border border-white px-4 py-2 rounded-full ${isMobileMenuOpen ? 'hidden' : ''}`}>
                BROCHURE
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div id="mobileMenu" className="md:hidden hidden px-4 pb-4">
        <ul className="flex flex-col space-y-2 text-white font-sans text-sm font-semibold">
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">HARVEST CHART</a></li>
          <li><a href="#">INQUIRY</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
          <li>
            <button className="border border-white px-4 py-2 rounded-full w-full text-left">
              BROCHURE
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

  );
}
