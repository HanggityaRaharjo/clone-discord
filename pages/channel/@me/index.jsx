import React from 'react';
import { useRouter } from 'next/router';
import ChannelProfile from '../../../components/ChannelProfile';
import UserCard from '../../../components/UserCard';
import Head from 'next/head';
import UserMessage from '../../../components/UserMsg';

function Me() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/discord.ico" />
      </Head>

      <div className="h-screen w-screen flex">
        {/* Sidebar Channel */}
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
        {/* End Sidebar Channel */}
        {/* Sidebar Contact */}
        <div className="w-[17.5%] bg-[#2f3136] overflow-y-scroll">
          <div className=" fixed w-[inherit] bg-[#2f3136] border-b border-[#25262b] shadow-lg h-[48px] p-3 flex justify-center items-center">
            <input type="text" className="w-full rounded bg-[#202225] text-[#b9bbbe] px-2 focus:outline-none text-[14px] py-1" placeholder="Find or start a conversation" />
          </div>
          <div className="mt-14">
            <div className="px-1 mb-1">
              <div className="text-[#b9bbbe] hover:bg-[#52555c] hover:text-[#fefefeb4]  rounded h-10 px-2 flex items-center gap-4">
                <svg className="linkButtonIcon-7rsZcu" aria-hidden="true" role="img" width="25" height="25" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="currentColor"
                      fill-rule="nonzero"
                      d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                      transform="translate(2 4)"
                    ></path>
                    <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                  </g>
                </svg>
                <p>Friends</p>
              </div>
            </div>
            <div className="px-1 mb-1">
              <div className="text-[#b9bbbe] hover:bg-[#52555c] hover:text-[#fefefeb4]  rounded h-10 px-2 flex items-center gap-4">
                <svg className="linkButtonIcon-7rsZcu" aria-hidden="true" role="img" width="25" height="25" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                  ></path>
                </svg>
                <p>Nitro</p>
              </div>
            </div>
            <div className="px-1 ">
              <div className="text-[#b9bbbe] hover:text-[#fefefeb4]  rounded h-10 px-1 flex items-center justify-between">
                <p className="font-bold text-xs">DIRECT MESSAGES</p>
                <p className="font-bold text-lg">+</p>
              </div>
            </div>
            <UserCard id="1" name="Sri Widdyandri" />
            <UserCard id="2" name="Nbhnrzk" />
            <UserCard id="3" name="Fumie" />
            <UserCard id="4" name="Hanggitya Raharjo" />
          </div>
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
                <button>
                  <svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24" className="text-[#b9bbbe]">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar Contact */}
        {/* Main */}
        <div className="w-[77.2%] bg-[#36393f] overflow-y-scroll">{/* Default Chat nya kosong dulu */}</div>
        {/* End Main */}
      </div>
    </>
  );
}

export default Me;
