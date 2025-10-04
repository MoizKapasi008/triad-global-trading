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
      <NavigationMenuList className="text-2xl text-primary-foreground">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:text-secondary-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent"
          >
            <Link href="/inquiry">INQUIRY</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:text-secondary-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent"
          >
            <Link href="/docs">BLOG</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-transparent text-primary-foreground hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-secondary-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:text-secondary-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent"
          >
            <Link href="/contact">CONTACT</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
