# EmailJS Setup Guide

## Quick Fix for EmailJS Error

The error you're seeing means EmailJS isn't properly configured. Follow these steps:

### 1. Create EmailJS Account
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/account)
- Sign up or login to your account

### 2. Get Your Public Key (User ID)
- In your dashboard, look for "Public Key" or "User ID"
- Copy this value

### 3. Create Email Service
- Go to "Email Services" in your dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup steps
- Copy the "Service ID"

### 4. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Design your email template
- Copy the "Template ID"

### 5. Create Environment File
Create a `.env` file in your project root:

```env
# GitHub Configuration
REACT_APP_TOKEN=your_github_token_here
REACT_APP_USERNAME=your_github_username_here

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_USER_ID=your_public_key_here
```

### 6. Restart Your App
After creating the `.env` file, restart your development server:
```bash
npm start
```

## Example EmailJS Template

Here's a simple template you can use:

**Subject:** New Contact Form Submission from {{user_name}}

**Body:**
```
Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}
Message: {{user_message}}

This message was sent from your portfolio contact form.
```

## Troubleshooting

- **400 Error**: Usually means wrong User ID (Public Key)
- **Service not found**: Check your Service ID
- **Template not found**: Check your Template ID
- **Email not sending**: Make sure your email service is properly connected

## Alternative: Use a Simple Mailto Link

If you want to skip EmailJS for now, you can replace the contact form with a simple mailto link:

```jsx
<a href="mailto:your.email@example.com?subject=Portfolio Inquiry" className="hero-cta">
  Send Email
</a>
```

This will open the user's default email client instead of sending from your website.

