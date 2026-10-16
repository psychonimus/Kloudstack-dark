import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root, fallback to src/.env
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../src/.env') });

const app = express();
const PORT = Number(process.env.PORT) || 5001;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware with full CORS support
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
}));
app.use(express.json());

// Create nodemailer transporter for Office 365 / standard SMTP
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.office365.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER || process.env.MAIL_USERNAME;
  const pass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD;

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true', // false for port 587 (STARTTLS)
    auth: {
      user,
      pass,
    },
    tls: {
      minVersion: 'TLSv1.2',
      ciphers: 'SSLv3',
      rejectUnauthorized: false, // Prevents certificate verification issues in dev
    },
  });
};

// Generate HTML email template matching Kloudstack Dark aesthetic
const buildEnquiryEmailHtml = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  service,
  message,
  paperTitle,
}) => {
  const dateFormatted = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const titleText = paperTitle ? 'White Paper Download Request' : 'New Website Enquiry';
  const badgeText = paperTitle ? 'WHITE PAPER ACCESS' : 'KLOUDSTACK ENTERPRISE';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${titleText} - Kloudstack</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0c0d10;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e5e7eb;
    }
    .wrapper {
      max-width: 620px;
      margin: 30px auto;
      background-color: #121318;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
    }
    .header {
      background: linear-gradient(135deg, #1c1d24 0%, #13141a 100%);
      padding: 32px 36px;
      border-bottom: 1px solid rgba(245, 158, 11, 0.25);
    }
    .badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.25);
      padding: 4px 10px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }
    .title {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.02em;
    }
    .subtitle {
      margin: 6px 0 0 0;
      font-size: 13px;
      color: #9ca3af;
    }
    .content {
      padding: 32px 36px;
    }
    .section-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #f59e0b;
      margin-bottom: 14px;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
    }
    .info-table tr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .info-table tr:last-child {
      border-bottom: none;
    }
    .info-table td {
      padding: 12px 0;
      font-size: 14px;
      vertical-align: top;
    }
    .label-col {
      width: 38%;
      color: #9ca3af;
      font-weight: 500;
    }
    .val-col {
      width: 62%;
      color: #ffffff;
      font-weight: 600;
      word-break: break-word;
    }
    .val-col a {
      color: #f59e0b;
      text-decoration: none;
    }
    .message-card {
      background: #181920;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-left: 3px solid #f59e0b;
      border-radius: 8px;
      padding: 18px 20px;
      margin-bottom: 24px;
    }
    .message-text {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #e5e7eb;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #0e0f13;
      padding: 20px 36px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <span class="badge">${badgeText}</span>
      <h1 class="title">${titleText}</h1>
      <p class="subtitle">Received on ${dateFormatted}</p>
    </div>

    <div class="content">
      <div class="section-label">Prospect Details</div>
      <table class="info-table">
        ${paperTitle ? `
        <tr>
          <td class="label-col">Requested Document</td>
          <td class="val-col"><strong style="color: #f59e0b;">${paperTitle}</strong></td>
        </tr>
        ` : ''}
        <tr>
          <td class="label-col">Full Name</td>
          <td class="val-col">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td class="label-col">Work Email</td>
          <td class="val-col"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td class="label-col">Phone Number</td>
          <td class="val-col">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label-col">Company / Organisation</td>
          <td class="val-col">${company}</td>
        </tr>
        <tr>
          <td class="label-col">Service Interest</td>
          <td class="val-col">${service || 'General Enquiry'}</td>
        </tr>
      </table>

      <div class="section-label">Enquiry Message</div>
      <div class="message-card">
        <p class="message-text">${message}</p>
      </div>
    </div>

    <div class="footer">
      Sent automatically via Kloudstack Website Enquiry API &bull; Direct Reply-To enabled for ${email}
    </div>
  </div>
</body>
</html>
  `;
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Kloudstack Enquiry API',
  });
});

// Enquiry / Contact / White Paper Submission Handler
const handleEnquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, service, message, paperTitle, captchaToken } = req.body;

    // Optional Google reCAPTCHA verification
    if (process.env.RECAPTCHA_SECRET_KEY && captchaToken && process.env.RECAPTCHA_SECRET_KEY !== '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe') {
      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(captchaToken)}`,
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return res.status(400).json({ success: false, message: 'Google reCAPTCHA verification failed. Please try again.' });
        }
      } catch (err) {
        console.warn('reCAPTCHA verification error:', err.message);
      }
    }

    // Validation
    if (!firstName?.trim()) {
      return res.status(400).json({ success: false, message: 'First name is required.' });
    }
    if (!lastName?.trim()) {
      return res.status(400).json({ success: false, message: 'Last name is required.' });
    }
    if (!email?.trim()) {
      return res.status(400).json({ success: false, message: 'Work email is required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid work email address.' });
    }
    if (!company?.trim()) {
      return res.status(400).json({ success: false, message: 'Company / Organisation is required.' });
    }
    if (!message?.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    const receiverEmail = process.env.RECEIVER_EMAIL || process.env.MAIL_TO_ADDRESS || 'prafulshahoffice@gmail.com';
    const senderUser = process.env.SMTP_USER || process.env.MAIL_USERNAME || 'info@kloudstacks.com';

    const transporter = createTransporter();

    const subjectLine = paperTitle?.trim()
      ? `White Paper Access: ${paperTitle.trim()} [${firstName.trim()} ${lastName.trim()} - ${company.trim()}]`
      : `New Enquiry from ${firstName.trim()} ${lastName.trim()} [${company.trim()}]`;

    const mailOptions = {
      from: `"Kloudstack Website" <${senderUser}>`,
      to: receiverEmail,
      replyTo: `"${firstName.trim()} ${lastName.trim()}" <${email.trim()}>`,
      subject: subjectLine,
      text: `${paperTitle?.trim() ? `White Paper Download Request: ${paperTitle.trim()}\n` : 'New Enquiry Received:\n'}
Name: ${firstName} ${lastName}
Work Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company}
Service Interest: ${service || 'General Enquiry'}
${paperTitle?.trim() ? `Document: ${paperTitle.trim()}\n` : ''}
Message:
${message}
`,
      html: buildEnquiryEmailHtml({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        company: company.trim(),
        service: service?.trim(),
        message: message.trim(),
        paperTitle: paperTitle?.trim(),
      }),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Submission received successfully! Your download will begin.',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process submission. Please try again later or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// Health check endpoints for PaaS load balancers and uptime monitors
app.get('/health', (req, res) => res.status(200).send('OK'));
app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok', uptime: process.uptime() }));

// Register enquiry endpoints (supports /api/enquiry, /api, /api/contact, /api/whitepaper)
app.post('/api', handleEnquiry);
app.post('/api/', handleEnquiry);
app.post('/api/enquiry', handleEnquiry);
app.post('/api/contact', handleEnquiry);
app.post('/api/whitepaper', handleEnquiry);
app.post('/api/whitepaper-download', handleEnquiry);

// Serve production frontend assets if dist exists
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Fallback to index.html for client-side routing (Express 5 compatible)
app.use((req, res) => {
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  return res.status(200).send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kloudstack</title>
    <style>
      body { background: #07090e; color: #f8fafc; font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
      .box { text-align: center; max-width: 460px; padding: 2.5rem; background: #0f172a; border-radius: 16px; border: 1px solid #1e293b; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
      h1 { font-size: 1.5rem; color: #38bdf8; margin: 0 0 0.5rem; }
      p { font-size: 0.95rem; color: #94a3b8; line-height: 1.5; margin: 0; }
    </style>
  </head>
  <body>
    <div class="box">
      <h1>Kloudstack API Server</h1>
      <p>Server is running and listening on port ${PORT}. Production bundle is building or available.</p>
    </div>
  </body>
</html>`);
});

// Global error handler so the server process never crashes
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Kloudstack API server listening on http://${HOST}:${PORT}`);
  console.log(`📧 Configured receiver: ${process.env.RECEIVER_EMAIL || 'prafulshahoffice@gmail.com'}`);
});
