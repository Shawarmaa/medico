import { Anton } from "next/font/google";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  

const anton = Anton({ subsets: ['latin'], weight: '400' })

const components: {title: string, description: string}[] = [
    {
        title: "Our Mission",
        description: "At our core, we are driven by an unwavering commitment to transform the landscape of medical school applications. Our mission is to pioneer a tutoring group that redefines the standard for aspiring medical professionals. We believe that every student with a passion for medicine deserves the opportunity to shine, and we are dedicated to providing them with the tools, knowledge, and support needed to excel in their journey towards medical school. With a team of experienced tutors and a cutting-edge approach to preparation, we aim to empower aspiring doctors to not just meet but exceed their academic and application goals. Together, we are revolutionizing the future of medical education and creating a brighter path for the healthcare leaders of tomorrow."
    },
    {
        title: "Our Story",
        description: "Medico emerged from the shared aspirations of three students striving to enter the medical field. They conquered their own admission challenges, and in doing so, recognized the need for guidance. Thus, Medico was born, a company founded by those who walked the same path, now helping others realize their dreams in medicine."
    },
    {
        title: "Meet the Team",
        description: "Our team includes people from all walks of life. Our shared passion for teaching helps us run the best courses. While we can’t feature everyone who contributes to Medico, here are a few of the people you may meet along the way, including some of the talented medics who support aspiring medical students."
    }
]

const images: {name: string, position: string, src: string, alt: string}[] = [
    {name: "name", position: "title", src: "image.png", alt: ""},
    {name: "name", position: "title", src: "", alt: ""},
    {name: "name", position: "title", src: "", alt: ""},
    {name: "name", position: "title", src: "", alt: ""},
    {name: "name", position: "title", src: "", alt: ""},
]

export default function AboutUs() {
    return (
        <div className = "flex flex-col justify-center items-center gap-[60px]">
            <div className="flex flex-col justify-center items-center">
                <h2 className={`${anton.className}`}>About Us</h2>
                <h1>Get to know us, our core values and what makes us unique</h1>
            </div>
            <div className = "flex flex-col justify-center items-center gap-[40px] text-center text-background">
                {components.map((component) =>(
                    <div key = {component.title} className = "flex flex-col gap-[30px] p-[40px] bg-secondary rounded-xl">
                        <Collapsible>
                            <CollapsibleTrigger>
                                <h1 className = {`${anton.className} text-[36px] md:text-[48px]`}>{component.title}</h1>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <h1 className = "font-medium">{component.description}</h1>

                                {component.title === "Meet the Team"? 
                                <div className = "flex flex-wrap justify-center items-center gap-[10px] md:gap-[40px]">
                                    {images.map((image) => (
                                        <div key = {image.name} className = "flex flex-col justify-end items-center relative rounded-[20px]"> 
                                            <img key = {image.src} src = {image.src} alt = {image.alt} className = "w-[146px] h-[162px] md:w-[280px] md:h-[310px] rounded-[20px] "/>
                                            <div className = " w-[126px] h-[39px] md:w-[260px] md:h-[73px] absolute bottom-[10px] flex flex-col justify-center items-center text-background bg-foreground/90 px-[10px] py-[5px] md:py-[10px] rounded-[10px] gap-[7px]">
                                                <h1 className = "text-[13px] md:text-[24px] font-bold leading-none">{image.name}</h1>
                                                <h1 className = "text-[11px] md:text-[16px] font-regular leading-none">{image.position}</h1>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                : null}
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                ))}
            </div>
        </div>
    )
}