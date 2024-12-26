import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function Footer() {
    return (
        <div className = "flex flex-col justify-center items-center w-full">
            footer
        </div>
    )
}