import React, { useRef, useState } from "react";
import { predefinedDesigns, dropdownButtons, addIcon } from "./data.js";
import "../styles.css";

const Drawings = ({ isReversed }) => {
  const [btnDropdown, setBtnDropdown] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(""); // Track selected floor
  const [selectedDesign, setSelectedDesign] = useState(null); // Track design for selected floor
  const [floors, setFloors] = useState([
    "B-1",
    "B-2",
    "B-3",
    "1-F",
    "2-F",
    "3-F",
    "4-F",
    "5-F",
    "6-F",
    "7-F",
    "8-F",
    "9-F",
  ]);
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

  // Function to handle floor click
  const handleClick = (floor) => {
    console.log(`You clicked on ${floor}`);
    setSelectedFloor(floor); // Update selected floor
  };

  // Function to handle design click
  const handleDesignClick = (design) => {
    console.log(`You clicked on design: ${design.name}`);
    setSelectedDesign(design.name); // Set design for the selected floor
    setSelectedFloor(null); // Reset selected floor when a new design is selected
  };

  const addFloor = () => {
    const newFloor = `${floors.length + 1}-F`;
    setFloors([...floors, newFloor]);
  };

  return (
    <div className="w-full h-[80vh] md:w-full p-1">
      <div className="w-full h-12 flex items-center justify-start gap-[6px] my-2 p-1 overflow-x-auto ">
        {predefinedDesigns.map((design) => {
          const isSelected = selectedDesign === design.name; // Check if this design is selected
          return (
            <button
              key={design.id} // Use id for a unique key
              className={`w-28 flex-shrink-0 border-2 border-gray-300 rounded-lg transition duration-300 transform hover:scale-105 py-1 ${
                isSelected ? "bg-blue-500 text-white" : ""
              }`} // Change background to blue for selected design
              onClick={() => handleDesignClick(design)}
            >
              {design.name}
            </button>
          );
        })}

        {/* Add Button */}
        <div className="w-28 h-9 flex-shrink-0 border-2 border-gray-300 rounded-lg ml-1 text-2xl flex items-center justify-center cursor-pointer ">
          +
        </div>
      </div>

      <div className="flex items-center justify-between h-[80%] ">
        <div className="w-[15%] h-[96%] flex flex-col items-start justify-end gap-[6px] p-1 overflow-y-auto">
          {floors.map((floor) => {
            const isSelected = selectedFloor === floor; // Check if this floor is selected
            return (
              <button
                key={floor} // Use id for a unique key
                className={`w-28 flex-shrink-0 border-2 border-gray-300 rounded-lg transition duration-300 transform hover:scale-105 py-1 mt-1 ${
                  isSelected ? "bg-blue-400" : ""
                }`}
                onClick={() => handleClick(floor)}
                disabled={!selectedDesign} // Disable button if no design is selected
              >
                {floor}
              </button>
            );
          })}
        </div>
        <div className=" w-[68%] h-[96%] border-2 border-gray-300 rounded-md flex items-center justify-center">
          {/* Display selected design and floor name */}
          {selectedDesign && selectedFloor ? (
            <div className="text-xl">
              {`Design: ${selectedDesign} | Floor: ${selectedFloor}`}
            </div>
          ) : (
            <div className="text-xl text-gray-500">
              selectedDesign is ${selectedDesign} and floor is ${selectedFloor}
            </div>
          )}
        </div>
        <div className="w-[15%] h-[96%] flex flex-col items-start justify-end gap-[6px] p-1 overflow-y-auto"></div>
      </div>

      <div className="w-full h-9 border-2 border-gray-300 rounded-lg text-2xl flex items-center justify-center cursor-pointer mt-1 ml-1"></div>
    </div>
  );
};

export default Drawings;
