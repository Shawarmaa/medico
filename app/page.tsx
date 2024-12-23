import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 px-2.5 md:gap-36">
      
      <div className="p-5 z-10 sticky top-0">
        <Navbar/>
      </div>
      

      <Hero/>

    </div>
  );
}
