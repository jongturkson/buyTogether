import React, { useState, useEffect } from 'react';
import Product from './product';
import Navbar from '../../assets/Navbar/Navbar.jsx';
import { getPurchaseGoals } from '../../api/api';

// Home Page Component
const HomePage = () => {
  const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports'];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getPurchaseGoals();
        setProducts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

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
          Ad Slider. Add your ads here
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
            key={product.id}
            image={product.product ? product.product.image : "https://placehold.co/300x300/"}
            name={product.product ? product.product.name : "No product"}
            price={product.target_amount}
            rating={4} // You might need to adjust how you get the rating
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
