import { initializeApp } from 'firebase/app';
import * as FirebaseAuth from 'firebase/auth';
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

const app = initializeApp(firebaseConfig);
export const auth = FirebaseAuth.getAuth(app);
export const db = getFirestore(app);