"use client"

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
import { Button } from "./ui/button"
import MobileNav from "@/components/mobile-nav";



import { Modak } from "next/font/google";
const modak = Modak({ subsets: ['latin'], weight: '400' })



export default function Navbar() {

  return (
    <div className=" w-full flex flex-row justify-between items-center px-5 py-2  bg-background rounded-lg">
      <h1 className={`${modak.className} text-3xl :text-4xl font-regular`}>Medico</h1>

      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Alevel</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#why-us" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Why Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#reviews" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Reviews</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#about-us" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us  </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#faqs" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQs</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden lg:block">
        <Button variant={"default"}>Contact Us</Button>
      </div>
      
      <div className="block lg:hidden">
        <MobileNav />
      </div>

    </div>

  )

}
