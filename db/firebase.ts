import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

export const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database= getFirestore(app)