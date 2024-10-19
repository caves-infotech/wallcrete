"use client";
import React, { useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { predefinedDesigns, dropdownButtons, addIcon } from "./data.js";
import "../styles.css";

const Floors = ({ isReversed }) => {
  const [btnDropdown, setBtnDropdown] = useState(false);
  const [basementFloors, setBasementFloors] = useState(["B-1", "B-2"]);
  const [upperFloors, setUpperFloors] = useState(["1-F", "2-F"]);
  const scrollContainerLeftRef = useRef();
  const scrollContainerRightRef = useRef();

  const scrollRightRContainer = () => {
    if (scrollContainerRightRef.current) {
      scrollContainerRightRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRightLContainer = () => {
    if (scrollContainerRightRef.current) {
      scrollContainerRightRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };
  const scrollLeftRContainer = () => {
    if (scrollContainerLeftRef.current) {
      scrollContainerLeftRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftLContainer = () => {
    if (scrollContainerLeftRef.current) {
      scrollContainerLeftRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

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
    <div className="w-[50vw] p-2 border-2 border-gray-200 shadow-lg rounded-lg mt-2 -ml-3">
      <div className="w-full h-12 bg-white rounded-md flex items-center justify-center shadow-md gap-1">
        <button
          className="w-11 h-10 border border-slate-500 rounded-md"
          onClick={addBasementFloor}
        >
          +
        </button>
        <button
          className="w-11 h-10 rounded-md flex justify-center items-center"
          onClick={scrollLeftLContainer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          className="mx-1 rounded-md p-1 w-60 h-10  flex items-start overflow-y-hidden overflow-x-scroll  flex-row-reverse gap-1"
          ref={scrollContainerLeftRef}
        >
          {basementFloors.map((floor, index) => (
            <button
              key={index}
              className="w-12 flex-shrink-0 border border-slate-500 rounded-md"
              onClick={() => handleClick(floor)}
            >
              {floor}
            </button>
          ))}
        </div>
        <button
          className="w-11 h-10 rounded-md flex justify-center items-center"
          onClick={scrollLeftRContainer}
        >
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button className="w-20 h-10 border border-slate-500 rounded-md">
          GF
        </button>

        <button
          className="w-11 h-10 rounded-md flex justify-center items-center"
          onClick={scrollRightLContainer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          className="mx-1 rounded-md p-1 w-60 h-10 items-start flex gap-1 overflow-y-hidden overflow-x-scroll "
          ref={scrollContainerRightRef}
        >
          {upperFloors.map((floor, index) => (
            <button
              key={index}
              className="w-12 flex-shrink-0 border border-slate-500 rounded-md"
              onClick={() => handleClick(floor)}
            >
              {floor}
            </button>
          ))}
        </div>
        <button
          className="w-11 h-10 rounded-md flex justify-center items-center"
          onClick={scrollRightRContainer}
        >
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="w-11 h-10 border border-slate-500 rounded-md"
          onClick={addUpperFloor}
        >
          +
        </button>
      </div>

      <div
        className={`flex justify-between w-full h-[450px] xxl:h-[800px] relative my-2 ${
          isReversed ? "flex-row-reverse" : ""
        }`}
      >
        {/* Child div 1 */}
        <div className="w-52 flex flex-col items-start justify-start">
          {predefinedDesigns.map((data) => (
            <CustomButton key={data.id} name={data.name} />
          ))}

          {/* Dropdown menu */}
          {btnDropdown && (
            <ul className="z-10 bg-white border border-gray-300 rounded-md shadow-lg w-full">
              {dropdownButtons.map((data) => (
                <li key={data.id} className="text-xs">
                  <CustomButton name={data.name} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Child div 2 */}
        <div className="border-2 border-gray-300 rounded-md w-full h-full p-1"></div>
      </div>
    </div>
  );
};

export default Floors;
