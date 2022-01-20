import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Coin from "../assets/coin.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { SearchOutlined } from "@ant-design/icons";
const EarningChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Gift", "Referral", "Tip", "Subscription"],
    datasets: [
      {
        label: "% Earning",
        data: [55, 19, 9, 17],
        backgroundColor: ["#9333eadd", "#f472b6dd", "#38bdf8dd", "#facc15dd"],
        borderColor: ["#9333ea", "#f472b6", "#38bdf8", "#facc15"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    bezierCurve: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};
const Deposit = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col rounded-lg p-2 items-center border border-indigo-600 text-indigo-600">
          <p className="text-xl -mb-1">100</p>
          <p className="text-xs pb-2 border-b-2 border-indigo-600 w-full text-center">
            coins
          </p>
          <p className="text-xl mt-2">₹ 120</p>
        </div>
        <div className="flex flex-col rounded-lg p-2 items-center border border-indigo-600 bg-indigo-600 text-white">
          <p className="text-xl -mb-1">200</p>
          <p className="text-xs pb-2 border-b-2 border-white w-full text-center">
            coins
          </p>
          <p className="text-xl mt-2">₹ 210</p>
        </div>
        <div className="flex flex-col rounded-lg p-2 items-center border border-indigo-600 text-indigo-600">
          <p className="text-xl -mb-1">500</p>
          <p className="text-xs pb-2 border-b-2 border-indigo-600 w-full text-center">
            coins
          </p>
          <p className="text-xl mt-2">₹ 500</p>
        </div>
      </div>
      <div className="flex justify-between mt-5 items-center">
        <div className="flex flex-col">
          <p className="text-xs mb-2">Money you pay</p>
          <input
            type="text"
            className="w-full focus:outline-none border-b-2 pb-2 border-gray-300 focus:border-gray-500 transition-colors"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs mb-2">Coins you get</p>
          <div className="flex items-center">
            <img src={Coin} alt="Coin" className="h-4 w-4 mr-1" />
            <span className="font-semibold mr-1 text-xl">100</span>
            <span className="text-xs pt-2">coins</span>
          </div>
        </div>
      </div>
      <button className="border mt-5 py-2 rounded-lg font-semibold border-indigo-600 text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
        Buy ₹ 210
      </button>
    </div>
  );
};
const Withdraw = () => {
  return (
    <div className="flex flex-col">
      <p className="text-xs pb-1">Available</p>
      <p className="text-4xl pb-3 font-semibold text-indigo-600">₹ 210</p>
      <p className="text-xs mt-3 mb-1">Money to withdraw</p>
      <input
        type="text"
        className="w-full focus:outline-none border-b-2 pb-2 border-gray-300 focus:border-gray-500 transition-colors"
        placeholder="Enter amount"
      />
      <button className="border mt-5 py-2 rounded-lg font-semibold border-indigo-600 text-indigo-600 hover:bg-stone-100 transition-colors">
        Withdraw
      </button>
    </div>
  );
};

const WalletBar = () => {
  const [screen, setScreen] = useState("deposit");
  return (
    <div className="w-3/12 hidden xl:block flex flex-col overflow-y-auto px-5 pt-10 hide-scrollbar overflow-x-hidden">
      <div className="flex my-5 ml-5 border-b-2 items-center outline-none">
        <SearchOutlined className="mb-2 text-xl text-gray-500" />
        <input
          type="text"
          className="bg-transparent text-gray-700 dark:text-white  focus:outline-none ml-3 pb-1"
          placeholder="Search here..."
        />
      </div>
      <div className="bg-white rounded-lg flex flex-col p-5">
        <p className="text-lg">Total earnings</p>
        <div className="flex items-center py-5">
          <img src={Coin} alt="Coin" className="h-8 w-8" />
          <p className="text-4xl font-semibold text-indigo-600 ml-3">299.00</p>
        </div>
        <div className="flex justify-between border-b-2 border-gray-300 pb-5">
          <div className="flex flex-col">
            <p className="text-xl">30 Jun 2021</p>
            <p className="text-sm text-gray-500">Last pay date</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl">30 Aug 2021</p>
            <p className="text-sm text-gray-500">Next pay date</p>
          </div>
        </div>
        <div className="flex mt-3">
          <p
            onClick={() => setScreen("deposit")}
            className={`font-semibold pb-1 w-24 text-center cursor-pointer ${
              screen === "deposit"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            Deposit
          </p>
          <p
            onClick={() => setScreen("withdraw")}
            className={`font-semibold pb-1 w-24 text-center ml-1 cursor-pointer ${
              screen === "withdraw"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            Withdraw
          </p>
        </div>
        <div className="my-3">
          {screen === "deposit" && <Deposit />}
          {screen === "withdraw" && <Withdraw />}
        </div>
      </div>
      <div className="my-3 flex flex-col bg-gradient-to-r p-5 rounded-lg  from-green-400 to-blue-400">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white">Withdrawal amount</p>
          <p className="font-light w-24 bg-yellow-400 text-white  rounded-2xl text-center text-sm py-1">
            Pending
          </p>
        </div>
        <p className="text-4xl font-semibold text-white">₹ 299.00</p>
      </div>
      <div className="bg-white p-5 flex flex-col rounded-lg">
        <p className="pb-3 text-lg">Earning per type</p>
        <EarningChart />
      </div>
    </div>
  );
};

export default WalletBar;
