import {
  CaretLeftOutlined,
  CaretRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React from "react";

const TrendingBar = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex my-5 ml-5 border-b-2 border-gray-300 dark:border-gray-700 outline-none">
        <SearchOutlined className="mb-2 text-xl text-gray-500" />
        <input
          type="text"
          className="bg-transparent text-gray-700 dark:text-white  focus:outline-none ml-3 pb-1"
          placeholder="Search here..."
        />
      </div>
      <div className="flex w-full justify-between px-5 mb-5">
        <p className="font-medium text-gray-500 dark:text-white text-xl">
          Trending now
        </p>
        <div className="flex mr-5">
          <button>
            <CaretLeftOutlined className="text-gray-500 dark:text-white text-xl hover:text-gray-700 transition-colors" />
          </button>
          <button>
            <CaretRightOutlined className="text-gray-500 dark:text-white text-xl hover:text-gray-700 transition-colors" />
          </button>
        </div>
      </div>
      <div className="box-1 my-1 h-28 p-4 flex justify-start cursor-pointer min-9/12 ml-5 rounded-lg">
        <div className="flex justify-between  items-end">
          <img
            src="https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="User"
            className="rounded-full h-16 w-16 mx-auto p-2 object-cover"
          />
          <div className="flex flex-col p-2">
            <p className="text-white text-sm">Akshat Sharma</p>
            <p className="text-white text-sm">@atlancey</p>
          </div>
        </div>
      </div>
      <div className="box-2 my-1 h-28 p-4 flex justify-start cursor-pointer min-9/12 ml-5 rounded-lg">
        <div className="flex justify-between  items-end">
          <img
            src="https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="User"
            className="rounded-full h-16 w-16 mx-auto p-2 object-cover"
          />
          <div className="flex flex-col p-2">
            <p className="text-white text-sm">Akshat Sharma</p>
            <p className="text-white text-sm">@atlancey</p>
          </div>
        </div>
      </div>
      <div className="box-3 my-1 h-28 p-4 flex justify-start cursor-pointer min-9/12 ml-5 rounded-lg">
        <div className="flex justify-between  items-end">
          <img
            src="https://images.unsplash.com/photo-1514448553123-ddc6ee76fd52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="User"
            className="rounded-full h-16 w-16 mx-auto p-2 object-cover"
          />
          <div className="flex flex-col p-2">
            <p className="text-white text-sm">Akshat Sharma</p>
            <p className="text-white text-sm">@atlancey</p>
          </div>
        </div>
      </div>
      <div className="flex mt-5 mx-5 w-full items-center justify-center">
        <div className="ring-2 rounded-full h-2 w-2 ring-gray-500 dark:ring-stone-200 mx-2 cursor-pointer"></div>
        <div className="ring-2 rounded-full h-2 w-2 ring-gray-500 dark:ring-stone-200 mx-2 dark:bg-white cursor-pointer"></div>
        <div className="ring-2 rounded-full h-2 w-2 ring-gray-500 dark:ring-stone-200 mx-2 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default TrendingBar;
