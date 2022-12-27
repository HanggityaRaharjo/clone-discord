import React from 'react';

function Navbar() {
  return (
    <div className="fixed w-full flex">
      <div className="w-[80px]"></div>
      <div className="border-b relative border-gray-800 bg-[#36393f] w-full h-12 flex items-center shadow">
        <div className="relative z-[999] w-[320px] h-full bg-[#2f3136] flex justify-center items-center px-3">
          <input type="text" className="w-full rounded-md bg-[#202225] px-2 h-6 active:outline-none focus:outline-none text-[#fefefe] text-sm font-bold" placeholder="Find or start conversation" />
        </div>
        <div className="w-full h-full flex justify-between items-center px-5">
          <div className="flex items-center gap-2">
            <h1 className="text-[#fefefe] font-bold text-xl">
              <span className="text-xl text-[#fefefeb4]">@</span> Fumie
            </h1>
            <div className="w-3 h-3 rounded-full bg-[#fefefeb4] flex justify-center items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#36393f]"></div>
            </div>
            <div className="border-l-[1px] border-[#fefefe1f] px-2 flex items-center gap-2">
              <p className="bg-[#202225] text-[#fefefeb4] text-xs font-bold px-2 py-1 rounded-full">AKA</p>
              <p className="text-[#fefefeb4]">Fumie</p>
            </div>
          </div>
          <div>asdas</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
