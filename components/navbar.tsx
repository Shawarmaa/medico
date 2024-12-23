"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"





export default function Navbar() {

  return (
    <div className="flex flex-row justify-between items-center px-5">
      <h1>Medico</h1>

      <div className="hidden md:block">
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
              <Link href="/why-us" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Why Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/reviews" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Reviews</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about-us" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/faqs" >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQs</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:block">
        <Button variant={"outline"}>Contact Us</Button>
      </div>
      
      {/* <div className=" md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className=""/>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent>
            <DropdownMenuItem>Services</DropdownMenuItem>
            <DropdownMenuItem>Alevel</DropdownMenuItem>
            <DropdownMenuItem>Why Us</DropdownMenuItem>
            <DropdownMenuItem>Reviews</DropdownMenuItem>
            <DropdownMenuItem>About Us</DropdownMenuItem>
            <DropdownMenuItem>FAQs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      <div className=" md:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          
          <DrawerContent>
            <DrawerHeader className="">
              <Link href="/" >Services</Link>
              <Link href="/" >Alevel</Link>
              <Link href="/" >Why Us</Link>
              <Link href="/" >Reviews</Link>
              <Link href="/" >About Us</Link>
              <Link href="/" >FAQs</Link>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>

    </div>

  )

}
