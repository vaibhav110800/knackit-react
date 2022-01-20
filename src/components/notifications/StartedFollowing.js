import React from "react";

const StartedFollowing = () => {
  return (
    <div className="flex my-3 items-center  dark:text-white">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="user"
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="flex flex-col ml-4">
        <p className="text-base">
          <strong>Aayush verma</strong> started following you{" "}
          <span className="text-gray-500 ml-2">10d</span>
        </p>
        <button className="w-24 py-1 my-2 rounded-md text-sm bg-indigo-600 hover:bg-indigo-700 transition-colors text-white">
          + Follow
        </button>
      </div>
    </div>
  );
};

export default StartedFollowing;
