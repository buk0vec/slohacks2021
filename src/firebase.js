// firebase.js
// all firebase initialization

import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCQ9-c3XZij-aRvw6y31abGL0nYZMeALYc",
  authDomain: "slohacks2021.firebaseapp.com",
  projectId: "slohacks2021",
  storageBucket: "slohacks2021.appspot.com",
  messagingSenderId: "170268797251",
  appId: "1:170268797251:web:438f39bb503fce0188e7f6"
};

const app = initializeApp(firebaseConfig)

export default app