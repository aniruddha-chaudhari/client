import React from 'react';

const UserProfileCard = ({ profilePic, username, numPosts, numFollowers,vpost,sfollow }) => {
  return (
    <div className="flex items-center rounded-lg p-2">
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="text-xl font-bold">{username}</h2>
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">{numPosts} {vpost}</span>
        <span className="text-gray-600">{numFollowers} {sfollow}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;