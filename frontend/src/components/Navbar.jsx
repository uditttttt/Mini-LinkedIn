import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout, user }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Mini-LinkedIn
            </Link>
          </div>
          <div className="flex items-baseline space-x-4">
            {isAuthenticated ? (
              <>
                {/* --- ADD THIS NEW LINK --- */}
                <Link to="/" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to={`/profile/${user?._id}`} className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link to="/register" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;