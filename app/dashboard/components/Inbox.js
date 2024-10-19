import React, { useState } from "react";
import Contacts from "./Contacts";
import "../styles.css";
import { contacts } from "./data";

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState(""); // State for role filter
  const [groupFilter, setGroupFilter] = useState(""); // State for group filter
  const [selectedContact, setSelectedContact] = useState(null);

  const handleViewAll = () => {
    setRoleFilter("");
    setGroupFilter(""); // Reset both filters
  };

  // Filter contacts based on search term, role filter, and group filter
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearchTerm = contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRoleFilter = !roleFilter || contact.role === roleFilter;
    const matchesGroupFilter = !groupFilter || contact.group === groupFilter;

    return matchesSearchTerm && matchesRoleFilter && matchesGroupFilter;
  });

  return (
    <div className="w-full p-4">
      <div className="w-full h-10 mb-2">
        {/* Search bar */}
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
            placeholder="Search contacts..."
            className="w-full h-8 p-2 rounded-lg focus:outline-none bg-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </button>
      </div>
      <div className="flex gap-2 items-center justify-start mb-5">
        <div className="w-1/2">
          <select
            className="w-full border border-gray-300 py-1 rounded-lg"
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="" className="hidden">
              Contacts
            </option>
            <option value="employee">Team Members</option>
            <option value="owner">Owner</option>
            <option value="contractor">Contractor</option>
            <option value="consultant">Consultant</option>
            <option value="supplier">Suppliers</option>
          </select>
        </div>
        <div className="w-1/2">
          <select
            className="w-full border border-gray-300 py-1 rounded-lg"
            onChange={(e) => setGroupFilter(e.target.value)}
          >
            <option value="" className="hidden">
              Groups
            </option>
            <option value="">Create a group</option>
            <option value="groupid1">Group 1</option>
            <option value="groupid2">Group 2</option>
            <option value="groupid3">Group 3</option>
          </select>
        </div>
      </div>

      <div className="overflow-y-auto max-h-[70vh] no-scrollbar">
        {filteredContacts.map((contact) => (
          <Contacts
            key={contact.id}
            data={contact}
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
