import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import PostExploreMini from "../components/PostExploreMini";
import Sidebar from "../components/Sidebar";

const Explore = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar profileMini={true} contacts={true} />
      <div className="w-11/12 xl:w-9/12 pl-5 pr-5 border-r-2 dark:border-gray-700 border-gray-200 overflow-y-auto hide-scrollbar">
        <div className="flex mt-5 items-center justify-between">
          <p className="text-2xl font-semibold text-gray-600 dark:text-white">
            Explore
          </p>
          <div className="flex my-5 ml-5 w-full justify-end items-end outline-none">
            <SearchOutlined className="mb-2 text-xl text-gray-500" />
            <input
              type="text"
              className="bg-transparent text-gray-700 border-b-2 border-gray-300 focus:border-gray-500 dark:text-white  focus:outline-none ml-3 w-1/3 pb-1"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="flex mt-3">
          <p
            className={`font-semibold pb-1 w-24 text-center cursor-pointer text-indigo-600 border-b-2 dark:text-indigo-300 dark:border-indigo-300 border-indigo-600`}
          >
            For you
          </p>
          <p
            className={`font-semibold pb-1 w-24 text-center ml-1 cursor-pointer text-gray-500 dark:text-stone-300`}
          >
            Trending
          </p>
          <p
            className={`font-semibold pb-1 w-24 text-center ml-1 cursor-pointer text-gray-500 dark:text-stone-300`}
          >
            Photos
          </p>
          <p
            className={`font-semibold pb-1 w-24 text-center ml-1 cursor-pointer text-gray-500 dark:text-stone-300`}
          >
            Videos
          </p>
        </div>
        <div className="flex overflow-auto mt-10 mb-5 justify-start items-center">
          <div className="flex">
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
            <div className="border cursor-pointer mr-1 mb-3 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">#title</p>
            </div>
          </div>
        </div>
        <div class="masonry-1-col masonry-2-col mt-5 lg:masonry-3-col box-border mx-auto overflow-auto">
          <PostExploreMini type="image" />
          <PostExploreMini />
          <PostExploreMini type="image" />
          <PostExploreMini type="image" />
          <PostExploreMini />
        </div>
      </div>
    </div>
  );
};

export default Explore;
