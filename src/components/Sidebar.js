import React from "react";
import {
  CarryOutOutlined,
  ClearOutlined,
  EditOutlined,
  ExpandOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Logo from "../assets/Logo.png";
import LogoMini from "../assets/logo-mini.svg";
import Contacts from "./Contacts";
import ProfileCardMini from "./ProfileCardMini";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ contacts, profileMini }) => {
  let navigate = useNavigate();
  const screen = window.location.href.split("/")[3];
  return (
    <div className="relative xl:w-3/12 w-1/12 xl:pl-5 hide-scrollbar flex flex-col h-full justify-between bg-stone-100 border-r-2 border-gray-300 dark:border-gray-700 overflow-y-auto hide-scrollbar dark:bg-transparent">
      <div className="flex lg:flex-col flex-row ">
        <div className="w-full flex flex-col">
          <div className="flex xl:mr-16 xl:pt-10 pt-5">
            <img
              className="h-12 hidden xl:block ml-10 cursor-pointer"
              onClick={() => navigate("/")}
              alt="logo"
              src={Logo}
            />
            <img
              className="h-12 block xl:hidden ml-6 cursor-pointer"
              onClick={() => navigate("/")}
              alt="logo"
              src={LogoMini}
            />
            {/* <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
              KnackIt
            </span> */}
          </div>
          <nav className="mt-6 px-6 ">
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === ""
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="/"
            >
              <HomeOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Home
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "explore"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="/explore"
            >
              <ExpandOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Explore
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "notifications"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="/notifications"
            >
              <NotificationOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Notifications
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "favourites"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="#!"
            >
              <HeartOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                My favourites
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "creators"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="/creators"
            >
              <ClearOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Creators
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "subscription"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="/subscription"
            >
              <CarryOutOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Subscriptions
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "direct"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="#!"
            >
              <MessageOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Direct
              </span>
            </Link>
            <Link
              className={`hover:text-gray-800 flex items-center py-2 justify-center xl:justify-start mx-0 xl:mx-6 my-2 transition-colors rounded-lg duration-200 ${
                screen === "settings"
                  ? "hover:text-indigo-500 duration-200  text-indigo-600 dark:text-indigo-300"
                  : "dark:hover:text-white hover:text-gray-500 text-gray-600 dark:text-stone-200"
              } `}
              to="/settings/profile"
            >
              <SettingOutlined className="text-2xl" />
              <span className="mx-4 mt-2 text-lg font-normal hidden xl:block">
                Settings
              </span>
            </Link>
          </nav>
          <button className="hidden xl:block bg-indigo-600 hover:bg-indigo-700 dark:bg-white dark:hover:bg-stone-100 py-4 px-16 transition-colors rounded-lg mx-10 mt-5 w-100 text-white dark:text-indigo-600">
            Create Post
          </button>
          <button className="block xl:hidden bg-indigo-600 hover:bg-indigo-700 dark:bg-white dark:hover:bg-stone-100 transition-colors rounded-full mt-5 h-12 mx-auto w-12 text-white dark:text-indigo-600">
            <EditOutlined className="text-2xl" />
          </button>
        </div>
      </div>
      {contacts && <Contacts />}

      {profileMini && <ProfileCardMini />}
    </div>
  );
};

export default Sidebar;
