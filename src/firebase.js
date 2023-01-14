import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0VfH65X0BHuCGvjDNWPXPtiYj01ScWfo",
  authDomain: "noteapp-64ff0.firebaseapp.com",
  projectId: "noteapp-64ff0",
  storageBucket: "noteapp-64ff0.appspot.com",
  messagingSenderId: "309145034681",
  appId: "1:309145034681:web:7ed142c48d24bab906a068",
  measurementId: "G-18WRTE9NPR"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
// const db = firebaseApp.firestore();
// const storage = getStorage(app);

export { auth, provider,db };

// db.collection("task").where("userId", "==", auth.currentUser.uid).onSnapshot((snapshot: any) => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data().title);
//   })
// });