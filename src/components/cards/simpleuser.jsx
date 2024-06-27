import React from 'react';

const Simpleuser = ({ profilePic, username }) => {
  return (
    <div className="flex items-center rounded-lg p-2 hover:shadow-md">
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="font-bold">{username}</h2>
        <div className="flex items-center mt-2">
        </div>
      </div>
    </div>
  );
};

export default Simpleuser;