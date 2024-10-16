"use client";
import React, { useRef, useState } from "react";
import { useMyContext } from "./Context";
import ProjectCard from "./ProjectCard";
import { predefinedProjects } from "./data";
import "../styles.css";

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType] = useState(["All", "Architect", "Interior", "Layout"]);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("All"); // Use this for filtering
  const [selectedSubType, setSelectedSubType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [newItem, setNewItem] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const { setData } = useMyContext();
  const [toggle, setToggle] = useState(false);
  const handleTogglee = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const subtypes = [
    "All",
    "Bunglow",
    "Commercial",
    "Residential",
    "Industrial",
    "Institutional",
  ];

  const statuses = ["All", "Ongoing", "Completed", "Pending"];

  // filter function
  const filteredProjects = predefinedProjects.filter((project) => {
    const matchesSearchTerm = project.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" ||
      selectedStatus === "" ||
      project.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesSubtype =
      selectedSubType === "All" ||
      selectedSubType === "" ||
      project.subtype?.toLowerCase() === selectedSubType.toLowerCase();
    const matchTypes =
      selectedTypeFilter === "All" ||
      project.type?.toLowerCase() === selectedTypeFilter.toLowerCase(); // Only filter based on selectedTypeFilter

    return matchesSearchTerm && matchesStatus && matchesSubtype && matchTypes;
  });

  // Function to handle adding a new item
  const addNewItem = (e) => {
    if (e.key === "Enter" && newItem.trim()) {
      setSelectedSubType(newItem); // Set the new item as the selectedSubType for filtering
      setNewItem(""); // Clear the input field
      setIsInputVisible(false); // Hide the input field after adding the item
    }
  };

  // Function to toggle the input field visibility
  const toggleInput = () => {
    setIsInputVisible((prev) => !prev);
    if (!isInputVisible) {
      setTimeout(() => inputRef.current.focus(), 0);
    } else {
      setNewItem("");
    }
  };

  // Function to send details
  const sendDetails = (project) => {
    setData(project);
  };

  return (
    <div className="h-full p-4 rounded-lg shadow-md ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 relative top-12 right-4 cursor-pointer inline-block"
        onClick={scrollToLeft}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      <svg
        className="w-6 h-6 relative top-12 left-[19rem] cursor-pointer inline-block"
        onClick={scrollToRight}
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

      <div className="m-2 w-[90%] flex flex-col items-start relative bottom-10 right">
        {/* Search */}
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

        {/* Horizontal filter list */}

        <div
          className="w-full overflow-x-auto no-scrollbar my-3"
          ref={scrollContainerRef}
        >
          <ul className="flex w-full h-8 ">
            {selectedType.map((item, index) => (
              <li
                className={`w-28 px-6 border-b-4 ${
                  selectedTypeFilter === item ? "border-b-gray-400" : ""
                } p-2 flex justify-center items-center cursor-pointer`}
                key={index}
                onClick={() => setSelectedTypeFilter(item)} // Only update filter, not the original list
              >
                {item}
              </li>
            ))}

            {/* Conditionally render input field or SVG */}
            <li className="w-24 p-2 flex justify-center items-center">
              {isInputVisible ? (
                <input
                  type="text"
                  placeholder="New Item"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)} // Update newItem state
                  onKeyDown={addNewItem} // Add item on Enter key press
                  className="px-6 border-none rounded-lg w-28 focus:outline-none"
                  ref={inputRef} // Attach ref for focusing
                />
              ) : (
                <button className="p-2 rounded-md" onClick={toggleInput}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              )}
            </li>
          </ul>
        </div>

        {/* Dropdown */}
        <div className="w-full flex gap-2 items-center justify-between mt-1">
          {/* Status Dropdown */}
          <div className="w-1/2 ">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
            >
              <option value="" disabled className="hidden">
                Status
              </option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Subtype Dropdown */}
          <div className="w-1/2">
            <select
              value={selectedSubType}
              onChange={(e) => setSelectedSubType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
            >
              <option value="" disabled className="hidden">
                Subtypes
              </option>
              {subtypes.map((subtype, index) => (
                <option key={index} value={subtype}>
                  {subtype}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Render filtered project */}
      <div className=" relative bottom-10 h-[480px] overflow-y-auto no-scrollbar">
        <div
          className={` gap-4 ${
            toggle ? "w-[200%] flex flex-col" : "w-[100%] flex flex-wrap"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.projectId}
              className={`h-24 w-[calc(50%-16px)] text-left shadow-lg mb-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 ease-in-out`}
              onClick={() => {
                sendDetails(project);
                handleTogglee();
              }}
            >
              <ProjectCard project={project} test={toggle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
