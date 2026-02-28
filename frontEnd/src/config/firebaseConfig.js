
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD5nlYjSKBSQ6PVCS4Cs7XEdgeLdlBNcHQ",
  authDomain: "stepzone-a15e5.firebaseapp.com",
  projectId: "stepzone-a15e5",
  storageBucket: "stepzone-a15e5.firebasestorage.app",
  messagingSenderId: "775534715238",
  appId: "1:775534715238:web:a3fde4aeef43489b4de8a7",
  measurementId: "G-11M8WFT4EN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)