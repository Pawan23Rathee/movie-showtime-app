import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full bg-gray-100 h-[290px] pt-14">
      {/* White Box with Full Width */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full mt-0">
        <h2 className="text-2xl font-semibold text-black mb-4">Categories</h2>

        {/* Main Categories Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <Link to="/movies" className="text-black text-lg hover:text-blue-500 transition">
  🎬 Movies
</Link>
<Link to={`/stream/1`} className="text-black text-lg hover:text-blue-500 transition">
  📺 Stream
</Link>


          <Link to="/events" className="text-black text-lg hover:text-blue-500 transition">
            🎭 Events
          </Link>
          <Link to="/plays" className="text-black text-lg hover:text-blue-500 transition">
            🎭 Plays
          </Link>
          <Link to="/sports" className="text-black text-lg hover:text-blue-500 transition">
            ⚽ Sports
          </Link>
          <Link to="/activities" className="text-black text-lg hover:text-blue-500 transition">
            🎨 Activities
          </Link>
        </div>

        {/* Corporate Offers & Gift Cards */}
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-xl font-semibold text-black mb-3">More Options</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <Link to="/corporate-offers" className="text-black text-lg hover:text-blue-500 transition">
              💼 Corporate Offers
            </Link>
            <Link to="/gift-cards" className="text-black text-lg hover:text-blue-500 transition">
              🎁 Gift Cards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
