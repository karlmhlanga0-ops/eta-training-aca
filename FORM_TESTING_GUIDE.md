# Form Testing & Email Setup Guide

## ✅ What We've Completed

### 1. **SEO & Social Media Optimization** ✓
Your `index.html` has been enhanced with:

#### Open Graph Tags (for link previews):
- **og:title**: "Empodera Training Academy | Accredited Learnerships & Skills Development"
- **og:description**: Compelling description about accredited training
- **og:image**: Professional branded image (og-image.png) - 1200x630px
- **og:type**: website
- **og:locale**: en_ZA

#### Twitter Card Tags:
- **twitter:card**: summary_large_image
- **twitter:title** & **twitter:description**: Optimized for Twitter sharing
- **twitter:image**: Professional branded image

#### SEO Meta Tags:
- **title**: Clear, keyword-rich title
- **description**: Comprehensive meta description
- **keywords**: Relevant search terms (learnerships, training, B-BBEE, NQF, etc.)
- **robots**: index, follow (for search engine crawling)
- **canonical**: Points to main domain
- **theme-color**: Brand color (#3349df)

**Result**: When users share your link on LinkedIn, Facebook, Twitter, etc., they'll see:
- Your professional Empodera brand image
- Compelling headline about accredited skills training
- A snippet describing your value proposition

---

## 📧 Form Testing Instructions

### Current Status:
Your forms are configured but require **environment variables** to send emails to `info@empoderata.net`.

### Two Forms Available:

#### 1. **Easy Quote Modal** (`/components/EasyQuoteModal.tsx`)
   - **Location**: Quote buttons throughout the site
   - **Data collected**: Company, contact name, position, email, program, number of learners, estimated cost
   - **API endpoint**: `/api/submit-quote`
   - **Backend**: Stores to Firebase Firestore + emails via SendGrid

#### 2. **Apply Now Modal** (`/components/ApplyNowModal.tsx`)
   - **Location**: "Apply Now" buttons on learnership pages
   - **Data collected**: Full application with ID number, qualifications, employment status, disability info
   - **API endpoint**: `/api/submit-application`
   - **Backend**: Emails via SendGrid to info@empoderata.net

---

## 🔧 To Enable Email Functionality

You need to set these **environment variables** in Vercel:

### SendGrid Setup:
1. **Create SendGrid account** (free tier available): https://sendgrid.com
2. **Generate API Key**: Go to Settings → API Keys → Create Key
3. **Set these Vercel environment variables**:
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `SENDGRID_FROM`: `info@empoderata.net` (sender email)
   - `SENDGRID_TO`: `info@empoderata.net` (recipient email)

### Firebase Setup (for quotes storage):
1. **Create Firebase project**: https://console.firebase.google.com
2. **Enable Firestore database**
3. **Create service account** and download JSON credentials
4. **Set these Vercel environment variables**:
   - `FIREBASE_PROJECT_ID`: From service account JSON
   - `FIREBASE_CLIENT_EMAIL`: From service account JSON
   - `FIREBASE_PRIVATE_KEY`: From service account JSON (replace `\n` with actual newlines)
   - `APP_ID`: `empodera` (or your app identifier)

---

## 🧪 Testing Forms Locally

### Option 1: Manual Testing (Easiest)
1. Go to http://localhost:8080 (or your dev URL)
2. Click any "Get a Quote" button → Fill out quote form → Submit
3. Look for success message
4. Check your email (if SendGrid configured)

**Test data you can use**:
```
Company: Test Corp
Name: John Test
Email: your-test-email@gmail.com
Phone: +27 11 555 0001
```

### Option 2: Automated Testing Script
A test script has been created at the root: **`test-forms.js`**

**To run it**:
```bash
# First ensure dev server is running (npm run dev)
# Then in another terminal:
node test-forms.js
```

This will submit 3 quote requests and 3 applications with test data.

**Output will show**:
- ✅ Success if API responds correctly
- ❌ Failure with error details if environment variables missing

---

## 📊 What the Forms Do

### Quote Request Flow:
1. User fills form → Clicks Submit
2. Frontend validates & sends to `/api/submit-quote`
3. Backend:
   - ✉️ Sends email to `info@empoderata.net` with quote details
   - ✉️ Sends confirmation email to customer with their details
   - 💾 Stores quote in Firebase Firestore for tracking
4. User sees success message

### Application Flow:
1. User fills application → Clicks Submit
2. Frontend sends to `/api/submit-application`
3. Backend:
   - ✉️ Sends email to `info@empoderata.net` with full application
   - Can optionally attach files (resumes, etc.)
4. User sees success message

---

## 📝 Form Endpoints Reference

Both endpoints accept POST requests with JSON:

### POST `/api/submit-quote`
```json
{
  "company": "Company Name",
  "fullName": "John Smith",
  "position": "HR Manager",
  "email": "john@company.com",
  "contactNumber": "+27 11 555 0001",
  "programId": "supply-chain-practitioner",
  "programName": "Supply Chain Practitioner",
  "learners": 25,
  "perLearner": 15000,
  "total": 375000
}
```

### POST `/api/submit-application`
```json
{
  "fullName": "Jane Doe",
  "idNumber": "9205151234567",
  "dob": "1992-05-15",
  "contactNumber": "+27 72 123 4001",
  "email": "jane@email.com",
  "address": "123 Main St, Johannesburg",
  "highestQualification": "Grade 12",
  "employerDetails": "Self-employed",
  "employed": "No",
  "disability": "No",
  "disabilityType": "",
  "numApplying": "1",
  "comments": "Excited to apply",
  "programmeId": "supply-chain-practitioner"
}
```

---

## 🎯 Next Steps

### Immediate (Development):
1. ✅ **SEO is done** - Share links and see preview images work
2. ⚙️ **Set up SendGrid** - Get free account, generate API key
3. ⚙️ **Set up Firebase** - Create project and service account
4. 🚀 **Deploy to Vercel** - Add environment variables there
5. 🧪 **Test both forms** - Use the test script or manual testing

### Longer term:
- Monitor email delivery in SendGrid dashboard
- Track quote requests in Firebase Firestore
- Add email templates for branding
- Consider Slack notifications for form submissions

---

## 🔍 Troubleshooting

### "Unexpected end of JSON input" error
**Cause**: API endpoints not configured with credentials
**Fix**: Set up SendGrid and Firebase environment variables in Vercel

### Emails not arriving
**Cause**: SendGrid API key invalid or quota exceeded
**Fix**: 
1. Check API key is correct in Vercel
2. Check SendGrid account isn't suspended
3. Verify sender email is authorized in SendGrid

### Form submission shows success but no email received
**Cause**: Firestore saved but SendGrid failed
**Fix**: Check SendGrid API key and email address configuration

---

## 📞 Support Resources

- **SendGrid Docs**: https://sendgrid.com/docs/
- **Firebase Docs**: https://firebase.google.com/docs/firestore
- **Vercel Environment Variables**: https://vercel.com/docs/environment-variables
- **Your API Code**: 
  - Quote API: `/api/submit-quote.ts`
  - Application API: `/api/submit-application.ts`

---

**Questions?** Check the API files in the `/api` folder to see exactly how data is being processed.
