// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTSVzfM1yqBK3kuw0Wj5OM_gTC7oUafa4",
  authDomain: "house-marketplace-app-4195c.firebaseapp.com",
  projectId: "house-marketplace-app-4195c",
  storageBucket: "house-marketplace-app-4195c.appspot.com",
  messagingSenderId: "352575155943",
  appId: "1:352575155943:web:89d79147f7543cafa83c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore() // we are passing all this above into our app