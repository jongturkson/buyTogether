import React from 'react';

const ProfilePictureAndName = ({ imageUrl, name, location, onClick }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <img
        src={imageUrl}
        alt="Profile"
        className="w-16 h-16 rounded-full mr-4 object-cover"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default ProfilePictureAndName;