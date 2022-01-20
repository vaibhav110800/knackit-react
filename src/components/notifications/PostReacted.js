import React from "react";

const PostReacted = () => {
  return (
    <div className="flex my-3 items-center  dark:text-white justify-between">
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="user"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex flex-col ml-4 ">
          <p className="text-base">
            <strong>Aayush verma</strong> reacted on your post{" "}
            <span className="text-gray-500 ml-2">10d</span>
          </p>
          <p className="my-1 text-gray-500  dark:text-stone-300">
            Some text from the post
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Post"
        className="h-12 w-20 object-cover"
      />
    </div>
  );
};

export default PostReacted;
