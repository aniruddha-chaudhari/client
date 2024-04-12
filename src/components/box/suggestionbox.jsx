import React from 'react';
import Simpleuser from '../cards/simpleuser';

const Suggestionbox = () => {
  const suggestedConnections = [
    {
      avatar: 'https://i.pravatar.cc/300',
      username: 'Jane Smith',
      bio: 'Designer',
    },
    {
      avatar: 'https://i.pravatar.cc/300',
      username: 'Bob Johnson',
      bio: 'Marketing Manager',
    },
    {
      avatar: 'https://i.pravatar.cc/300',
      username: 'Sarah Lee',
      bio: 'Entrepreneur',
    },
    {
      avatar: 'https://i.pravatar.cc/300',
      username: 'Jane Smith',
      bio: 'Designer',
    },
    {
      avatar: 'https://i.pravatar.cc/300',
      username: 'Bob Johnson',
      bio: 'Marketing Manager',
    },
    {
      avatar: 'https://i.pravatar.cc/300',
      username: 'Sarah Lee',
      bio: 'Entrepreneur',
    },
  ];

  return (
    <div>
      <div className="space-y-4">
        {suggestedConnections.map((connection, index) => (
          <Simpleuser
            key={index}
            profilePic={connection.avatar}
            username={connection.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestionbox;