const admin = require('firebase-admin');
const serviceAccount = require('./firebase-adminsdk.json'); // Path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR-FIREBASE-PROJECT-ID.firebaseio.com", // Replace with your actual Firebase project ID
});

const db = admin.firestore(); // Initialize Firestore

module.exports = { admin, db };
