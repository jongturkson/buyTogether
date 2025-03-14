import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate();
  return (  
    <div
    className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(to bottom, #4CAF50 50%, #F3F4F6 50%)",
      }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">BUYTOGETHER</h1>
        <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Signup</h1>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter Your Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter Your Email</label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter Your Phone Number</label>
          <input
            type="tel"
            placeholder="+237 684..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter Your Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            Agree to{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Signup Button */}
        <button className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition duration-300 mb-4" onClick={() => navigate('/login')}>
          Signup
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center mb-6" onClick={() => navigate('/login')} >
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-sm text-gray-500">Or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Login with Facebook Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center mb-4">
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Facebook Logo"
            className="w-5 h-5 mr-2"
          />
          Login with Facebook
        </button>

        {/* Login with Google Button */}
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center">
          <img
            src="https://www.svgrepo.com/show/475647/google-color.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;