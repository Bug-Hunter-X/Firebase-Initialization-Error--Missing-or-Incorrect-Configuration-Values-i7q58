import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SEND_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Initialize Firebase. Wrap in a try...catch block to handle potential errors.
try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully!');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  // Add more robust error handling, such as displaying a user-friendly message or logging the error to a remote service.
}

// ... rest of your Firebase code ... 