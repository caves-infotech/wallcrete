import React from "react";

const CustomButton = ({ name, icon, onClick }) => {
  return (
    <div className="w-4/5 mx-auto mt-1">
      <button
        onClick={onClick}
        className={`border w-11/12 h-11 rounded-full flex items-center justify-between p-2 transform transition-transform hover:scale-105 hover:shadow-xl shadow-lg bg-gradient-to-r from-gray-500 to-gray-600`}
      >
        <span className="w-4/5 bg-white text-black flex items-center h-9 rounded-full text-sm px-4 overflow-hidden shadow-inner">
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
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
