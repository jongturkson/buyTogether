import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Ensure correct image paths
const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

const user1 = "/images/user.png";
const user2 = "/images/user.png";
const user3 = "/images/user.png";
const user4 = "/images/user.png";


const LandingPage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-75 text-white flex justify-between items-center p-4 z-50">
        <h1 className="text-2xl font-bold">BUYTOGETHER</h1>
        <nav className="space-x-6">
          <button onClick={() => navigate('/')} className="hover:text-gray-400">Home</button>
          <button onClick={() => navigate('/about')} className="hover:text-gray-400">About</button>
          <button onClick={() => navigate('/services')} className="hover:text-gray-400">Services</button>
          <button onClick={() => navigate('/login')} className="hover:text-gray-400">Login</button>
          <button onClick={() => navigate('/register')} className="hover:text-gray-400">Register</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative w-full h-screen flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl p-6">
          <h2 
            className="text-6xl font-extrabold mb-4 text-white" 
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)' }}
          >
            Buy Together
          </h2>
          <p 
            className="text-xl font-medium mb-6 text-white" 
            style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}
          >
            A collaborative shopping platform that brings people together to pool their capital for bulk purchases and shared shipping costs, making quality products more affordable.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              className="bg-rose-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-600 transition duration-300"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
            <button 
              className="bg-rose-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-500 transition duration-300"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="w-full max-w-2xl mx-auto py-12 space-y-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Users review</h3>
        {[{user: user1, text: "This platform helped me save a lot on my purchases!", name: "John Paul"},
          {user: user2, text: "Coordinating bulk purchases has never been easier.", name: "Tong John"},
          {user: user3, text: "Great deals and fast delivery. Highly recommend!", name: "Jong Turkson"},
          {user: user4, text: "A must-have for smart shoppers!", name: "Ekema Rodrigue"}].map((review, index) => (
          <div key={index} className={`flex items-start gap-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="flex-shrink-0">
              <img src={review.user} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md relative">
              <p className="text-gray-600">"{review.text}"</p>
              <p className="text-sm text-gray-500 mt-2">- {review.name}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Sponsors Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Our Sponsors</h3>
        <div className="flex justify-center space-x-6">
          <div className="w-24 h-12 bg-gray-300">
            <img src="https://techchantier.com/frontend/assets/img/logos/logo-square-teal-bg.png" alt="Tech Chantier" className="w-full h-full" />
          </div>
          <div className="w-24 h-12 bg-gray-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkurZbVlLohJaG_zjNGlcmjH2iYaMM4OT-mn2UZ2my4fnmN53L9jh5A02w7Tyv_UwGEDk&usqp=CAU" alt="Buyam" className="w-full h-full" />
          </div>
          <div className="w-24 h-12 bg-gray-300">
            <img src="https://media.licdn.com/dms/image/v2/C560BAQEwSK6sMcXVgg/company-logo_200_200/company-logo_200_200/0/1630576582415/afrovisiongroup_logo?e=2147483647&v=beta&t=a7BGKB-5T9-_J6J6LP4HN7aTDM8RBMqa6-sD3YT5TGo" alt="Afrovision" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center mt-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold">About Us</h4>
            <p>Learn more about Buy Together.</p>
          </div>
          <div>
            <h4 className="font-bold">FAQs</h4>
            <p>Find answers to common questions.</p>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <p>Get in touch with us.</p>
          </div>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Buy Together. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
