import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl4SU6nZ_EhWwVxmhyXa1EMRwnWvIkdXQ",
  authDomain: "chat-25baa.firebaseapp.com",
  projectId: "chat-25baa",
  storageBucket: "chat-25baa.appspot.com",
  messagingSenderId: "722125712183",
  appId: "1:722125712183:web:799c7c4d949b9a471a08b2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();