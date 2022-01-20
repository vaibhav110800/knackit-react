import { PlayCircleFilled, PlaySquareOutlined } from "@ant-design/icons";
import React from "react";

const Reels = () => {
  return (
    <div className="h-96 w-full bg-black mb-5 relative">
      <img
        src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Reels"
        className="h-full w-full object-cover hover:opacity-60 relative z-0 transition-opacity"
      />
      <div className="flex z-10 items-center text-white absolute bottom-3 left-3">
        <PlayCircleFilled className="z-10 text-white text-2xl cursor-pointer" />
        <p className="text-white text-sm mt-2 ml-3">499k</p>
      </div>
    </div>
  );
};

export default Reels;
