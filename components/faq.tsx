import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { Anton } from "next/font/google";

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
        <div className = "flex flex-col justify-center items-center text-start w-full px-[20px] gap-[45px] max-w-[800px]">
            <div className = "flex flex-col justify-center items-center text-center">
                <h2 className = {`${anton.className} text-[36px] md:text-[48px]`}>FAQ's</h2>
                <h1>Answers to some questions you might have</h1>
            </div>

            <div className = "flex flex-col justify-center items-center gap-[20px] md:gap-[45px] w-full leading-[20px]">
                {components.map((component) => (
                    <Collapsible key={component.title} className = "flex flex-col gap-[10px] justify-between items-center p-[10px] md:py-[20px] md:px-[30px] rounded-[10px] bg-design w-full">
                        <CollapsibleTrigger className = "flex flex-row justify-between items-center w-full">
                            <h1>{component.title}</h1>
                            <ChevronDownIcon className = "w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <p>{component.description}</p>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    )
}