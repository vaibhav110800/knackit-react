import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import Sidebar from "../components/Sidebar";
import Coin from "../assets/coin.png";
import TransactionHistory from "../components/TransactionHistory";
import WalletBar from "../components/WalletBar";
import EarningChart from "../components/EarningChart";
const Wallet = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar profileMini={true} contacts={true} />
      <div className="w-11/12 xl:w-6/12 px-5 border-r-2 border-gray-200 dark:border-gray-700 overflow-y-auto hide-scrollbar">
        <div className="flex mt-10 items-center justify-between">
          <p className="text-2xl font-semibold text-gray-600 dark:text-white">
            Wallet
          </p>
        </div>

        <div className="grid gap-3 my-3 grid-cols-2">
          <div className="flex flex-col rounded-lg bg-white p-5">
            <p className="text-lg">Total earnings</p>
            <div className="flex items-center py-5">
              <img src={Coin} alt="Coin" className="h-8 w-8" />
              <p className="text-4xl font-semibold text-indigo-600 ml-3">
                899.00
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <ArrowRightOutlined className="-rotate-45 text-green-500" />
                  <p className="text-xl font-semibold ml-1">20%</p>
                </div>
                <p className="text-sm text-gray-500">This month</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl">15 Aug 2021</p>
                <p className="text-sm text-gray-500">Joined since 54 days</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-5">
            <p className="text-lg">Total earnings</p>
            <div className="flex items-center py-5">
              <img src={Coin} alt="Coin" className="h-8 w-8" />
              <p className="text-4xl font-semibold text-indigo-600 ml-3">
                199.00
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-xl">30 Jun 2021</p>
                <p className="text-sm text-gray-500">Last pay date</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl">30 Aug 2021</p>
                <p className="text-sm text-gray-500">Next pay date</p>
              </div>
            </div>
          </div>
        </div>
        <EarningChart />
        <TransactionHistory />
      </div>
      <WalletBar />
    </div>
  );
};

export default Wallet;
