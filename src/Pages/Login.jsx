import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { auth, googleProvider, facebookProvider } from "../firebaseConfig";

import { signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (formData.email && formData.password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter email and password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Google Login Failed:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Facebook Login Failed:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {user ? (
          <div className="text-center">
            <img src={user.photoURL} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800">Welcome, {user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button onClick={handleLogout} className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">{isSignup ? "Sign Up" : "Login"}</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                placeholder="Enter your password"
              />
            </div>

            <button onClick={handleLogin} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              {isSignup ? "Sign Up" : "Login"}
            </button>

            <div className="flex justify-center mt-4 space-x-4">
              {/* Google Login Button */}
              <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full bg-white border border-gray-300 text-black rounded-lg px-4 py-2 hover:bg-gray-100 transition">
                <FcGoogle className="text-2xl mr-2" /> Sign in with Google
              </button>

              {/* Facebook Login Button */}
              <button onClick={handleFacebookLogin} className="flex items-center justify-center w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition">
                <FaFacebook className="text-2xl mr-2" /> Sign in with Facebook
              </button>
            </div>

            <p className="text-center mt-4">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <button onClick={() => setIsSignup(!isSignup)} className="text-blue-500 underline ml-1">
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
