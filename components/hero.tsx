import Link from "next/link";
import { Button } from "./ui/button";
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ['latin'], weight: '400' })
import Image from "next/image";


export default function Hero() {
    return (
        <div className=" flex flex-col items-center py-0  p-10 gap-8 z-10">

            <div className={"flex flex-col items-center gap-4 text-center" }>
                <h1 className="hidden sm:block">Smart people use tutors to get even smarter</h1>
                <h3 className={`text-5xl md:text-7xl xl:text-8xl ${anton.className}`}>Rethink Learning</h3>
                <h1 className=" md:max-w-3xl"><p className="hidden sm:block">Unlock your potential with Medico.</p><p> Personalized tutoring from passionate experts to boost your grades and career.</p></h1>
            </div>

            <Button className="p-0 shadow-[-4px_4px_0_0_#422800] select-none active:shadow-[-2px_2px_0_0_#422800] active:translate-x-[-2px] active:translate-y-[2px]"><Link href={"#services"} className="px-[20px] py-[10px]">Our Services</Link></Button>


            <Link href={"https://uk.trustpilot.com/review/medicotutoring.com"} target="_blank" rel="noopener noreferrer" className="flex flex-row justify-center items-center gap-3 group">
                <h1 className="text-xs font-bold group-hover:opacity-50">Excellent</h1>

                <Image width={100} height={100} src="4.5stars.svg" alt="trustpilot stars" className="group-hover:opacity-50 transition-opacity"/>

                <div className="flex flex-row justify-center items-center gap-1"> 
                    <Image width={15} height={15} src="star.svg" alt="trustpilot star" className="group-hover:opacity-50 transition-opacity" />
                    <h1 className="text-xs font-bold group-hover:opacity-50">Trustpilot</h1>
                </div>
            </Link>

        </div>
    )
}