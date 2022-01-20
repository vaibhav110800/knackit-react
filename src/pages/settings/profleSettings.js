import React from "react";
import Profile from "../../components/Settings/Profile";
import Settings from "../../components/Settings/Settings";
import Sidebar from "../../components/Sidebar";

const ProfileSettings = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-100 xl:px-8 2xl:px-16 sm:px-2 dark:bg-gray-800 overflow-y-hidden from-sky-700 to-indigo-800 flex justify-start">
      <Sidebar contacts={true} profileMini={true} />
      <Settings />
      <Profile />
    </div>
  );
};

export default ProfileSettings;
