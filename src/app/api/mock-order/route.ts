import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simulate processing time
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In a real application, you would integrate with WhatsApp Business API
        // or send an email here.

        return NextResponse.json({
            success: true,
            message: "Invoice generated and sent to WhatsApp successfully.",
            invoiceId: `INV-${Date.now()}`,
            payload: body,
            whatsappStatus: "Simulated Delivery",
        });

    } catch (error) {
        console.error("Mock order error:", error);
        return NextResponse.json({ success: false, error: "Bad Request" }, { status: 400 });
    }
}
