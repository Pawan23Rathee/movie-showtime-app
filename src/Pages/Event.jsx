import React, { useEffect, useState } from "react";

const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "6zOme9pAX88BucBmGQcYHWGhJH6sOmB4";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&countryCode=IN`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        if (data._embedded?.events) {
          setEvents(data._embedded.events);
        } else {
          setEvents([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl">🔄 Loading Events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl min-h-screen bg-gray-900 flex justify-center items-center">
        ❌ Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎟️ Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={event.images?.[0]?.url || "https://via.placeholder.com/500"}
                alt={event.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-3">{event.name}</h2>
              <p className="text-gray-400">
                📅 {new Date(event.dates.start.localDate).toLocaleDateString()} at{" "}
                {event.dates.start.localTime}
              </p>
              <p className="text-gray-500">
                📍 {event._embedded?.venues?.[0]?.name || "Location not available"}
              </p>
              <p className="text-green-500 font-bold">
                💲 {event.priceRanges?.[0]?.min || "Price not available"}
              </p>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                🎟️ Book Now
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-3">🚫 No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Event;
