import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TrendingBar from "../components/Trending";
import {
  AlertOutlined,
  BulbOutlined,
  ContactsOutlined,
  InstagramOutlined,
  LeftOutlined,
  MoreOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Post from "../components/Post";
import LockedPost from "../components/LockedPost";
import Reels from "../components/Reels";

const Profile = () => {
  const [screen, setScreen] = useState("posts");
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar profileMini={true} />
      <div className="flex flex-col w-11/12 xl:w-6/12 border-r-2 dark:border-gray-700 overflow-y-auto px-8 hide-scrollbar">
        <div className="mt-10 flex items-start">
          <i>
            <LeftOutlined className="font-bold dark:text-white" />
          </i>{" "}
          <div className="flex flex-col">
            <p className="text-2xl ml-3 font-bold text-gray-600 dark:text-white">
              Rohan Gupta
            </p>
            <p className="text-base font-normal ml-3 text-gray-500 dark:text-white">
              @smallcasez
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between p-5">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="User"
            className="rounded-full h-24 w-24 p-1 ring-4 ring-indigo-500"
          />
          <div className="flex items-center h-8">
            <button className="px-8 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors mx-2 text-white ">
              + Follow
            </button>
            <button className="p-1 h-8 flex justify-center items-center border border-indigo-500 rounded-lg mx-2 text-indigo-500 ">
              <MoreOutlined className="text-2xl pb-1 font-bold rotate-90 dark:text-stone-200" />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-xl pt-5 dark:text-white">
            Rohan Gupta
          </h1>
          <p className="font-extralight text-sm pt-1 dark:text-stone-300">
            Health & Finance
          </p>
          <p className="font-light text-base pt-2 max-w-lg dark:text-stone-200">
            I am a professional painter with 5 years of experience in training
            other in Sketch and painting.
          </p>
        </div>

        <div className="flex my-10">
          <div className="flex flex-col justify-center items-center pr-5 w-40">
            <p className="text-3xl dark:text-stone-200">85</p>
            <p className="text-sm dark:text-stone-300">Subscribers</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-5 w-40">
            <p className="text-3xl dark:text-stone-200">85</p>
            <p className="text-sm dark:text-stone-300">Following</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-5 w-40">
            <p className="text-3xl dark:text-stone-200">85</p>
            <p className="text-sm dark:text-stone-300">Followers</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-5 w-40">
            <p className="text-3xl dark:text-stone-200">85</p>
            <p className="text-sm dark:text-stone-300">Posts</p>
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-600 dark:text-white">
          Services Offered
        </p>
        <div className="flex py-5 my-5 border-b-2 border-gray-300 dark:border-gray-700">
          <div className="flex flex-col justify-center items-center pr-8">
            <VideoCameraOutlined className="text-3xl mb-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 h-16 w-16 flex justify-center items-center text-white cursor-pointer" />
            <p className="text-sm dark:text-stone-300">Videos</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-8">
            <BulbOutlined className="text-3xl mb-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 h-16 w-16 flex justify-center items-center text-white cursor-pointer" />
            <p className="text-sm dark:text-stone-300">Stories</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-8">
            <AlertOutlined className="text-3xl mb-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 h-16 w-16 flex justify-center items-center text-white cursor-pointer" />
            <p className="text-sm dark:text-stone-300">Live</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-8">
            <ContactsOutlined className="text-3xl mb-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 h-16 w-16 flex justify-center items-center text-white cursor-pointer" />
            <p className="text-sm dark:text-stone-300">Images</p>
          </div>
          <div className="flex flex-col justify-center items-center pr-8">
            <PlaySquareOutlined className="text-3xl mb-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 h-16 w-16 flex justify-center items-center text-white cursor-pointer" />
            <p className="text-sm dark:text-stone-300">Clips</p>
          </div>
        </div>

        <div className="flex">
          <div
            onClick={() => setScreen("posts")}
            className={`flex items-center cursor-pointer w-1/2 py-2 justify-center transition-colors ${
              screen === "posts"
                ? "text-indigo-500 border-b-2 border-indigo-500 dark:text-white dark:border-white"
                : "text-gray-500 dark:text-stone-400 dark:hover:text-stone-300"
            }`}
          >
            <PictureOutlined className="mr-2 mb-1 text-xl" />
            <p className="font-semibold text-xl text-center ">Posts</p>
          </div>
          <div
            onClick={() => setScreen("reels")}
            className={`flex items-center cursor-pointer w-1/2 py-2 justify-center transition-colors ${
              screen === "reels"
                ? "text-indigo-500 border-b-2 border-indigo-500 dark:text-white dark:border-white"
                : "text-gray-500 dark:text-stone-400 dark:hover:text-stone-300"
            }`}
          >
            <InstagramOutlined className="mr-2 mb-1 text-xl" />
            <p className="font-normal text-xl text-center ">Reels</p>
          </div>
        </div>

        {screen === "posts" && (
          <div className="flex flex-col mt-5">
            <Post />
            <LockedPost />
          </div>
        )}
        {screen === "reels" && (
          <div className="grid grid-cols-3 gap-1  mt-5">
            <Reels />
            <Reels />
            <Reels />
          </div>
        )}
      </div>
      <TrendingBar suggestions={true} subscription={true} />
    </div>
  );
};

export default Profile;
