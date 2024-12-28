import { Anton, Modak } from "next/font/google";
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";
import { InstagramIcon, MailIcon } from "lucide-react";


const anton = Anton({ subsets: ['latin'], weight: '400' })
const modak = Modak({ subsets: ['latin'], weight: '400' })

export default function Footer() {
    return (
        <div className = "flex flex-col justify-center items-center w-full">
            <hr className = "w-full pb-3"/>

            <div className="flex flex-row justify-between items-center w-full">

                    <h2 className={modak.className + " text-[40px]"}>MedicoTutoring</h2>

                <div className = "flex flex-row justify-end items-center gap-5">
                    <h1 className="text-[14px]">© 2024 MedicoTutoring</h1>
                    <Button variant="link" className="text-[14px]">Terms of Service</Button>
                    <InstagramIcon className="size-7"/>
                </div>
                
            </div>
        </div>
    )
}