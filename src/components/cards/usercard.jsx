import React from 'react';
import verifiedIcon from '../../assets/verified.svg'; // Import the SVG file

const UserProfileCard = ({ profilePic, username, numPosts, numFollowers, vpost, sfollow, verified }) => {
  return (
    <div className="flex items-center rounded-lg p-2 hover:shadow-md">
      <img
        src={profilePic}
        alt={`${username}'s profile`}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <div className='flex items-center'>
        <h2 className="text-xl font-bold">{username}</h2>
        {verified && (
            <img src={verifiedIcon} alt="Verified" className="h-7 w-7 ml-1 mt-1" /> // Use <img> tag for SVG
          )}
          </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">{numPosts} {vpost}</span>
          <span className="text-gray-600">{numFollowers} {sfollow}</span>     
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
