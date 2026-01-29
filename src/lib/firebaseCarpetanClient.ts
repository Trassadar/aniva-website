import { FirebaseOptions, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { serverTimestamp as firestoreServerTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously, Auth } from 'firebase/auth';

let dbInstance: Firestore | null = null;
let authInstance: Auth | null = null;
let isAuthenticating = false;

function getFirebaseConfig(): FirebaseOptions {
  const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
  };

  const requiredKeys: Array<keyof FirebaseOptions> = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId',
  ];

  const missingKeys = requiredKeys.filter((key) => !firebaseConfig[key]);
  if (missingKeys.length > 0) {
    const errorMsg = `Firebase config lipseste: ${missingKeys.join(', ')}. Verifica .env.local`;
    if (typeof window !== 'undefined') {
      console.error(errorMsg);
    }
    throw new Error(errorMsg);
  }

  return firebaseConfig;
}

function getAppInstance() {
  const firebaseConfig = getFirebaseConfig();
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

async function ensureAuthenticated(): Promise<void> {
  if (authInstance?.currentUser) {
    return;
  }

  if (isAuthenticating) {
    // Wait for ongoing authentication
    while (isAuthenticating) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if (authInstance?.currentUser) {
      return;
    }
  }

  isAuthenticating = true;
  try {
    const app = getAppInstance();
    if (!authInstance) {
      authInstance = getAuth(app);
    }
    
    if (!authInstance.currentUser) {
      await signInAnonymously(authInstance);
    }
  } catch (error) {
    console.error('Eroare la autentificare Firebase:', error);
    throw error;
  } finally {
    isAuthenticating = false;
  }
}

function initializeDb(): Firestore {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    const app = getAppInstance();
    dbInstance = getFirestore(app);
    return dbInstance;
  } catch (error) {
    console.error('Eroare la initializarea Firebase:', error);
    throw error;
  }
}

export async function getDb(): Promise<Firestore> {
  await ensureAuthenticated();
  return initializeDb();
}

export const serverTimestamp = firestoreServerTimestamp;
