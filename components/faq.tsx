import { Anton } from "next/font/google";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { BlurFade } from "./magicui/blur-fade";
   

const anton = Anton({ subsets: ['latin'], weight: '400' })

const components: { title: string, description: string }[] = [
    {
        title: "What Subjects Do You Offer?",
        description: "We offer tutoring in a wide range of subjects, including biology, chemistry, physics, math, and exam preparation for medical school entrance tests, such as the MCAT or UCAT."
    },
    {
        title: "Who Are Your Tutors?",
        description: "Our tutors are highly qualified professionals, many of whom are current or former medical students and experts in their respective fields. They are dedicated to providing personalized, high-quality support."
    },
    {
        title: "How Do I Book a Tutoring Session?",
        description: "You can easily book a tutoring session through our online platform. Simply select your subject, preferred tutor, and available time slot to schedule your session."
    },
    {
        title: "What Is Your Cancellation Policy?",
        description: "We require at least 24 hours' notice for cancellations. If you cancel within 24 hours, a cancellation fee may apply, and the session will be rescheduled at your convenience."
    },
    {
        title: "Can I Book Multiple Lessons?",
        description: "Yes, you can book multiple lessons at once, either with the same tutor or different ones. You can schedule sessions as per your needs, and our platform will allow you to manage them easily."
    },
    {
        title: "Do You Tutor In-Person?",
        description: "Currently, we offer tutoring services online only. This allows us to connect with students regardless of location, providing flexible and convenient learning opportunities."
    }
];


export default function FAQ() {
    return (
        <div id="faqs" className=" pt-20 px-5 flex flex-col justify-center xl:flex-row xl:items-start items-center text-start w-full gap-[45px] ">
            <BlurFade delay={0.2} inView>      
                <div className = "flex flex-col justify-center items-center text-center xl:text-start xl:items-start">
                    <h2 className = {`${anton.className}`}>FAQ&apos;s</h2>
                    <h1>Answers to some questions you might have</h1>
                </div>
            </BlurFade>

            <div className = "flex flex-col justify-center items-center gap-[20px] md:gap-[45px] w-full leading-[20px] max-w-[750px]">
                <Accordion type="single" collapsible className="w-full flex flex-col ">
                    {components.map((component) =>(
                        <BlurFade delay={0.35} inView key={component.title}>
                            <AccordionItem value={component.title} >
                                <AccordionTrigger><h1>{component.title}</h1></AccordionTrigger>
                                <AccordionContent><p className = "text-[14px] md:text-[18px]">{component.description}</p></AccordionContent>
                            </AccordionItem>
                        </BlurFade>
                    ))}
                    
                </Accordion>
            </div>
        </div>
    )
}