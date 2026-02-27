import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};
    const to = process.env.NOTIFICATION_EMAIL || process.env.SENDGRID_TO || 'info@empoderata.net';
    const from = process.env.EMAIL_FROM || process.env.SENDGRID_FROM || 'info@empoderata.net';

    const {
      fullName,
      idNumber,
      dob,
      contactNumber,
      email,
      address,
      highestQualification,
      employerDetails,
      employed,
      disability,
      disabilityType,
      numApplying,
      comments,
      programmeId,
      attachments = []
    } = body;

    const attachmentsForSend: any[] = (attachments || []).map((a: any) => ({
      content: a.data,
      filename: a.filename,
      type: a.type,
      disposition: 'attachment'
    }));

    const html = `<h2>New Learnership Application</h2>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>ID Number:</strong> ${idNumber}</li>
        <li><strong>DOB:</strong> ${dob}</li>
        <li><strong>Contact:</strong> ${contactNumber}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Address:</strong> ${address}</li>
        <li><strong>Highest Qualification:</strong> ${highestQualification}</li>
        <li><strong>Employed:</strong> ${employed}</li>
        <li><strong>Employer Details:</strong> ${employerDetails}</li>
        <li><strong>Disability:</strong> ${disability} ${disability === 'Yes' ? `(${disabilityType})` : ''}</li>
        <li><strong>Number Applying:</strong> ${numApplying}</li>
        <li><strong>Programme:</strong> ${programmeId}</li>
        <li><strong>Comments:</strong> ${comments}</li>
      </ul>`;

    if (!process.env.SENDGRID_API_KEY) {
      // If SendGrid not configured, just log and return success for dev
      console.warn('SendGrid not configured; skipping send');
      console.log('Application payload', { fullName, email, programmeId });
      return res.status(200).json({ ok: true, sendgrid: false });
    }

    const msg: any = {
      to,
      from,
      replyTo: email,
      subject: `New Learnership Application — ${fullName}`,
      html,
      attachments: attachmentsForSend
    };

    try {
      await sgMail.send(msg);
      console.log('SendGrid: application email sent');
    } catch (err: any) {
      console.error('SendGrid application send error', err);
      // continue, we don't want to fail user experience purely for email failure
    }

    return res.status(200).json({ ok: true, sendgrid: true });
  } catch (err: any) {
    console.error('submit-application error', err?.message || err);
    return res.status(500).json({ error: err?.message || 'Server error' });
  }
}
