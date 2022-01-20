import React from "react";

const Unfollow = () => {
  return (
    <div className="bg-white flex flex-col items-center px-3 py-5">
      <img
        className="rounded-full h-16 w-16 object-cover mx-1 p-1"
        alt="user"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <p className="text-lg font-semibold">Unfollow @aaaa</p>
      <p className="text-xs w-64 text-center pt-3">
        Their posts will no longer show up in your home timeline. You can still
        view their profile.
      </p>
      <div className="flex mt-5">
        <button className="border py-1 w-24 rounded-md mx-1 border-indigo-600 hover:bg-stone-100 text-indigo-600">
          Cancel
        </button>
        <button className="border py-1 w-24 rounded-md mx-1 border-red-500 bg-red-500 hover:bg-red-600 text-white">
          Unfollow
        </button>
      </div>
    </div>
  );
};

export default Unfollow;
