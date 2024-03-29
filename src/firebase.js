// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCrunDvwP9CYHLNXCWZLCDM0hiKc26GIMo",
  authDomain: "facebook-clone-4c914.firebaseapp.com",
  databaseURL: "https://facebook-clone-4c914.firebaseio.com",
  projectId: "facebook-clone-4c914",
  storageBucket: "facebook-clone-4c914.appspot.com",
  messagingSenderId: "668157527030",
  appId: "1:668157527030:web:da8c56bab3ac758ec37dd7",
  measurementId: "G-SSTSZXNBFM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
