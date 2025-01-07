import Image from 'next/image'
import { Anton } from "next/font/google";


const anton = Anton({ subsets: ['latin'], weight: '400' })



export default function HowItWorks() {
    return (
        <div className=" pt-20 flex flex-col justify-center items-center gap-4 md:gap-[60px] text-center ">
            <div className="flex flex-col items-center gap-5 px-5">
                <h2 className={`${anton.className}`}>How It Works</h2>
                <h1>Whether you&apos;re revising for an exam or needs regular support, it&apos;s easy to get started.</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center w-screen gap-[60px] lg:justify-around px-2.5 md:px-10 lg:px-24">
                <div className="flex flex-col items-center gap-[10px] lg:gap-[33px] w-[270px] md:w-[350px]">
                    <Image src="/magnify.svg" width={300} height={200} alt="magnify" className="h-[100px] md:h-[150px] lg:h-[200px]"/>
                    <div className="flex flex-col items-center md:gap-[10px]">
                        <h1 className="font-bold">Select Subject</h1>
                        <h1 className="font-medium leading-[20px] md:leading-[30px]">Select from our range of subjects & university admissions support.</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[10px] lg:gap-[33px] w-[270px] md:w-[350px]">
                    <Image src="/computer.svg" width={300} height={200} alt="computer" className="h-[100px] md:h-[150px] lg:h-[200px]"/>
                    <div className="flex flex-col items-center md:gap-[10px]">
                        <h1 className="font-bold">Request Lesson</h1>
                        <h1 className="font-medium leading-[20px] md:leading-[30px]">Choose a time slot that works with your schedule.</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[10px] lg:gap-[33px] w-[270px] md:w-[350px]">
                    <Image src="/hat.svg" width={300} height={200} alt="hat" className="h-[100px] md:h-[150px] lg:h-[200px]"/>
                    <div className="flex flex-col items-center md:gap-[10px]">
                        <h1 className="font-bold">Start Learning</h1>
                        <h1 className="font-medium leading-[20px] md:leading-[30px]">Book regular one-to-one lessons and see the results.</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}