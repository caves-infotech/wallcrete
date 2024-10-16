"use client";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import VerticalMenu from "./components/VerticalMenu";
import { MyProvider } from "./components/Context";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [selectedComponent, setSelectedComponent] = useState(""); // Default component

  const handleComponentSelect = (component) => {
    setSelectedComponent(component); // Update the selected component
  };
  return (
    <div className="dashboard flex flex-col h-screen">
      <MyProvider>
        <Navbar />
        <div className="dashboard-content flex flex-row flex-grow">
          <VerticalMenu onComponentSelect={handleComponentSelect} />
          <LeftSidebar selectedComponent={selectedComponent} />
          <main className="main-content flex-grow m-2 ">{children}</main>
          <RightSidebar />
        </div>
      </MyProvider>
    </div>
  );
}
