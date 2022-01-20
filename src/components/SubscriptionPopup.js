import React from "react";

const SubscriptionPopup = () => {
  return (
    <div className="bg-white  border-gray-300 rounded-md ml-5 flex items-center p-4 mt-5 border-solid border">
      <img
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80"
        alt="Subscription"
        className="h-8 w-8 rounded-full"
      />
      <p className="text-xs mx-4">
        Someone purchased Shivani's Subscription Plan
      </p>
      <a href="#!" className="text-sm  text-indigo-500">
        View
      </a>
    </div>
  );
};

export default SubscriptionPopup;
