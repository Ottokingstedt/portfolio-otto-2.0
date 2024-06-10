import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const { gRecaptchaToken, email, subject, message } = req.body;

    console.log("gRecaptchaToken,email,subject,message", 
    gRecaptchaToken?.slice(0, 10) + "...", email, subject, message);

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    let captchaRes;
    try {
      captchaRes = await axios.post("https://www.google.com/recaptcha/api/siteverify", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    } catch (e) {
      console.log("recaptcha error:", e);
      return res.status(500).json({ success: false, message: 'reCAPTCHA verification failed' });
    }

    if (captchaRes.data?.success && captchaRes.data?.score > 0.5) {
      console.log("reCAPTCHA verified:", captchaRes.data?.score);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your email address for Gmail authentication
          pass: process.env.EMAIL_PASS, // Your app-specific password
        },
      });

      try {
        await transporter.sendMail({
          from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Your email address used for sending
          to: process.env.EMAIL_USER, // Your email address to receive the contact form submissions
          subject: subject,
          text: `From: ${email}\n\nMessage:\n${message}`,
          replyTo: email, // User's email address from the contact form
        });

        return res.status(200).json({
          success: true,
          message: 'Email sent successfully',
          score: captchaRes.data?.score,
        });
      } catch (error) {
        console.log("Email sending error:", error);
        return res.status(500).json({ success: false, message: 'Failed to send email', error: (error as Error).message });
      }
    } else {
      console.log("fail: reCAPTCHA score:", captchaRes.data?.score);
      return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed', score: captchaRes.data?.score });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
