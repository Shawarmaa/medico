"use client"
import { Anton } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
const anton = Anton({ subsets: ['latin'], weight: '400' })


const services : {title: string; options: {title: string; href: string}[]}[] = [
    {
        title: "A Level",
        options: [
            {
                title: "Maths",
                href: "/services/a-level/maths"
            },
            {
                title: "Biology",
                href: "/services/a-level/biology"
            },
            {
                title: "Chemistry",
                href: "/services/a-level/chemistry"
            },
            {
                title: " Psycology",
                href: "/services/a-level/psycology"
            }
        ]
    },
    {
        title: "University Admissions",
        options: [
            {
                title: "UCAS",
                href: "/services/university/ucas"
            },
            {
                title: "Personal Statement",
                href: "/services/university/personal-statement"
            },
            {
                title: "Interview Preparation",
                href: "/services/university/interview-preparation"
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
        <div className="flex flex-row gap-10 ">
            <div className="flex flex-col justify-start items-center sm:items-start gap-10 xl:w-[600px]">
                <h2 className={`${anton.className}`}>Services</h2>

                <div className="flex flex-col gap-7 items-center sm:items-start">
                    <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                        {services.map((service) => (
                            <Button key={service.title} className={` ${activeService === service.title ? 'bg-designFull' : ''}`} onClick={() => handleServiceClick(service.title)}>
                                <h1>{service.title}</h1>
                            </Button>



                        ))}
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                        {services.map((service) => service.options.map((option) =>(
                                <Link key={option.title} href={option.href} className={` border-2 border-secondary rounded-[20px] px-[25px] py-[10px] flex justify-center items-center hover:bg-designFull ${activeService === service.title ? 'block' : 'hidden'}`}>
                                    <h1>{option.title}</h1>
                                </Link>
                            )))}
                    </div>
                </div>

            </div>
            <img src="doctors.svg" alt="doctors image" className="hidden xl:block" />
        </div>
    )
}