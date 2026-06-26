import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, phone, city, message } = await request.json()

    await Promise.all([
      // Notification to owner
      resend.emails.send({
        from: 'Durapest Junk Removal <onboarding@resend.dev>',
        to: 'gaelandcruzz@gmail.com',
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
      // Auto-reply to customer (only if they provided an email — field is phone-based so skip if no @)
      ...(phone?.includes('@') ? [] : [
        resend.emails.send({
          from: 'Durapest Junk Removal <onboarding@resend.dev>',
          to: 'gaelandcruzz@gmail.com', // placeholder — replace with customer email field when added
          replyTo: 'gaelandcruzz@gmail.com',
          subject: `We received your junk removal request, ${name}!`,
          html: `
            <h2>Thanks for reaching out, ${name}!</h2>
            <p>We've received your quote request and will get back to you shortly.</p>
            <p>For the fastest response, you can also call or text us directly at <strong>905-782-6332</strong>.</p>
            <p>— Durapest Junk Removal<br/>Brampton & GTA | Mon–Sun 7am–8pm</p>
          `,
        }),
      ]),
    ])

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
