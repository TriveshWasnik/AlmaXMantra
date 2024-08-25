/* Firebase Configuration File */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUj7niW0cjYOPRa490icWMynlxer8oFqM",
  authDomain: "abmyntra-69068.firebaseapp.com",
  projectId: "abmyntra-69068",
  storageBucket: "abmyntra-69068.appspot.com",
  messagingSenderId: "722327229708",
  appId: "1:722327229708:web:86bc52adff4eca9d7ea529",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
