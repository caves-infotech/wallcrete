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
        <div className="w-[80vw] md:w-[52vw] h-[542px]  p-2 hadow-lg rounded-lg mt-0 lg:mt-4 flex items-center justify-center xxl:mt-6">
          This is all div
        </div>
      ),
    },
    {
      label: "Drawing's",
      content: (
        <div className="w-[77vw] md:w-full lg:mt-2">
          <Floors isReversed={false} />
        </div>
      ),
    },
    {
      label: "3D Visuals",
      content: (
        <div className="w-[77vw] md:w-[50vw] h-[542px]  p-2  mt-4"></div>
      ),
    },

    {
      label: "Site pics",
      content: <div className="w-[77vw] md:w-full lg:mt-2 lg:ml-auto "></div>,
    },
    {
      label: "BOQ's",
      content: <div className="w-[77vw] md:w-full lg:mt-2 lg:ml-auto "></div>,
    },
    {
      label: "Doc's",
      content: <div className=" w-full h-[78vh]"></div>,
    },
  ];

  return (
    <div className="w-[80vw] lg:w-[50vw] ml-14 lg:-ml-2 h-16 md:h-12 lg:h-24 p-2  rounded-xl xxl:h-24 ">
      <div>
        <div className="w-full  border-b-4 border-b-gray-300 h-12">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={`w-20 md:w-28 h-full  text-slate-800 text-sm  transition-all
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
