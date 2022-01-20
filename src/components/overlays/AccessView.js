import React from "react";
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
const AccessView = ({ setOpen }) => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-gray-700 text-lg ">Post audience</h1>
      <h2 className="text-gray-600 text-base mt-3">Who can see this?</h2>
      <h2 className="text-gray-500 text-sm">
        Posts appear in news feed, the posts section and search results.
      </h2>
      <div className="flex flex-col my-5">
        <div className="flex items-center my-3">
          <input type="radio" name="access" id="public" className="h-5 w-5" />
          <label htmlFor="public">
            <div className="flex ml-3 items-center">
              <BorderlessTableOutlined className="text-2xl mr-3 mb-1" />
              <div className="flex flex-col">
                <p className="text-base">Public</p>
                <p className="text-sm text-gray-500">
                  Anyone ON or OFF Knackit
                </p>
              </div>
            </div>
          </label>
        </div>
        <div className="flex items-center my-3">
          <input type="radio" name="access" id="public" className="h-5 w-5" />
          <label htmlFor="public">
            <div className="flex ml-3 items-center">
              <TeamOutlined className="text-2xl mr-3 mb-1" />
              <div className="flex flex-col">
                <p className="text-base">Followers</p>
                <p className="text-sm text-gray-500">
                  Your followers on Knackit
                </p>
              </div>
            </div>
          </label>
        </div>
        <div className="flex items-center my-3">
          <input type="radio" name="access" id="public" className="h-5 w-5" />
          <label htmlFor="public">
            <div className="flex ml-3 items-center">
              <UserOutlined className="text-2xl mr-3 mb-1" />
              <div className="flex flex-col">
                <p className="text-base">Only me</p>
                <p className="text-sm text-gray-500">Only I, Me and Myself</p>
              </div>
            </div>
          </label>
        </div>
        <div className="flex items-center my-3">
          <input type="radio" name="access" id="public" className="h-5 w-5" />
          <label htmlFor="public">
            <div className="flex ml-3 items-center">
              <AimOutlined className="text-2xl mr-3 mb-1" />
              <div className="flex flex-col">
                <p className="text-base">Subscribers</p>
                <p className="text-sm text-gray-500">
                  Your subscribers on Knackit
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          name="cost"
          id="cost"
          className="h-5 w-5 mr-5 ml-8"
        />
        <label htmlFor="cost">One time cost for others to see the post</label>
      </div>
      <input
        type="number"
        step={0.01}
        placeholder="$0.00"
        className="border-gray-300 focus:border-gray-400 focus:outline-none text-lg ml-8 border-b-2 mt-3 pb-2"
      />
      <div className="flex justify-end mt-5">
        <div className="self-end">
          <button
            onClick={() => setOpen(false)}
            className="border-indigo-600 border rounded-lg hover:ring-indigo-700 text-indigo-600 w-24 py-1 mx-2"
          >
            Back
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-indigo-600 hover:bg-indigo-700 border-indigo-600 border text-white w-24 py-1 rounded-lg mx-2"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessView;
