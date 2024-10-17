import React, { useState } from "react";
import Contacts from "./Contacts";
import "../styles.css";
import { contacts } from "./data";

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(""); // State to store selected filter

  // Function to reset the filter and show all contacts
  const handleViewAll = () => {
    setFilter(""); // Reset filter to show all contacts
  };

  // Filter contacts based on the selected type
  const filteredContacts = contacts.filter((contact) => {
    // Match contact by name based on search term
    const matchesSearchTerm = contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Match contact by role based on the selected filter
    const matchesFilter = filter === "" || contact.role === filter;

    // Return true if both the search term and filter match
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="w-full p-4">
      <div className="w-full h-10 mb-2">
        {/* search */}
        <button className="flex items-center justify-start h-10 w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Projects..."
            className="w-full h-8 p-2 rounded-lg focus:outline-none bg-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </button>
      </div>
      <div className="flex gap-2 items-center justify-start mb-5">
        <div>
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
        </div>
        <div>
          <select
            className="border border-gray-300 p-2 rounded-lg"
            onChange={(e) => setFilter(e.target.value)} // Call filter function on change
          >
            <option value="" className="hidden">
              Contacts
            </option>
            <option value="employee">Employees</option>
            <option value="client">Clients</option>
            <option value="owner">Owner</option>
            <option value="vendor">Vendor</option>
            <option value="consultant">Consultant</option>
          </select>
        </div>
        <h3
          className="text-xs text-indigo-500 ml-auto cursor-pointer"
          onClick={handleViewAll} // Call handleViewAll on click
        >
          View all
        </h3>
      </div>

      <div className="overflow-y-auto max-h-[70vh] no-scrollbar">
        {filteredContacts.map((contact) => (
          <Contacts key={contact.id} data={contact} />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
