import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/api';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); // Add this line
  const [address, setAddress] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setError(null);
    try {
      const userData = {
        name: fullName,
        email,
        phone_number: phoneNumber,
        password,
        password_confirmation: passwordConfirmation, // Add this line
        address,
        profile_pic: profilePic,
      };
      await registerUser(userData);
      console.log('Registration successful:');
      navigate('/login');
    } catch (err) {
      setError(err.message);
      console.error('Registration failed:', err);
    }
  };
  const handleFileChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(to bottom, #4CAF50 50%, #F3F4F6 50%)",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          BUYTOGETHER
        </h1>
        <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Signup
        </h1>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Phone Number
          </label>
          <input
            type="tel"
            placeholder="+237 684..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {/* Address Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Address
          </label>
          <input
            type="text"
            placeholder="my Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* profile picture Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your profile picture
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFileChange}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Password Confirmation Input */}
        <div className="mb-6"> {/* Add this section */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Your Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Signup Button */}
        <button
          className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition duration-300 mb-4"
          onClick={handleRegister}
        >
          Signup
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-600 text-center mb-6">
          Already have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
