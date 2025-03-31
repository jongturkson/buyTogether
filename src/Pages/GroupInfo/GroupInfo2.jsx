import React, { useState, useEffect } from 'react';
import { getPurchaseGoal, joinPurchaseGoal } from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../assets/Navbar/Navbar.jsx';

const GroupInfo2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success'); // 'success' or 'error'

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const data = await getPurchaseGoal(id);
        setGroup(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [id]);

  const handleJoin = async () => {
    try {
      await joinPurchaseGoal(id);
      setModalMessage('You have joined the purchase goal successfully!');
      setModalType('success');
      setIsModalOpen(true);
      // Refresh the group data
      const data = await getPurchaseGoal(id);
      setGroup(data.data);
    } catch (err) {
      setModalMessage(`Error joining purchase goal: ${err.message}`);
      setModalType('error');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage(''); // Clear the message when closing
    setModalType('success');
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!group) {
    return <div className="text-center">Group not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Modal for Success/Error */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className={`text-lg font-semibold ${modalType === 'success' ? 'text-green-600' : 'text-red-600'} mb-4`}>
              {modalType === 'success' ? 'Success!' : 'Error!'}
            </h3>
            <p className="mb-4">{modalMessage}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <header className="bg-white p-4 flex items-center justify-between shadow-md">
        <button className="text-gray-600" onClick={() => navigate(-1)}>
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
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Group Details</h1>
        <div></div>
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              {group.product && (
                <img
                  src={group.product.image}
                  alt={group.product.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
              )}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {group.title}
                </h2>
                <p className="text-gray-600">
                  Members: {group.number_of_participants}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleJoin}>
                Join
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Target: {group.product ? group.product.name : "No product"}
            </h3>
            <p className="text-gray-600">
              Price: {group.target_amount}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Description
            </h3>
            <p className="text-gray-600">{group.description}</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              Total Price: {group.target_amount}
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default GroupInfo2;
