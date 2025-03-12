import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "5bb4088bc91c5bd82f2a8071739d0a21"; // Replace with your API key
const API_URL = "https://api.themoviedb.org/3/movie/";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="text-center text-white">Loading...</h2>;
  }

  if (!movie) {
    return <h2 className="text-center text-red-500">Movie Not Found</h2>;
  }

  return (
    <div className="container mx-auto py-8 text-center text-white">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto max-h-[500px] object-contain rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-yellow-400 text-lg">⭐ {movie.vote_average.toFixed(1)}</p>
        <p className="mt-4 text-gray-300">{movie.overview}</p>

        {/* Booking Button */}
        <Link
          to={`/booking/${movie.id}`}
          className="mt-6 inline-block bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
