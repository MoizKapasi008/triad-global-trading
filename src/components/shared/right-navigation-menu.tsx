"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function RightNavigationMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="text-2xl">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent text-white hover:bg-transparent hover:text-blue-900  font-medium"
          >
            <Link href="/docs">INQUIRY</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent text-white hover:bg-transparent hover:text-blue-900  font-medium"
          >
            <Link href="/docs">BLOG</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent text-white hover:bg-transparent hover:text-blue-900  font-medium"
          >
            <Link href="/docs">CONTACT</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
