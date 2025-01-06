import { Anton, Modak } from "next/font/google";
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "lucide-react";


const modak = Modak({ subsets: ['latin'], weight: '400' })

export default function Footer() {
    return (
        <footer className="w-full bg-background py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className=" flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
                    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
                        <h2 className={modak.className + " text-2xl"}>MedicoTutoring</h2>
                        <p className="text-sm text-muted-foreground w-[200px] md:w-[300px]">
                            Expert medical tutoring services to help you succeed.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-3">
                        <h3 className="font-semibold">Contact Us</h3>
                        <a href="mailto:info@medicotutoring.com" className="text-sm text-muted-foreground hover:text-primary">
                            info@medicotutoring.com
                        </a>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2024 MedicoTutoring
                    </p>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="">
                            <InstagramIcon />
                        </Button>
                        <Button variant="ghost" size="icon" className="">
                            <FacebookIcon />
                        </Button>
                        <Button variant="ghost" size="icon" className=" ">
                            <LinkedinIcon className=""/>
                        </Button>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="link" className="text-sm p-0 h-auto">Privacy Policy</Button>
                        <Button variant="link" className="text-sm p-0 h-auto">Terms of Service</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}