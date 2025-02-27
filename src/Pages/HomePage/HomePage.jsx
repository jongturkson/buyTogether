import React from 'react';
import Product from './product';
// Home Page Component
const HomePage = () => {
  const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports'];
  const products = [
    {
      image: 'https://via.placeholder.com/200',
      name: 'Product 1',
      price: 29.99,
      rating: 4,
    },
    {
      image: 'https://via.placeholder.com/200',
      name: 'Product 2',
      price: 49.99,
      rating: 5,
    },
    {
      image: 'https://via.placeholder.com/200',
      name: 'Product 3',
      price: 19.99,
      rating: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        {/* Sandwich Icon */}
        <button className="text-gray-700">
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

        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </header>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Slider for Ads */}
      <div className="mb-6">
        <div className="bg-blue-500 h-40 rounded-lg flex items-center justify-center text-white text-xl">
          Ad Slider
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;