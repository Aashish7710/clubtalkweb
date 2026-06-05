import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">
          CampusNode
        </h1>

        {/* Nav Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>

          <Link to="/clubs" className="hover:text-orange-600">
            Clubs
          </Link>

          <Link to="/events" className="hover:text-orange-600">
            Events
          </Link>

          <Link to="/team" className="hover:text-orange-600">
            Team
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border rounded"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-orange-600 text-white rounded"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;