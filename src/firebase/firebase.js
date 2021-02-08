import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "AUTH DOMAIN",
  projectId: "PROJECTID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSAGING SENDER ID",
  appId: "APP ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
