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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us  </NavigationMenuLink>
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

      <div className="hidden lg:block">
        <Button variant={"default"}>Contact Us</Button>
      </div>
      
      {/* <div className=" lg:hidden">
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

      <div className=" lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <img src="menu.svg" alt="menu" className="size-7" />
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
