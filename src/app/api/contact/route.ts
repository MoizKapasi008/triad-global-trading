import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your SMTP host
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // your company email
      subject: subject || `New Contact Form Inquiry from ${name}`,
      text: `Message: ${message}\nPhone: ${phone || "N/A"}`,
      html: `<p><strong>Message:</strong> ${message}</p><p><strong>Phone:</strong> ${phone || "N/A"}</p><p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
