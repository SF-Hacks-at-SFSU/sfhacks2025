// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*before you freak out about the api key being visible in this file please read this:
https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
The key would be exposed regardless, for google's servers to recognize our app.
we need to implement the security rules in the firebase console ourselves 
*/
const firebaseConfig = {
  apiKey: "AIzaSyBQUfVZ4at7SL4g7w6S5p7wHh9kFzPToKQ",
  authDomain: "sfhacks2025.firebaseapp.com",
  databaseURL: "https://sfhacks2025-default-rtdb.firebaseio.com",
  projectId: "sfhacks2025",
  storageBucket: "sfhacks2025.appspot.com",
  messagingSenderId: "201532170161",
  appId: "1:201532170161:web:570328cf135db796036790",
  databaseURL: "https://sfhacks2025-default-rtdb.firebaseio.com/"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const firestore = getFirestore(app)

export  {database,firestore}
