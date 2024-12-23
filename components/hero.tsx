import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center p-10 gap-9">

            <div className="flex flex-col items-center gap-2.5 text-center">
                <h1>Smart people use tutors to get even smarter</h1>
                <h3>Rethink Learning</h3>
                <h1>Unlock your potential with Medico. Personalized tutoring from passionate experts to boost your grades and career.</h1>
            </div>

            <Button variant={"outline"}>Our Services</Button>

            
        </div>
    )
}