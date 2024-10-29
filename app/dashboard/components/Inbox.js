import React, { useState } from "react";
import Contacts from "./Contacts";
import "../styles.css";
import { contacts } from "./data";

const Inbox = ({ rightsidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [groupFilter, setGroupFilter] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const handleViewAll = () => {
    setRoleFilter("");
    setGroupFilter("");
  };

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearchTerm = contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRoleFilter = !roleFilter || contact.role === roleFilter;
    const matchesGroupFilter = !groupFilter || contact.group === groupFilter;

    return matchesSearchTerm && matchesRoleFilter && matchesGroupFilter;
  });

  return (
    <aside
      className={`w-full p-2 bg-gray-100 ${rightsidebar ? "p-0 " : "py-16"} `}
    >
      {!rightsidebar && (
        <div className="w-full h-10 mb-2">
          <button className="border  border-gray-300 rounded-md flex items-center justify-start h-10 w-10/12 p-2 hover:bg-gray-100 transition-colors duration-300">
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
              className="w-10/12 h-8 p-2 rounded-lg focus:outline-none bg-gray-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </button>
        </div>
      )}

      {!rightsidebar && (
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
              <option value="groupid1">Project 1</option>
              <option value="groupid2">Project 2</option>
              <option value="groupid3">Project 3</option>
            </select>
          </div>
        </div>
      )}

      <div className="overflow-y-auto w-full max-h-[70vh] no-scrollbar">
        {filteredContacts.map((contact) => (
          <Contacts
            key={contact.id}
            data={contact}
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
            minimized={rightsidebar} // Pass rightsidebar state to Contacts component
          />
        ))}
      </div>
    </aside>
  );
};

export default Inbox;
