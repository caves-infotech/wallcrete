"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { predefinedDesigns, dropdownButtons, addIcon } from "./data.js";
import "../styles.css";

const Floors = () => {
  const [btnDropdown, setBtnDropdown] = useState(false);
  const [basementFloors, setBasementFloors] = useState(["B-1", "B-2"]);
  const [upperFloors, setUpperFloors] = useState(["1-F", "2-F"]);

  const handleClick = (floor) => {
    console.log(`You clicked on ${floor}`);
  };

  const addBasementFloor = () => {
    const newFloor = `B-${basementFloors.length + 1}`;
    setBasementFloors([...basementFloors, newFloor]);
  };

  const addUpperFloor = () => {
    const newFloor = `${upperFloors.length + 1}-F`;
    setUpperFloors([...upperFloors, newFloor]);
  };

  // Toggle the dropdown visibility
  const handleDropdown = () => {
    setBtnDropdown((prev) => !prev);
  };

  return (
    <div className="p-2 border-2 border-gray-200 shadow-lg rounded-xl mt-2">
      <div className="w-full h-12 bg-white rounded-md flex items-center justify-center shadow-md text-white">
        {/* Dynamically add buttons for basement floors (left side) */}
        <div className="w-[300px] flex flex-row-reverse overflow-y-hidden overflow-x-auto no-scrollbar">
          {basementFloors.map((floor, index) => (
            <button
              key={index}
              className="bg-gray-600 w-24 p-4 h-10  mx-1 flex flex-row-reverse items-center justify-center rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => handleClick(floor)}
            >
              <span className="w-14">{floor}</span>
            </button>
          ))}
        </div>

        {/* Button to add a new basement floor */}
        <button
          className="bg-gray-600 w-24 h-10 mx-1 flex flex-row-reverse items-center justify-center rounded-lg hover:bg-gray-700 transition-colors"
          onClick={addBasementFloor}
        >
          +
        </button>

        {/* GF button */}
        <button className="bg-slate-500 border border-gray-200 shadow-md bg-opacity-80 w-24 h-10 mx-1 flex items-center justify-center rounded-md text-white hover:bg-opacity-100 transition-colors">
          GF
        </button>

        {/* Button to add a new upper floor */}
        <button
          className="bg-gray-600 w-24 h-10 mx-1 flex items-center justify-center rounded-lg hover:bg-gray-700 transition-colors"
          onClick={addUpperFloor}
        >
          +
        </button>
        <div className="w-[300px] overflow-x-auto overflow-y-hidden flex no-scrollbar">
          {/* Dynamically add buttons for upper floors (right side) */}
          {upperFloors.map((floor, index) => (
            <button
              key={index}
              className=" bg-gray-600 w-24 h-10 px-4 mx-1 flex items-center justify-center rounded-lg hover:bg-gray-700 transition-colors "
              onClick={() => handleClick(floor)}
            >
              <span className="w-14">{floor}</span>
            </button>
          ))}
        </div>
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
