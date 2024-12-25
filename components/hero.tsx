import { Button } from "./ui/button";
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function Hero() {
    return (
        <div className="flex flex-col items-center p-10 gap-8">

            <div className={"flex flex-col items-center gap-4 text-center" }>
                <h1 className="">Smart people use tutors to get even smarter</h1>
                <h3 className={`text-5xl md:text-7xl xl:text-8xl ${anton.className}`}>Rethink Learning</h3>
                <h1 className=" md:max-w-3xl">Unlock your potential with Medico. Personalized tutoring from passionate experts to boost your grades and career.</h1>
            </div>

            <Button variant={"default"}>Our Services</Button>

            <div className="flex flex-row justify-center items-center gap-3">
                <h1 className="text-xs font-bold">Excellent</h1>

                <img src="stars.svg" alt="trustpilot stars"/>

                <div className="flex flex-row justify-center items-center gap-1">
                    <img src="star.svg" alt="trustpilot star" />
                    <h1 className="text-xs font-bold">Trustpilot</h1>
                </div>
            </div>

        </div>
    )
}