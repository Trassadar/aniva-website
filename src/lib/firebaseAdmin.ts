import admin from 'firebase-admin';

let db: admin.firestore.Firestore;

function initializeFirebase() {
  if (!admin.apps.length) {
    try {
      const projectId = process.env.FIREBASE_PROJECT_ID;
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

      if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Firebase environment variables lipsesc. Verifica FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
      }

      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });

      console.log('Firebase Admin initializat cu succes');
    } catch (error) {
      console.error('Eroare la initializarea Firebase Admin:', error);
      throw error;
    }
  }

  db = admin.firestore();
}

export function getDb() {
  if (!db) {
    initializeFirebase();
  }
  return db;
}

export function serverTimestamp() {
  return admin.firestore.FieldValue.serverTimestamp();
}

export default admin;
