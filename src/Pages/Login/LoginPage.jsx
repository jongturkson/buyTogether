import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setError(null);
    try {
      const data = await loginUser({ email, password });
      console.log('Login successful:', data);
      navigate('/home');
    } catch (err) {
      setError(err.message);
      console.error('Login failed:', err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(to bottom, #4CAF50 50%, #F3F4F6 50%)",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* App Name */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          BUYTOGETHER
        </h1>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Sign in to your Account
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Log In Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4" onClick={handleLogin}>
          Log In
        </button>

        {/* Register Link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don't have an account?{' '}
          <button className="text-blue-500 hover:underline" onClick={() => navigate('/register')}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
