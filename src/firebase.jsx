import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const API_KEY = "5bb4088bc91c5bd82f2a8071739d0a21";
const API_URL = "https://api.themoviedb.org/3/movie/upcoming";

const fetchEvents = async () => {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    console.log(data.results); // Ye upcoming movies/events return karega
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

fetchEvents();
