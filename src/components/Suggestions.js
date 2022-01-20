import React from "react";

const Suggestions = () => {
  return (
    <div className="flex  flex-col items-start justify-start w-full">
      <div className="pl-5 max-w-80 border-t-2 w-full border-gray-300 dark:border-gray-700 mt-3 pt-5">
        <div className="flex items-center mb-5">
          <p className="text-xl font-semibold text-gray-600 dark:text-white">
            Suggestions for you
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full ring-2 ring-green-500 h-12 w-12 object-cover mx-3 p-1"
              alt="user"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <div className="flex flex-col p-2">
              <p className="text-gray-600 dark:text-stone-200 text-base font-semibold">
                Kaustubh
              </p>
              <p className="text-gray-500 dark:text-stone-400 text-sm">
                @smallcasez
              </p>
            </div>
          </div>
          <span className="text-indigo-500 dark:text-indigo-300 text-base font-semibold cursor-pointer">
            + Follow
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full ring-2 ring-green-500 h-12 w-12 object-cover mx-3 p-1"
              alt="user"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <div className="flex flex-col p-2">
              <p className="text-gray-600 dark:text-stone-200 text-base font-semibold">
                Kaustubh
              </p>
              <p className="text-gray-500 dark:text-stone-400 text-sm">
                @smallcasez
              </p>
            </div>
          </div>
          <span className="text-indigo-500 dark:text-indigo-300 text-base font-semibold cursor-pointer">
            + Follow
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full ring-2 ring-green-500 h-12 w-12 object-cover mx-3 p-1"
              alt="user"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <div className="flex flex-col p-2">
              <p className="text-gray-600 dark:text-stone-200 text-base font-semibold">
                Kaustubh
              </p>
              <p className="text-gray-500 dark:text-stone-400 text-sm">
                @smallcasez
              </p>
            </div>
          </div>
          <span className="text-indigo-500 dark:text-indigo-300 text-base font-semibold cursor-pointer">
            + Follow
          </span>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
