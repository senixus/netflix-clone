import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAALaYvEgOIv-nWJVYLd0UNe2DVzSR1LN8",
  authDomain: "issue-tracker-c07e0.firebaseapp.com",
  projectId: "issue-tracker-c07e0",
  storageBucket: "issue-tracker-c07e0.appspot.com",
  messagingSenderId: "270603259195",
  appId: "1:270603259195:web:1a85795707b7c7372c3b1e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
