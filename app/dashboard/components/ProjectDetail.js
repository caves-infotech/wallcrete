"use client";
import React, { useState } from "react";
import { useMyContext } from "./Context";
import Floors from "./Floors";

const ProjectDetail = () => {
  const { data } = useMyContext();
  const [activeButton, setActiveButton] = useState("All");
  const buttons = [
    {
      label: "All",
      content: (
        <div className="w-[80vw] md:w-[52vw] h-[542px]  p-2 border-2 border-gray-200 shadow-lg rounded-lg mt-0 lg:mt-4 -ml-3 flex items-center justify-center xxl:mt-6">
          This is all div
        </div>
      ),
    },
    {
      label: "DW",
      content: (
        <div className="w-[77vw] md:w-full lg:mt-2 lg:ml-auto ">
          <Floors isReversed={false} />
          {/* <Floors isReversed={true} />
          <Floors isReversed={false} />
          <Floors isReversed={true} />
          <Floors isReversed={false} /> */}
        </div>
      ),
    },
    {
      label: "Media",
      content: (
        <div className="w-[77vw] md:w-[50vw] h-[542px]  p-2 border-2 border-gray-200 shadow-lg rounded-lg mt-4 -ml-3 "></div>
      ),
    },
    {
      label: "Doc",
      content: (
        <div className="w-[77vw] md:w-[50vw] h-[542px]  p-2 border-2 border-gray-200 shadow-lg rounded-lg mt-4 -ml-3"></div>
      ),
    },
  ];

  return (
    <div className="w-[80vw] lg:w-[50vw] ml-14 lg:-ml-4 h-16 md:h-12 lg:h-24 p-2 border border-gray-300 rounded-xl xxl:h-24 ">
      <div>
        {/* <div className="flex items-center justify-between h-12 px-14">
          <h1>Project Name: {data.name || "-"}</h1>
          <h2>
            Members:
            {data.members && data.members.length > 0 ? (
              data.members.map((e, index) => (
                <h3
                  key={index}
                  className="inline mx-1 border border-gray-400 px-2 rounded-lg "
                >
                  {e.name}
                </h3> // Display each member's name
              ))
            ) : (
              <span> No members available</span> // If no members are present
            )}
          </h2>
        </div> */}

        <div className="w-full  border-b-4 border-b-gray-300 h-12 mt-2 md:mt-10 rounded-md">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={`w-20 md:w-32 h-full  text-slate-800 text-sm  transition-all
              ${
                activeButton === btn.label
                  ? "border-b-4 border-b-slate-500"
                  : "hover:border-b-4 hover:border-b-slate-500"
              }`}
              onClick={() => setActiveButton(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="w-full h-[90%] mt-1 p-1 flex items-center justify-center">
          {buttons.find((btn) => btn.label === activeButton)?.content}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
