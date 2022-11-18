import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD8CCWVlf3nhWruBluGjMP5lp6WIlVqPgs",
  authDomain: "gas-cylinder-87bc1.firebaseapp.com",
  databaseURL: "https://gas-cylinder-87bc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gas-cylinder-87bc1",
  storageBucket: "gas-cylinder-87bc1.appspot.com",
  messagingSenderId: "613390215087",
  appId: "1:613390215087:web:2b2a8425ef82c7669ff15a",
  measurementId: "G-ZFMS8N1KMN"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };