import {
  GiftFilled,
  HeartFilled,
  LikeFilled,
  MessageFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import ImagePost from "./overlays/ImagePost";
import Post from "./overlays/Post";

const PostExploreMini = ({ type }) => {
  const [openImagePost, setOpenImagePost] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  if (type === "image") {
    return (
      <>
        <Modal
          center
          open={openImagePost}
          onClose={() => setOpenImagePost(false)}
          closeIcon={<></>}
          classNames={{
            modal: "customModal w-3/4",
          }}
        >
          <ImagePost />
        </Modal>
        <div
          onClick={() => {
            setOpenImagePost(true);
          }}
          class="mb-4 break-inside bg-white border flex flex-col border-gray-300"
        >
          <div className="flex justify-between items-center pl-1 pr-5 pt-1">
            <div
              // onClick={}
              className="flex justify-between cursor-pointer items-end"
            >
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="User"
                className="rounded-full h-16 w-16 p-2"
              />
              <div className="flex flex-col p-2">
                <p className="text-base text-gray-600">Ayyush Verma</p>
                <p className=" text-gray-500 text-sm">@atlancey</p>
              </div>
            </div>
            <Link className="text-indigo-600 hover:text-indigo-700" to="#!">
              + Follow
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Post"
            className="w-full object-cover max-h-48 my-3"
          />
          <div className="flex flex-col py-5 px-3">
            <p className="text-base font-light">
              Dance with nature and sunshine
            </p>
            <p className="mt-3 text-base text-indigo-600 w-1/2 cursor-pointer">
              #dance #skillindia #roads #love #peace
            </p>
          </div>
          <div className="flex px-3 pb-3 items-center">
            <HeartFilled className="text-lg text-red-500" />
            <LikeFilled className="text-lg text-blue-500" />
            <MessageFilled className="text-lg text-lime-600" />
            <GiftFilled className="text-lg text-yellow-500" />
            <p className="ml-3 text-gray-500">4348 Impressions</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Modal
          center
          open={openPost}
          closeIcon={<></>}
          onClose={() => setOpenPost(false)}
          classNames={{
            modal: "customModal w-1/3",
          }}
        >
          <Post />
        </Modal>
        <div
          onClick={() => setOpenPost(true)}
          class="mb-4 flex-nowrap break-inside bg-white border flex flex-col border-gray-300"
        >
          <div className="flex justify-between items-center pl-1 pr-5 pt-1">
            <div
              // onClick={}
              className="flex justify-between cursor-pointer items-end"
            >
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="User"
                className="rounded-full h-16 w-16 p-2"
              />
              <div className="flex flex-col p-2">
                <p className="text-base text-gray-600">Ayyush Verma</p>
                <p className=" text-gray-500 text-sm">@atlancey</p>
              </div>
            </div>
            <Link className="text-indigo-600 hover:text-indigo-700" to="#!">
              + Follow
            </Link>
          </div>
          <div className="flex flex-col py-5 px-3">
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quis mollitia officia fugiat nam? Unde maxime dicta esse magni
              consectetur quos sapiente accusamus quas. Pariatur molestias
              magnam totam architecto, non vel provident placeat in ut sit
              beatae cum quia ipsum excepturi fugit fuga accusamus ullam velit
              error! Iusto explicabo quas quod, veritatis suscipit magni
              consectetur error totam quia molestiae animi cumque porro
              praesentium voluptates dolore earum ratione pariatur minus aliquam
              repellat.
            </p>
            <p className="mt-3 text-base text-indigo-600 w-1/2 cursor-pointer">
              #dance #skillindia #roads #love #peace
            </p>
          </div>
          <div className="flex px-3 pb-3 items-center">
            <HeartFilled className="text-lg text-red-500" />
            <LikeFilled className="text-lg text-blue-500" />
            <MessageFilled className="text-lg text-lime-600" />
            <GiftFilled className="text-lg text-yellow-500" />
            <p className="ml-3 text-gray-500">4348 Impressions</p>
          </div>
        </div>
      </>
    );
  }
};

export default PostExploreMini;
