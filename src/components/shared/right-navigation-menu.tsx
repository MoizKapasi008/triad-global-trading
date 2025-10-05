"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function RightNavigationMenu() {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary active:bg-transparent active:text-secondary transition-colors ${
      isActive ? "text-secondary" : ""
    }`;
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="text-2xl">
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
