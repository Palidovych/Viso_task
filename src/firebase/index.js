import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8ffMvaEWOkE02OdtJeCC2T9bRB84eSr4",
  authDomain: "mytestproject-4beb9.firebaseapp.com",
  projectId: "mytestproject-4beb9",
  storageBucket: "mytestproject-4beb9.appspot.com",
  messagingSenderId: "827806107666",
  appId: "1:827806107666:web:851be9b7b05a4df20630cb"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
