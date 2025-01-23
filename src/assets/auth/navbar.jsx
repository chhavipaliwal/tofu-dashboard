import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!loggedInUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div className="bg-[#151718] pt-2">
      <nav className="flex justify-between bg-[#d2d3d7] ml-4 mr-4 rounded-xl">
        <h1 className="text-5xl font-museo m-5">Tofu</h1>
        <ul className="flex gap-8 items-center">
          <Link to="/dashboard">Dashboard</Link>
          <li>Profile</li>
          <li>Settings</li>
          <li>Contact us</li>
        </ul>
        <ul className="flex gap-5 items-center">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="border rounded-xl px-5 py-1.5 bg-black text-white mr-4 hover:bg-gray-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="border rounded-xl px-5 py-1.5 border-gray-500 hover:bg-gray-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border rounded-xl px-5 py-1.5 bg-black text-white mr-4 hover:bg-gray-500"
              >
                Register
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
