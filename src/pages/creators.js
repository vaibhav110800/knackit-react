import {
  DownOutlined,
  LeftOutlined,
  RightCircleFilled,
  RightCircleOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React from "react";
import Sidebar from "../components/Sidebar";
import CreatorCard from "../components/CreatorCard";

const Creators = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar profileMini={true} />
      <div className="xl:w-9/12 w-11/12 px-5 pr-15 border-r-2 border-gray-200 dark:border-gray-700 overflow-y-auto hide-scrollbar">
        <div className="flex items-center mt-5 justify-between">
          <div className="flex items-center dark:text-white">
            <LeftOutlined className="font-bold text-sm cursor-pointer" />
            <h1 className="font-bold text-xl pl-3">Creators</h1>
          </div>
          <div className="flex items-center">
            <div className="flex my-5 ml-5 border-b-2 outline-none">
              <SearchOutlined className="mb-2 text-xl text-gray-500" />
              <input
                type="text"
                className="bg-transparent text-gray-700 dark:text-white  focus:outline-none ml-3 pb-1"
                placeholder="Search here..."
              />
            </div>
            <p className="text-gray-500 dark:text-stone-400 text-sm w-24 pl-5">
              Sort by:
            </p>
            <div className="cursor-pointer flex items-center">
              <p className="text-gray-700 dark:text-stone-200 font-medium">
                Top
              </p>
              <DownOutlined className="text-xs ml-1 text-gray-700 dark:text-stone-200" />
            </div>
          </div>
        </div>
        <div className="flex mb-3 overflow-auto">
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Engineering</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Physics</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Chemistry</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Medical</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Shorts</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Trends</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Love</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Instagram</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Tiktoks</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center">
            <p className="text-base">Passion</p>
          </div>
          <div className="border cursor-pointer mr-1 mb-3 border-gray-300  dark:text-white rounded-full px-4 py-2 flex items-center justify-center">
            <RightOutlined className="cursor-pointer text-lg text-gray-500  dark:text-white" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mx-5 my-5">
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
      </div>
    </div>
  );
};

export default Creators;
