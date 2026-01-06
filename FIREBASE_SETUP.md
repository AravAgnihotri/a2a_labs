# Firebase Authentication Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Enable Authentication

1. In the Firebase Console, go to **Build** > **Authentication**
2. Click "Get started"
3. Enable the following sign-in methods:
   - **Email/Password**: Toggle to enable
   - **Google**: Toggle to enable, add support email

## Step 3: Register Your Web App

1. In Project Overview, click the **Web** icon (`</>`)
2. Register your app with a nickname (e.g., "A2A Labs Web")
3. Copy the Firebase configuration object

## Step 4: Configure Environment Variables

1. Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

2. Fill in your Firebase credentials in the `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 5: Configure Authorized Domains

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Add your domains:
   - `localhost` (for development)
   - Your production domain (e.g., `a2alabs.xyz`)

## Step 6: Test Authentication

1. Restart your development server:

```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`
3. Click the "Sign In" button in the header
4. Try creating an account or signing in with Google

## Features Included

✅ Email/Password Sign Up
✅ Email/Password Sign In
✅ Google Sign In
✅ Password Reset
✅ User Profile Display
✅ Sign Out

## Troubleshooting

### "Firebase: Error (auth/unauthorized-domain)"
- Make sure your domain is added to Authorized domains in Firebase Console

### "Firebase: Error (auth/api-key-not-valid)"
- Check that your `VITE_FIREBASE_API_KEY` is correct in `.env`
- Make sure you restarted the dev server after adding `.env`

### Environment variables not loading
- Ensure your `.env` file is in the root directory
- Restart your development server
- Check that variables start with `VITE_` prefix

## Security Notes

⚠️ **Never commit your `.env` file to version control**
⚠️ The `.env` file is already in `.gitignore`
⚠️ For production, set environment variables in your hosting platform


