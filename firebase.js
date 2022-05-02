// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASEKEY}`,
  authDomain: "exame-federativo.firebaseapp.com",
  projectId: "exame-federativo",
  storageBucket: "exame-federativo.appspot.com",
  messagingSenderId:`${process.env.REACT_APP_MSGSID}` ,
  appId: `${process.env.REACT_APP_APPID}`
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app