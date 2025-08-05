// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwhuuoF7HVMFK9QDlXmQn5SxBnQEdSCg0",
  authDomain: "scrapbook-cinta-kita.firebaseapp.com",
  projectId: "scrapbook-cinta-kita",
  storageBucket: "scrapbook-cinta-kita.firebasestorage.app",
  messagingSenderId: "85785615120",
  appId: "1:85785615120:web:7abd9532115674d8832395",
  measurementId: "G-1FJ38Z4WXZ"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Modul-modul Firebase yang siap pakai 🪄
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export supaya bisa dipakai di semua file kamu 💌
export { auth, db, storage };