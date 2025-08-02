import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout, user }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Mini-LinkedIn
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-baseline space-x-4">
            {isAuthenticated ? (
              <>
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

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to={`/profile/${user?._id}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">My Profile</Link>
                {/* --- This button's style has been changed --- */}
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full text-left text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// SVG Icons
const HamburgerIcon = () => (
  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const CloseIcon = () => (
  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Navbar;