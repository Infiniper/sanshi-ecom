// backend/controllers/contactController.js
const { supabase } = require('../utils/db');
const nodemailer = require('nodemailer');
require('dotenv').config(); // safe to call here

// Create transporter factory (lazy init)
function createTransporter() {
  const transportType = process.env.EMAIL_TRANSPORT || 'mailtrap';

  if (transportType === 'mailtrap') {
    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: Number(process.env.MAILTRAP_PORT) || 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });
  }

  if (transportType === 'gmail') {
    // Gmail with App Password
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  }

  if (transportType === 'sendgrid') {
    return nodemailer.createTransport({
      host: process.env.SENDGRID_SMTP_HOST || 'smtp.sendgrid.net',
      port: Number(process.env.SENDGRID_SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SENDGRID_USERNAME || 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  }

  // Fallback: direct (not recommended for production)
  return nodemailer.createTransport();
}

// Simple HTML email template (customize)
function buildContactEmail({ name, email, message, created_at }) {
  return {
    subject: `New contact from ${name}`,
    text: `New message from ${name} (${email || 'no email provided'})\n\n${message}\n\nReceived: ${created_at}`,
    html: `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || '—'}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
      <hr/>
      <small>Received at ${created_at}</small>
    `
  };
}

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const payload = { name, email: email || null, message };

    // 1) Insert into DB
    const { data, error } = await supabase
      .from('contacts')
      .insert([payload])
      .select('id, created_at')
      .single();

    if (error) throw error;

    const contactRecord = data; // { id, created_at }

    // 2) Send email (async)
    // Try/catch so we still return success even if email fails
    (async () => {
      try {
        const transporter = createTransporter();

        // optional verify transporter - useful during dev
        transporter.verify && transporter.verify().catch(err => {
          console.warn('Email transporter verification failed:', err && err.message);
        });

        const mailTo = process.env.CONTACT_EMAIL_TO;
        const mailFrom = process.env.CONTACT_EMAIL_FROM || process.env.GMAIL_USER || 'no-reply@example.com';
        if (!mailTo) {
          console.warn('CONTACT_EMAIL_TO not configured — skipping email send.');
          return;
        }

        const emailContent = buildContactEmail({
          name,
          email,
          message,
          created_at: contactRecord.created_at
        });

        const mailOptions = {
          from: `"Sanshi E-Com" <${mailFrom}>`,
          to: mailTo,
          subject: emailContent.subject,
          text: emailContent.text,
          html: emailContent.html,
          replyTo: email || undefined
        };

        await transporter.sendMail(mailOptions);        
        console.log(`Contact email sent for contact id=${contactRecord.id}`);
      } catch (err) {
        // DO NOT throw — just log
        console.error('Failed to send contact notification email:', err && err.message);
        // optionally insert into an email_failures table or send to logging service
      }
    })();

    // 3) Respond to frontend (success)
    res.status(201).json({ id: contactRecord.id, created_at: contactRecord.created_at });
  } catch (e) {
    next(e);
  }
};
