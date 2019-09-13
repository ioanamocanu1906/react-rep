import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2KDgkLA_X2LNLa0vdMbWCTIV5HLwApFU",
  authDomain: "react-app-730af.firebaseapp.com",
  databaseURL: "https://react-app-730af.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//Named export
export { firebaseApp };

//default export

export default base;
