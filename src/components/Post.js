import {
  GiftOutlined,
  HeartOutlined,
  MessageOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import Options from "./overlays/Options";
import SendGifts from "./overlays/SendGifts";
const Post = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(false);
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <SendGifts />
      </Modal>

      <div className="bg-white w-full mb-5 py-5 rounded-lg">
        <div className="flex justify-between px-5">
          <div className="flex items-center">
            <img
              className="rounded-full h-14 w-14 object-cover ring-4 ring-green-600 cursor-pointer mx-3 p-1"
              alt="story"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
            <div className="flex flex-col ml-5">
              <p className="text-lg">Aayush Verma</p>
              <p className="text-sm font-light">@atlancey</p>
            </div>
          </div>
          <Options
            visible={options}
            arr={[
              "Copy link",
              "Not interested",
              "Report @aayush11",
              "Unfollow @aayush1",
            ]}
          />
          <MoreOutlined
            onClick={() => setOptions(true)}
            className="rotate-90 cursor-pointer font-bold text-3xl mr-5"
          />
        </div>
        <img
          src="https://images.unsplash.com/photo-1500111709600-7761aa8216c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Post"
          className="w-full max-h-96 object-cover my-5"
        />
        <p className="text-gray px-5 500 text-lg">
          Dance with nature and passion{" "}
          <span className="text-indigo-600">#life</span>{" "}
          <span className="text-indigo-600">#lifestyle</span>{" "}
          <span className="text-indigo-600">#style</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="ml-5 mt-2 flex items-center">
            <HeartOutlined className="px-2 cursor-pointer text-2xl text-gray-500" />
            <span className="text-lg pr-4 mt-2 text-gray-600">2.5k</span>
            <MessageOutlined className="px-2 cursor-pointer text-2xl text-gray-500" />
            <span className="text-lg pr-4 mt-2 text-gray-600">1k</span>
            <ShareAltOutlined className="px-2 cursor-pointer text-2xl text-gray-500" />
          </div>
          <GiftOutlined
            onClick={() => setOpen(true)}
            className="pr-12 cursor-pointer text-2xl text-gray-700 font-bold"
          />
        </div>
      </div>
    </>
  );
};

export default Post;
