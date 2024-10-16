import React from "react";
import Contacts from "./Contacts";
import "../styles.css";

const Inbox = () => {
  return (
    <div className="w-full p-4">
      <div className="flex gap-2 items-center justify-start mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
          />
        </svg>
        <div>
          <select className="border border-gray-300 p-2 rounded-lg">
            <option value="" disabled className="hidden">
              Contacts
            </option>
            <option value="">Employees</option>
            <option value="">Vendor</option>
            <option value="">Consultant</option>
          </select>
        </div>
        <h3 className="text-xs text-indigo-500 ml-auto cursor-pointer">
          View all
        </h3>
      </div>

      <div className="overflow-y-auto max-h-[75vh] no-scrollbar">
        {/* Repeated Contacts Component */}
        {Array(11).fill(<Contacts />)}
      </div>
    </div>
  );
};

export default Inbox;
