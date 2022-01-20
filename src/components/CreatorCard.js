import React from "react";
import Coin from "../assets/coin.png";
const CreatorCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="User"
            className="rounded-full h-20 w-20 mx-auto p-2"
          />
          <p className="text-lg font-semibold">Rohan Gupta</p>
          <p className="text-sm font-light">@rohan__guptaz</p>
        </div>
        <p className="bg-orange-500 text-white px-4 py-1 h-6 flex items-center justify-center text-sm rounded-lg">
          Health
        </p>
      </div>
      <p className="text-base py-5">
        I am a professional painter with 5 years of experience in training other
        in Sketch.
      </p>
      <div className="flex">
        <p className="text-base text-gray-500 mr-3">
          <span className="text-xl text-indigo-500">53</span> Followers
        </p>
        <p className="text-base text-gray-500 ">
          <span className="text-xl text-indigo-500">80k</span> Subscribers
        </p>
      </div>
      <button className="my-5 flex justify-between rounded-lg py-2 px-5 bg-indigo-600 text-white">
        Subscribe
        <div className="flex items-center">
          {" "}
          <i>
            <img src={Coin} alt="Coin" className="h-5 mr-2" />
          </i>{" "}
          <p className="text-white font-bold">100</p>
        </div>
      </button>
    </div>
  );
};

export default CreatorCard;
