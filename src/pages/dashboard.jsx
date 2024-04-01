// Dashboard.jsx
import React from 'react';
import UserProfileCard from '../components/cards/usercard';
import CountCard from '../components/cards/countcard';
import Tipsbox from '../components/box/Tipsbox';

const Dashboard = () => {
  return (
    <div className='mx-8 mb-8 mt-4 grid grid-cols-12 space-x-3 bg-zinc-100'>
      <div className=' col-span-3 h-min-[300px] rounded-lg shadow-md bg-white'>
        <div className='flex items-center mx-2 space-x-2 mt-2'>
          <div className='bg-rose-500 w-4 h-6 pt-6 rounded-sm' />
          <h1 className='text-2xl font-bold'>
            Your Profiles
          </h1>
        </div>
        <UserProfileCard
          profilePic={'https://i.pravatar.cc/300'}
          username='John Doe'
          numPosts={10}
          numFollowers={100}
          vpost='Posts'
          sfollow='Followers'
        />
        <UserProfileCard
          profilePic={'https://i.pravatar.cc/300'}
          username='John Doe'
          numPosts={10}
          numFollowers={100}
          vpost='Posts'
          sfollow='Followers'
        />
        <UserProfileCard
          profilePic={'https://i.pravatar.cc/300'}
          username='John Doe'
          numPosts={10}
          numFollowers={100}
          vpost='Posts'
          sfollow='Followers'
        />
      </div>
      <div className=' col-span-6 border-2 h-min-[300px] rounded-lg shadow-md bg-white'>
        <div className='flex items-center mx-2 space-x-2 mt-2'>
          <div className='bg-cyan-300 w-4 h-6 pt-6 rounded-sm' />
          <h1 className='text-2xl font-bold'>
            Overview
          </h1>
        </div>
        <div className='flex flex-row'>
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
        <div flex-grow>
          <Tipsbox />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;