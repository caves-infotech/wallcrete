"use client";
import React, { useState } from "react";
import "../styles.css";
import CustomButton from "./CustomButton";
import { predefinedDesigns, dropdownButtons, addIcon } from "./data.js";

const Floors = () => {
  const [btnDropdown, setBtnDropdown] = useState(false);

  // Toggle the dropdown visibility
  const handleDropdown = () => {
    setBtnDropdown((prev) => !prev);
  };

  return (
    <div className="p-2 border-2 border-gray-200 shadow-lg rounded-xl mt-2">
      <div className="w-full h-10 bg-white rounded-md flex items-center justify-center text-gray-700 shadow-md">
        <button className="bg-indigo-600 w-16 h-10 mx-1 flex items-center justify-center rounded-lg hover:bg-indigo-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        <button className="bg-indigo-600 w-24 h-10 mx-1 flex items-center justify-center rounded-md text-white hover:bg-indigo-700 transition-colors">
          GF
        </button>

        <button className="bg-indigo-600 w-16 h-10 mx-1 flex items-center justify-center rounded-lg hover:bg-indigo-700 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-start justify-start w-[190px] h-[500px] relative overflow-hidden my-2">
        {predefinedDesigns.map((data) => (
          <CustomButton key={data.id} name={data.name} />
        ))}
        <CustomButton name={"add +"} icon={addIcon} onClick={handleDropdown} />

        {/* Dropdown menu */}
        {btnDropdown && (
          <ul className=" z-10 bg-white border border-gray-300 rounded-md shadow-lg w-full">
            {dropdownButtons.map((data) => (
              <li key={data.id}>
                <CustomButton name={data.name} />
              </li>
              // <li
              //   key={data.id}
              //   className="w-full h-8 border border-b-gray-200 pl-4"
              // >
              //   {data.name}
              // </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Floors;
