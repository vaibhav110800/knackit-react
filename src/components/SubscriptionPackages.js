import React from "react";
import Coin from "../assets/coin.png";
const SubscriptionPackages = () => {
  return (
    <div className="flex  flex-col items-start justify-start w-full">
      <div className="pl-5 max-w-80 w-full mt-3 pt-5">
        <div className="flex items-center mb-5">
          <p className="text-xl font-semibold text-gray-600 dark:text-white">
            Subscription Packages
          </p>
        </div>
        <div className="bg-emerald-100 dark:bg-emerald-600 rounded-lg p-5">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Subscription Package
          </h1>
          <p className="text-base pt-2 text-gray-500 dark:text-stone-100 font-normal">
            I am a professional painter with 5 years of experience in training
            other in Sketch and painting.
          </p>
        </div>
        <div className="my-3 p-2 px-5 flex justify-between cursor-pointer items-center bg-indigo-600 rounded-xl">
          <p className="text-white font-bold">1 Month</p>
          <div className="flex items-center">
            {" "}
            <i>
              <img src={Coin} alt="Coin" className="h-5 mr-2" />
            </i>{" "}
            <p className="text-white font-bold">100</p>
          </div>
        </div>
        <p className="text-base py-3 dark:text-white">Subscription Bundles</p>
        <div className="my-3 p-2 px-5 flex justify-between cursor-pointer items-center border-indigo-600 border bg-white rounded-xl">
          <p className="text-indigo-600 font-bold">
            3 Month <span className="text-sm font-light">(60% Off)</span>
          </p>{" "}
          <div className="flex items-center">
            {" "}
            <i>
              <img src={Coin} alt="Coin" className="h-5 mr-2" />
            </i>{" "}
            <p className="text-indigo-600 font-bold">
              <span className="line-through font-light text-sm">300</span> 150
            </p>
          </div>
        </div>
        <div className="my-3 p-2 px-5 flex justify-between cursor-pointer items-center bg-indigo-600 border-indigo-600 border rounded-xl">
          <p className="text-white font-bold">
            6 Month <span className="text-sm font-light">(60% Off)</span>
          </p>
          <div className="flex items-center">
            {" "}
            <i>
              <img src={Coin} alt="Coin" className="h-5 mr-2" />
            </i>{" "}
            <p className="text-white font-bold">
              <span className="line-through font-light text-sm">600</span> 500
            </p>
          </div>
        </div>
        <div className="my-3 p-2 px-5 flex justify-between cursor-pointer items-center border-indigo-600 border bg-white rounded-xl">
          <p className="text-indigo-600 font-bold">
            12 Month <span className="text-sm font-light">(60% Off)</span>
          </p>{" "}
          <div className="flex items-center">
            {" "}
            <i>
              <img src={Coin} alt="Coin" className="h-5 mr-2" />
            </i>{" "}
            <p className="text-indigo-600 font-bold">
              {" "}
              <span className="line-through font-light text-sm">1200</span> 900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPackages;
