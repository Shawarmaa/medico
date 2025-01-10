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


export default function Home() {
  return (
    <div id="home" className=" pt-48 flex flex-col gap-14 items-center lg:gap-36 px-2.5 md:px-10 lg:px-24">
      
      <div className="p-5 z-10 fixed top-0 w-full">
        <Navbar/>
      </div>
      
      <Hero/>
      <Event/>
      <Services/>
      <HowItWorks/>
      <WhyUs/>
      <Reviews/>
      <AboutUs/>
      <FAQ/>
      <div id="contact-us" className=" pt-20 flex lg:flex-row flex-col justify-between items-center lg:items-start gap-16 w-11/12">
        <LetsChat/>
        <Mailing/>
      </div>
      <Footer/>

    </div>
  );
}
