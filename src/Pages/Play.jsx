import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "5bb4088bc91c5bd82f2a8071739d0a21";
const API_URL = "https://api.themoviedb.org/3/movie";

const Play = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false); // Track whether to show video

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="text-center text-white text-xl">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-center text-white text-xl">Movie not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {showVideo ? (
        // 🎥 Show Video Player
        <div className="w-full max-w-4xl">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src={`https://example.com/stream/${id}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        // 📜 Show Movie Details First
        <div className="text-center w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          
          {/* 🖼️ Fixed Image Styling */}
          <div className="flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              className="w-full max-w-lg h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <p className="mt-4 text-lg text-gray-400">{movie.overview}</p>
          <p className="mt-2 text-yellow-400">⭐ {movie.vote_average.toFixed(1)}</p>

          {/* 🎬 Play Now Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Play Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Play;
