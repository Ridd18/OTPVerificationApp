import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFdPE5e5gIhcUUIKDWgdUMd5pCjgN7R1U",
  authDomain: "phone-otp-app-aab53.firebaseapp.com",
  projectId: "phone-otp-app-aab53",
  storageBucket: "phone-otp-app-aab53.appspot.com",
  messagingSenderId: "277502279962",
  appId: "1:277502279962:web:6c247a2516b1ddbf6baca3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
