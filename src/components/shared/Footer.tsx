import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const informationLinks = [
  { id: "about", title: "About Us", href: "#" },
  { id: "harvest", title: "Harvest Chart", href: "#" },
  { id: "inquiry", title: "Inquiry", href: "#" },
  { id: "blog", title: "Blog", href: "#" },
  { id: "contact", title: "Contact", href: "#" },
];

const productLinks = [
  {id:"spices" , title:"Spices", href:"/categories/spices"},
  {id:"herb-leavs" , title:"Herbs and Leaves", href:"/categories/herbs-and-leaves"},
  {id:"seeds" , title:"Seeds", href:"/categories/seeds"},
  {id:"millets-grains" , title:"Millets and Grains", href:"/categories/millets-grains"},
  {id:"dried-fruits-nuts" , title:"Dried Fruits and Nuts", href:"/categories/dried-fruits-nuts"},
  {id:"dehydrated-products" , title:"Dehydrated Products", href:"/categories/dehydrated-products"},
  {id:"coconut-products" , title:"Coconut Products", href:"/categories/coconut-products"},
  {id:"coffee" , title:"Coffee", href:"/categories/coffee"},
]

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="w-full bg-primary text-secondary-foreground px-6 md:px-12 py-10 ">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">
          {/* Logo & Description */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm space-y-2">
              <li>
                <Link href="/">
              <div className="relative w-32 h-12 md:w-48 md:h-16">
                <Image
                  src="/triad_global_trading_logo_v4.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
              </li>
              <li>
                <p className="text-sm leading-relaxed">
                  We Believe In Our Strength And Our
                  <br />
                  Strength Is &quot;Quality&quot;. We are Natural
                  <br />
                  Spices Wholesale Supplier & Exporter
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <Globe color="white" size={15} />
                <a href="#">www.triadglobaltrading.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail color="white" size={15} />
                <a href="mailto:info@triadglobaltrading.com">info@triadglobaltrading.com</a>
              </li>
              <li className="flex items-center space-x-1">
                <a href="">
                  <FaFacebook color="white" size={25} />
                </a>
                <a href="">
                  <FaInstagramSquare color="white" size={25} />
                </a>
                <a href="">
                  <FaLinkedin color="white" size={25} />
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm font-light space-y-2">
              <p className="text-xl mb-2">Information</p>
              {informationLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-secondary">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm font-light space-y-2">
              <p className="text-xl mb-2">Products</p>
              {productLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="hover:text-secondary">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Addresses */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm font-light space-y-2">
              <p className="text-xl mb-2">Office Addresses</p>
              <li>Bhomeshwar Plot, Jamnagar road</li>
              <li>Rajkot - 360006</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-secondary px-3 py-3 text-xs text-center text-primary">
        &copy; {new Date().getFullYear()} Triad Global Trading. All rights
        reserved.
      </div>
    </footer>
  );
}
