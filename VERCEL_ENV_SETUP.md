# Vercel Environment Variables Setup

## Quick Reference for Vercel Dashboard

When deploying to Vercel, add these environment variables:

### SendGrid Configuration
```
SENDGRID_API_KEY=<your-sendgrid-api-key>
SENDGRID_FROM=info@empoderata.net
SENDGRID_TO=info@empoderata.net
```

### Firebase Configuration
```
FIREBASE_PROJECT_ID=<your-project-id>
FIREBASE_CLIENT_EMAIL=<your-service-account-email>
FIREBASE_PRIVATE_KEY=<your-private-key-with-real-newlines>
APP_ID=empodera
```

## Steps to Add in Vercel

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Settings** → **Environment Variables**
3. Add each variable above with its value
4. **Redeploy** your project
5. Test forms to ensure emails work

## Getting SendGrid API Key

1. Go to https://sendgrid.com
2. Create free account (300 emails/day free tier)
3. Navigate to **Settings** → **API Keys**
4. Click **Create API Key**
5. Give it a name like "Empodera App"
6. Copy the key (it won't show again)
7. Paste as `SENDGRID_API_KEY` in Vercel

## Getting Firebase Credentials

1. Go to https://console.firebase.google.com
2. Create new project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate New Private Key**
5. Download JSON file and open it
6. Copy values for:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`
   - `private_key` → `FIREBASE_PRIVATE_KEY` (paste as-is, will work in Vercel)

## Verify It's Working

After deploying:
1. Visit your site
2. Click "Get a Quote" or "Apply Now"
3. Fill and submit form
4. Should see success message
5. Check `info@empoderata.net` inbox for confirmation email
