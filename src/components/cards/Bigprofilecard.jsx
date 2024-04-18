import React, { useState, useRef, useEffect } from 'react';
import verifiedIcon from '../../assets/verified.svg';
import { ChevronDown } from 'lucide-react';

const BigUserProfileCard = ({ profilePic, username, numPosts, numFollowers, vpost, sfollow, verified }) => {
  const [expanded, setExpanded] = useState(false);
  const [accounts, setAccounts] = useState([
    { username: 'johndoe', profilePic: 'https://example.com/johndoe-profile.jpg' },
    { username: 'janedoe', profilePic: 'https://example.com/janedoe-profile.jpg' },
    { username: 'bobsmith', profilePic: 'https://example.com/bobsmith-profile.jpg' }
  ]);
  const [selectedAccount, setSelectedAccount] = useState(username);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account.username);
    setExpanded(false);
  };

  return (
    <div className="flex items-center rounded-lg p-4">
      <img src={profilePic} alt={`${selectedAccount}'s profile`} className="w-[150px] h-[150px] rounded-full object-cover mr-6" />
      <div>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">{selectedAccount}</h2>
          {verified && (
            <img src={verifiedIcon} alt="Verified" className="h-8 w-8 ml-2 mt-1" />
          )}
          <div
            ref={dropdownRef}
            className={`ml-16 flex-col bg-slate-200 rounded-md px-3 py-2 hover:bg-slate-300 ${expanded ? 'bg-slate-300' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            <ChevronDown className="size-4" />
            {expanded && (
              <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {accounts.map((account, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleAccountSelect(account)}
                    >
                      {account.username}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center mt-3">
          <span className="text-gray-800 mr-1 font-medium">{numPosts}</span>
          <span className="text-gray-800 mr-6">{vpost}</span>
          <span className="text-gray-800 mr-1 font-medium">{numFollowers}</span>
          <span className="text-gray-800 mr-6">{sfollow}</span>
        </div>
      </div>
    </div>
  );
};

export default BigUserProfileCard;