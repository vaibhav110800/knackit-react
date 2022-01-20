import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import Coin from "../assets/coin.png";
const SubscriptionCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        center
        open={open}
        onClose={() => setOpen(false)}
        classNames={{
          modal: "customModal",
        }}
      >
        <div className="flex flex-col bg-white rounded-xl px-5">
          <p className="text-gray-500 text-xl">Subscriptions</p>
          <p className="text-base my-3">
            Are you sure you want to cancel your subscription? There won’t be
            any refund to your wallet.
          </p>
          <p className="text-sm text-gray-500 mt-3">Reason for cancellation</p>
          <div className="flex items-center">
            <p className="pb-2 my-2 w-full border-gray-300 border-b-2">
              No Specific reason
            </p>
            <DownOutlined clas />
          </div>
          <div className="flex w-100 mt-3 justify-end">
            <button className="rounded-md border border-indigo-500 w-32 text-indigo-500 hover:bg-stone-100 transition-colors py-1">
              Back
            </button>
            <button className="rounded-md bg-red-500 hover:bg-red-600 transition-colors text-white border border-red-500 w-32 ml-2 py-1">
              Unsubscribe
            </button>
          </div>
        </div>
      </Modal>
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
          I am a professional painter with 5 years of experience in training
          other in Sketch.
        </p>
        <div className="flex justify-between">
          <p className="text-base text-gray-500 dark:text-white text-center bg-stone-100 dark:bg-gray-600 py-3 mr-1 rounded-sm w-1/2">
            <span className="text-xl text-indigo-500 dark:text-indigo-300">
              1
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
        <button
          onClick={() => setOpen(true)}
          className="my-5 flex justify-center rounded-lg py-2 px-5 border-indigo-600 border text-indigo-600"
        >
          Subscribed
        </button>
        <div className="flex w-full justify-between">
          <p className="text-xs">Next Billing Date</p>
          <p className="text-xs">05 Dec 2021</p>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
