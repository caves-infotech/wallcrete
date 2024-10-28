"use client";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import VerticalMenu from "./components/VerticalMenu";
import { MyProvider } from "./components/Context";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [selectedComponent, setSelectedComponent] = useState(""); // Default component
  const [leftsidebar, setLeftSidebar] = useState(false);
  const [rightsidebar, setRightSidebar] = useState(false);

  const handleComponentSelect = (component) => {
    setSelectedComponent(component); // Update the selected component
  };

  const handleLeftSlide = () => {
    setLeftSidebar((prev) => !prev);
  };
  const handleRightSlide = () => {
    setRightSidebar((prev) => !prev);
  };

  return (
    <div className="dashboard flex flex-col w-screen h-screen">
      <button
        className="md:block fixed top-8 left-1 md:left-7 md:top-[5.1rem] z-50"
        onClick={handleLeftSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <button
        className={`md:block fixed ${
          rightsidebar ? "right-9" : "right-4"
        } top-[66px] z-50`}
        onClick={handleRightSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <MyProvider>
        <Navbar />
        <div className="w-[94vw] h-[90vh] ml-20 dashboard-content flex flex-row flex-grow gap-2">
          {/* Left Sidebar */}
          <div
            className={`${
              leftsidebar ? "hidden" : "block border border-r-2"
            } w-[22%] mt-14  transition-all duration-500`}
          >
            <LeftSidebar selectedComponent={selectedComponent} />
          </div>

          {/* Main Content */}
          <main
            className={`mt-2 flex-grow h-[96vh]  py-14 p-4 transition-all duration-500 ${
              leftsidebar && rightsidebar
                ? "w-[58%]"
                : leftsidebar || leftsidebar
                ? "w-[55%]"
                : "w-[55%"
            }`}
          >
            {children}
          </main>

          {/* Right Sidebar */}
          <div
            className={`h-screen border border-l-2 transition-all duration-500 ${
              rightsidebar ? "w-[6%]" : "w-[20%]"
            }`}
          >
            <RightSidebar rightsidebar={rightsidebar} />
          </div>
        </div>
        <VerticalMenu onComponentSelect={handleComponentSelect} />
      </MyProvider>
    </div>
  );
}
