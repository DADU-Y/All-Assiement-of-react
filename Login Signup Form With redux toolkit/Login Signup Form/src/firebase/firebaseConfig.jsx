import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgSWz_gJy694UZspj6xCDuBr77UjTqM14",
  authDomain: "login-signup-form-5e6e7.firebaseapp.com",
  projectId: "login-signup-form-5e6e7",
  storageBucket: "login-signup-form-5e6e7.firebasestorage.app",
  messagingSenderId: "1068486344943",
  appId: "1:1068486344943:web:8d20ca04071ff4771c9b1a",
  measurementId: "G-8LB8RVZ5E0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
