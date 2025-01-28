'use client'

import { Anton } from "next/font/google";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const anton = Anton({ subsets: ['latin'], weight: '400' })

const reviews : {rating: number, title?: string, description: string, name: string}[] = [
    {
        rating: 5,
        title: "Fantastic UCAT course",
        description: "Absolutely amazing UCAT tips. Very interactive and a friendly environment. Thoroughly enjoyed the Medico 5 day UCAT course. There were so many useful tips and tricks, that I have benefitted from using and have made my practice a lot more smoother. Sincere thanks to all members for arranging such an amazing course. Looking forward to the future courses!!",
        name: "Aleeza Shiraz"
    },
    {
        rating: 5,
        title: "Extremely useful with ucat",
        description: "Was so useful for ucat help, went through questions with us and gave feedback which was really helpful and shared tips and tricks which helped massively whilst answering questions and very interactive making it easier for any questions we had to get answered",
        name: "Aasiya"
    },
    {
        rating: 5,
        title: "Experienced and willing to offer help...",
        description: "Experienced and willing to offer help at all time.In addition, it's honest , and the price is realistic but the resources are still really valuable and helpful.",
        name: "Fatima Nada"
    },
    {
        rating: 5,
        title: "University specific mock MMI with Medico",
        description: "I had a mock MMI with Abdul today and it was nothing short of amazing. Abdul is incredibly knowledgeable and supportive. I really liked how it was very tailored to the university I have applied to, so I can tell that a lot of time and preparation have gone into that mock interview from medico’s side. Medico is truly a hidden gem that will give you all the tips and advice that you will need to ace your interviews. I 100% recommend them- no hesitation.",
        name: "Consumer"
    },
    {
        rating: 5,
        title: "Interview session with Abdul",
        description: "Medico have been really supportive and has provided high quality service throughout! Did an interview session with Abdul today where he answered all my questions in so much detail and gave me so many new ideas and great advice! We went through some critical thinking questions and he taught me a really good method to approach these harder questions! Feel a lot more confident now going into my interview, would defo recommend medico!!",
        name: "Amber Purba"
    },
    {
        rating: 4,
        title: "Really insightful tips...",
        description: "Really insightful tips which I previously would have not known, good strategies explained throughout the session - most useful session was SJT which taught me a lot on how to increase marks and even insight into greater knowledge which can help with interview season.",
        name: "Arishmah Asif"
    }
]

export default function Reviews() {


    return (
        <div id="reviews" className=" pt-20 flex flex-col justify-center items-center text-center gap-32 w-full">
            <div className="max-w-[640px]">
                <h2 className={`${anton.className}`}>Students that already <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-designFull relative inline-block">
                        <span className="relative text-white">love</span>
                    </span> Medico</h2>
            </div>
            
            <Carousel
                className="w-[1000px] "
            >
                <CarouselContent className=" " >
                    {reviews.map((review) => (
                        <CarouselItem key={review.name} className="basis-1/3">
                            <Card className="p-1">
                                <CardContent className=" aspect-square flex flex-col justify-center items-center">
                                    <div className="w-[300px] break-words whitespace-normal">

                                        <div className="text-yellow-500 text-xl font-bold">{review.rating} ★</div>
                                        <h3 className="text-lg font-semibold mt-2">{review.title}</h3>
                                        <h1 className="text-gray-600 text-sm mt-1">{review.description}</h1>
                                        <p className="text-gray-500 text-sm mt-2">- {review.name}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            
            <Carousel className="w-full max-w-md">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious /> 
                <CarouselNext />
            </Carousel>


        </div>
    )
}