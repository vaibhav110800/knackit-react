import React, { useState } from "react";
import AddPost from "../components/AddPost";
import Sidebar from "../components/Sidebar";
import TrendingBar from "../components/Trending";
import StoryHeader from "../components/StoryHeader";
import Addstory from "../components/Addstory";
import { DownOutlined } from "@ant-design/icons";
import Divider from "../components/Divider";
import Post from "../components/Post";
import Modal from "react-responsive-modal";
import PostWithComment from "../components/PostWithComment";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <AddPost />
      </Modal>
      <Sidebar contacts={true} profileMini={true} />
      <div className="flex flex-col w-11/12 xl:w-6/12 border-r-2 border-gray-300 dark:border-gray-700 overflow-y-auto px-8 hide-scrollbar">
        <p className="text-2xl mt-10 font-semibold text-gray-600 dark:text-white">
          Home
        </p>
        <AddPost setOpen={setOpen} />
        <p className="text-2xl  font-semibold text-gray-600 dark:text-white">
          Stories
        </p>
        <div className="flex w-full bg-stone-100 dark:bg-transparent mt-5 p-2 justify-start align-middle">
          <Addstory />
          <StoryHeader />
          <StoryHeader />
          <StoryHeader />
          <StoryHeader />
          <StoryHeader />
          <StoryHeader />
          <StoryHeader />
        </div>
        <div className="w-full  p-2 flex justify-start items-center">
          <Divider />
          <p className="text-gray-500 dark:text-stone-400 text-sm w-24 pl-5">
            Sort by:
          </p>
          <div className="cursor-pointer flex items-center">
            <p className="text-gray-700 dark:text-stone-200 font-medium">Top</p>
            <DownOutlined className="text-xs ml-1 text-gray-700 dark:text-stone-200" />
          </div>
        </div>
        <p className="text-2xl mt-5 font-semibold text-gray-600 dark:text-white">
          Feed
        </p>
        <div className="flex mt-5 flex-col">
          <Post />
          <PostWithComment />
        </div>
      </div>
      <TrendingBar trending={true} suggestions={true} />
    </div>
  );
};

export default Dashboard;
