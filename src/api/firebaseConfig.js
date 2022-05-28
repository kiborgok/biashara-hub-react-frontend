// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "************************",
  authDomain: "biashara-hub.firebaseapp.com",
  projectId: "biashara-hub",
  storageBucket: "biashara-hub.appspot.com",
  messagingSenderId: "1008961592563",
  appId: "1:1008961592563:web:70b6c1f0fa958e80e0eb86",
  measurementId: "G-W6KWYZ3CXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
