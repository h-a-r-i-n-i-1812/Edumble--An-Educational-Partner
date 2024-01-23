// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0raNHTQ3B0u6-jSlq4clr09eUsBGPtac",
  authDomain: "trial-230b1.firebaseapp.com",
  projectId: "trial-230b1",
  storageBucket: "trial-230b1.appspot.com",
  messagingSenderId: "938162547958",
  appId: "1:938162547958:web:2d67cfb3ace3ea887350d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
