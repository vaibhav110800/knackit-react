import React from "react";
import Coin from "../assets/coin.png";
const SupporterCard = () => {
  return (
    <div className="bg-white rounded-lg flex items-center justify-between px-8 py-3">
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="User"
          className="rounded-full h-20 w-20 mx-auto p-2"
        />
        <div className="flex flex-col ml-2">
          <p className="text-lg">Rohan Gupta</p>
          <p className="text-xs">iam_rohan</p>
        </div>
      </div>

      <div className="flex items-center">
        {" "}
        <i>
          <img src={Coin} alt="Coin" className="h-5 mr-2" />
        </i>{" "}
        <p className="">100</p>
      </div>

      <p className="text-base">22 Dec 2021</p>

      <div className="flex items-center">
        {" "}
        <i>
          <img src={Coin} alt="Coin" className="h-5 mr-2" />
        </i>{" "}
        <p className="">2000</p>
      </div>

      <p className="text-base">22 Dec 2021</p>

      <button className="border-indigo-500 border rounded-lg text-indigo-500 px-4 py-2">
        Message
      </button>
    </div>
  );
};

export default SupporterCard;
