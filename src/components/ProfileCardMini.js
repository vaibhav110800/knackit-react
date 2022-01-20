import { MoreOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCardMini = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-self-end self-end items-end justify-end w-full">
      <div className="w-full xl:pr-10 border-t-2 border-gray-300 dark:border-gray-700 mt-10 xl:mb-16 pt-5">
        <div className="flex justify-center xl:justify-between items-center mb-5">
          <div
            onClick={() => navigate("/profile/creator")}
            className="xl:flex xl:justify-between cursor-pointer xl:items-end"
          >
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="User"
              className="rounded-full h-16 w-16 mx-auto xl:p-2 object-cover"
            />
            <div className="flex flex-col p-2 md:hidden xl:block">
              <p className="dark:text-stone-200 text-base text-gray-600">
                Ayyush Verma
              </p>
              <p className="dark:text-stone-400 text-gray-500 text-sm">
                @atlancey
              </p>
            </div>
          </div>
          <MoreOutlined className="rotate-90 hidden xl:block dark:text-white text-2xl font-bold" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCardMini;
