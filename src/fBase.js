import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwik6679_5O1ELZVg_LEt8BjZA1dcDLuE",
  authDomain: "sparrow-b0a5b.firebaseapp.com",
  projectId: "sparrow-b0a5b",
  storageBucket: "sparrow-b0a5b.appspot.com",
  messagingSenderId: "750248810549",
  appId: "1:750248810549:web:a16cb35c70924ad5b3397c"
};

initializeApp(firebaseConfig);

export const auth = getAuth();