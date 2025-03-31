import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/Navbar/Navbar.jsx';

// Product Component (Reused for Recommended Products)
const Product = ({ image, name, price, rating }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <div className="flex items-center mt-1">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

// Product Detail Page Component
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const productImages = [
    'https://cms-imgp.jw-cdn.org/img/p/502019187/univ/art/502019187_univ_lss_lg.jpg',
    'https://cms-imgp.jw-cdn.org/img/p/502000295/univ/art/502000295_univ_lss_lg.jpg',
    'https://i.ebayimg.com/images/g/9PgAAOSwNHphOEue/s-l960.webp',
  ];

  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Great product, highly recommended!' },
    { name: 'Jane Smith', rating: 4, comment: 'Good quality, but a bit pricey.' },
  ];

  const recommendedProducts = [
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

  // Automatic Slider Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % productImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [productImages.length]);

  // Manual Navigation Functions
  const goToPreviousImage = () => {
    setActiveImage((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setActiveImage((prev) => (prev + 1) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Image Slider */}
      <div className="relative mb-6">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          >
            {productImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPreviousImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition duration-300"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition duration-300"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots for Image Slider */}
        <div className="flex justify-center mt-2">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === activeImage ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Name</h1>
        <p className="text-gray-600 text-lg mb-2">$29.99</p>
        <p className="text-rose-500 font-semibold text-xl">Bulk Price: $24.99 (Save 20%)</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
          BUY
        </button>
        <button className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition duration-300" onClick={() => navigate('/create-group')}>
          Create Group
        </button>
      </div>

      {/* Customer Reviews */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{review.name}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Recommended Products */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {recommendedProducts.map((product, index) => (
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
      <Navbar />
    </div>
  );
};

export default ProductDetailPage;