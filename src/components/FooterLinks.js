import React from "react";

const FooterLinks = () => {
  return (
    <div className="w-full px-5 py-2 mt-3">
      <span className="pr-2 text-xs cursor-pointer text-gray-400 hover:text-gray-500 dark:text-stone-100 dark:hover:text-white">
        About
      </span>
      <span className="pr-2 text-xs cursor-pointer text-gray-400 hover:text-gray-500 dark:text-stone-100 dark:hover:text-white">
        IOS
      </span>
      <span className="pr-2 text-xs cursor-pointer text-gray-400 hover:text-gray-500 dark:text-stone-100 dark:hover:text-white">
        Android
      </span>
      <span className="pr-2 text-xs cursor-pointer text-gray-400 hover:text-gray-500 dark:text-stone-100 dark:hover:text-white">
        Blogs
      </span>
      <span className="pr-2 text-xs cursor-pointer text-gray-400 hover:text-gray-500 dark:text-stone-100 dark:hover:text-white">
        Privacy terms
      </span>
      <span className="pr-2 text-xs cursor-pointer text-gray-400 hover:text-gray-500 dark:text-stone-100 dark:hover:text-white">
        Help and Support
      </span>
    </div>
  );
};

export default FooterLinks;
