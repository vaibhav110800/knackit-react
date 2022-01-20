import React, { useState } from "react";
import Following from "../components/Following";
import Sidebar from "../components/Sidebar";
import Trending from "../components/Trending";

const Followers = () => {
  const [screen, setScreen] = useState("followers");
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar contacts={true} profileMini={true} />
      <div className="flex flex-col w-11/12 xl:w-6/12 border-r-2 dark:border-gray-700 overflow-y-auto px-8 hide-scrollbar">
        <p className="text-2xl mt-10 font-semibold text-gray-600 dark:text-white">
          iam_rohangupta
        </p>
        <div className="grid grid-cols-2 mt-10 w-full px-5">
          <p
            onClick={() => setScreen("followers")}
            className={`font-semibold pb-1 text-center cursor-pointer ${
              screen === "followers"
                ? "text-indigo-600 dark:text-indigo-300 dark:border-indigo-300 border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            Followers
          </p>
          <p
            onClick={() => setScreen("following")}
            className={`font-semibold pb-1 text-center ml-1 cursor-pointer ${
              screen === "following"
                ? "text-indigo-600 dark:text-indigo-300 dark:border-indigo-300 border-b-2 border-indigo-600"
                : "text-gray-500"
            }`}
          >
            Following
          </p>
        </div>
        {screen === "following" && (
          <div className="flex flex-col mt-5">
            <Following following={true} />
            <Following following={true} />
            <Following following={true} />
            <Following following={true} />
            <Following following={true} />
          </div>
        )}
        {screen === "followers" && (
          <div className="flex flex-col mt-5">
            <Following />
            <Following following={true} />
            <Following following={true} />
            <Following />
            <Following />
          </div>
        )}
      </div>
      <Trending trending={true} suggestions={true} />
    </div>
  );
};

export default Followers;
