'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import MobileNav from "@/components/mobile-nav";
import { useState, useEffect } from "react";



import { Modak } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
const modak = Modak({ subsets: ['latin'], weight: '400' })

const tutoring: { title: string; href: string; description?: string }[] = [
  {
    title: "Maths",
    href: "https://medico-tutoring.neetocal.com/maths",
    description: "Comprehensive tutoring to excel in mathematics."
  },
  {
    title: "Biology",
    href: "https://medico-tutoring.neetocal.com/biology",
    description: "Detailed lessons covering all biology concepts."
  },
  {
    title: "Chemistry",
    href: "https://medico-tutoring.neetocal.com/chemistry",
    description: "Master chemistry with personalized guidance."
  },
  {
    title: "Psychology",
    href: "https://medico-tutoring.neetocal.com/psychology",
    description: "Insights and understanding of psychology principles."
  },
];

const admissions: { title: string; href: string; description?: string }[] = [
  {
    title: "Personal Statement Review",
    href: "https://medico-tutoring.neetocal.com/personal-statement-review",
    description: "Professional review to refine your personal statement."
  },
  {
    title: "Interview Preparation",
    href: "https://medico-tutoring.neetocal.com/interview-preparation",
    description: "Personalized coaching for interview success."
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY>50){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (
    <div className={`${isScrolled? "bg-background/95 px-8" : "bg-transparent"} transition-all duration-1000  w-full flex flex-row justify-between items-center px-5 py-2 rounded-lg`}>
      <Link href={"#home"}>
      <h1 className={`${modak.className} text-3xl :text-4xl font-regular`}>Medico</h1>
      </Link>

      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="rounded-xl">

            <NavigationMenuItem>
              <NavigationMenuTrigger >Tutoring</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] md:w-[500px] lg:w-[600px]  gap-1 p-4  lg:grid-cols-2">
                  {tutoring.map((service) => (
                    <ListItem key={service.title} title={service.title} href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] md:w-[500px] lg:w-[600px] gap-1 p-4  lg:grid-cols-2">
                  {admissions.map((service) => (
                    <ListItem key={service.title} title={service.title} href={service.href}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#why-us">Why Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#reviews">Reviews</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#about-us">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#faqs">FAQs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden lg:block">

        <Link href={"#contact-us"} className=" text-sm font-semibold   border-2 border-secondary rounded-[10px] px-[10px] py-[5px] flex justify-center items-center hover:bg-designFull/50">
        Contact Us
        </Link>
      </div>

      <div className="block lg:hidden">
        <MobileNav />
      </div>

    </div>

  )

}

const ListItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuLink> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-bold leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";