import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {  
  apiKey: "AIzaSyCB2ahedV3bseaWSZTMhjiCAwQNUZ2wpUI",
  authDomain: "lumina-a3a56.firebaseapp.com",
  projectId: "lumina-a3a56",
  storageBucket: "lumina-a3a56.firebasestorage.app",
  messagingSenderId: "124250627969",
  appId: "1:124250627969:web:c40e438bdd7cd995bdd280"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);