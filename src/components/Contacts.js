import { MessageOutlined } from "@ant-design/icons";
import React from "react";

const Contacts = () => {
  return (
    <div className="flex md:hidden xl:block flex-col items-end justify-end w-full">
      <div className="w-full pr-10 border-t-2 border-gray-300 dark:border-gray-700 mt-10 pt-5">
        <div className="flex justify-between items-center mb-5">
          <p className="text-xl font-semibold pl-3 text-gray-600 dark:text-gray-200">
            Contacts
          </p>
          <a
            href="#!"
            className="text-indigo-500 dark:text-indigo-300  text-lg"
          >
            View all
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 object-cover mx-3 p-1"
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
          <MessageOutlined className="text-2xl dark:text-white cursor-pointer font-bold" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="rounded-full h-12 w-12 object-cover mx-3 p-1"
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
          <MessageOutlined className="text-2xl dark:text-white cursor-pointer font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
