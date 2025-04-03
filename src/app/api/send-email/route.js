import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let formData;

    if (contentType.includes('multipart/form-data')) {
      formData = await req.formData();
    } else {
      formData = await req.json();
    }


    const emailData = {
      fullName: formData.get ? formData.get('fullName') : formData.fullName || '',
      email: formData.get ? formData.get('email') : formData.email || '',
      company: formData.get ? formData.get('company') : formData.company || '',
      message: formData.get ? formData.get('message') : formData.message || '',
      industry:formData.get ? formData.get('industry') : formData.industry || '',
    };

    if (!emailData.email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 });
    }

    const adminMailOptions = {
      from: `NeuroVerse Website Leads <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
                <p><strong>First Name:</strong> ${emailData.fullName}</p>
                <p><strong>Email:</strong> ${emailData.email}</p>
                <p><strong>Company:</strong> ${emailData.company}</p>
                <p><strong>Industry:</strong> ${emailData.industry}</p>
                <p><strong>Message:</strong> ${emailData.message}</p>
            `,
    };

    const userMailOptions = {
      from: `NeuroVerse Team <${process.env.EMAIL_USER}>`,
      to: emailData.email,
      subject: 'Thank You for Contacting Us',
      html: `
                <p>Dear ${emailData.fullName},</p>
                <p>Thank you for reaching out to us. We have received your message. Our team will review it and get back to you soon.</p>
                <p>Best regards,</p>
                <p>NeuroVerse Team</p>
            `,
    };
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',          
      auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
      },
  });

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.', error: error.message },
      { status: 500 }
    );
  }
}
