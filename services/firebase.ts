import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDCjY_KafxeKvcnRkIRIkHTQ_z0ttBIcg",
  authDomain: "kurtswebsite-77f59.firebaseapp.com",
  projectId: "kurtswebsite-77f59",
  storageBucket: "kurtswebsite-77f59.firebasestorage.app",
  messagingSenderId: "209190298892",
  appId: "1:209190298892:web:8de8326658081e1a619529",
  measurementId: "G-WZSQLTY24Z"
};

// Initialize Firebase
// Handles both modular (v9+) named export and compat/v8 default export scenarios
const app = firebase.initializeApp ? firebase.initializeApp(firebaseConfig) : (firebase as any).default.initializeApp(firebaseConfig);

export const auth = getAuth(app as any);
export const db = getFirestore(app as any);