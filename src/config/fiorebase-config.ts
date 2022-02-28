import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGvmotPpg96WElnbhaFvFJ75Efso8KGfs",
  authDomain: "auth-project-venus.firebaseapp.com",
  databaseURL: "http://localhost:9000/?ns=project-id-default-rtdb",
  projectId: "auth-project-venus",
  storageBucket: "auth-project-venus.appspot.com",
  messagingSenderId: "434323068391",
  appId: "1:434323068391:web:16ba396ec5dd439b975942",
  measurementId: "G-JV69628VPJ",
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = getAuth();
export const db = getDatabase();

connectAuthEmulator(auth, "http://localhost:9099");
connectDatabaseEmulator(db, "localhost", 9000);
