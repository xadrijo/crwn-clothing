import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0RIRsOSzPp9UMAS2DE7nQ1OQXJbKs_cc",
  authDomain: "crwn-clothing-db-50955.firebaseapp.com",
  projectId: "crwn-clothing-db-50955",
  storageBucket: "crwn-clothing-db-50955.firebasestorage.app",
  messagingSenderId: "586023028328",
  appId: "1:586023028328:web:cba67bf8125f3a19b11ddd"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 