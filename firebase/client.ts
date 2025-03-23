// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuPuLDihY4tQ4S0pV2KuE4tKVQbmOFlEc",
  authDomain: "prepwise-6567c.firebaseapp.com",
  projectId: "prepwise-6567c",
  storageBucket: "prepwise-6567c.firebasestorage.app",
  messagingSenderId: "502262104315",
  appId: "1:502262104315:web:a307d36bcd535e0825b05e",
  measurementId: "G-6SCYN5YSRY",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
