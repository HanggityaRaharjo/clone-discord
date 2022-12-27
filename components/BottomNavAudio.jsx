import React from 'react';
import ButtonSetting from './Button/ButtonSetting';
function BottomNavAudio() {
  return (
    <div className="bg-[#292b2f] fixed w-[inherit] bottom-0 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="p-1 bg-red-500 w-8 h-8 rounded-full flex justify-center items-center relative">
            <img src="/discord-account.png" alt="account" className="" />
            <div className="w-4 h-4 rounded-full absolute bg-[#292b2f] -bottom-[3px] -right-[3px] p-1">
              <div className="w-full h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div>
            <h5 className="text-[#ffebe4] text-[14px] font-bold">Hanggitya ...</h5>
            <p className=" text-[#9da7b1] text-[12px]">#9832</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button>
            <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24" className="text-[#b9bbbe]">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24" className="text-[#b9bbbe]">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                  fill="currentColor"
                ></path>
              </svg>
            </svg>
          </button>
          <ButtonSetting />
        </div>
      </div>
    </div>
  );
}

export default BottomNavAudio;
