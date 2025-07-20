import { clsx, type ClassValue } from "clsx";
import { LucideMail, LucideMapPin, LucidePhone } from "lucide-react";
import { Variants } from "motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Challenges", href: "/challenges" },
];

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

export const socialLinks = [
  {
    icon: "Github",
    href: "https://github.com/mohammadfallah7",
    color: "hover:text-gray-400",
  },
  {
    icon: "LinkedIn",
    href: "https://linkedin.com/in/fallahmohammad",
    color: "hover:text-blue-400",
  },
  {
    icon: "Twitter",
    href: "https://twitter.com/mohammadfallah_",
    color: "hover:text-sky-400",
  },
];

export const stats = [
  { label: "Projects Completed", number: "10+" },
  { label: "Years experiences", number: "3+" },
  { label: "Technologies", number: "20+" },
  { label: "Client Satisfaction", number: "100%" },
];

export const contactInfo = [
  { icon: LucideMapPin, label: "Location", value: "Tehran, IR" },
  {
    icon: LucideMail,
    label: "Email",
    value: "mohammadfallah.w@gmail.com",
  },
  {
    icon: LucidePhone,
    label: "Phone",
    value: "+98 905-515-3516",
  },
];
