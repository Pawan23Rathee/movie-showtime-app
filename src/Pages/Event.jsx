import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "gq0blLJ2umasWmcvoJ806BQcLlA5lFpD"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`);
        const result = await response.json();

        if (result._embedded && result._embedded.events) {
          setData(result._embedded.events);
        } else {
          setData([]); // No events found
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (data.length === 0) return <div>No events found.</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center capitalize mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
            <img 
              src={item.images && item.images.length > 0 ? item.images[0].url : "https://via.placeholder.com/300"} 
              alt={item.name} 
              className="w-full h-40 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.dates?.start?.localDate || "No date available"}</p>
            <p className="text-gray-600">{item._embedded?.venues[0]?.name || "Unknown Venue"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
