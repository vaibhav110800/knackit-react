import { LeftOutlined } from "@ant-design/icons";
import React from "react";
import Commented from "../components/notifications/Commented";
import MentionedComment from "../components/notifications/MentionedComment";
import MultipleFollowing from "../components/notifications/MultipleFollowing";
import PostReacted from "../components/notifications/PostReacted";
import StartedFollowing from "../components/notifications/StartedFollowing";
import Sidebar from "../components/Sidebar";
import Trending from "../components/Trending";
const Notifications = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar profileMini={true} />
      <div className="flex flex-col xl:w-6/12 w-11/12 border-r-2 dark:border-gray-700 overflow-y-auto px-8 hide-scrollbar">
        <div className="mt-10  dark:text-white items-center flex">
          <LeftOutlined />
          <h1 className="font-bold text-xl pl-3">Notifications</h1>
        </div>
        <div className="flex overflow-auto my-5 justify-start items-center">
          <div className="flex">
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">All</p>
            </div>
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">Posts</p>
            </div>
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">Flicks</p>
            </div>
            <div className="border cursor-pointer mr-1 h-12 bg-white border-gray-300 rounded-full px-4 py-2 flex items-center">
              <p className="text-base">Followers</p>
            </div>
          </div>
        </div>
        <div className="flex mt-3 flex-col">
          <StartedFollowing />
          <PostReacted />
          <MentionedComment />
          <Commented />
          <MultipleFollowing />
        </div>
      </div>
      <Trending trending={true} suggestions={true} />
    </div>
  );
};

export default Notifications;
