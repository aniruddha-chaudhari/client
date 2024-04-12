import React from 'react';
import UserProfileCard from '../components/cards/usercard';
import CountCard from '../components/cards/countcard';
import Tipsbox from '../components/box/Tipsbox';
import Suggestionbox from '../components/box/suggestionbox';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mx-4 mt-4 bg-zinc-50 flex w-[calc(100%-16px)] h-full">
        <div className="rounded-lg shadow-md bg-white w-[330px] h-[340px] overflow-y-auto mx-2">
          <div className="flex items-center mx-2">
            <div className="bg-rose-500 w-4 h-6 pt-6 rounded-sm" />
            <h1 className="text-2xl font-bold">Your Profiles</h1>
          </div>
          <div className="space-y-4 p-4">
            <UserProfileCard
              profilePic={'https://i.pravatar.cc/300'}
              username="John Doe"
              numPosts={10}
              numFollowers={100}
              vpost="Posts"
              sfollow="Followers"
            />
            <UserProfileCard
              profilePic={'https://i.pravatar.cc/300'}
              username="John Doe"
              numPosts={10}
              numFollowers={100}
              vpost="Posts"
              sfollow="Followers"
            />
            <UserProfileCard
              profilePic={'https://i.pravatar.cc/300'}
              username="John Doe"
              numPosts={10}
              numFollowers={100}
              vpost="Posts"
              sfollow="Followers"
            />
          </div>
        </div>
        <div className="flex-1 rounded-lg shadow-md bg-white overflow-y-auto">
          <div className="flex items-center mx-2 space-x-2 mt-2">
            <div className="bg-cyan-300 w-4 h-6 pt-6 rounded-sm" />
            <h1 className="text-2xl font-bold">Overview</h1>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex space-x-4">
              <CountCard
                platform="youtube"
                count={12345}
                change={-500}
                changePercentage={-4.0}
                title="Likes"
              />
              <CountCard
                platform="youtube"
                count={12345}
                change={1000}
                changePercentage={10.0}
                title="Views"
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <Tipsbox />
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-white w-[300px] overflow-y-auto mx-2">
          <div className="flex items-center mx-2 space-x-2 mt-2">
            <div className="bg-teal-200 w-4 h-2 pt-6 rounded-sm" />
            <h1 className="text-lg font-bold">Suggested Connections</h1>
          </div>
          <div className="space-y-4 p-4">
            <Suggestionbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;