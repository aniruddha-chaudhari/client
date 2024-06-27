import React from 'react';
import { Twitter, Instagram, Youtube, ChevronsUp, ChevronsDown } from 'lucide-react';

const CountCard = ({ platform, count, change, changePercentage, title }) => {
  const getIcon = () => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={24} className="text-blue-500" />;
      case 'instagram':
        return <Instagram size={24} className="text-pink-500" />;
      case 'youtube':
        return <Youtube size={24} className="text-red-600" />;
      default:
        return null;
    }
  };

  const isPositiveChange = change >= 0;
  const arrowColor = isPositiveChange ? 'text-green-500' : 'text-red-500';
  const changeBackgroundColor = isPositiveChange ? 'bg-green-100' : 'bg-red-100';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-2 mx-2 w-1/2 h-[120px] relative ">
      <div className="flex items-center mb-2">
        {getIcon()}
        <span className="ml-2 text-gray-600 uppercase font-bold">{title}</span>
      </div>
      <div className="flex flex-row justify-center">
        <div className="text-3xl font-bold">{count}</div>
      </div>
      <div className={`absolute top-2 right-2 flex items-center ${changeBackgroundColor} px-2 py-1 rounded-lg`}>
        {isPositiveChange ? (
          <ChevronsUp size={16} className={arrowColor} />
        ) : (
          <ChevronsDown size={16} className={arrowColor} />
        )}
        <span className={`${arrowColor} text-sm`}>{changePercentage}%</span>
      </div>
    </div>
  );
};

export default CountCard;