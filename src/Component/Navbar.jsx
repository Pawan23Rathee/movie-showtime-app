import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [isDetecting, setIsDetecting] = useState(false);

  // Function to Detect User's Location
  const detectLocation = () => {
    if ("geolocation" in navigator) {
      setIsDetecting(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationName = await getCityFromCoordinates(latitude, longitude);
          setSelectedCity(locationName);
          setIsDetecting(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to detect location. Please select manually.");
          setIsDetecting(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Convert Coordinates to City Name
  const getCityFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      return data.address.city || data.address.town || data.address.state || "Location Not Found";
    } catch (error) {
      console.error("Error fetching city name:", error);
      return "Location Not Found";
    }
  };

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white p-3 shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          {/* Logo */}
          <Link to="/" className="text-black text-lg font-bold tracking-wide">
            🎬 Movie<span className="text-blue-500">Book</span>
          </Link>

          {/* Search Bar (Hidden on Small Screens) */}
          <div className="hidden md:flex items-center bg-gray-200 text-black px-3 py-2 rounded-lg shadow-sm">
            <FaSearch className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-200 text-black outline-none w-32 placeholder-gray-500 text-sm"
            />
          </div>

          {/* City Selector with Auto Detect */}
          <select
            className="hidden md:block bg-gray-200 text-black text-sm p-2 rounded-lg border border-gray-300 focus:outline-none"
            value={isDetecting ? "Detecting..." : selectedCity}
            onChange={(e) => {
              if (e.target.value === "current-location") {
                detectLocation();
              } else {
                setSelectedCity(e.target.value);
              }
            }}
          >
            <option value="Select City" disabled>Select City</option>
            <option value="current-location">📍 Auto Detect Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

          {/* Navbar Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/my-bookings" className="text-black hover:text-blue-500 text-sm transition">
              My Bookings
            </Link>
            <Link to="/Login" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm">
              Sign Up
            </Link>
          </div>

          {/* Toggle Sidebar Button for Mobile */}
          <button className="md:hidden text-black text-lg" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>

        {/* Search Bar for Mobile */}
        <div className="flex md:hidden items-center bg-gray-200 text-black px-3 py-2 rounded-lg shadow-sm mt-2">
          <FaSearch className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-200 text-black outline-none w-full placeholder-gray-500 text-sm"
          />
        </div>

        {/* City Selector for Mobile */}
        <div className="flex md:hidden justify-center mt-2">
          <select
            className="bg-gray-200 text-black text-sm p-2 rounded-lg border border-gray-300 focus:outline-none w-full"
            value={isDetecting ? "Detecting..." : selectedCity}
            onChange={(e) => {
              if (e.target.value === "current-location") {
                detectLocation();
              } else {
                setSelectedCity(e.target.value);
              }
            }}
          >
            <option value="Select City" disabled>Select City</option>
            <option value="current-location">📍 Auto Detect Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex-1 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
        <div className="w-64 bg-white h-full p-4 flex flex-col shadow-lg">
          {/* Close Button */}
          <button className="text-black text-lg mb-4 self-end" onClick={toggleSidebar}>
            <FaTimes />
          </button>

          {/* Profile & Login/Register */}
          <div className="border-b border-gray-300 pb-3 mb-3">
            <Link to="/login" onClick={toggleSidebar}>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                {isLoggedIn ? "Logout" : "Login / Register"}
              </button>
            </Link>
          </div>

          {/* Sidebar Links */}
          <Link to="/my-bookings" className="text-black py-2 hover:text-blue-500 transition" onClick={toggleSidebar}>
            My Bookings
          </Link>
          <Link to="/notifications" className="text-black py-2 hover:text-blue-500 transition" onClick={toggleSidebar}>
            Notifications
          </Link>
          <Link to="/orders" className="text-black py-2 hover:text-blue-500 transition" onClick={toggleSidebar}>
            Your Orders
          </Link>
          <Link to="/help" className="text-black py-2 hover:text-blue-500 transition" onClick={toggleSidebar}>
            Help & Support
          </Link>
          <Link to="/account" className="text-black py-2 hover:text-blue-500 transition" onClick={toggleSidebar}>
            Account & Settings
          </Link>
          <Link to="/rewards" className="text-black py-2 hover:text-blue-500 transition" onClick={toggleSidebar}>
            Rewards
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
