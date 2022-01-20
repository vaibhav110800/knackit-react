import {
  AimOutlined,
  BorderlessTableOutlined,
  CiCircleTwoTone,
  InstagramOutlined,
  PictureOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import AccessView from "./overlays/AccessView";

const AddPost = ({ setOpen }) => {
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <Modal
        open={open2}
        onClose={() => {
          setOpen2(false);
          setOpen(true);
        }}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <AccessView setOpen={setOpen2} />
      </Modal>
      <div
        className={`bg-white rounded-lg w-full p-5 flex ${
          setOpen ? "p-4 my-10" : ""
        } h-fit flex-col`}
      >
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="User"
            className="rounded-full h-20 w-20 mx-auto p-2"
          />
          <textarea
            onClick={() => setOpen && setOpen(true)}
            type="text"
            rows={setOpen ? 1 : 5}
            readOnly
            className=" outline-none w-full mx-4 mt-6 bg-white text-black text-lg"
            placeholder="What's happening?"
          />
        </div>
        <div
          className={`${
            setOpen ? "ml-20" : "mt-3"
          } flex items-center justify-between`}
        >
          <div className="flex">
            <button className="flex align-middle justify-center bg-white my-2 py-2 px-4 rounded-lg hover:text-gray-700 hover:bg-gray-100 transition-colors text-gray-500 dark:text-gray-500">
              <PictureOutlined className="my-1" /> <p className="ml-2">Photo</p>
            </button>
            <button className="flex align-middle justify-center bg-white my-2 py-2 px-4 rounded-lg hover:text-gray-700 hover:bg-gray-100 transition-colors text-gray-500 dark:text-gray-500">
              <InstagramOutlined className="my-1" />{" "}
              <p className="ml-2">Reels</p>
            </button>
            <button className="flex align-middle justify-center bg-white my-2 py-2 px-4 rounded-lg hover:text-gray-700 hover:bg-gray-100 transition-colors text-gray-500 dark:text-gray-500">
              <VideoCameraOutlined className="my-1" />{" "}
              <p className="ml-2">Video</p>
            </button>
          </div>
          {!setOpen && (
            <div className="flex items-center">
              <p
                onClick={() => {
                  setOpen2(true);
                  setOpen(false);
                }}
                className="font-medium bg-gray-100 py-2 cursor-pointer px-5 rounded-lg text-gray-700"
              >
                Anyone{" "}
              </p>
              <button className="bg-indigo-600 w-24 py-2 rounded-lg ml-3 hover:bg-indigo-700 text-white">
                Post
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddPost;
