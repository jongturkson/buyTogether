import React, { useState, useEffect } from 'react';
import { getPurchaseGoals } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/Navbar/Navbar.jsx';

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const data = await getPurchaseGoals();
        setGroups(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between shadow-md">
        <button className="text-gray-600" onClick={() => navigate(-1)}> {/* Changed this line */}
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
        <h1 className="text-xl font-semibold text-gray-800">Group List</h1>
        <div></div>
      </header>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => navigate(`/group/${group.id}`)}
            >
              <h2 className="text-lg font-semibold text-gray-800">{group.title}</h2>
              <p className="text-gray-600">
                Target Amount: {group.target_amount}
              </p>
              <p className="text-gray-600">
                Amount per person: {group.amount_per_person}
              </p>
              <p className="text-gray-600">
                Status: {group.status}
              </p>
              <p className="text-gray-600">
                Number of participants: {group.number_of_participants}
              </p>
              <p className="text-gray-600">
                Created by: {group.created_by.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default GroupList;
