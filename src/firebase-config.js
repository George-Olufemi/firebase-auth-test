import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRsp8qczfoU_-JCrUm0Tn03Sk3Ey7yJBc",
    authDomain: "react-firebase-auth1-a34d0.firebaseapp.com",
    projectId: "react-firebase-auth1-a34d0",
    storageBucket: "react-firebase-auth1-a34d0.appspot.com",
    messagingSenderId: "979838189755",
    appId: "1:979838189755:web:6302ae860e0256ae10299e",
    measurementId: "G-2MCQ7T6YXS"
};

// Firebase Init
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);