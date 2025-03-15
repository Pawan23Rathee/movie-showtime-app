import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full bg-white pt-14 mt-10 flex justify-center">
      {/* White Box with Full Width */}
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 max-w-5xl">
        <h2 className="text-2xl font-semibold text-black mb-6 text-center">Categories</h2>

        {/* Main Categories Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 text-center">
          <Link to="/movies" className="w-full flex justify-center items-center text-black text-lg hover:text-blue-500 transition">
            🎬 Movies
          </Link>
          <Link to="/stream/1" className="w-full flex justify-center items-center text-black text-lg hover:text-blue-500 transition">
            📺 Stream
          </Link>
          <Link to="/events" className="w-full flex justify-center items-center text-black text-lg hover:text-blue-500 transition">
            🎭 Events
          </Link>
          <Link to="/sports" className="w-full flex justify-center items-center text-black text-lg hover:text-blue-500 transition">
            ⚽ Sports
          </Link>
        </div>

        {/* More Options Section */}
        <div className="border-t border-gray-300 pt-6">
          <h3 className="text-xl font-semibold text-black mb-4 text-center">More Options</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <Link to="/corporate-offers" className="w-full flex justify-center items-center text-black text-lg hover:text-blue-500 transition">
              💼 Corporate Offers
            </Link>
            <Link to="/gift-cards" className="w-full flex justify-center items-center text-black text-lg hover:text-blue-500 transition">
              🎁 Gift Cards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
