import {
  GiftOutlined,
  HeartOutlined,
  MessageOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import Comments from "../Comments";
import SendGifts from "./SendGifts";

const Post = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={<></>}
        classNames={{
          modal: "customModal",
        }}
      >
        <SendGifts />
      </Modal>
      <div className="bg-white overflow-y-auto hidden-scrollbar w-full pt-8 pb-16 px-5 max-h-modal rounded-lg">
        <div className="flex justify-between">
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
          <div className="flex items-center">
            <Link className="text-indigo-600 hover:text-indigo-700" to="#!">
              + Follow
            </Link>
            <MoreOutlined className="rotate-90 cursor-pointer font-bold text-3xl mx-5" />
          </div>
        </div>
        <p className="text-gray px-5 500 text-lg py-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corrupti beatae perferendis libero architecto, tempore quae debitis
          dolorum, illo blanditiis quas eius magni quod molestiae sequi iste
          recusandae optio? Voluptatibus laborum ut iure, magnam molestias
          quisquam excepturi est, quaerat expedita, officiis quo id ullam sint
          iste natus nisi necessitatibus vero! Incidunt nisi, odit quae eaque
          perferendis aspernatur eligendi nostrum sit labore modi totam ullam ut
          assumenda mollitia quia pariatur illo maxime adipisci illum excepturi
          dicta quis? Consequatur, at. Expedita suscipit ratione quasi
          voluptatibus? Quae omnis laboriosam ut sunt soluta. Sed, minima ea
          enim labore hic quas vel a dolore eveniet.
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
          </div>
          <GiftOutlined
            onClick={() => setOpen(true)}
            className="pr-12 cursor-pointer text-2xl text-gray-700 font-bold"
          />
        </div>
        <div className="flex items-center mt-4 p-4">
          <img
            className="rounded-full h-10 w-10 object-cover cursor-pointer mx-3 p-1"
            alt="story"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <input
            type="text"
            placeholder="Add a Comment"
            className="pb-1 mx-2 border-b-2 border-gray-300 transition-colors focus:border-gray-500 focus:outline-none w-full"
          />
          <Link
            to="#!"
            className="mx-4 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Post
          </Link>
        </div>
        <div className="flex flex-col">
          <Comments />
          <Comments />
          <Link to="#!" className="text-indigo-600 ml-5 mt-5">
            See all comments
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
