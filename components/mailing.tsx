import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function Mailing() {
    return (
        <div className = "flex flex-col justify-center items-center w-full">
            <h2 className = {`${anton.className}`}>JOIN THE MAIL</h2>
            <h1>Get updates and early access to our events</h1>

            <div className = "flex flex-col justify-center items-center w-full">

            </div>
        </div>
    )
}