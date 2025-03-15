import React from "react";

const GiftCards = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">🎁 Gift Cards</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Give the perfect gift with our exclusive gift cards. A thoughtful way to surprise your loved ones!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Digital Gift Cards</h3>
            <p className="text-gray-600 mt-2">Send instant e-gift cards via email.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Physical Gift Cards</h3>
            <p className="text-gray-600 mt-2">Beautifully designed cards delivered to your doorstep.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Custom Amount</h3>
            <p className="text-gray-600 mt-2">Choose an amount that suits your budget.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Redeem Anytime</h3>
            <p className="text-gray-600 mt-2">Gift cards never expire and can be used anytime.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Buy a Gift Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
