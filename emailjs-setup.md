# EmailJS Setup Guide for Quick Note Feature

To enable direct email sending from your website (without relying on the user's email client), follow these steps to set up EmailJS:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. **Note the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: Quick Note from Ocelot Trio Website

From: {{from_name}}

Message:
{{message}}

---
This message was sent from the Ocelot Trio website quick note form.
```

4. **Note the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your "Public Key" (starts with something like "user_...")
3. **Note this key** (you'll need this later)

## Step 5: Update Your Website Code

1. Open `script.js` in your website files
2. Find the `EMAILJS_CONFIG` section (around line 180)
3. Replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'your_service_id_here',     // Replace with your Service ID
    TEMPLATE_ID: 'your_template_id_here',   // Replace with your Template ID  
    PUBLIC_KEY: 'your_public_key_here'      // Replace with your Public Key
};
```

## Step 6: Test the Feature

1. Save your changes and upload to your website
2. Try sending a quick note from your website
3. Check your email - you should receive the message!

## Current Fallback Behavior

Without EmailJS setup, the quick note feature will:
1. Copy the message to the user's clipboard
2. Show instructions to email you manually
3. Try to open their email client as backup

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email templates
- ✅ 1 email service
- ✅ Perfect for a band website!

## Troubleshooting

**Emails not sending?**
- Check that all IDs and keys are correct
- Verify your email service is properly connected
- Check the browser console for error messages

**Need help?**
- EmailJS has great documentation at [docs.emailjs.com](https://www.emailjs.com/docs/)
- Their free tier support is available via their website

---

Once set up, visitors can send you messages directly from your website without needing their own email client! 🎵 