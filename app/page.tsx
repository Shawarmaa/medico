import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Event from "@/components/event";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";
import Reviews from "@/components/reviews";
import AboutUs from "@/components/about-us";
export default function Home() {
  return (
    <div className="flex flex-col gap-14 items-center lg:gap-36 px-2.5 md:px-10 lg:px-24">
      
      <div className="p-5 z-10 sticky top-0 w-full">
        <Navbar/>
      </div>

      <Hero/>
      <Event/>
      <Services/>
      <HowItWorks/>
      <WhyUs/>
      <Reviews/>
      <AboutUs/>

    </div>
  );
}
