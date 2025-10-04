export interface AboutSection {
    id: string;
    title: string;
    href: string;
  }
  
  export const aboutSections: AboutSection[] = [
    {
      id: "infrastructure",
      title: "Infrastructure",
      href: "/about/infrastructure",
    },
    {
      id: "global-export",
      title: "Global Export",
      href: "/about/global-export",
    },
    {
      id: "our-team",
      title: "Our Team",
      href: "/about/our-team",
    },
  ];
  