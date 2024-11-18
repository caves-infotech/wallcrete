"use client";
import React from "react";

const CustomButton = ({ name, icon, onClick }) => {
  return (
    <div className="w-4/5 md:w-11/12 mx-auto mt-1 text-[13px] font-medium">
      <button
        onClick={onClick}
        className={`border w-4/6 h-9 rounded-xl flex items-center justify-between p-2 transform transition-transform hover:scale-105 hover:shadow-xl shadow-lg bg-gradient-to-r from-gray-500 to-gray-600`}
      >
        <span className="w-4/5 bg-white text-black flex items-center h-5 rounded-lg px-4 overflow-hidden shadow-inner">
          <span className="w-full truncate">{name}</span>
        </span>
        {icon ? (
          <span className="ml-2 h-6 w-6">{icon}</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="ml-2 h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CustomButton;


