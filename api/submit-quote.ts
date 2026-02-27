// api/submit-quote.ts
// Unified Vercel serverless function for handling both EasyQuotes and General Inquiries
// Saves to Firestore and sends emails via SendGrid

import { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';
import sgMail from '@sendgrid/mail';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  } as any;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  } catch (err) {
    console.warn('SendGrid initialization failed:', (err as any)?.message || err);
  }
}

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      // Quote fields
      company,
      fullName,
      position,
      email,
      contactNumber,
      programId,
      programName,
      learners,
      perLearner,
      total,
      deliveryMode,
      // Inquiry fields
      message,
    } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({ error: 'Missing required fields: fullName and email are required' });
    }

    const appId = process.env.APP_ID || 'empodera';
    
    // Determine if this is a quote or inquiry
    const isQuote = programId && (programId !== 'GENERAL_INQUIRY');
    const collectionType = isQuote ? 'quotes' : 'inquiries';
    const colPath = `artifacts/${appId}/public/data/${collectionType}`;
    const colRef = db.collection(colPath);

    // Prepare data to save to Firestore
    const firestoreData = isQuote 
      ? {
          type: 'EasyQuote',
          company,
          fullName,
          position,
          email,
          contactNumber,
          programId,
          programName,
          learners,
          perLearner,
          total,
          deliveryMode,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        }
      : {
          type: 'GeneralInquiry',
          fullName,
          email,
          message,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        };

    // Write to Firestore
    const docRef = await colRef.add(firestoreData);

    // Send emails via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const emailFrom = process.env.EMAIL_FROM || 'info@empoderata.net';
      const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@empoderata.net';

      // Prepare admin notification email
      let adminEmailHtml = '';
      let adminEmailSubject = '';

      if (isQuote) {
        adminEmailSubject = `New Quote Request — ${programName}`;
        adminEmailHtml = `
          <h2>New EasyQuote Request</h2>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <h3>Client Details</h3>
          <ul>
            <li><strong>Name:</strong> ${fullName}</li>
            <li><strong>Company:</strong> ${company || 'N/A'}</li>
            <li><strong>Position:</strong> ${position || 'N/A'}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${contactNumber || 'N/A'}</li>
          </ul>
          <h3>Quote Details</h3>
          <ul>
            <li><strong>Programme:</strong> ${programName}</li>
            <li><strong>Delivery Mode:</strong> ${deliveryMode || 'N/A'}</li>
            <li><strong>Number of Learners:</strong> ${learners}</li>
            <li><strong>Cost Per Learner:</strong> R${perLearner?.toLocaleString('en-ZA')}</li>
            <li><strong>Total Estimated Cost:</strong> <strong style="color: #3349df; font-size: 1.2em;">R${total?.toLocaleString('en-ZA')}</strong></li>
          </ul>
          <hr>
          <p><em>Firestore Reference: ${colPath}/${docRef.id}</em></p>
        `;
      } else {
        adminEmailSubject = `New Website Inquiry from ${fullName}`;
        adminEmailHtml = `
          <h2>New Website Inquiry</h2>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <h3>Contact Details</h3>
          <ul>
            <li><strong>Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>
          <h3>Message</h3>
          <p>${message || 'No message provided'}</p>
          <hr>
          <p><em>Firestore Reference: ${colPath}/${docRef.id}</em></p>
        `;
      }

      // Send notification to admin with replyTo set to user's email
      const adminMsg = {
        to: notificationEmail,
        from: emailFrom,
        replyTo: email, // Allow client to reply directly to the user
        subject: adminEmailSubject,
        html: adminEmailHtml,
      };

      // Send to admin
      const sendWithRetry = async (message: any, attempts = 3) => {
        let lastErr: any = null;
        for (let i = 0; i < attempts; i++) {
          try {
            await sgMail.send(message);
            return true;
          } catch (e) {
            lastErr = e;
            console.warn(`SendGrid attempt ${i + 1} failed:`, (e as any)?.message || e);
            await new Promise((r) => setTimeout(r, 200 * (i + 1)));
          }
        }
        console.error('SendGrid failed after retries:', lastErr);
        return false;
      };

      try {
        const adminOk = await sendWithRetry(adminMsg, 3);
        if (adminOk) {
          console.log(`SendGrid: admin notification sent to ${notificationEmail}`);
        }
      } catch (e) {
        console.warn('SendGrid admin notification failed:', (e as any)?.message || e);
      }

      // Send confirmation email to user
      if (isQuote) {
        try {
          const userHtml = `
            <p>Hi ${fullName},</p>
            <p>Thank you for requesting a quote from Empodera Training Academy.</p>
            <h3>Quote Summary</h3>
            <ul>
              <li><strong>Programme:</strong> ${programName}</li>
              <li><strong>Number of Learners:</strong> ${learners}</li>
              <li><strong>Cost Per Learner:</strong> R${perLearner?.toLocaleString('en-ZA')}</li>
              <li><strong>Total Estimated Cost:</strong> R${total?.toLocaleString('en-ZA')}</li>
            </ul>
            <p>Your formal quote has been generated and is ready for download. Our team has been notified and will be in touch within 24-48 hours.</p>
            <p>If you have any questions, feel free to reply to this email.</p>
            <p>Best regards,<br/>
            <strong>Empodera Training Academy</strong><br/>
            <a href="https://empoderata.net">www.empoderata.net</a></p>
          `;

          const userMsg = {
            to: email,
            from: emailFrom,
            replyTo: notificationEmail,
            subject: `Your EasyQuote – ${programName}`,
            html: userHtml,
          };

          const userOk = await sendWithRetry(userMsg, 3);
          if (userOk) {
            console.log(`SendGrid: confirmation sent to ${email}`);
          }
        } catch (err) {
          console.warn('SendGrid user confirmation failed:', (err as any)?.message || err);
        }
      } else {
        try {
          const inquiryHtml = `
            <p>Hi ${fullName},</p>
            <p>Thank you for reaching out to Empodera Training Academy. We've received your inquiry and will get back to you shortly.</p>
            <p>If you don't hear from us within 24 hours, please feel free to email us directly at <strong>info@empoderata.net</strong>.</p>
            <p>Best regards,<br/>
            <strong>Empodera Training Academy</strong><br/>
            <a href="https://empoderata.net">www.empoderata.net</a></p>
          `;

          const inquiryMsg = {
            to: email,
            from: emailFrom,
            replyTo: notificationEmail,
            subject: 'We received your inquiry – Empodera Training Academy',
            html: inquiryHtml,
          };

          const inquiryOk = await sendWithRetry(inquiryMsg, 3);
          if (inquiryOk) {
            console.log(`SendGrid: inquiry confirmation sent to ${email}`);
          }
        } catch (err) {
          console.warn('SendGrid inquiry confirmation failed:', (err as any)?.message || err);
        }
      }
    } else {
      console.log(`Record ${docRef.id} saved. SendGrid not configured.`);
    }

    return res.status(200).json({
      success: true,
      message: isQuote 
        ? 'Quote submitted successfully' 
        : 'Inquiry submitted successfully',
      recordId: docRef.id,
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({
      error: 'Failed to process request',
      details: (error as any).message,
    });
  }
};
