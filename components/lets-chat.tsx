import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function LetsChat() {
    return (
        <div className = "flex flex-col justify-center items-center w-full">
            <h2 className = {`${anton.className}`}>Let's chat</h2>
            <h1>Reach out and we’ll get in touch within 24 hours.</h1>
            
            <div className = "flex flex-col justify-center items-center w-full">
                
            </div>
        </div>
    )
}