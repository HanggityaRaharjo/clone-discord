import React from 'react';
import BubbleChat from './BubbleChat';
function ChatMessage(props) {
  console.log(props);
  return (
    <div className="p-3 mt-12 ">
      <div className="mb-3">
        <div className="w-20 h-20 bg-red-500 rounded-full flex justify-center items-center p-2 mb-1">
          <img src="/discord-account.png" alt="discord-account" />
        </div>
        <h3 className="font-bold text-white text-3xl mb-1">Sri Widdyandri</h3>
        <p className="text-[#9da7b1]">
          This is the beginning of your direct message history with @<span className="font-bold">Sri Widdyandri</span>
        </p>
      </div>
      <div className="border-t relative border-[#4e5052] my-3">
        <p
          className="text-[#9da7b1] font-semibold text-xs bg-[#36393f] absolute left-1/2 -translate-x-1/2
              -translate-y-[10px] px-2 text-[12px]"
        >
          June 6,2022
        </p>
      </div>
      <BubbleChat name="Sri Widdyandri" />
    </div>
  );
}

export default ChatMessage;
