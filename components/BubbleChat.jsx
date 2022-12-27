import React from 'react';

function BubbleChat(props) {
  console.log(props);
  return (
    <div className="flex gap-2 mb-2 text-white">
      <div className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center p-2">
        <img src="/discord-account.png" alt="discord-account" />
      </div>
      <div>
        <h1 className="font-bold">
          {props.name}
          <span className="text-[12px] ml-2 text-[#9da7b1] font-normal">06/01/2022 12:43 AM</span>
        </h1>
        <p>{props.pesan.message}</p>
      </div>
    </div>
  );
}

export default BubbleChat;
