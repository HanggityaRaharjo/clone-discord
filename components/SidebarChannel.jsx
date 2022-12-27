import React from 'react';
import ChannelProfile from './ChannelProfile';

function SidebarChannel() {
  return (
    <div className="w-[5.3%] bg-[#202225]">
      <div className="flex justify-center mt-3">
        <img src="/discord-logo.webp" className="w-12 h-12 rounded-2xl" alt="direct-message" />
      </div>

      <div className="border-t border-[#363738] w-8 mx-auto mt-3"></div>

      <ChannelProfile servername="DS" />
      <ChannelProfile servername="AB" />
      <ChannelProfile servername="CD" />
      <ChannelProfile servername="AS" />
    </div>
  );
}

export default SidebarChannel;
