import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../assets/data/moviesData";
const seatPrices = {
  VIP: 500,
  Regular: 300,
  Economy: 200,
};

const BookingPage = () => {
  const { id } = useParams();
  const movie = moviesData.find((m) => m.id === parseInt(id));

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatType, setSeatType] = useState("Regular");

  if (!movie) {
    return <h2 className="text-center text-red-500">Movie Not Found</h2>;
  }

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const totalPrice = selectedSeats.length * seatPrices[seatType];

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }
    alert(`Successfully booked ${selectedSeats.length} seat(s) for "${movie.title}"\nTotal Price: ₹${totalPrice}`);
  };

  return (
    <div className="container mx-auto py-8 text-center mt-6">
      {/* Movie Details */}
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-auto max-h-[500px] object-contain rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-yellow-400">⭐ {movie.rating}</p>
        <p className="mt-2">{movie.description}</p>
      </div>

      {/* Seat Type Selection */}
      <div className="mt-6">
        <label className="text-lg font-semibold mr-2">Seat Type:</label>
        <select
          className="p-2 border rounded text-black"
          value={seatType}
          onChange={(e) => setSeatType(e.target.value)}
        >
          <option value="VIP">VIP - ₹500</option>
          <option value="Regular">Regular - ₹300</option>
          <option value="Economy">Economy - ₹200</option>
        </select>
      </div>

      {/* Seat Layout */}
      <div className="grid grid-cols-5 gap-2 justify-center mt-4">
        {[...Array(25).keys()].map((num) => (
          <button
            key={num}
            className={`w-12 h-12 border rounded-lg text-white ${
              selectedSeats.includes(num) ? "bg-green-500" : "bg-gray-700"
            } hover:bg-green-300 transition`}
            onClick={() => toggleSeat(num)}
          >
            {num + 1}
          </button>
        ))}
      </div>

      {/* Total Price */}
      <h2 className="text-xl font-bold my-4">Total Price: ₹{totalPrice}</h2>

      {/* Confirm Booking Button */}
      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
