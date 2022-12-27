import React from 'react';
import Link from 'next/link';

function UserCard(props) {
  return (
    <>
      <Link href={`/channel/@me/${props.id}`}>
        <div className=" px-1 mb-1">
          <div className="text-[#b9bbbe] hover:bg-[#52555c] hover:text-[#fefefeb4]  rounded h-10 px-2 flex items-center justify-between group">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 relative bg-red-500 flex justify-center items-center rounded-full p-1">
                <img src="/discord-account.png" alt="" />
                <div className="p-[3px] absolute -bottom-1 -right-[6px]  bg-[#2f3136] rounded-full">
                  <div className="w-3 h-3 rounded-full bg-[#fefefeb4] flex justify-center items-center">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#36393f]"></div>
                  </div>
                </div>
              </div>
              <p>{props.name}</p>
            </div>
            <button className="font-semibold invisible group-hover:visible">x</button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default UserCard;
