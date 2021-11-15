// firebase.js
// all firebase initialization

import firebase from "firebase/compat"
import "firebase/functions"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCQ9-c3XZij-aRvw6y31abGL0nYZMeALYc",
  authDomain: "slohacks2021.firebaseapp.com",
  projectId: "slohacks2021",
  storageBucket: "slohacks2021.appspot.com",
  messagingSenderId: "170268797251",
  appId: "1:170268797251:web:438f39bb503fce0188e7f6"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = app.firestore()
const functions = app.functions("us-central1")

functions.useEmulator('localhost', 5005);


const googleProvider = new firebase.auth.GoogleAuthProvider();

// Sign in with google function, will create a user to if the user doesn't exist
const signInWithGoogle = async (setUser) => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        spotifytoken: ""
      });
    }
    console.log("User:", user);
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const spotifyFunctionTest = async () => {
  const hello  = functions.httpsCallable('createFromSpotify');
  hello({playlistid: "7AGiEZJ4McYRYF8v7D3cfD"})
  .then((result) => {
    console.log("res:", result.data)
    console.log("songs:", result.data.titles)
  })
  .catch((err) => {
    console.log("big err", err.res)
  })
}

export {
  app,
  auth,
  db,
  signInWithGoogle,
  spotifyFunctionTest
};