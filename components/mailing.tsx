"use client"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Anton } from "next/font/google";


const anton = Anton({ subsets: ['latin'], weight: '400' })

const formScheme = z.object({
    email: z.string().email({message: "Invalid email address"}).min(1, {message: "Email is required"}).max(50, {message: "Email must be less than 50 characters"}),
})

export default function Mailing() {
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formScheme>) {
        console.log(values)
    }

    return (
        <div className = "flex flex-col justify-center items-center gap-4">
            <div className = "flex flex-col justify-center items-center gap-2">
                <h2 className = {`${anton.className}`}>Join the Mail</h2>
                <h1>Get updates and early access to our events</h1>
            </div>


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className = "flex flex-col justify-center items-center gap-2 w-full">
                    <FormField
                    control={form.control}
                    name = "email"
                    render = {({field}) => (
                        <FormItem className = "w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="name@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className = "shadow-[-4px_4px_0_0_#422800] select-none active:shadow-[-2px_2px_0_0_#422800] active:translate-x-[-2px] active:translate-y-[2px] w-full">Join</Button>
                </form>
            </Form>

    </div>
    )
}