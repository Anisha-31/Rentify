// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentify-c2325.firebaseapp.com",
  projectId: "rentify-c2325",
  storageBucket: "rentify-c2325.appspot.com",
  messagingSenderId: "180834505452",
  appId: "1:180834505452:web:de74902e981fcd305bcbc9",
  measurementId: "G-FTEC0CE604"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);