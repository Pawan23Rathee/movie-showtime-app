import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxSxOlAvd1hzU51QIW_EAK_donEdXpL-0",
  authDomain: "movie-book-558f8.firebaseapp.com",
  projectId: "movie-book-558f8",
  storageBucket: "movie-book-558f8.appspot.com",  // ✅ Fixed the storage bucket URL
  messagingSenderId: "721513806853",
  appId: "1:721513806853:web:1bf8b9e978c5d0dcd7306c",
  measurementId: "G-64GJ8THYQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Initialize Google & Facebook Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Set custom parameters for Google Login
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Export Firebase modules
export { auth, googleProvider, facebookProvider, analytics };
