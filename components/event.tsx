import {Anton} from 'next/font/google'
import { Button } from './ui/button'
import { BadgePoundSterling, MapPin, CalendarClock} from 'lucide-react'

const anton = Anton({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Event() {
    return (
        <div className="flex flex-col bg-design gap-5 px-5 py-10 md:p-16 lg:p-20 rounded-xl max-w-[1320px] relative items-center sm:items-start">
            <h2 className={` text-4xl md:text-5xl lg:text-6xl text-center md:text-start ${anton.className}`}>Level Up Your Personal Statement</h2>
            
            <div className="flex flex-col items-start gap-5">
                <h1>Join our personal statement workshop and learn how to write an outstanding application.</h1>
                <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-5 ">
                    <div className="flex flex-row items-center gap-2">
                        <BadgePoundSterling />
                        <h1>Free</h1>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <MapPin />
                        <h1>Online</h1>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <CalendarClock />
                        <h1>Sep 7th at 12 PM</h1>
                    </div>
                </div>
                <div>
                    <h1>In this session, you'll discover:</h1>
                    <ul className='list-disc pl-5'>
                        <li><h1>Effective reflection techniques</h1></li>
                        <li><h1>Proven personal statement structures</h1></li>
                        <li><h1>Essential tips and tricks</h1></li>
                    </ul>
                </div>
                <h1>Don't miss out!</h1>
            </div>
            
            <Button className='shadow-[-4px_4px_0_0_#422800] select-none active:shadow-[-2px_2px_0_0_#422800] active:translate-x-[-2px] active:translate-y-[2px]'>Sign up now</Button>

            <img src="minions.svg" alt="minions image" className="absolute bottom-0 right-0 hidden xl:block" />
            

        </div>
    )
}