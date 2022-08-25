import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUUqqBOJOVmfxIUgZ58Xm-Kmop3RtvzE4",
  authDomain: "ecommerce-react-f1c38.firebaseapp.com",
  projectId: "ecommerce-react-f1c38",
  storageBucket: "ecommerce-react-f1c38.appspot.com",
  messagingSenderId: "407487972274",
  appId: "1:407487972274:web:969f62d166ac7264c3daab"
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Seleciona la base de datos de Firestore
 export const DB = getFirestore(app);