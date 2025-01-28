import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",  // Replace with your verified domain
            to: ["muhammadabdullaham24@gmail.com"],  // Replace with your actual recipient email
            subject: `New Contact Form Submission from ${name}`,
            text: `
                You have received a new message from the website contact form:

                📌 Name: ${name}
                📧 Email: ${email}
                💬 Message: ${message}

                Please respond promptly.
            `,
        });

        return NextResponse.json({ message: "Email sent successfully!", response }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Failed to send email", details: error }, { status: 500 });
    }
}