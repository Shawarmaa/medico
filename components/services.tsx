"use client"
import { Anton } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { BlurFade } from "./magicui/blur-fade";
const anton = Anton({ subsets: ['latin'], weight: '400' })


const services : {title: string; options: {title: string; href: string}[]}[] = [
    {
        title: "A Level",
        options: [
            {
                title: "Maths",
                href: "https://medico-tutoring.neetocal.com/maths"
            },
            {
                title: "Biology",
                href: "https://medico-tutoring.neetocal.com/biology"
            },
            {
                title: "Chemistry",
                href: "https://medico-tutoring.neetocal.com/chemistry"
            },
            {
                title: " Psycology",
                href: "https://medico-tutoring.neetocal.com/psychology"
            }
        ]
    },
    {
        title: "University Admissions",
        options: [
            {
                title: "Personal Statement Review",
                href: "https://medico-tutoring.neetocal.com/personal-statement-review"
            },
            {
                title: "Interview Preparation",
                href: "https://medico-tutoring.neetocal.com/interview-preparation"
            }
        ]
    },
]


export default function Services() {
    const [activeService, setActiveService] = useState(services[0].title);

    const handleServiceClick = (service: string) => {
        setActiveService(service);
    }

    return (
        <div id="services" className=" pt-20 flex flex-row gap-10 ">
            <div className="flex flex-col justify-start items-center sm:items-start gap-10 xl:w-[600px]">
                <BlurFade delay={0.2} inView>
                    <h2 className={`${anton.className}`}>Services</h2>
                </BlurFade>

                <div className="flex flex-col gap-7 items-center sm:items-start">
                    <BlurFade delay={0.25} inView>   
                        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                            {services.map((service) => (
                                <Button key={service.title} className={`shadow-[-4px_4px_0_0_#422800] text-lg select-none active:shadow-[-2px_2px_0_0_#422800] active:translate-x-[-2px] active:translate-y-[2px] hover:bg-designFull ${activeService === service.title ? 'bg-designFull' : ''}`} onClick={() => handleServiceClick(service.title)}>
                                    <h1>{service.title}</h1>
                                </Button>



                            ))}
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.3} inView>
                        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                            {services.map((service) => service.options.map((option) =>(
                                    <Link key={option.title} href={option.href} className={`shadow-[0_4px_0_0_#422800] text-lg select-none active:shadow-[0px_2px_0_0_#422800] active:translate-y-[2px] border-2 border-secondary rounded-[20px] px-[25px] py-[10px] flex justify-center items-center hover:bg-designFull/50 ${activeService === service.title ? 'block' : 'hidden'}`}>
                                        <h1>{option.title}</h1>
                                    </Link>
                                )))}
                        </div>
                    </BlurFade>
                </div>

            </div>
            <BlurFade delay={0.35} inView>    
                <img src="doctors.svg" alt="doctors image" className="hidden xl:block" />
            </BlurFade>
        </div>
    )
}