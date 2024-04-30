import React from 'react';
import BigUserProfileCard from '../components/cards/Bigprofilecard';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  return (
    <div className="mx-4 overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex justify-center">
          <BigUserProfileCard
            profilePic="https://i.pravatar.cc/"
            username="John Doe"
            numPosts={15}
            numFollowers={500}
            vpost="posts"
            sfollow="followers"
            verified={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6 p-4 rounded-lg shadow-lg mx-4 my-4 border-t border-gray-300">
          <Line
            data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green'],
              datasets: [
                {
                  label: 'color',
                  data: [12, 19, 3, 5],
                  backgroundColor: 'rgba(236, 90, 123, 1)',
                  borderColor: 'rgba(236, 90, 123, 1)',
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false, // Remove x-axis grid lines
                  },
                  ticks: {
                      display: false, // Remove x-axis tick labels
                  }
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false, // Remove y-axis grid lines
                  },
                  ticks: {
                    display: false, // Remove y-axis tick labels
                  },
                },
              },
              plugins: {
                legend: {
                  display: false, // Remove the legend
                },
              },
            }}
            height={300}
          />
        </div>
        <div className="col-span-6 p-4 rounded-lg shadow-lg mx-4 my-4 border-t border-gray-300">
        <Line
            data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green'],
              datasets: [
                {
                  label: 'color',
                  data: [12, 19, 3, 5],
                  backgroundColor: 'rgba(236, 90, 123, 1)',
                  borderColor: 'rgba(236, 90, 123, 1)',
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false, // Remove x-axis grid lines
                  },
                  ticks: {
                      display: false, // Remove x-axis tick labels
                  }
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false, // Remove y-axis grid lines
                  },
                  ticks: {
                    display: false, // Remove y-axis tick labels
                  },
                },
              },
              plugins: {
                legend: {
                  display: false, // Remove the legend
                },
              },
            }}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;