import {
  CalendarOutlined,
  CameraOutlined,
  DownOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import React from "react";

const Profile = () => {
  return (
    <div className="flex dark:text-white flex-col w-6/12 overflow-y-auto h-screen px-8 hide-scrollbar">
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl text-gray-600 dark:text-white font-bold">
          Edit Profile
        </h1>
        <button className="text-white bg-indigo-500 rounded-lg px-8 py-2">
          Save
        </button>
      </div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="User"
          className="rounded-full h-28 w-28 mt-5"
        />
        <CameraOutlined className="text-white bg-indigo-500 cursor-pointer rounded-full text-2xl absolute left-24 bottom-1 w-10 h-10" />
      </div>

      <div className="flex flex-col w-full pr-5 mt-8">
        <input
          type="text"
          placeholder="Enter your username"
          className="border-b-2 bg-transparent text-lg py-1 font-light outline-none focus:outline-none border-red-500 focus:border-gray-400 pl-2 pb-2"
        />
        <span className="text-red-500 text-xs mt-1">
          Please enter valid username
        </span>
      </div>
      <div className="flex items-start mt-8 pr-5">
        <div className="flex flex-col w-1/2 mr-5">
          <input
            type="text"
            placeholder="Enter your first name"
            className="border-b-2 bg-transparent text-lg py-1 font-light outline-none focus:outline-none border-red-500 focus:border-gray-400 pl-2 pb-2"
          />
          <span className="text-red-500 text-xs mt-1">
            Please enter valid First name
          </span>
        </div>
        <div className="flex flex-col w-1/2">
          <input
            type="text"
            placeholder="Enter your last name"
            className="border-b-2 bg-transparent text-lg py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
        </div>
      </div>
      <div className="flex flex-col w-full pr-5 mt-8">
        <textarea
          type="text"
          rows={1}
          placeholder="Enter your bio"
          className="border-b-2 bg-transparent pl-2 pb-2 text-lg py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300"
        />
      </div>
      <div className="flex items-start mt-8 pr-5">
        <div className="flex justify-between w-1/2">
          <input
            type="text"
            placeholder="Enter your DOB"
            className="border-b-2 bg-transparent text-lg w-full py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
          <i className="px-3 mr-5 text-gray-500 cursor-pointer">
            <CalendarOutlined />
          </i>
        </div>
        <div className="flex justify-between w-1/2">
          <input
            type="text"
            placeholder="Choose your gender"
            className="border-b-2 bg-transparent text-lg w-full py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
          <i className="px-3 text-gray-500 cursor-pointer">
            <DownOutlined />
          </i>
        </div>
      </div>
      <div className="flex flex-col w-full pr-5 mt-8">
        <input
          type="text"
          placeholder="Enter your hobby"
          className="border-b-2 bg-transparent text-lg py-1 font-light outline-none focus:outline-none focus:border-gray-400 border-gray-300 pl-2 pb-2"
        />
      </div>
      <div className="flex flex-col w-full pr-5 mt-8">
        <input
          type="text"
          placeholder="Enter your langauges"
          className="border-b-2 bg-transparent text-lg py-1 font-light outline-none focus:outline-none focus:border-gray-400 border-gray-300 pl-2 pb-2"
        />
      </div>
      <div className="flex flex-col w-full pr-5 mt-8">
        <p className=" mb-5 text-xl font-medium">Enter your social links</p>
        <div className="flex my-2">
          <InstagramFilled className="mr-3 text-3xl px-3 text-gray-500 dark:text-stone-100" />
          <input
            type="text"
            placeholder="Instagram"
            className="border-b-2 bg-transparent w-full text-lg py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
        </div>
        <div className="flex my-2">
          <FacebookFilled className="mr-3 text-3xl px-3 text-gray-500 dark:text-stone-100" />
          <input
            type="text"
            placeholder="Facebook"
            className="border-b-2 bg-transparent w-full text-lg py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
        </div>
        <div className="flex my-2">
          <LinkedinFilled className="mr-3 text-3xl px-3 text-gray-500 dark:text-stone-100" />
          <input
            type="text"
            placeholder="Linkedin"
            className="border-b-2 bg-transparent w-full text-lg py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
        </div>
        <div className="flex my-2">
          <TwitterCircleFilled className="mr-3 text-3xl px-3 text-gray-500 dark:text-stone-100" />
          <input
            type="text"
            placeholder="Twitter"
            className="border-b-2 bg-transparent w-full text-lg py-1 font-light outline-none focus:border-gray-400 focus:outline-none border-gray-300 pl-2 pb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
