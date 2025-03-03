import Image from 'next/image'
import { Anton } from "next/font/google";
import { BlurFade } from './magicui/blur-fade';


const anton = Anton({ subsets: ['latin'], weight: '400' })

const components : {title: string, src: string, description: string }[] = [
    {
        title: "Select Subject",
        src: "/magnify.svg",
        description: "Select from our range of subjects & university admissions support."
    },
    {
        title: "Request Lesson",
        src: "/computer.svg",
        description: "Choose a time slot that works with your schedule."
    },
    {
        title: "Start Learning",
        src: "/hat.svg",
        description: "Book regular one-to-one lessons and see the results."
    }
]



export default function HowItWorks() {
    return (
        <div className=" pt-20 flex flex-col justify-center items-center gap-4 md:gap-[60px] text-center w-full">
            
            <div className="flex flex-col items-center gap-5 px-5">
                <h2 className={`${anton.className}`}>How It Works</h2> 
                <h1>Whether you&apos;re revising for an exam or needs regular support, it&apos;s easy to get started.</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[60px] lg:justify-around  md:px-10 lg:px-30 w-full">
                {components.map((item) =>(
                    <BlurFade delay={0.25} inView key={item.title}>
                        <div className="flex flex-col items-center gap-[10px] lg:gap-[33px] w-[270px] md:w-[310px]">
                            <Image src={item.src} width={300} height={200} alt="magnify" className="h-[100px] md:h-[150px] lg:h-[200px]"/>
                            <div className="flex flex-col items-center md:gap-[10px]">
                                <h1 className="font-bold">{item.title}</h1>
                                <h1 className="font-medium leading-[20px] md:leading-[30px]">{item.description}</h1>
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>

        </div>
    )
}