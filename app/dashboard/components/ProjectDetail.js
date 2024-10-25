"use client";
import React, { useState } from "react";
import { useMyContext } from "./Context";
import Floors from "./Floors";
import BOQs from "./BOQs";

const ProjectDetail = () => {
  const { data } = useMyContext();
  const [activeButton, setActiveButton] = useState("All");
  const buttons = [
    {
      label: "Drawing",
      content: (
        <div className="w-[77vw] md:w-full lg:mt-2">
          <Floors isReversed={false} />
        </div>
      ),
    },
    {
      label: "Visuals",
      content: (
        <div className="w-[77vw] md:w-[50vw] h-[542px]  p-2  mt-4"></div>
      ),
    },

    {
      label: "Actuals",
      content: <div className="w-[77vw] md:w-full lg:mt-2 lg:ml-auto "></div>,
    },
    {
      label: "Orders",
      content: (
        <div className="w-[77vw] h-[78vh] md:w-full lg:mt-2 lg:ml-auto ">
          <BOQs />
        </div>
      ),
    },
    {
      label: "Doc",
      content: <div className=" w-full h-[78vh]"></div>,
    },
    {
      label: "Tasks",
      content: <div className=" w-full h-[78vh]"></div>,
    },
    {
      label: "Discussion",
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
              className={`w-20 md:w-24 h-full  text-slate-800 text-sm  transition-all
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
