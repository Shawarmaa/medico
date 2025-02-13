"use client";

import * as React from "react";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog"; // Add this import

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const navLinks = [
  { href: "#services", title: "Services" },
  { href: "#why-us", title: "Why Us" },
  { href: "#reviews", title: "Reviews" },
  { href: "#about-us", title: "About Us" },
  { href: "#faqs", title: "FAQs" },
];

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      setOpen(open);
    },
    []
  );

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0 text-base">
          <img src="menu.svg" alt="menu" className="size-7" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle> {/* Add this line */}
        <div className="overflow-auto p-6">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
                className="py-3"
              >
                {item.title}
              </MobileLink>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface MobileLinkProps {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault(); // Prevent default navigation
        setTimeout(() => {
          const element = document.getElementById(href.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.href = href; // Fallback if element doesn't exist
          }
        }, 100); // Delay to ensure element is loaded
        onOpenChange?.(false);
      }}
      className={`text-base ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

// function MobileLink({
//   href,
//   onOpenChange,
//   className,
//   children,
//   ...props
// }: MobileLinkProps) {
//   return (
//     <Link
//       href={href}
//       onClick={() => {
//         document.getElementById(href.replace("#", ""))?.scrollIntoView({
//           behavior: "smooth",
//         });
//         onOpenChange?.(false); // Close the drawer
//       }}
//       className={`text-base ${className}`}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// }
