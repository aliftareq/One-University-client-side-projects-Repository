// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClUC5nTu3Hdh-YDZY5IDAu8CVFvgRQ0K8",
    authDomain: "project-one-university.firebaseapp.com",
    projectId: "project-one-university",
    storageBucket: "project-one-university.appspot.com",
    messagingSenderId: "350645792079",
    appId: "1:350645792079:web:cf598f4f858754fec4a93a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;