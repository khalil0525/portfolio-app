// pages/api/contact.js

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

type Email = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  console.log("here");
  try {
    const { name, email, message }: Email = await req.json();
    console.log(name);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Configure the email with HTML and CSS styling
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "collinskhalil@hotmail.com", // Replace with your actual email address
      subject: "Portfolio Site - New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 16px; color: #555;"><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    return new NextResponse(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(`Failed to send email`, {
      status: 500,
    });
    console.error("Error sending email:", error);
  }
}
