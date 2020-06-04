import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYrD2agpN23FoCVSTRBc4YL1GkQc7yOdA",
  authDomain: "shitts-db.firebaseapp.com",
  databaseURL: "https://shitts-db.firebaseio.com",
  projectId: "shitts-db",
  storageBucket: "shitts-db.appspot.com",
  messagingSenderId: "449923961339",
  appId: "1:449923961339:web:693b4deff61904f8623b5e",
  measurementId: "G-8X92BM1C71",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if there is no snapshot, create a new user snapshot/data
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
