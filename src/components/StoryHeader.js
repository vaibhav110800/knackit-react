import React from "react";

const StoryHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="rounded-full h-14 w-14 object-cover ring-2 ring-green-500 cursor-pointer mx-3 p-1"
        alt="story"
        src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"
      />
      <p className="font-semibold mt-2 text-black dark:text-stone-200">Aman</p>
    </div>
  );
};

export default StoryHeader;
