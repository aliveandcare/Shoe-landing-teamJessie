import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-expect-error: Vite's import.meta.env may not have VERCEL type, but it's injected at build time on Vercel
const isVercel = import.meta.env.VERCEL === '1' || import.meta.env.VERCEL === true;
import Button from '../components/reusable/Button';
import logo from '../assets/HeaderStyleReusable.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <img src={logo} alt="ShoeStyle Logo" className="h-16 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              isVercel ? (
                <span
                  key={link.href}
                  className="text-gray-400 cursor-not-allowed transition-colors duration-200 font-medium"
                  aria-disabled="true"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button
              text="Sign In"
              onClick={() => { /* Handle Sign In */ }}
              className="px-6 py-2"
            />
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
              isVercel ? (
                <span
                  key={link.href}
                  className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium cursor-not-allowed"
                  aria-disabled="true"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </Link>
              )
            ))}
             <div className="pt-2 px-3">
                <Button
                text="Sign In"
                onClick={() => { /* Handle Sign In */ }}
                className="w-full"
                />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

