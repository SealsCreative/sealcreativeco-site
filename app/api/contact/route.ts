
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactRateLimit } from "@/lib/contactRateLimit";

const inquiryLabels: Record<string, string> = {
  "web-design": "Web design",
  development: "Web development",
  "full-stack": "Full-stack project",
  career: "Career opportunity",
  collaboration: "Collaboration",
  other: "Something else",
};

const stageLabels: Record<string, string> = {
  idea: "I have an idea",
  planning: "I'm planning the project",
  ready: "I'm ready to get started",
  existing: "I already have something that needs work",
  "not-applicable": "Not applicable",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return replacements[character];
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const inquiry = String(formData.get("inquiry") ?? "").trim();
    const stage = String(formData.get("stage") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (website) {
      return NextResponse.json({ message: "Inquiry received." });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.length < 2 ||
      name.length > 100 ||
      email.length > 254 ||
      !emailPattern.test(email) ||
      !Object.hasOwn(inquiryLabels, inquiry) ||
      !Object.hasOwn(stageLabels, stage) ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "Please check your information and try again." },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim();

    const identifier = ip || "unknown";

    const { success, reset } = await contactRateLimit.limit(identifier);

    if (!success) {
      return NextResponse.json(
        {
          message:
            "You've sent several inquiries recently. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.max(1, Math.ceil((reset - Date.now()) / 1000))
            ),
          },
        }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Contact form email configuration is missing.");

      return NextResponse.json(
        { message: "The contact form is temporarily unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Seal Creative Co. Website <contact@sealcreativeco.com>",
      to: contactEmail,
      replyTo: email,
      subject: `Website inquiry: ${inquiryLabels[inquiry]}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Inquiry: ${inquiryLabels[inquiry]}`,
        `Project stage: ${stageLabels[stage]}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Inquiry:</strong> ${escapeHtml(inquiryLabels[inquiry])}</p>
        <p><strong>Project stage:</strong> ${escapeHtml(stageLabels[stage])}</p>
        <h3>Message</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error("Resend contact form error:", error);

      return NextResponse.json(
        { message: "Your inquiry could not be sent. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Your inquiry has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}