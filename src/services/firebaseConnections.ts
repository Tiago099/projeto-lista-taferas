
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBD3yzVpIPzu29s1n664_952d8dS2tSA4w",
  authDomain: "tarefaplus-2f0aa.firebaseapp.com",
  projectId: "tarefaplus-2f0aa",
  storageBucket: "tarefaplus-2f0aa.appspot.com",
  messagingSenderId: "267576317658",
  appId: "1:267576317658:web:e86633cc9dfc10224177e3"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export { db };