import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const page = window.location.href.split("/settings/")[1];
  console.log(page);
  return (
    <div className="w-96 overflow-y-auto hide-scrollbar flex flex-col overflow-x-hidden border-r-2 dark:border-gray-700 border-gray-200">
      <p className="text-2xl mt-10 mb-5 font-semibold pl-5 text-gray-600 dark:text-white">
        Settings
      </p>
      <div
        className={`flex justify-between py-2 my-2 px-5  font-medium items-center text-lg ${
          page === "profile"
            ? "text-indigo-500 hover:text-indigo-600 bg-indigo-100"
            : "text-gray-500 hover:text-gray-700 dark:text-stone-300 dark:hover:text-stone-100 transition-colors"
        }`}
      >
        <Link to="/settings/profile">Profile</Link>
        <RightOutlined />
      </div>
      <div
        className={`flex justify-between py-2 my-2 px-5  font-medium items-center text-lg ${
          page === "notifications"
            ? "text-indigo-500 hover:text-indigo-600 bg-indigo-100"
            : "text-gray-500 hover:text-gray-700 dark:text-stone-300 dark:hover:text-stone-100 transition-colors"
        }`}
      >
        <Link to="#!">Notifications</Link>
        <RightOutlined />
      </div>
      <div
        className={`flex justify-between py-2 my-2 px-5  font-medium items-center text-lg ${
          page === "category"
            ? "text-indigo-500 hover:text-indigo-600 bg-indigo-100"
            : "text-gray-500 hover:text-gray-700 dark:text-stone-300 dark:hover:text-stone-100 transition-colors"
        }`}
      >
        <Link to="/settings/category">Preffered Categories</Link>
        <RightOutlined />
      </div>
      <div
        className={`flex justify-between py-2 my-2 px-5  font-medium items-center text-lg ${
          page === "display"
            ? "text-indigo-500 hover:text-indigo-600 bg-indigo-100"
            : "text-gray-500 hover:text-gray-700 dark:text-stone-300 dark:hover:text-stone-100 transition-colors"
        }`}
      >
        <Link to="/settings/display">Display</Link>
        <RightOutlined />
      </div>
    </div>
  );
};

export default Settings;
