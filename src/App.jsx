import React, { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Categories from "./Component/Categories";
import Movies from "./Pages/Movies";
import MovieDetail from "./Pages/MovieDetail";
import BookingPage from "./Pages/BookingPage";
import MyBookings from "./Pages/MyBookings";
import Login from "./Pages/Login";
import Footer from "./Component/Footer";
import Stream from "./Pages/Stream";
import Play from "./Pages/Play";
import Event from "./Pages/Event";
import EventBooking from "./Pages/EventBooking";

const moviesData = [
  {
    id: 1,
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    rating: 8.8,
    description: "A thief who enters the dreams of others to steal secrets faces a new challenge.",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    description: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  }
];

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Agar user "/" pe aata hai toh movies page pe redirect karega
    if (window.location.pathname === "/") {
      navigate("/movies");
    }
  }, [navigate]); 

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/" element={<Movies movies={moviesData} />} />
        <Route path="/movies" element={<Movies movies={moviesData} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stream/:id" element={<Stream />} />
        <Route path="/play/:id" element={<Play />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event-booking/:id" element={<EventBooking />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
