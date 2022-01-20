import React from "react";
import Coin from "../assets/coin.png";
const SubscriberCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-5">
      <div className="flex justify-center flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="User"
          className="rounded-full h-20 w-20 mx-auto p-2"
        />
        <p className="text-lg font-semibold">Rohan Gupta</p>
        <p className="text-sm font-light">@rohan__guptaz</p>
      </div>
      <p className="text-base py-5">
        I am a professional painter with 5 years of experience in training other
        in Sketch.
      </p>
      <div className="flex justify-between">
        <p className="text-base text-gray-500 dark:text-white text-center bg-stone-100 dark:bg-gray-600 py-3 mr-1 rounded-sm w-1/2">
          <span className="text-xl text-indigo-500 dark:text-indigo-300">
            3
          </span>{" "}
          Month
        </p>
        <div className="text-base flex items-center justify-center text-center bg-stone-100 dark:bg-gray-600 py-3 ml-1 rounded-sm w-1/2">
          <i>
            <img src={Coin} alt="Coin" className="h-5 mr-2" />
          </i>{" "}
          <p className="text-base text-gray-500 text-center dark:text-white">
            100
          </p>
        </div>
      </div>
      <button className="my-5 flex justify-center rounded-lg py-2 px-5 bg-indigo-600 cursor-pinter hover:bg-indigo-700 transition-colors text-white">
        Message
      </button>
      <div className="flex w-full justify-between">
        <p className="text-xs">Next Billing Date</p>
        <p className="text-xs">05 Dec 2021</p>
      </div>
    </div>
  );
};

export default SubscriberCard;
