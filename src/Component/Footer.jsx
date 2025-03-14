import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 border-b border-gray-700 text-center md:text-left">
        <button className="bg-red-500 px-4 py-2 rounded text-white mb-2 md:mb-0">Contact today!</button>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <p className="mb-1 md:mb-0">24/7 Customer Care</p>
          <p className="mb-1 md:mb-0">Resend Booking Confirmation</p>
          <p>Subscribe to the Newsletter</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-6 md:px-10 py-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold mb-2">Movies Now Showing</h3>
          <p>Chhaava | Crazyx | Mickey 17 | Mere Husband Ki Biwi</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Upcoming Movies</h3>
          <p>Ghamghat | Dexter | SBM 1: The Past</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Movies By Genre</h3>
          <p>Action | Thriller | Comedy | Sci-Fi</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Movies By Language</h3>
          <p>Hindi | English | Tamil | Telugu</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Movies By Format</h3>
          <p>2D | 3D | IMAX | 4DX</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-2 md:mb-0">
          <h3 className="font-semibold">Help</h3>
          <p>About Us | Contact | Terms & Conditions</p>
        </div>
        <div className="mb-2 md:mb-0">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>
        <p className="text-gray-400">&copy; 2025 Bigtree Entertainment Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
