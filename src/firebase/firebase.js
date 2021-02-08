import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5IvwpDP82RNNlC63H4eEbdxiXl0lujEo",
  authDomain: "e-commerce-auth.firebaseapp.com",
  projectId: "e-commerce-auth",
  storageBucket: "e-commerce-auth.appspot.com",
  messagingSenderId: "334512846630",
  appId: "1:334512846630:web:69d077bb9be0c6360b33e7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
