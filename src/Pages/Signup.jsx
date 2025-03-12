import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Add signup logic here
    console.log("Signed up with:", name, email, password);
    navigate("/login");
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-3 rounded bg-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 rounded bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 rounded bg-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-2 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
