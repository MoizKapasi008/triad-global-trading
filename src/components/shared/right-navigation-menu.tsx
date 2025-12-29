"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface RightNavigationMenuProps {
  isScrolled?: boolean;
}

export function RightNavigationMenu({ isScrolled = false }: RightNavigationMenuProps) {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;

    return `bg-transparent text-white/90 hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary active:bg-transparent active:text-secondary transition-colors ${isActive ? "text-secondary font-semibold" : ""
      }`;
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="text-sm font-medium tracking-wide gap-6">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClassName("/inquiry")}>
            <Link href="/inquiry">INQUIRY</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={getLinkClassName("/quality-policy")}
          >
            <Link href="/quality-policy">QUALITY POLICY</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClassName("/contact")}>
            <Link href="/contact">CONTACT</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
