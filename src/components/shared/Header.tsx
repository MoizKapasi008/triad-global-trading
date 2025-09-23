"use client";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Button } from "../ui/button";
import { LeftNavigationMenu } from "./left-navigation-menu";
import { RightNavigationMenu } from "./right-navigation-menu";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="hidden md:grid w-full bg-secondary text-primary px-5 py-1 h-11 grid-cols-3 items-center text-xs font-bold">
        <div className="justify-start">
          <div className="flex items-center space-x-2">
            <IoMdMail color="text-primary" size={20} />
            <Link href="mailto:info@traidglobaltrading.com">
              <p className="font-medium text-base">
                info@traidglobaltrading.com
              </p>
            </Link>
          </div>
        </div>

        <div className="text-center text-lg font-medium">
          <p>Your one-stop solution for all your trading needs.</p>
        </div>

        <div className="flex items-center justify-end gap-15">
          <div className="flex items-center space-x-1 text-base font-medium">
            <Phone color="text-primary" size={20} />
            <p>+91 9876543210</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook color="text-primary" size={20} />
            <FaInstagramSquare color="text-primary" size={20} />
            <FaLinkedin color="text-primary" size={20} />
          </div>
        </div>
      </div>

      <div className="w-full bg-primary">
        <div className="flex items-center justify-between px-5 py-7">
          <div className="md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              variant={"ghost"}
            >
              <Menu />
            </Button>
          </div>

          <div className="hidden md:flex justify-start">
            <LeftNavigationMenu />
          </div>

          {/* Logo in center */}
          <div className="flex justify-center items-center">
            {/* <img
              src="../../public/images/logo.png"
              alt="Company Logo"
              className="h-12 w-auto" // Adjust height as needed
            /> */}
          </div>

          <div className="hidden md:flex justify-end items-center space-x-4">
            <RightNavigationMenu />
            <Button
              className={`hidden md:block border border-white hover:text-secondary px-4 py-2 rounded-full ${
                isMobileMenuOpen ? "hidden" : ""
              }`}
            >
              BROCHURE
            </Button>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col space-y-2 text-white  text-sm font-semibold">
            <li>
              <a href="#">PRODUCTS</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">HARVEST CHART</a>
            </li>
            <li>
              <a href="#">INQUIRY</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <button className="border border-white px-4 py-2 rounded-full w-full text-left">
                BROCHURE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
