//// burada google firebase ile etkileşime buradan girilecek.
//firebase ile etkileşime geçildi
import { initializeApp } from "firebase/app";
//authentication işlemleri için(kullanıcı kaydı)
import { getAuth } from "firebase/auth";
//firestore database erişimi için
import {getFirestore} from "firebase/firestore";
// storage erişimi için (resim kayıt yeri)
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDSA1l9QyGUSfMTWuKHVWLf9kXeQIjRctA",
  authDomain: "e-ticaret-class-19123.firebaseapp.com",
  projectId: "e-ticaret-class-19123",
  storageBucket: "e-ticaret-class-19123.appspot.com",
  messagingSenderId: "108175657057",
  appId: "1:108175657057:web:6e1bb21a62cd74dfcc0220"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;