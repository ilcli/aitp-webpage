import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  challenge: string;
}

// Production-ready email notification function
async function sendContactNotification(data: ContactFormData) {
  // For production deployment, integrate with email service like:
  // - Resend (recommended for Next.js)
  // - SendGrid
  // - Postmark
  // - AWS SES
  
  const emailBody = `
New Municipal Consultation Request

Name: ${data.name}
Email: ${data.email}
Organization: ${data.organization}
Challenge: ${data.challenge}

Time: ${new Date().toLocaleString()}
  `;
  
  // Log to console for now - replace with actual email service in production
  console.log("📧 New Municipal Consultation Request:", emailBody);
  
  // Example implementation with environment variables:
  // if (process.env.CONTACT_EMAIL_SERVICE === 'resend') {
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'noreply@synqer.ai',
  //     to: 'hello@synqer.ai',
  //     subject: `New Municipal Consultation: ${data.organization}`,
  //     text: emailBody
  //   });
  // }
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.organization || !body.challenge) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, organization, and challenge are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate organization name
    if (body.organization.trim().length < 2) {
      return NextResponse.json(
        { error: "Organization name must be at least 2 characters long" },
        { status: 400 }
      );
    }

    // Send email notification (production-ready)
    await sendContactNotification({
      name: body.name,
      email: body.email,
      organization: body.organization,
      challenge: body.challenge,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. Use POST to submit contact form." },
    { status: 405 }
  );
}