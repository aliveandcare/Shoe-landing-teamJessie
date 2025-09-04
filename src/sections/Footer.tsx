import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">&copy; {currentYear} ShoeStyle. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
              Products
            </Link>
            <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
            <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
              Privacy
            </Link>
            <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

