// api/save-quote.ts
// Vercel Serverless Function: Handle quote form submission, save to Firestore, send email notifications.

import { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import sgMail from '@sendgrid/mail';

// Initialize Firebase Admin SDK using environment variables
function getFirebaseAdmin() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  } as any;

  if (!serviceAccount.projectId || !serviceAccount.privateKey) {
    console.warn('Firebase Admin SDK not configured. Quote will not be persisted.');
    return null;
  }

  return initializeApp({ credential: cert(serviceAccount) });
}

export default async (req: VercelRequest, res: VercelResponse) => {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

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
  if (!email || !fullName || !programId || !learners) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const app = getFirebaseAdmin();
    const appId = process.env.FIREBASE_APP_ID || 'empodera';

    if (app) {
      const db = getFirestore(app);
      const colPath = `artifacts/${appId}/public/data/quotes`;
      const colRef = db.collection(colPath);

      // Write quote to Firestore
      await colRef.add({
        company: company || 'N/A',
        fullName,
        position: position || 'N/A',
        email,
        contactNumber,
        programId,
        programName: programName || 'Unknown',
        learners,
        perLearner,
        total,
        createdAt: Timestamp.now(),
      });

      console.log(`Quote saved for ${email}`);
    }

    // Send email to client and CC info@empoderata.net
    const sendgridKey = process.env.SENDGRID_API_KEY;
    const sendFrom = process.env.SENDGRID_FROM || 'info@empoderata.net';

    if (sendgridKey) {
      sgMail.setApiKey(sendgridKey);

      const htmlBody = `
        <p>Hi ${fullName},</p>
        <p>Thank you for requesting a quote. Here are the details:</p>
        <ul>
          <li><strong>Company:</strong> ${company || 'N/A'}</li>
          <li><strong>Contact:</strong> ${fullName} (${position || 'N/A'})</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Contact Number:</strong> ${contactNumber || 'N/A'}</li>
          <li><strong>Program:</strong> ${programName || programId}</li>
          <li><strong>Learners:</strong> ${learners}</li>
          <li><strong>Per Learner:</strong> ${perLearner || 'N/A'}</li>
          <li><strong>Total:</strong> R${total}</li>
        </ul>
        <p>Our team will be in touch within 24-48 hours.</p>
        <p>Regards,<br/>Empodera Team</p>
      `;

      try {
        await sgMail.send({
          to: email,
          from: sendFrom,
          subject: `Your quote for ${programName || 'requested programme'}`,
          html: htmlBody,
          cc: 'info@empoderata.net',
        });

        console.log(`Quote email sent to client ${email} (cc: info@empoderata.net)`);
      } catch (err) {
        console.error('Error sending quote email:', err);
      }
    } else {
      console.warn('SENDGRID_API_KEY not set - skipping email send');
    }

    res.status(200).json({
      success: true,
      message: 'Quote submitted successfully. Our team will be in touch within 24-48 hours.',
    });
  } catch (error) {
    console.error('Error saving quote:', error);
    res.status(500).json({
      error: 'Failed to save quote. Please try again later.',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
