import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "5bb4088bc91c5bd82f2a8071739d0a21";
const API_URL = "https://api.themoviedb.org/3/movie/popular";
const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const availableLanguages = ["hi", "en", "ta", "te", "ml"];

  useEffect(() => {
    fetch(`${GENRE_URL}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}?api_key=${API_KEY}&language=en-US&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [currentPage]);

  const filteredMovies = movies.filter((movie) => {
    return (
      (!selectedGenre || movie.genre_ids.includes(parseInt(selectedGenre))) &&
      (!selectedLanguage || movie.original_language === selectedLanguage) &&
      (!searchQuery || movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="w-full min-h-screen bg-gray-50 text-black px-6 pt-16 flex flex-col items-center mb-6">
      <h1 className="text-4xl font-extrabold mt-10 mb-6 text-center text-red-600">Now Showing</h1>

      <div className="w-full max-w-3xl flex items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="w-full max-w-4xl bg-white p-6 rounded-lg mb-6 shadow-lg border border-gray-300 backdrop-blur-md">
  <h2 className="text-2xl font-bold mb-4 text-gray-900">🎬 Advanced Filters</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    {/* Language Filter */}
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-700">🌍 Languages</h3>
      <div className="flex flex-wrap gap-2">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 font-medium shadow-md ${
              selectedLanguage === lang
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>

    {/* Genre Filter */}
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-700">🎭 Genres</h3>
      <select
        className="w-full p-3 border rounded-lg bg-gray-200 focus:ring-2 focus:ring-red-400 shadow-sm hover:bg-gray-300 transition-all"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>

    {/* Reset Filters Button */}
    <div className="flex items-end">
      <button
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
        onClick={() => {
          setSelectedGenre("");
          setSelectedLanguage("");
        }}
      >
        🔄 Reset Filters
      </button>
    </div>
  </div>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-96 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
                }}
              />
              <h2 className="text-xl font-semibold mt-3 text-gray-800">{movie.title}</h2>
              <p className="text-yellow-500 font-bold">⭐ {movie.vote_average.toFixed(1)}</p>
              <Link
                to={`/movie/${movie.id}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
              >
                View Details
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

export default Movies;
