import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import React from "react";

const Comments = () => {
  return (
    <div className="flex justify-between px-4 my-2 items-start">
      <div className="flex">
        <img
          className="rounded-full h-10 w-10 object-cover cursor-pointer mx-3 p-1"
          alt="story"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
        <div className="flex flex-col">
          <p className="text-base font-semibold cursor-pointer">
            Utkarsh Agarwal
          </p>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            hendrerit. r sit amet, consectetur adipiscing elit. V
          </p>
          <div className="flex items-center mt-2">
            <HeartOutlined className="mr-1" /> 222{" "}
            <CommentOutlined className="ml-3 mr-1" /> 18
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mx-5">5h</p>
    </div>
  );
};

export default Comments;
