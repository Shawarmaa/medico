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
import { Textarea } from "./ui/textarea"

import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useState } from "react"


const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}).max(50, {message: "Name must be less than 50 characters"}),
    email: z.string().email({message: "Invalid email address"}).min(1, {message: "Email is required"}).max(50, {message: "Email must be less than 50 characters"}),
    message: z.string().min(1, {message: "Message is required"}).max(500, {message: "Message must be less than 500 characters"}),
})


const anton = Anton({ subsets: ['latin'], weight: '400' })

export default function LetsChat() {
    const [successMessage, setSuccessMessage] = useState("");


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
    
            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            setSuccessMessage("Your message has been sent successfully!");
    
            form.reset();
            setTimeout(() => setSuccessMessage(""), 5000)
        } catch (error) {
            console.error("Error:", error);
            setSuccessMessage("Failed to send email. Please try again.");
        }
    }

    return (
        <div className = "flex flex-col justify-center items-center gap-4 p-2">

            {successMessage &&(
                <div className="fixed top-4 left-4 z-50">
                <Alert className="bg-designFull">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
                </div>
            )}


            <div className = "flex flex-col justify-center items-center gap-2">
                <h2 className = {`${anton.className}`}>Let&apos;s Chat</h2>
                <h1>Reach out and we’ll get in touch within 24 hours.</h1>
            </div>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full gap-2">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className = "w-full">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
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
                    <FormField
                    control={form.control}
                    name = "message"
                    render = {({field}) => (
                        <FormItem className = "w-full">
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type your message here" className = "" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className = "shadow-[-4px_4px_0_0_#422800] select-none active:shadow-[-2px_2px_0_0_#422800] active:translate-x-[-2px] active:translate-y-[2px] w-full">Submit</Button>
                </form>
            </Form>

        </div>
    )
}