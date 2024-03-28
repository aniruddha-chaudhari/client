import React from 'react';
import { Bell, Plus, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
      {/* Search Bar */}
      <div className="flex-grow mx-auto max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="bg-slate-200 text-black focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent w-full pl-10 pr-4 py-2 rounded-lg"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Notification, Plus Icon, and User Profile */}
      <div className="flex items-center space-x-12">
        {/* Wrap each icon with a div for better hover effect */}
        
        <div className="relative hover:bg-rose-50 p-2 rounded-md">
          <Bell />
          <span className="absolute top-2.5 right-3 transform translate-x-1/2 -translate-y-1/2">
            <div className="w-2.5 h-2.5 bg-rose-500 rounded-full"></div>
          </span>
        </div>
        
        <div className="ml-auto hover:bg-rose-50 p-2 rounded-md">
          <Plus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;