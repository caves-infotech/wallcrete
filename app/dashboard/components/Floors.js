import React, { useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { predefinedDesigns, dropdownButtons, addIcon } from "./data.js";
import "../styles.css";

const Floors = ({ isReversed }) => {
  const [btnDropdown, setBtnDropdown] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(""); // Track selected floor
  const [selectedDesign, setSelectedDesign] = useState(null); // Track design for selected floor
  const [basementFloors, setBasementFloors] = useState(["B-1", "B-2"]);
  const [upperFloors, setUpperFloors] = useState(["1-F", "2-F","3-F","4-F","5-F"]);
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
    setSelectedFloor(null);
  };

  // Function to handle design click
  const handleDesignClick = (design) => {
    console.log(`You clicked on design: ${design.name}`);
    setSelectedDesign(design.name); // Set design for the selected floor
  };

  const addBasementFloor = () => {
    const newFloor = `B-${basementFloors.length + 1}`;
    setBasementFloors([...basementFloors, newFloor]);
  };

  const addUpperFloor = () => {
    const newFloor = `${upperFloors.length + 1}-F`;
    setUpperFloors([...upperFloors, newFloor]);
  };

  return (
    <div className="w-[80vw] md:w-full p-1">
      <div className="w-full h-12 flex items-center justify-start  gap-[6px] p-1 ">
        {predefinedDesigns.map((design, index) => {
          return (
            <button
              key={design.id} // Use id for a unique key
              className={`w-28 flex-shrink-0 border-2 border-gray-300 rounded-lg transition duration-300 transform hover:scale-105 py-1 `}
              onClick={() => handleDesignClick(design)}
            >
              {design.name} 
            </button>
          );
        })}

        {/* Add Button */}
        <div className="w-28 h-9 border-2 border-gray-300 rounded-lg ml-1 text-2xl flex items-center justify-center cursor-pointer">
            +
        </div>
      </div>
      <div className="w-[20%]  flex flex-col-reverse items-start justify-start  gap-[6px] p-1">
        {upperFloors.map((floor, index) => {
          return (
            <button
              key={floor} // Use id for a unique key
              className={`w-28 flex-shrink-0 border-2 border-gray-300 rounded-lg transition duration-300 transform hover:scale-105 py-1 `}
              onClick={() => handleDesignClick(floor)}
            >
              {floor} 
            </button>
           
          );
        })}
        {basementFloors.map((floor, index) => {
          return (
            <button
              key={floor} // Use id for a unique key
              className={`w-28 flex-shrink-0 border-2 border-gray-300 rounded-lg transition duration-300 transform hover:scale-105 py-1 `}
              onClick={() => handleDesignClick(floor)}
            >
              {floor} 
            </button>
           
          );
        })}

      {/* Add button */}
      <div className="w-28 h-9 border-2 border-gray-300 rounded-lg  text-2xl flex items-center justify-center cursor-pointer">
            +
        </div>
      </div>
    </div>
  );
};

export default Floors;
