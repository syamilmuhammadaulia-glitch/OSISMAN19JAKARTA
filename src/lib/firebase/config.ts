import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLF8WIWIMt4QMQCi6yHfDDFF053P2iVw",
  authDomain: "osis-man19-web.firebaseapp.com",
  databaseURL:
    "https://osis-man19-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "osis-man19-web",
  storageBucket: "osis-man19-web.firebasestorage.app",
  messagingSenderId: "8771950682",
  appId: "1:8771950682:web:4791acba21ed63910a6063",
  measurementId: "G-BVH6N2NZJ3",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inisialisasi Firestore (Database)
const db = getFirestore(app);

export { app, db };
