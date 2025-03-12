import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "5bb4088bc91c5bd82f2a8071739d0a21";
const API_URL = "https://api.themoviedb.org/3/movie/popular";

const Stream = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black px-6 pt-16">
      <h1 className="text-3xl font-bold mt-10 mb-6 text-center">Now Showing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
              <p className="text-yellow-500">⭐ {movie.vote_average.toFixed(1)}</p>

              {/* Watch Button - Corrected Route */}
              <Link
                to={`/play/${movie.id}`} 
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Watch
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-4">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Stream;
