// "use client";
// import { ChevronDown, ChevronUp, Menu, Phone } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { Button } from "../ui/button";
// import { LeftNavigationMenu } from "./left-navigation-menu";
// import { RightNavigationMenu } from "./right-navigation-menu";
// import { categories } from "@/lib/categories";
// import { products } from "@/lib/products";
// import Image from "next/image";

// export default function Header() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openCategory, setOpenCategory] = useState<string | null>(null);

//   // Other top-level menu items besides PRODUCTS
//   const mainMenu = [
//     { id: "about", title: "ABOUT US", href: "#" },
//     { id: "harvest", title: "HARVEST CHART", href: "/docs" },
//     { id: "inquiry", title: "INQUIRY", href: "#" },
//     { id: "blog", title: "BLOG", href: "#" },
//     { id: "contact", title: "CONTACT", href: "#" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       {/* Top info bar */}
//       <div className="hidden md:grid w-full bg-secondary text-primary px-5 py-1 h-11 grid-cols-3 items-center text-xs font-bold">
//         <div className="justify-start">
//           <div className="flex items-center space-x-2">
//             <IoMdMail color="text-primary" size={20} />
//             <Link href="mailto:info@traidglobaltrading.com">
//               <p className="font-medium text-base">
//                 info@traidglobaltrading.com
//               </p>
//             </Link>
//           </div>
//         </div>

//         <div className="text-center text-lg font-medium">
//           <p>Your one-stop solution for all your trading needs.</p>
//         </div>

//         <div className="flex items-center justify-end gap-15">
//           <div className="flex items-center space-x-1 text-base font-medium">
//             <Phone color="text-primary" size={20} />
//             <p>+91 9876543210</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaFacebook color="text-primary" size={20} />
//             <FaInstagramSquare color="text-primary" size={20} />
//             <FaLinkedin color="text-primary" size={20} />
//           </div>
//         </div>
//       </div>

//       {/* Main header */}
//       <div className="w-full bg-primary">
//         <div className="flex items-center justify-between px-5 py-7">
//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//               variant={"ghost"}
//             >
//               <Menu />
//             </Button>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex justify-start">
//             <LeftNavigationMenu />
//           </div>

//           {/* Logo */}
//          <div className="flex justify-center items-center flex-shrink-0">
//             <Link href="/">
//               <div className="relative w-32 h-12 md:w-48 md:h-20">
//                 <Image
//                   src="/koreinternationallogo.png"
//                   alt="Company Logo"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </Link>
//           </div>

//           {/* Right menu */}
//           <div className="hidden md:flex justify-end items-center space-x-4">
//             <RightNavigationMenu />
//           </div>

//           <Button className="border border-white hover:text-secondary px-4 py-2 rounded-full">
//             BROCHURE
//           </Button>
//         </div>

//         {/* Mobile menu */}
//         {/* Mobile menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden fixed top-full left-0 w-full bg-primary/75 backdrop-blur-md px-5 py-4 z-50">
//             <ul className="flex flex-col space-y-2 text-white text-sm font-semibold">
//               {/* PRODUCTS with categories and products */}
//               <li>
//                 <button
//                   onClick={() =>
//                     setOpenCategory(
//                       openCategory === "products" ? null : "products"
//                     )
//                   }
//                   className="w-full text-left font-bold flex  items-center"
//                 >
//                   PRODUCTS
//                   <span className="ml-2">
//                     {openCategory === "products" ? (
//                       <ChevronUp size={18} />
//                     ) : (
//                       <ChevronDown size={18} />
//                     )}
//                   </span>
//                 </button>

//                 {openCategory === "products" && (
//                   <ul className="ml-4 flex flex-col space-y-1">
//                     {categories.map((category) => (
//                       <li key={category.id}>
//                         <button
//                           onClick={() =>
//                             setOpenCategory(
//                               openCategory === category.id ? null : category.id
//                             )
//                           }
//                           className="w-full text-left font-medium flex justify-between items-center"
//                         >
//                           {category.title}
//                         </button>

//                         {openCategory === category.id && (
//                           <ul className="ml-4 flex flex-col space-y-1">
//                             {products
//                               .filter((p) => p.categoryId === category.id)
//                               .map((product) => (
//                                 <li key={product.id}>
//                                   <Link href={`/products/${product.id}`}>
//                                     {product.title}
//                                   </Link>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>

//               {/* Other menu items */}
//               {mainMenu.map((item) => (
//                 <li key={item.id}>
//                   <Link href={item.href}>{item.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Menu, Phone } from "lucide-react";
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

  const mainMenu = [
    { id: "about", title: "ABOUT US", href: "#" },
    { id: "harvest", title: "HARVEST CHART", href: "/docs" },
    { id: "inquiry", title: "INQUIRY", href: "#" },
    { id: "blog", title: "BLOG", href: "#" },
    { id: "contact", title: "CONTACT", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Info Bar */}
      <div className="hidden md:grid w-full bg-secondary text-primary px-5 py-1 h-11 grid-cols-3 items-center text-xs font-bold">
        <div className="flex items-center space-x-2">
          <IoMdMail size={20} />
          <Link href="mailto:info@traidglobaltrading.com">
            <p className="font-medium text-base">info@traidglobaltrading.com</p>
          </Link>
        </div>

        <div className="text-center text-lg font-medium">
          Your one-stop solution for all your trading needs.
        </div>

        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center space-x-1 text-base font-medium">
            <Phone size={20} />
            <p>+91 9876543210</p>
          </div>
          <div className="flex items-center space-x-2 text-base">
            <FaFacebook size={20} />
            <FaInstagramSquare size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-primary">
        <div className="flex items-center justify-between px-5 py-7">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
            >
              <Menu />
            </Button>
          </div>

          {/* Desktop Left Menu */}
          <div className="hidden md:flex justify-start">
            <LeftNavigationMenu />
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center flex-shrink-0">
            <Link href="/">
              <div className="relative w-32 h-12 md:w-48 md:h-20">
                <Image
                  src="/koreinternationallogo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex justify-end items-center space-x-4">
            <RightNavigationMenu />
            <Button className="border border-white hover:text-secondary px-4 py-2 rounded-full">
              BROCHURE
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-full left-0 w-full bg-primary/80 backdrop-blur-md  px-5 py-4 z-50 max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col space-y-2 text-white text-sm font-semibold">
              {/* Products Dropdown */}
              <li>
                <button
                  onClick={() =>
                    setOpenCategory(
                      openCategory === "products" ? null : "products"
                    )
                  }
                  className="w-full text-left font-bold flex items-center justify-between"
                >
                  PRODUCTS
                  {openCategory === "products" ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {openCategory === "products" && (
                  <ul className="ml-4 flex flex-col space-y-1">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() =>
                            setOpenCategory(
                              openCategory === category.id ? null : category.id
                            )
                          }
                          className="w-full text-left font-medium flex justify-between items-center"
                        >
                          {category.title}
                        </button>

                        {openCategory === category.id && (
                          <ul className="ml-4 flex flex-col space-y-1">
                            {products
                              .filter((p) => p.categoryId === category.id)
                              .map((product) => (
                                <li key={product.id}>
                                  <Link href={`/products/${product.id}`}>
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
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}

            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
