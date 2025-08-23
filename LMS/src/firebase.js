// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsPCFgx25t8v-wZb_g6zefiiZD3aUwlN8",
  authDomain: "lms-project-a1fde.firebaseapp.com",
  projectId: "lms-project-a1fde",
  storageBucket: "lms-project-a1fde.appspot.com", 
  messagingSenderId: "93743401570",
  appId: "1:93743401570:web:261931da37a8b1af049f3b",
  measurementId: "G-7E38V28PME"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
