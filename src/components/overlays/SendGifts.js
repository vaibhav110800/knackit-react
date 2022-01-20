import React from "react";

import Coin from "../../assets/coin.png";
import Bell from "../../assets/gifts/Bell.png";
import Cash from "../../assets/gifts/Cash.png";
import Diamond from "../../assets/gifts/Diamond.png";
import Grenade from "../../assets/gifts/Grenade.png";
import Mask from "../../assets/gifts/Mask.png";
import Perfume from "../../assets/gifts/Perfume.png";
import Ring from "../../assets/gifts/Ring.png";
import Shell from "../../assets/gifts/Shell.png";
const SendGifts = () => {
  return (
    <div className="p-5 mt-3 min-w-max flex flex-col">
      <p className="-mt-4 mr-10 text-xl font-semibold">Send Gifts</p>
      <div className="flex justify-between my-3 items-center">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="User"
            className="rounded-full h-16 w-16 mx-auto p-2"
          />
          <div className="flex flex-col p-2">
            <p className="dark:text-stone-200 text-base text-gray-600">
              Ayyush Verma
            </p>
            <p className="dark:text-stone-400 text-gray-500 text-sm">
              @atlancey
            </p>
          </div>
        </div>
        <p className="text-xl pr-2 font-semibold">
          Balance{" "}
          <i>
            <img src={Coin} className="inline" alt="Coin" />
          </i>{" "}
          100
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 mx-8 my-3">
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Bell} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Bell</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Cash} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Cash</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Diamond} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Diamond</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Grenade} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Grenade</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Mask} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Mask</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Perfume} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Perfume</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Ring} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Ring</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
        <div className="flex flex-col h-20 w-20 mb-8 items-center cursor-pointer">
          <img src={Shell} className="h-12 w-12 py-1" alt="Gifts" />
          <p className="text-lg mt-1">Shell</p>
          <div className="flex items-center">
            <img
              src={Coin}
              alt="coin"
              className="inline h-3 w-3 object-cover"
            />{" "}
            <p className="text-sm ml-1"> 410</p>
          </div>
        </div>
      </div>
      <div className="flex px-5 my-5 items-center justify-between">
        <div className="flex items-center">
          <img src={Coin} alt="Coin" className="h-4 w-4 mb-2 mr-2" />
          <input
            type="text"
            placeholder="Tip amount"
            className="border-b-2 border-gray-300 focus:border-gray-400 pb-2 focus:outline-none"
          />
        </div>
        <div className="flex">
          <div className="border cursor-pointer mr-1 border-gray-300 rounded-full px-4 py-2 flex items-center">
            <img src={Coin} alt="Coin" className="h-4 w-4 mr-2" />
            <p className="text-base">20</p>
          </div>
          <div className="border cursor-pointer mr-1 border-gray-300 rounded-full px-4 py-2 flex items-center">
            <img src={Coin} alt="Coin" className="h-4 w-4 mr-2" />
            <p className="text-base">50</p>
          </div>
          <div className="border cursor-pointer mr-1 border-gray-300 rounded-full px-4 py-2 flex items-center">
            <img src={Coin} alt="Coin" className="h-4 w-4 mr-2" />
            <p className="text-base">100</p>
          </div>
        </div>
      </div>
      <button
        disabled
        className="bg-indigo-600 transition-colors w-24 mx-auto mt-3 py-2 rounded-lg disabled:bg-indigo-200 text-white hover:bg-indigo-700"
      >
        Send
      </button>
    </div>
  );
};

export default SendGifts;
