import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

const initFirebase = () => {
   initializeApp(firebaseConfig);
}

export default initFirebase;