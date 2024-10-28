import Image from "next/image";
import React from "react";
import img from "../../../public/b.jpg";

const Actuals = () => {
  return (
    <div className="w-full h-[80vh] border border-gray-300 rounded-md mt-4 p-2 flex flex-col">
      <div className="w-full h-10 flex items-center justify-start gap-2 p-2">
        <input
          className="w-1/5 h-8 px-2 border border-gray-300 rounded-md "
          type="text"
          placeholder="search project "
        />
        <div>
          <button className="w-28 h-7 border border-gray-300 rounded-md mx-2">
            Project 1
          </button>
          <button className="w-28 h-7 border border-gray-300 rounded-md">
            Project 2
          </button>
        </div>
      </div>
      <div className="w-full  flex flex-wrap gap-2 my-2 ">
        <div className="w-[200px] h-[200px] border border-gray-300 rounded-md flex items-center justify-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </div>

        <div className="w-[200px] h-[200px] border border-gray-300 rounded-md overflow-hidden">
          <div className="h-full w-full relative">
            <Image
              src={img}
              alt="archti"
              layout="fill" // Make the image fill the parent container
              objectFit="cover" // Cover the entire area
              className="rounded-md" // Optional: to keep the rounded corners
            />
          </div>
        </div>
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md mt-auto"></div>
    </div>
  );
};

export default Actuals;
