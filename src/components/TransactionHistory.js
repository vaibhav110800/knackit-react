import { DollarCircleOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import Coin from "../assets/coin.png";
const TransactionRow = ({ status, type }) => {
  return (
    <div className="flex px-3 text-base w-full py-2 items-center justify-between">
      <p className="font-light w-2/12 text-center">#pf19a6</p>
      <p className="font-light w-2/12  text-center">27 Aug 2021</p>
      <div className="flex w-3/12 cursor-pointer justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80x"
          className="w-8 h-8 rounded-full mr-2 object-cover"
          alt=""
        />
        <p className="overflow-ellipsis font-semibold text-center">
          Kaustubh M.
        </p>
      </div>

      <DollarCircleOutlined className="text-center w-1/12" />
      <div className="flex items-center w-2/12 justify-center">
        <img src={Coin} alt="Coin" className="h-4 w-4 mr-2" />
        {type === "withdrawl" && (
          <p className="font-light text-red-500 text-center">10.00</p>
        )}
        {type === "deposit" && (
          <p className="font-light text-green-500 text-center">20.00</p>
        )}
      </div>
      {status === "pending" && (
        <p className="font-light w-2/12 bg-yellow-400 text-white  rounded-2xl text-center text-sm py-1">
          Pending
        </p>
      )}
      {status === "success" && (
        <p className="font-light w-2/12 bg-green-600 text-white  rounded-2xl text-center text-sm py-1">
          Success
        </p>
      )}
      {status === "failed" && (
        <p className="font-light w-2/12 bg-red-600 text-white  rounded-2xl text-center text-sm py-1">
          Failed
        </p>
      )}
    </div>
  );
};

const TransactionHistory = () => {
  return (
    <div className="bg-white rounded-lg my-3 p-5">
      <div className="flex justify-between px-5">
        <p className="text-xl">History</p>
        <div className="flex text-sm items-center">
          <p className="text-gray-500">Type</p>
          <DownOutlined className="text-gray-500 ml-2 cursor-pointer" />
          <p className="text-gray-500 ml-5">All time</p>
          <DownOutlined className="text-gray-500 ml-2 cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col px-3">
        <div className="flex px-3 mb-3 text-base text-gray-500 w-full pb-2 border-b-2 border-gray-300 mt-5 items-center justify-between">
          <p className="text-center w-2/12">Txn Id</p>
          <p className="text-center w-2/12">Date</p>
          <p className="text-center w-3/12">Name</p>
          <p className="text-center w-1/12">Type</p>
          <p className="text-center w-2/12">Amount</p>
          <p className="text-center w-2/12 ">Status</p>
        </div>
        <TransactionRow type={"withdrawl"} status={"pending"} />
        <TransactionRow type={"deposit"} status={"success"} />
        <TransactionRow type={"withdrawl"} status={"success"} />
        <TransactionRow type={"deposit"} status={"failed"} />
        <TransactionRow type={"withdrawl"} status={"success"} />
      </div>
    </div>
  );
};

export default TransactionHistory;
