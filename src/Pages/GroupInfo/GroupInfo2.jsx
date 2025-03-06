import React from 'react';

const GroupDetailsPage = () => {
  // Dummy group data (replace with your actual data)
  const group = {
    image: 'path/to/group-image.jpg', // Add the image path here
    name: 'The White House',
    members: 500,
    target: 'Target',
    targetPrice: '699',
    announcements:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
    totalPrice: '100 000 XAF', // Assuming XAF is the currency
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 flex items-center justify-between shadow-md">
        <button className="text-gray-600">
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
        <div></div> {/* Placeholder for right side if needed */}
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center"> {/* Added flex container */}
              <img 
                src={group.image} 
                alt={group.name} 
                className="w-16 h-16 rounded-lg mr-4" 
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {group.name}
                </h2>
                <p className="text-gray-600">Members: {group.members}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Join
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Target: {group.target}
            </h3>
            <p className="text-gray-600">Price: {group.targetPrice}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Announcements
            </h3>
            <p className="text-gray-600">{group.announcements}</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              Total Price: {group.totalPrice} * {group.targetPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsPage;