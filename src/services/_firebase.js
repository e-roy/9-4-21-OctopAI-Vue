import { firebase } from "@firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";
import "firebase/storage";

// Get a Firestore instance

export const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// emulator settings

if (window.location.hostname === "localhost") {
  // firebase.auth().useEmulator("localhost", 9099); // not working
  // firebase.firestore().useEmulator("localhost", 8081);
  // firebase.functions().useEmulator("localhost", 5001);
  // firebase.storage().useEmulator("localhost", 9199);
}
