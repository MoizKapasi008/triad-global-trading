import {
  Award,
  Globe,
  Leaf,
  LucideIcon,
  Package,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Award,
    title: "Top Quality",
    description: "Premium grade spices sourced directly from the finest farms.",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Free from artificial colors, pesticides, and harmful chemicals.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Just-in-time delivery network ensuring fresh supplies globally.",
  },
  {
    icon: Users,
    title: "1500+ Happy Customers",
    description: "Trusted by thousands of contented clients across the world.",
  },
  {
    icon: UserCheck,
    title: "Expert Team",
    description: "Managed by experienced and knowledgeable industry professionals.",
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Moisture-free hygienic packaging to preserve aroma and taste.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Widespread market presence connecting you to world-class flavors.",
  },
];