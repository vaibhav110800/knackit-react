import { PlusOutlined } from "@ant-design/icons";
import React from "react";

const Addstory = () => {
  return (
    <div className="rounded-full h-14 w-14 flex justify-center items-center outline-gray-500 dark:outline-stone-300 outline-dashed cursor-pointer mx-3 p-1">
      <PlusOutlined className="text-gray-700 dark:text-stone-300" />
    </div>
  );
};

export default Addstory;
