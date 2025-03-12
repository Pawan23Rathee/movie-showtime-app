import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "YOUR_API_KEY"; // Replace with your Ticketmaster API Key
const API_URL = "https://app.ticketmaster.com/discovery/v2/events";

const EventBooking = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}.json?apikey=${API_KEY}`);

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const data = await response.json();
        setEvent(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="text-center text-black text-xl">Loading...</div>;
  }

  if (!event) {
    return <div className="text-center text-red-500 text-xl">Event not found</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-black p-4">
      <h1 className="text-3xl font-bold mb-4">{event.name || "No Title Available"}</h1>
      <img
        src={event.images?.[0]?.url || "https://via.placeholder.com/500"}
        alt={event.name}
        className="w-full max-w-2xl h-96 object-cover rounded-lg shadow-lg"
      />

      <p className="mt-4 text-lg text-gray-700">{event.info || "No description available"}</p>
      <p className="text-gray-600">
        {event.dates?.start?.localDate || "No Date"} | {event._embedded?.venues?.[0]?.name || "No Location"}
      </p>
      <p className="text-green-600 font-bold">
        Price: ₹{event.priceRanges?.[0]?.min || "N/A"}
      </p>

      {/* Booking Form */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <label className="text-lg font-medium">Select Seats:</label>
        <input
          type="number"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="border p-2 w-16 ml-2"
          min="1"
        />
        <p className="mt-2 text-lg font-semibold">
          Total Price: ₹{seats * (event.priceRanges?.[0]?.min || 0)}
        </p>

        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default EventBooking;
