import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const informationLinks = [
  { id: "about", title: "About Us", href: "#" },
  { id: "products", title: "Our Products", href: "#" }, // Changed specific "Harvest" to general "Products" if safer, or keep as is. Keeping original logic but clean titles.
  { id: "process", title: "Our Process", href: "#" },
  { id: "contact", title: "Contact Us", href: "#" },
  { id: "blog", title: "Latest News", href: "#" },
];

const productLinks = [
  { id: "spices", title: "Indian Spices", href: "/categories/spices" },
  { id: "herbs", title: "Herbs & Leaves", href: "/categories/herbs-leaves" },
  { id: "seeds", title: "Premium Seeds", href: "/categories/seeds" },
  { id: "grains", title: "Millets & Grains", href: "/categories/millets-grains" },
  { id: "dryfruits", title: "Dried Fruits", href: "/categories/dried-fruits-nuts" },
  { id: "dehydrated", title: "Dehydrated", href: "/categories/dehydrated-products" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer - bg-primary (Original Color) */}
      <div className="w-full bg-primary text-primary-foreground px-6 md:px-12 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <Link href="/" className="inline-block relative w-48 h-12">
                <Image
                  src="/triad_global_trading_logo_v8.png"
                  alt="Triad Global Trading"
                  fill
                  className="object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed text-primary-foreground/90">
                Connecting the world to the finest flavors of India. We are a premier exporter of certified organic spices, herbs, and grains, committed to quality and sustainability.
              </p>

              <div className="flex gap-4 pt-2">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-primary-foreground font-bold text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {informationLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 group-hover:bg-secondary transition-colors"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h3 className="text-primary-foreground font-bold text-lg mb-6 relative inline-block">
                Our Products
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-secondary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50 group-hover:bg-secondary transition-colors"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-primary-foreground font-bold text-lg mb-6 relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div className="text-sm text-primary-foreground/90">
                    <p className="font-semibold text-primary-foreground mb-1">
                      Head Office
                    </p>
                    <p>Bhomeshwar Plot, Jamnagar Road,</p>
                    <p>Rajkot - 360006, Gujarat, India</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div className="text-sm text-primary-foreground/90">
                    <p className="font-semibold text-primary-foreground mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@triadglobaltrading.com"
                      className="hover:text-secondary transition-colors"
                    >
                      info@triadglobaltrading.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-secondary" />
                  </div>
                  <div className="text-sm text-primary-foreground/90">
                    <p className="font-semibold text-primary-foreground mb-1">
                      Website
                    </p>
                    <a
                      href="https://www.triadglobaltrading.com"
                      className="hover:text-secondary transition-colors"
                    >
                      www.triadglobaltrading.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - bg-secondary (Original Color) */}
      <div className="w-full bg-secondary px-6 py-6 border-t border-secondary-foreground/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium">Triad Global Trading</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-primary hover:text-primary/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-primary hover:text-primary/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
