import { DownOutlined, LeftOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import SupporterCard from "../components/SupporterCard";
const Supporters = () => {
  const param = window.location.href.split("/")[4];
  console.log(param);
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar profileMini={true} />
      <div className="w-11/12 xl:w-9/12 pl-5 pr-15 border-r-2 border-gray-200 dark:border-gray-700 overflow-y-auto hide-scrollbar">
        <div className="flex dark:text-white items-center mt-10">
          <div className="flex items-center">
            <LeftOutlined className="font-bold text-sm cursor-pointer" />
            <h1 className="font-bold text-xl pl-3">Subscriptions</h1>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/subscription/subscriber"
            className={`border-b-2 ${
              param === "subscriber"
                ? "border-indigo-500 text-indigo-500 dark:text-indigo-300 dark:border-indigo-300"
                : "text-gray-500 dark:text-stone-300"
            }  text-center mx-1 text-lg mt-10 pb-2 w-60`}
          >
            My Subscribers
          </Link>
          <Link
            to="/subscription"
            className={`border-b-2 ${
              !param
                ? "border-indigo-500 text-indigo-500 dark:text-indigo-300 dark:border-indigo-300"
                : "text-gray-500 dark:text-stone-300"
            }  text-center mx-1 text-lg mt-10 pb-2 w-60`}
          >
            My Subscriptions
          </Link>
          <Link
            to="/subscription/supporter"
            className={`border-b-2 ${
              param === "supporter"
                ? "border-indigo-500 text-indigo-500 dark:text-indigo-300 dark:border-indigo-300"
                : "text-gray-500 dark:text-stone-300"
            }  text-center mx-1 text-lg mt-10 pb-2 w-60`}
          >
            My Supporters
          </Link>
        </div>
        <div className="flex overflow-auto my-5 justify-between items-center">
          <div className="flex">
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">All</p>
            </div>
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">Single Post</p>
            </div>
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">Membership</p>
            </div>
          </div>
          <div className="flex my-5 mr-5 border-b-2 outline-none">
            <SearchOutlined className="mb-2 text-xl text-gray-500" />
            <input
              type="text"
              className="bg-transparent text-gray-700 dark:text-white w-80 focus:outline-none ml-3 pb-1"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="text-base rounded-lg mx-5  dark:text-white flex items-center justify-between px-8 py-3">
          <p className="mr-36 font-semibold">Supporter</p>
          <div className="flex items-center justify-center">
            <p className="font-semibold">Last Support </p>
            <DownOutlined className="cursor-pointer text-sm font-semibold ml-2" />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold">Last Support Date </p>
            <DownOutlined className="cursor-pointer text-sm font-semibold ml-2" />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold">Lifetime Support </p>
            <DownOutlined className="cursor-pointer text-sm font-semibold ml-2" />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-semibold">Support Since </p>
            <DownOutlined className="cursor-pointer text-sm font-semibold ml-2" />
          </div>
          <div className="opacity-0 flex items-center justify-center">
            <p className="font-semibold">Support Since </p>
            <DownOutlined className="cursor-pointer text-sm font-semibold ml-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 mx-5 my-5">
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
          <SupporterCard />
        </div>
      </div>
    </div>
  );
};

export default Supporters;
