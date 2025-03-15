import React from 'react';
import Navbar from '../../assets/Navbar/Navbar.jsx';
import { useNavigate } from 'react-router-dom';

const GroupListPage = () => {
  const navigate = useNavigate();
  // Dummy group data (replace with your actual data)
  const groups = [
    { id: 1, name: 'coco', price: 500, image: 'path/to/profile1.jpg' },
    { id: 2, name: 'Hiuse', price: 500, image: 'path/to/profile2.jpg' },
    { id: 3, name: 'Computer', price: 700, image: 'path/to/profile3.jpg' },
    { id: 4, name: 'kiren uosym', price: 3000, image: 'path/to/profile4.jpg' },
    { id: 5, name: 'Computer', price: 700, image: 'path/to/profile3.jpg' },
    { id: 6, name: 'kiren uosym', price: 3000, image: 'path/to/profile4.jpg' },
    { id: 7, name: 'Computer', price: 700, image: 'path/to/profile3.jpg' },
    { id: 8, name: 'kiren uosym', price: 3000, image: 'path/to/profile4.jpg' },
    // ... more groups
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between shadow-md">
        <button className="text-gray-600">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Groups</h1>
        <img
          src="path/to/user-profile.jpg"  // Replace with actual user profile image path
          alt="User Profile"
          className="w-8 h-8 rounded-full"
        />
      </header>

      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300 pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-3 rounded-lg flex items-center justify-between shadow-sm"
              onClick={() => navigate('/group-info-')}
            >
              <div className="flex items-center">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-gray-800">{group.name}</span>
              </div>
              <span className="text-gray-600">{group.price}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-4 right-4 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600" onClick={() => navigate('/create-group')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <Navbar />
      </div>
    </div>
  );
};

export default GroupListPage;