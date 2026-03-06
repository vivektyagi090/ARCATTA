"use server";

import nodemailer from "nodemailer";

interface EnquiryFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export async function submitEnquiry(formData: EnquiryFormData) {
    try {
        const { name, email, phone, subject, message } = formData;

        const smtpPassword = process.env.SMTP_PASSWORD;
        if (!smtpPassword) {
            return { success: false, error: "SMTP password is missing. Please create a .env.local file in the root directory and add SMTP_PASSWORD=your_password" };
        }

        // SMTP configuration
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true, // Use SSL/TLS
            auth: {
                user: "ravindrahrane@arcattagroup.com",
                pass: smtpPassword,
            },
        });

        // Verification check for the connection
        try {
            await transporter.verify();
        } catch (verifyError: any) {
            console.error("SMTP Configuration Error:", verifyError);
            if (verifyError.code === 'EAUTH') {
                return { success: false, error: "Email authentication failed. Please check the SMTP password in .env.local" };
            }
            return { success: false, error: "Could not connect to the email server. Please check your SMTP settings." };
        }

        // Send email
        await transporter.sendMail({
            from: `"ARCATTA GROUP Website" <ravindrahrane@arcattagroup.com>`,
            to: "ravindrahrane@arcattagroup.com",
            subject: `New Web Enquiry: ${subject}`,
            replyTo: email,
            text: `
        New Enquiry Received
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            This enquiry was sent via the contact form on your website.
          </p>
        </div>
      `,
        });

        return { success: true };
    } catch (err: any) {
        console.error("Submission Error:", err);
        return { success: false, error: err.message || "An unexpected error occurred while sending the email." };
    }
}
