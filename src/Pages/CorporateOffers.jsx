import React from "react";

const CorporateOffers = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">💼 Corporate Offers</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Unlock exclusive corporate deals and discounts for your company. Elevate your business experience with special offers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Bulk Booking Discounts</h3>
            <p className="text-gray-600 mt-2">Get amazing discounts on bulk ticket purchases.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Custom Event Packages</h3>
            <p className="text-gray-600 mt-2">Tailor-made event solutions for your corporate needs.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Employee Benefits</h3>
            <p className="text-gray-600 mt-2">Exclusive deals for your employees on entertainment and activities.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Corporate Gifting</h3>
            <p className="text-gray-600 mt-2">Gift memorable experiences to your clients and employees.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Contact Us for Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorporateOffers;
