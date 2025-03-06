import React, { useState } from 'react';

const Navbar = () => {
  const [activePage, setActivePage] = useState('Home'); // Default active page

  // Function to handle button clicks
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // Helper function to determine if a page is active
  const isActive = (page) => activePage === page;

  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-2xl shadow-lg">
      <div className="flex justify-around items-center p-4">
        {/* Home Icon */}
        <button
          onClick={() => handlePageChange('Home')}
          className={`flex flex-col items-center transition duration-300 ${
            isActive('Home') ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>

        {/* Add Group Icon */}
        <button
          onClick={() => handlePageChange('Add Group')}
          className={`flex flex-col items-center transition duration-300 ${
            isActive('Add Group') ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="text-xs mt-1">Add Group</span>
        </button>

        {/* Services Icon */}
        <button
          onClick={() => handlePageChange('Services')}
          className={`flex flex-col items-center transition duration-300 ${
            isActive('Services') ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          <span className="text-xs mt-1">Services</span>
        </button>

        {/* Profile Icon */}
        <button
          onClick={() => handlePageChange('Profile')}
          className={`flex flex-col items-center transition duration-300 ${
            isActive('Profile') ? 'text-rose-500' : 'text-gray-600 hover:text-rose-500'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;