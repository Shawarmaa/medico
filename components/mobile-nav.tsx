"use client";

import * as React from "react";
import Link from "next/link";

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
        <Button
          variant="ghost" className="h-8 w-8 p-0 text-base md:hidden">
          <img src="menu.svg" alt="menu" className="size-7" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={setOpen}
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
      onClick={() => {
        document.getElementById(href.replace("#", ""))?.scrollIntoView({
          behavior: "smooth",
        });
        onOpenChange?.(false); // Close the drawer
      }}
      className={`text-base ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
