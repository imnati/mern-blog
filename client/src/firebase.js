// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f5ab9.firebaseapp.com",
  projectId: "mern-blog-f5ab9",
  storageBucket: "mern-blog-f5ab9.appspot.com",
  messagingSenderId: "902576099959",
  appId: "1:902576099959:web:b6ba9d0ae97a02e259ac72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
