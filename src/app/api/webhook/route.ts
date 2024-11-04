import { type NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Verify the webhook secret if you've set one
    const webhookSecret = req.headers.get("webhook-secret")
    if (webhookSecret !== process.env.SANITY_WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 })
    }

    // Check if this is a message creation
    if (body._type === "message") {
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: "sahagking@gmail.com",
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
      })

      //   await resend.emails.send({
      //     from: "notifications@yourdomain.com",
      //     to: "arzsahag@gmail.com",
      //     subject: "New Message Received",
      //     html: `
      //       <h2>New Message Details:</h2>
      //       <p><strong>Name:</strong> ${body.name}</p>
      //       <p><strong>Email:</strong> ${body.email}</p>
      //       <p><strong>Message:</strong> ${body.message}</p>
      //     `,
      //   })
    }

    return new Response("Webhook processed", { status: 200 })
  } catch (error) {
    console.error("Webhook error:", error)
    return new Response("Webhook error", { status: 500 })
  }
}
