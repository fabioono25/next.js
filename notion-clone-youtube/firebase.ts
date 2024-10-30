import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYxJ5xpc1SkTHwUJG1dOOHyz6krO-5WYk",
  authDomain: "notion-clone-29292.firebaseapp.com",
  projectId: "notion-clone-29292",
  storageBucket: "notion-clone-29292.firebasestorage.app",
  messagingSenderId: "557662688179",
  appId: "1:557662688179:web:a11133c89e7163bc4cf1c6",
};

// avoid double-initialization:
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
