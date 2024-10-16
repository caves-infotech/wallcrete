"use client";
import React from "react";
import "../styles.css";
import CustomButton from "./CustomButton";

const Floors = () => {
  const predefinedDesigns = [
    { id: 600, name: "Working" },
    { id: 601, name: "Furniture" },
    { id: 602, name: "Structural" },
    { id: 603, name: "Electrical" },
    { id: 604, name: "Plumbing" },
    { id: 605, name: "Ceiling" },
    { id: 606, name: "Documents" },
    { id: 607, name: "Quotation" },
    { id: 608, name: "Boqs" },
    { id: 609, name: "Orders" },
    { id: 610, name: "Reports" },
  ];

  const predefinedColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-gray-500",
    "bg-emerald-500",
  ];

  return (
    <div className="p-2 border-2 border-gray-300 shadow-lg rounded-xl mt-2">
      <div className="flex flex-col items-end justify-end w-[200px] h-[528px] relative overflow-hidden">
        {/* {predefinedDesigns.map((data, index) => (
          <CustomButton
            key={data.id}
            name={data.name}
            color={predefinedColors[index % predefinedColors.length]}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Floors;
