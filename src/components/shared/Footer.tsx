import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const informationLinks = [
  { id: "about", title: "About Us", href: "#" },
  { id: "harvest", title: "Harvest Chart", href: "#" },
  { id: "inquiry", title: "Inquiry", href: "#" },
  { id: "blog", title: "Blog", href: "#" },
  { id: "contact", title: "Contact", href: "#" },
];

const productLinks = [
  { id: "spices", title: "Spices", href: "/categories/spices" },
  {
    id: "herb-leavs",
    title: "Herbs and Leaves",
    href: "/categories/herbs-leaves",
  },
  { id: "seeds", title: "Seeds", href: "/categories/seeds" },
  {
    id: "millets-grains",
    title: "Millets and Grains",
    href: "/categories/millets-grains",
  },
  {
    id: "dried-fruits-nuts",
    title: "Dried Fruits and Nuts",
    href: "/categories/dried-fruits-nuts",
  },
  {
    id: "dehydrated-products",
    title: "Dehydrated Products",
    href: "/categories/dehydrated-products",
  },
  {
    id: "coconut-products",
    title: "Coconut Products",
    href: "/categories/coconut-products",
  },
  { id: "coffee", title: "Coffee", href: "/categories/coffee" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="w-full bg-primary text-secondary-foreground px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Company Info - Takes 4 columns */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <div className="relative w-48 h-16">
                  <Image
                    src="/triad_global_trading_logo_v8.png"
                    alt="Triad Global Trading"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-8 max-w-sm">
                We Believe In Our Strength And Our Strength Is
                &quot;Quality&quot;. We are Natural Spices Wholesale Supplier &
                Exporter delivering premium products worldwide.
              </p>

              {/* Social Media */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-secondary-foreground uppercase tracking-wide">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Information - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-6 text-secondary-foreground">
                Information
              </h3>
              <ul className="space-y-3">
                {informationLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors inline-block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products - Takes 3 columns */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold mb-6 text-secondary-foreground">
                Our Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors inline-block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Takes 3 columns */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold mb-6 text-secondary-foreground">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-secondary-foreground/70 mt-1 flex-shrink-0"
                  />
                  <div className="text-sm text-secondary-foreground/90">
                    <p className="font-medium text-secondary-foreground mb-1">
                      Head Office
                    </p>
                    <p>Bhomeshwar Plot, Jamnagar road</p>
                    <p>Rajkot - 360006, Gujarat, India</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-secondary-foreground/70 mt-1 flex-shrink-0"
                  />
                  <a
                    href="mailto:info@triadglobaltrading.com"
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    info@triadglobaltrading.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Globe
                    size={18}
                    className="text-secondary-foreground/70 mt-1 flex-shrink-0"
                  />
                  <a
                    href="https://www.triadglobaltrading.com"
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    www.triadglobaltrading.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-secondary px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary">
              © {new Date().getFullYear()} Triad Global Trading. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                Terms of Service
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
