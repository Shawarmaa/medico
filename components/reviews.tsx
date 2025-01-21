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
        description: "loremsfasdfsafdsfasdfafdsfsadfsafsdafsfsfasfsadfloremsfasdfsafdsfasdfafdsfsadfsafsdafsfsfasfsadfloremsfasdfsafdsfasdfafdsfsadfsafsdafsfsfasfsadf",
        name: "user"
    },
    {
        rating: 5,
        title: "Fantastic UCAT course",
        description: "loremsfasdfsafdsfasdfafdsfs",
        name: "user"
    },
    {
        rating: 5,
        title: "Fantastic UCAT course",
        description: "loremsfasdfsafdsfasdfafdsfs",
        name: "user"
    },
    {
        rating: 5,
        title: "Fantastic UCAT course",
        description: "loremsfasdfsafdsfasdfafdsfs",
        name: "user"
    },
    {
        rating: 5,
        title: "Fantastic UCAT course",
        description: "loremsfasdfsafdsfasdfafdsfs",
        name: "user"
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
                className="w-full max-w-sm hidden   "
            >
                <CarouselContent className=" gap-10" >
                    {reviews.map((review) => (
                        <CarouselItem key={review.name} className="p-0 md:basis-1/2 lg:basis-1/3  ">
                            <Card className="p-1">
                                <CardContent className=" aspect-square flex flex-col justify-center items-center">
                                    <div className="text-yellow-500 text-xl font-bold">{review.rating} ★</div>
                                    <h3 className="text-lg font-semibold mt-2">{review.title}</h3>
                                    <h1 className="text-gray-600 text-sm mt-1">{review.description}</h1>
                                    <p className="text-gray-500 text-sm mt-2">- {review.name}</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Carousel className="w-full max-w-sm hidden">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">{index + 1}</span>
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