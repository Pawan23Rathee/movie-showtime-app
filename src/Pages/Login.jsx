import React, { useState } from "react";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="container mx-auto py-12 flex justify-center pt-20"> {/* Added pt-20 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isAdmin ? "Admin Login" : "User Login"}
        </h2>

        <input
          type="text"
          placeholder="Enter Email"
          className="w-full p-2 rounded text-black mb-4"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 rounded text-black mb-4"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          {isAdmin ? "Login as Admin" : "Login"}
        </button>

        {/* Toggle Between User & Admin Login */}
        <p className="text-center mt-4">
          {isAdmin ? (
            <button onClick={() => setIsAdmin(false)} className="text-yellow-400">
              Switch to User Login
            </button>
          ) : (
            <button onClick={() => setIsAdmin(true)} className="text-yellow-400">
              Admin Login
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
