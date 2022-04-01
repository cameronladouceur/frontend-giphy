import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD0wv1RPh9-2osy6tQD_ectLMrYIB8qKmI",
  authDomain: "giphy-3da3c.firebaseapp.com",
  projectId: "giphy-3da3c",
  storageBucket: "giphy-3da3c.appspot.com",
  messagingSenderId: "922580012109",
  appId: "1:922580012109:web:19ec8b8bd57dcf1d0a2004",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
