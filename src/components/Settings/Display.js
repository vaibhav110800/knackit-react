import React from "react";

const Display = () => {
  return (
    <div className="flex flex-col w-6/12 overflow-y-auto dark:text-white h-screen px-8 hide-scrollbar">
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl dark:text-white text-gray-600 font-bold">
          Preferred Categories
        </h1>
        <button className="text-white bg-indigo-500 rounded-lg px-8 py-2">
          Save
        </button>
      </div>
      <p className="text-gray-500 dark:text-stone-100 text-lg mt-8 mb-3">
        Choose your language
      </p>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="language"
          form="language"
          id="english"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="english" className="text-lg ml-3">
          English
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="language"
          form="language"
          id="hindi"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="hindi" className="text-lg ml-3">
          Hindi
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="language"
          form="language"
          id="bhojpuri"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="bhojpuri" className="text-lg ml-3">
          Bhojpuri
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="language"
          form="language"
          id="gujrati"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="gujrati" className="text-lg ml-3">
          Gujrati
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="language"
          form="language"
          id="marathi"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="marathi" className="text-lg ml-3">
          Marathi
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="language"
          form="language"
          id="kannad"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="kannad" className="text-lg ml-3">
          Kannad
        </label>
      </div>
      <p className="text-gray-500 text-lg mt-8 mb-3 dark:text-stone-100">
        Choose your preferrence
      </p>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="mode"
          form="mode"
          id="dark"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="dark" className="text-lg ml-3">
          Dark mode
        </label>
      </div>
      <div className="flex my-2 items-center">
        <input
          type="radio"
          name="mode"
          form="mode"
          id="light"
          className="checked:bg-indigo-300 h-5 w-5 rounded-md"
        />
        <label htmlFor="light" className="text-lg ml-3">
          Light mode
        </label>
      </div>
    </div>
  );
};

export default Display;
