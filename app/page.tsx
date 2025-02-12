import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Event from "@/components/event";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";
import Reviews from "@/components/reviews";
import AboutUs from "@/components/about-us";
import FAQ from "@/components/faq";
import LetsChat from "@/components/lets-chat";
import Mailing from "@/components/mailing";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";
import { Ripple } from "@/components/magicui/ripple";
import { BlurFade } from "@/components/magicui/blur-fade";


export default function Home() {
  return (
    <div id="home" className=" pt-48 flex flex-col gap-14 lg:gap-36 items-center  px-2.5 md:px-10 lg:px-24 overflow-hidden">
      
      <div className="w-full p-5 z-50 fixed top-0">
        <Navbar/>
      </div>
      <Image src={"/rectangle.png"} width={100} height={100} alt="background gradient" className=" -z-50 absolute left-0 top-0 w-screen h-full"/>
      <div className="flex justify-center items-center w-screen h-full relative  lg:p-20 lg:top-10 ">
      <Ripple
        mainCircleSize={260}
        mainCircleOpacity={0.25}
        className="hidden md:block absolute overflow:hidden -z-30 -top-48 lg:-top-24 "
        />
      <Ripple
        mainCircleSize={100}
        mainCircleOpacity={0.25}
        className="md:hidden absolute overflow:hidden -z-30 -top-48 lg:-top-24 "
        />
        <Hero />
      </div>
      <Event/>
      <Services/>
      <HowItWorks/>
      <WhyUs/>
      <Reviews/>
      <AboutUs/>
      <FAQ/>
      <div id="contact-us" className=" pt-20 flex lg:flex-row flex-col justify-between items-center lg:items-start gap-16 w-full max-w-[1200px]">
        <BlurFade delay={0.2} inView>
          <LetsChat/> 
        </BlurFade>
                       
        <BlurFade delay={0.35} inView>
          <Mailing/>             
        </BlurFade>
      </div>
      <Footer/>

    </div>
  );
}
