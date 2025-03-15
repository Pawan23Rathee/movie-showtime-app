import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booked movies from localStorage or API
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="w-11/12 max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Bookings</h2>

        {bookings.length > 0 ? (
          <ul className="space-y-4">
            {bookings.map((booking, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold">{booking.movieName}</h3>
                <p className="text-gray-600">Date: {booking.date}</p>
                <p className="text-gray-600">Time: {booking.time}</p>
                <p className="text-gray-600">Seats: {booking.seats.join(", ")}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 text-lg">You have no bookings yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
