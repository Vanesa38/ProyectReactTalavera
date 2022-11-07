import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

 

const firebaseConfig = {
  apiKey: "AIzaSyBBg3hqvCjQEu36ba09vrcCfB_MAdBjQtU",
  authDomain: "backendproyectreact.firebaseapp.com",
  projectId: "backendproyectreact",
  storageBucket: "backendproyectreact.appspot.com",
  messagingSenderId: "374902656546",
  appId: "1:374902656546:web:b7549c56a97b15b572847b"
};
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)