import React, { useState } from 'react';
import styles from '../styles/ChannelProfile.module.css';

function ChannelProfile(props) {
  return (
    <>
      <button className={`w-12 h-12  bg-[#36393f] hover:bg-[#5865f2]  flex justify-center items-center mx-auto mb-2 mt-2 group transition-all duration-300 relative z-50 ` + styles['activ']}>
        <div className="w-5 h-1 group-hover:w-6 group-hover:h-6 absolute rounded group-hover:bg-[#fefefe] -translate-x-[45px] transition-all duration-300"></div>
        <p className="text-[#dadbdc] text-lg font-bold">{props.servername}</p>
        <div className="invisible group-hover:visible absolute rounded bg-[#202225] ml-60 w-36 p-2">
          <div className="w-5 h-5 bg-[#202225] absolute rotate-45  -translate-x-3"></div>
          <p className="text-white relative">Channel Name</p>
        </div>
      </button>
    </>
  );
}

export default ChannelProfile;
