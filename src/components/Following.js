import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import Unfollow from "./overlays/Unfollow";

const Following = ({ following }) => {
  const [btn, setBtn] = useState("Following");
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        center
        closeIcon={<></>}
        open={open}
        classNames={{
          modal: "customModal",
        }}
        onClose={() => setOpen(false)}
      >
        <Unfollow />
      </Modal>
      <div className="w-full px-5 items-center py-3 flex justify-between">
        <div className="flex items-center">
          <img
            className="rounded-full h-12 w-12 object-cover mx-1 p-1"
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
        {following ? (
          <button
            onClick={() => setOpen(true)}
            onMouseEnter={() => setBtn("Unfollow")}
            onMouseLeave={() => setBtn("Following")}
            className="border transition-colors h-8 rounded-md text-sm text-indigo-600 dark:bg-stone-100 hover:text-red-600 duration-75 border-indigo-600 hover:border-red-500 py-1 w-24"
          >
            {btn}
          </button>
        ) : (
          <button className="border transition-colors h-8 rounded-md text-sm text-white hover:bg-indigo-600 duration-75 bg-indigo-500 border-indigo-600  py-1 w-24">
            {" "}
            + Follow
          </button>
        )}
      </div>
    </>
  );
};

export default Following;
