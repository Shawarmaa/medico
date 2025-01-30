import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const response = await fetch(
            `https://api.resend.com/audiences/0bd4d1c5-ebd3-42fa-a8ce-649fdcb99132/contacts`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Resend API error:", errorData);
            return NextResponse.json({ error: errorData.message || "Failed to add subscriber" }, { status: 500 });
        }

        return NextResponse.json({ message: "Subscriber added successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error adding subscriber:", error);
        return NextResponse.json({ error: "Failed to add subscriber" }, { status: 500 });
    }
}