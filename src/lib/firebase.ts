// src/lib/firebase.ts
// Lightweight Firebase initialization using modular SDK.
// Expects Vite env variables: VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, VITE_APP_ID

import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let app: FirebaseApp | null = null;

export function initFirebase() {
  if (getApps().length) {
    // already initialized
    return getFirestore();
  }

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  } as any;

  // Minimal validation
  if (!firebaseConfig.projectId) {
    console.warn('Firebase config missing - Firestore writes will fail without proper env vars.');
  }

  app = initializeApp(firebaseConfig);
  return getFirestore(app);
}

export default initFirebase;
