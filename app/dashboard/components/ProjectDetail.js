"use client";
import React, { useState } from "react";
import { useMyContext } from "./Context";
import Drawings from "./Drawings";
import Orders from "./Orders";
import Visuals from "./Visuals";
import Actuals from "./Actuals";
import Docs from "./Docs";
import Tasks from "./Tasks";
import Discussion from "./Discussion";
import modelPath from "../../../public/ImageToStl.com_table+2.gltf";

const ProjectDetail = () => {
  const { data } = useMyContext();
  const [activeButton, setActiveButton] = useState("All");
  const buttons = [
    {
      label: "Drawing",
      content: <Drawings isReversed={false} />,
    },
    {
      label: "Visuals",
      content: <Visuals model={modelPath} />,
    },

    {
      label: "Actuals",
      content: <Actuals />,
    },
    {
      label: "Order",
      content: <Orders />,
    },
    {
      label: "Doc",
      content: <Docs />,
    },
    {
      label: "Tasks",
      content: <Tasks />,
    },
    {
      label: "Discussion",
      content: <Discussion />,
    },
  ];

  return (
    <>
      <div className="w-full border border-gray-300 shadow-lg rounded-md p-2 h-[90vh]">
        <div className="w-full h-8">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={`w-20 md:w-24 h-full  text-slate-800 text-lg  transition-all
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
        <div>{buttons.find((btn) => btn.label === activeButton)?.content}</div>
      </div>
    </>
  );
};

export default ProjectDetail;
