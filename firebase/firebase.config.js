// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCJZzFtGSiYVHV0ENrjXnpiWabT-Sp_bk",
  authDomain: "quota-shahid.firebaseapp.com",
  projectId: "quota-shahid",
  storageBucket: "quota-shahid.appspot.com",
  messagingSenderId: "1010810739820",
  appId: "1:1010810739820:web:8c2a4ab88cbd660ea60c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app