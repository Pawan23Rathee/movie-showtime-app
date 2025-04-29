import React, { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom"; // make sure useNavigate is imported
import Navbar from "./Component/Navbar";
import Categories from "./Component/Categories";
import Movies from "./Pages/Movies";
import MovieDetail from "./Pages/MovieDetail";
import BookingPage from "./Pages/BookingPage";
import MyBookings from "./Pages/MyBookings";
import Login from "./Pages/Login";
import Footer from "./Component/Footer";
import Stream from "./Pages/Stream";
import Event from "./Pages/Event";
import EventBooking from "./Pages/EventBooking";
import Sports from "./Pages/Sports";
import CorporateOffers from "./Pages/CorporateOffers";
import GiftCards from "./Pages/GiftCards";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/movies");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stream/:id" element={<Stream />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event-booking/:id" element={<EventBooking />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/corporate-offers" element={<CorporateOffers />} />
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
