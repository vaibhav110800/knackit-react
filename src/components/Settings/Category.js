import React from "react";

const Category = () => {
  return (
    <div className="flex flex-col w-6/12 overflow-y-auto dark:text-white h-screen px-8 hide-scrollbar">
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl text-gray-600 dark:text-white font-bold">
          Preferred Categories
        </h1>
        <button className="text-white bg-indigo-500 rounded-lg px-8 py-2">
          Save
        </button>
      </div>
      <p className="text-gray-500 text-lg mt-8 mb-3 dark:text-stone-100">
        What best describes you
      </p>
      <div className="flex my-2 items-center">
        <input
          type="checkbox"
          name="guitar"
          id="guitar"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="guitar" className="text-lg ml-3">
          Guitar
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="checkbox"
          name="piano"
          id="piano"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="piano" className="text-lg ml-3">
          Piano
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="checkbox"
          name="drums"
          id="drums"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="drums" className="text-lg ml-3">
          Drums
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="checkbox"
          name="beats"
          id="beats"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="beats" className="text-lg ml-3">
          Beats
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="checkbox"
          name="music"
          id="music"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="music" className="text-lg ml-3">
          Music
        </label>
      </div>
    </div>
  );
};

export default Category;
