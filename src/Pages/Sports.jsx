import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sports = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328`
        );
        const result = await response.json();
        console.log("API Response:", result); // Debugging ke liye

        if (result.events) {
          setData(result.events);
        } else {
          setData([]); // Agar data nahi mila toh empty array set karo
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

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center capitalize mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.idEvent} className="bg-white shadow-lg rounded-lg p-4">
              <img src={item.strThumb || "https://via.placeholder.com/300"} alt={item.strEvent} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{item.strEvent}</h3>
              <p className="text-gray-600">{item.strLeague}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Sports;
