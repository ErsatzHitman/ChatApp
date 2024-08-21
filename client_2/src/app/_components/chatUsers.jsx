import React, { useEffect, useState } from 'react';
import { useUsersStore } from '../zustand/useUsersStore';
import { useAuthStore } from '../zustand/useAuthStore';
import { useChatReceiverStore } from '../zustand/useChatReceiverStore';
import { useChatMsgsStore } from '../zustand/useChatMsgsStore';
import axios from 'axios';

const ChatUsers = () => {
  const { users } = useUsersStore();
  const { authName } = useAuthStore();
  const { chatReceiver, updateChatReceiver } = useChatReceiverStore();
  const { updateChatMsgs } = useChatMsgsStore();
  const [searchTerm, setSearchTerm] = useState('');

  const setChatReceiver = (user) => {
    updateChatReceiver(user.username);
  };

  useEffect(() => {
    const getMsgs = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_HOST}:8080/msgs`,
        {
          params: {
            'sender': authName,
            'receiver': chatReceiver
          }
        },
        {
          withCredentials: true
        }
      );
      if (res.data.length !== 0) {
        updateChatMsgs(res.data);
      } else {
        updateChatMsgs([]);
      }
    };
    if (chatReceiver) {
      getMsgs();
    }
  }, [chatReceiver]);

  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users..."
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"></path>
          </svg>
        </div>
      </div>
      
      {/* User List */}
      <div className="space-y-2 overflow-y-auto h-96">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div 
              key={index} 
              onClick={() => setChatReceiver(user)}
              className={`p-4 rounded-lg cursor-pointer transition duration-300 
              ${user.username === chatReceiver ? 'bg-blue-500 text-white' : 'bg-blue-200 text-gray-800'} 
              hover:bg-blue-400 hover:text-white`}
            >
              {user.username}
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center mt-4">No users found</div>
        )}
      </div>
    </div>
  );
};

export default ChatUsers;
