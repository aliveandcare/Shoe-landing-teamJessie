import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/HeaderStyleReusable.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [

    { href: '/', label: 'About' },
    { href: '/', label: 'Product' },
    { href: '/', label: 'Contact' },

  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={HeaderLogo} alt="ShoeStyle Logo" className="h-16 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/signin"
              className="text-teal-600 hover:text-teal-800 transition-colors duration-200 font-semibold"
            >
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
             <div className="pt-2 px-3">
                <Link
                  to="/signin"
                  className="bg-teal-600 text-white block w-full text-center px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign In
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

