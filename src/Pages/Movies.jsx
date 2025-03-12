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
  const [formats, setFormats] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const availableLanguages = ["Hindi", "English", "Tamil", "Telugu", "Malayalam"];
  const availableFormats = ["2D", "3D", "IMAX", "4DX"];

  useEffect(() => {
    fetch(`${GENRE_URL}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}?api_key=${API_KEY}&language=en-US&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results); // By default show all movies
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [currentPage]);

  const applyFilters = () => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter((movie) =>
        movie.genre_ids.includes(parseInt(selectedGenre))
      );
    }

    if (selectedLanguage) {
      filtered = filtered.filter((movie) => movie.original_language === selectedLanguage.toLowerCase());
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="w-full min-h-screen bg-white text-black px-6 pt-16 flex mb-16">
      {/* Sidebar Filter Section */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Language Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                className={`px-3 py-1 rounded-lg border ${
                  selectedLanguage === lang ? "bg-red-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Genre Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Genres</h3>
          <select
            className="w-full p-2 border rounded-lg"
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

        {/* Format Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Format</h3>
          <div className="flex flex-wrap gap-2">
            {availableFormats.map((format) => (
              <button
                key={format}
                className={`px-3 py-1 rounded-lg border ${
                  formats.includes(format) ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
                onClick={() =>
                  setFormats((prev) =>
                    prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
                  )
                }
              >
                {format}
              </button>
            ))}
          </div>
        </div>

        {/* Browse Movies Button */}
        <button
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg mt-4 hover:bg-red-600"
          onClick={applyFilters}
        >
          Browse Movies
        </button>
      </div>

      {/* Movie List Section */}
      <div className="w-3/4 px-6">
        <h1 className="text-3xl font-bold mt-10 mb-6 text-center">Now Showing</h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Movie Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-96 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
                  }}
                />
                <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
                <p className="text-yellow-500">⭐ {movie.vote_average.toFixed(1)}</p>
                <Link
                  to={`/movie/${movie.id}`}
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500 col-span-4">No movies found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          {[...Array(5).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => setCurrentPage(page + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page + 1 ? "bg-yellow-400 text-black" : "bg-gray-300 text-black"
              } hover:bg-yellow-500 transition`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
