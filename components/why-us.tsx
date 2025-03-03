"use client";
 
import { useTheme } from "next-themes";
import { MagicCard } from "./magicui/magic-card";



import Image from 'next/image'
import { Anton } from "next/font/google";
import { BlurFade } from "./magicui/blur-fade";

const anton = Anton({ subsets: ['latin'], weight: '400' })

const components: {img: string; title: string; description: string}[] = [
    {
        img: "/hand.svg",
        title: "Expert Guidance",
        description: "Benefit from the knowledge and experience of qualified tutors"
    },
    {
        img: "/clock.svg",
        title: "Flexible Timings",
        description: "Choose tutoring sessions that fit your busy lifestyle"
    },
    {
        img: "/muscle.svg",
        title: "Confidence Building ",
        description: "Gain confidence to excel in your medical studies and future career"
    },
    {
        img: "/papers.svg",
        title: "Access to Resources",
        description: "Utilise a wealth of study materials, questions, exams and notes"
    },
    {
        img: "/trophy.svg",
        title: "Exam Success",
        description: "Improve top grades with expert exam preparation and strategies"
    },
    {
        img: "/papers.svg",
        title: "Personalised Learning",
        description: "Receive customised study plans to address specific learning needs."
    }
]

export default function WhyUs() {
    const {theme} = useTheme();
    return (
        <div id="why-us" className=" pt-20 flex flex-col justify-center items-center gap-[30px] md:gap-[60px] text-center ">
            <div className="flex flex-col items-center gap-5 px-5">
                <h2 className={`${anton.className}`}>Why Us</h2>
                <h1>Why Choose Us for Your Medical Tutoring Needs</h1>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-[5px] md:gap-[10px] max-w-[1300px] w-screen ">
                {components.map((component) => (
                    <BlurFade delay={0.35} inView key={component.title}>
                        <MagicCard
                            className="flex-col items-center justify-center
                            flex gap-[5px] md:gap-3 px-[5px] md:px-5 size-[182px] md:w-[380px] md:h-[366px] lg:w-[360px] lg:h-[336px] bg-design rounded-xl"
                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                        >
                        <div  className="flex flex-col justify-center items-center gap-[5px] md:gap-3 px-[5px] md:px-5 size-[182px] md:w-[380px] md:h-[366px] lg:w-[360px] lg:h-[336px] bg-design rounded-xl">
                                

                            <Image src={component.img} width={150} height={131} alt={component.title} className="h-[50px] md:h-[131px]" />
                            <h1 className="text-[16px] md:text-[24px]">{component.title}</h1>
                            <h1 className="font-medium text-[13px] md:text-[20px] leading-[20px] md:leading-[35px]">{component.description}</h1>
                        </div>
                        </MagicCard>
                  </BlurFade>
                ))}
            </div>

        </div>
    )
}