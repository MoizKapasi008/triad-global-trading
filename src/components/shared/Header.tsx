"use client";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from "react";
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
   <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div>
    {/* Light Blue top bar*/}
    <div className="hidden md:grid w-full bg-secondary text-[#0d2861] px-4 py-2 h-12 grid-cols-3 items-center text-xs font-sans font-bold">
  {/* Email */}
  <div className="justify-self-start">
    <div className='flex items-center space-x-1'>
    <Mail color="#0d2861" size={20} /><a href=''><p>moiz@gmail.com</p></a>
    </div>
  </div>

  {/* Tagline */}
  <div className="text-center">
    <p>Your one-stop solution for all your trading needs.</p>
  </div>

  {/* Phone + Socials */}
  <div className="flex justify-end items-center space-x-6">
    {/* Phone */}
    <div className="flex items-center space-x-1">
      <Phone color="#0d2861" size={20} />
      <p><a href=''>+91 97654 78876</a></p>
    </div>

    {/* Social Icons */}
    <div className="flex items-center space-x-1">
      <a href=''><Facebook color="#0d2861" size={20} /></a>
      <a href=''><Instagram color="#0d2861" size={20} /></a>
      <a href=''><Linkedin color="#0d2861" size={20} /></a>
    </div>
  </div>
</div>


    {/* Dark blue bottom Bar */}
    <div className="w-full bg-primary">
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

        {/* Navigation - menu */}
        <div className="hidden md:flex justify-start">
          <ul className="flex space-x-6 text-xs text-white font-sans font-semibold">
            <li className="hover:text-secondary">
              <a href="#" className="flex items-center">
                PRODUCTS <ChevronDownIcon className="w-5 h-5 ml-1" />
              </a>
            </li>
            <li className="hover:text-secondary">
              <a href="#" className="flex items-center">
                ABOUT US <ChevronDownIcon className="w-5 h-5 ml-1" />
              </a>
            </li>
            <li className="hover:text-secondary">
              <a href="#" className="flex items-center">
                HARVEST CHART
              </a>
            </li>
          </ul>
        </div>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-xs text-white font-sans font-semibold">
            <li className="hover:text-secondary"><a href=''>INQUIRY</a></li>
            <li className="hover:text-secondary"><a href=''>BLOG</a></li>
            <li className="hover:text-secondary"><a href=''>CONTACT</a></li>
            <li>
             <button className={`hidden md:block border border-white hover:text-secondary px-4 py-2 rounded-full ${isMobileMenuOpen ? 'hidden' : ''}`}>
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
