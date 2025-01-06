import { Anton } from "next/font/google";

import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
   

  

const anton = Anton({ subsets: ['latin'], weight: '400' })

const components: {title: string, description: string}[] = [
    {
        title: "Our Mission",
        description: "We are committed to transforming medical school applications through pioneering tutoring. We provide aspiring medical professionals with expert guidance, tools and support to excel in their journey. Our experienced tutors empower students to exceed their goals and create pathways for tomorrow's healthcare leaders."
    },
    {
        title: "Our Story", 
        description: "Medico was founded by three students who successfully navigated medical school admissions. Having overcome these challenges themselves, they created Medico to guide others on the same path to achieving their medical dreams."
    },
    {
        title: "Meet the Team",
        description: "Our diverse team of passionate educators and medical professionals work together to deliver exceptional tutoring. Meet some of the talented individuals helping aspiring medical students succeed."
    }
]

const images: {name: string, position: string, src: string, alt: string}[] = [
    {name: "Zeeshan", position: "Founder", src: "image.png", alt: "team member picture"},
    {name: "Abdul Raafi", position: "Founder", src: "image.png", alt: "team member picture"},
    {name: "Abdelaziz", position: "Founder", src: "image.png", alt: "team member picture"},
]

export default function AboutUs() {
    return (
        <div className = "flex flex-col justify-center items-center gap-[60px] max-w-[1000px] w-full">
            <div className="flex flex-col justify-center items-center">
                <h2 className={`${anton.className}`}>About Us</h2>
                <h1>Get to know us, our core values and what makes us unique</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-[40px] text-center text-background w-full">
                <Accordion type="single" collapsible className="w-full flex flex-col gap-[40px]">
                    {components.map((component) => (
                        <AccordionItem value={component.title} key={component.title} className="flex flex-col justify-center items-center p-[20px] gap-[10px] bg-secondary rounded-xl border-none">
                            <div className="w-full">
                                <AccordionTrigger className="w-full [&>svg]:hidden">
                                    <h1 className={`${anton.className} text-[36px] md:text-[48px] w-full text-center`}>{component.title}</h1>
                                </AccordionTrigger>
                            </div>
                            <AccordionContent className="flex flex-col gap-[30px] w-full">
                                <h1 className="">{component.description}</h1>

                                {component.title === "Meet the Team" ? 
                                <div className="flex flex-wrap justify-center items-center gap-[10px] md:gap-[40px]">
                                    {images.map((image) => (
                                        <div key={image.name} className="flex flex-col justify-end items-center relative rounded-[20px]"> 
                                            <img key={image.src} src={image.src} alt={image.alt} className="w-[146px] h-[162px] md:w-[280px] md:h-[310px] rounded-[20px] "/>
                                            <div className="w-[126px] h-[39px] md:w-[260px] md:h-[73px] absolute bottom-[10px] flex flex-col justify-center items-center text-background bg-foreground/90 px-[10px] py-[5px] md:py-[10px] rounded-[10px] gap-[7px]">
                                                <h1 className="text-[13px] md:text-[24px] font-bold leading-none">{image.name}</h1>
                                                <h1 className="text-[11px] md:text-[16px] font-regular leading-none">{image.position}</h1>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                : null}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}