import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const Contacts = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 p-2 border-b-2 border-b-gray-200 hover:bg-gray-200 cursor-pointer">
        <div className="flex items-center gap-4">
          <figure className="w-14 h-14 border rounded-full flex items-center justify-center">
            <Image
              src={logo}
              alt="User logo"
              className="w-[90%] h-[90%] rounded-full object-cover"
            />
          </figure>
          <div className="flex flex-col">
            <h2 className="text-sm font-medium">Name Surname</h2>
            <h3 className="text-xs text-gray-600">Other detail</h3>
            <h3 className="text-xs text-gray-400">41 min ago</h3>
          </div>
        </div>
        <button className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Contacts;
