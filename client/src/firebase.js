// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-project-1579269854562.firebaseapp.com",
  projectId: "my-project-1579269854562",
  storageBucket: "my-project-1579269854562.appspot.com",
  messagingSenderId: "168497567058",
  appId: "1:168497567058:web:046467042d5d0c2eae568b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);