// api/submit-quote.ts
// Vercel serverless function to handle quote form submissions.
// Writes to Firestore collection /artifacts/{appId}/public/data/quotes
// Includes placeholder for email notifications to sales team.

import { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';
import sgMail from '@sendgrid/mail';

// Initialize Firebase Admin SDK (uses credentials from environment)
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

// Initialize SendGrid if API key is present (optional)
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
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !programId || !learners) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const appId = process.env.APP_ID || 'empodera';
    const colPath = `artifacts/${appId}/public/data/quotes`;
    const colRef = db.collection(colPath);

    // Write quote data to Firestore
    const docRef = await colRef.add({
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
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // If SendGrid is configured, send a notification to sales (non-blocking)
    if (process.env.SENDGRID_API_KEY) {
      const sendFrom = process.env.SENDGRID_FROM || 'info@empoderata.net';
      const sendTo = process.env.SENDGRID_TO || 'info@empoderata.net';

      const msg = {
        to: sendTo,
        from: sendFrom,
        subject: `New Quote Request — ${programName || programId}`,
        text: `New quote request\n\nFull Name: ${fullName}\nPosition: ${position || 'N/A'}\nContact Number: ${contactNumber || 'N/A'}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nProgram: ${programName || programId}\nLearners: ${learners}\nPer Learner: R${perLearner}\nTotal: R${total}\n\nFirestore: ${colPath}/${docRef.id}`,
        html: `<h2>New Quote Request</h2>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Position:</strong> ${position || 'N/A'}</li>
            <li><strong>Contact Number:</strong> ${contactNumber || 'N/A'}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Company:</strong> ${company || 'N/A'}</li>
            <li><strong>Program:</strong> ${programName || programId}</li>
            <li><strong>Learners:</strong> ${learners}</li>
            <li><strong>Per Learner:</strong> R${perLearner}</li>
            <li><strong>Total:</strong> R${total}</li>
            <li><strong>Firestore:</strong> ${colPath}/${docRef.id}</li>
          </ul>`
      };

      try {
        await sgMail.send(msg as any);
        console.log(`SendGrid: notification sent to ${sendTo}`);
      } catch (err) {
        console.warn('SendGrid send failed:', (err as any)?.message || err);
      }

      // Also send the client a copy of their quote (cc info@empoderata.net)
      try {
        const clientHtml = `
          <p>Hi ${fullName},</p>
          <p>Thank you for requesting a quote. Below are the details we received:</p>
          <ul>
            <li><strong>Company:</strong> ${company || 'N/A'}</li>
            <li><strong>Contact:</strong> ${fullName} (${position || 'N/A'})</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Contact Number:</strong> ${contactNumber || 'N/A'}</li>
            <li><strong>Program:</strong> ${programName || programId}</li>
            <li><strong>Learners:</strong> ${learners}</li>
            <li><strong>Per Learner:</strong> R${perLearner}</li>
            <li><strong>Total:</strong> R${total}</li>
          </ul>
          <p>Our team will contact you within 24-48 hours.</p>
          <p>Regards,<br/>Empodera Team</p>
        `;

        await sgMail.send({
          to: email,
          from: sendFrom,
          subject: `Your quote request — ${programName || programId}`,
          html: clientHtml,
          cc: 'info@empoderata.net',
        } as any);

        console.log(`SendGrid: client copy sent to ${email} (cc info@empoderata.net)`);
      } catch (err) {
        console.warn('SendGrid client copy failed:', (err as any)?.message || err);
      }
    } else {
      console.log(`Quote ${docRef.id} saved. SendGrid not configured.`);
    }

    return res.status(200).json({
      success: true,
      message: 'Quote submitted successfully',
      quoteId: docRef.id,
    });
  } catch (error) {
    console.error('Error submitting quote:', error);
    return res.status(500).json({
      error: 'Failed to submit quote',
      details: (error as any).message,
    });
  }
};
