import { Anton } from "next/font/google";

const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function Reviews() {
    return (
        <div className = "flex flex-col justify-center items-center text-center gap-10">
            <h2 className={`${anton.className}`}>Students that already <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-designFull relative inline-block">
                    <span className="relative text-white">love</span>
                </span> Medico</h2>
            
            <div>
                <h1>Reviews</h1>

            </div>

        </div>
    )
}