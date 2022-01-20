import {
  GiftOutlined,
  HeartOutlined,
  LockOutlined,
  MessageOutlined,
  MoreOutlined,
  ShareAltOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import Coin from "../assets/coin.png";
const LockedPost = () => {
  return (
    <div className="bg-white w-full my-5 py-5 rounded-lg">
      <div className="flex justify-between px-5">
        <div className="flex items-center">
          <img
            className="rounded-full h-14 w-14 object-cover ring-4 ring-green-600 cursor-pointer mx-3 p-1"
            alt="story"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <div className="flex flex-col ml-5">
            <p className="text-lg">Aayush Verma</p>
            <p className="text-sm font-light">@atlancey</p>
          </div>
        </div>
        <MoreOutlined className="rotate-90 cursor-pointer font-bold text-3xl mr-5" />
      </div>
      <div className="w-full bg-gray-200 h-96 object-cover my-5 flex flex-col justify-around hidden-content">
        <LockOutlined className="text-8xl text-indigo-500 py-16" />
        <p className="text-xl font-light text-center">
          Unlock this post by becoming a subscriber
        </p>
        <div className="flex justify-between px-16 py-2">
          <VideoCameraOutlined className="text-2xl text-indigo-500" />
          <div className="flex items-center">
            {" "}
            <i>
              <img src={Coin} alt="Coin" className="h-5 mr-2" />
            </i>{" "}
            <p className="text-indigo-500 text-2xl font-bold">100</p>
          </div>
        </div>
        <button className="mx-10 py-2 hover:bg-indigo-600 transition-colors rounded-lg mb-10 bg-indigo-500 text-white">
          Subscribe now
        </button>
      </div>
      <p className="text-gray px-5 500 text-lg">
        Dance with nature and passion{" "}
        <span className="text-indigo-600">#life</span>{" "}
        <span className="text-indigo-600">#lifestyle</span>{" "}
        <span className="text-indigo-600">#style</span>
      </p>
      <div className="flex justify-between items-center">
        <div className="ml-5 mt-2 flex items-center">
          <HeartOutlined className="px-2 cursor-pointer text-2xl text-gray-500" />
          <span className="text-lg pr-4 mt-2 text-gray-600">2.5k</span>
          <MessageOutlined className="px-2 cursor-pointer text-2xl text-gray-500" />
          <span className="text-lg pr-4 mt-2 text-gray-600">1k</span>
          <ShareAltOutlined className="px-2 cursor-pointer text-2xl text-gray-500" />
        </div>
        <GiftOutlined className="pr-12 cursor-pointer text-2xl text-gray-700 font-bold" />
      </div>
    </div>
  );
};

export default LockedPost;
