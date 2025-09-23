import { Globe } from "lucide-react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="w-full bg-primary text-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">
          {/* Logo & Description */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm space-y-2">
              <li>
                <p className="text-xl font-bold">Logo</p>
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
              <li className="flex items-center space-x-1">
                <Globe color="white" size={15} />
                <a href="#">www.traidglobaltrading.com</a>
              </li>
              <li>Email</li>
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
            <ul className="flex flex-col text-sm font-bold space-y-2">
              <p className="text-lg mb-2">Information</p>
              <li>
                <a href="#" className="hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Harvest Chart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Inquiry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Global Export
                </a>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm  font-bold space-y-2">
              <p className="text-lg mb-2">Products</p>
              <li>
                <a href="#" className="hover:text-secondary">
                  Spices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Herbs and Leaves
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Seeds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Millets and Grains
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Dried Fruits and Nuts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Dehydrated Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Coconut Products
                </a>
              </li>
            </ul>
          </div>

          {/* Office Addresses */}
          <div className="w-full sm:w-[48%] md:w-[22%]">
            <ul className="flex flex-col text-sm font-bold space-y-2">
              <p className="text-lg mb-2">Office Addresses</p>
              <li>Ahmedabad Office: XYZ Street, GIDC</li>
              <li>Surat Office: ABC Road, Katargam</li>
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
