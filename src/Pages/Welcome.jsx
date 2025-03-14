import React from 'react';
import { useNavigate } from 'react-router-dom';



// Placeholder images for logo and user profiles
const logo = 'src/Pages/logo.jpg'; // Replace with your logo URL
const user1 = 'src/Pages/user/user1.png'; // Replace with user profile image
const user2 = 'src/Pages/user/user1.png'; // Replace with user profile image
const user3 = 'src/Pages/user/user1.png'; // Replace with user profile image

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header with Logo */}
      <header className="flex items-center justify-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">BUYTOGETHER</h1>
        <img src={logo} alt="Logo" className="w-12 h-12 ml-4 rounded-full" />
      </header>

      {/* User Reviews */}
      <main className="w-full max-w-2xl space-y-6 mb-8">
        {/* Review 1 - Profile on the left */}
        <div className="flex items-start space-x-4">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user1}
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
          {/* Comment */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md relative">
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque."</p>
            <p className="text-sm text-gray-500 mt-2">- User 1</p>
            {/* Pop-up arrow */}
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
          </div>
        </div>

        {/* Review 2 - Profile on the right */}
        <div className="flex items-start space-x-4 flex-row-reverse">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user2}
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
          {/* Comment */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md relative">
            <p className="text-gray-600">"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."</p>
            <p className="text-sm text-gray-500 mt-2">- User 2</p>
            {/* Pop-up arrow */}
            <div className="absolute -right-2 top-4 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
          </div>
        </div>

        {/* Review 3 - Profile on the left */}
        <div className="flex items-start space-x-4">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user3}
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
          {/* Comment */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md relative">
            <p className="text-gray-600">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
            <p className="text-sm text-gray-500 mt-2">- User 3</p>
            {/* Pop-up arrow */}
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Buy Together</h2>
        <p className="text-gray-600 mb-6">
          It is a collaborative shopping platform that brings people together to pool their capital in India, purchases and divided. Steplish cards. Register today and get the up to says reduction on single products.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition duration-300" onClick={() => navigate('/register')}>
            Register
          </button>
          <button className="bg-rose-400 text-white px-6 py-2 rounded-lg hover:bg-rose-500 transition duration-300" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </section>
    </div>
  );
};

export default Welcome;