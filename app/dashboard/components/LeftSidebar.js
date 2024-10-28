"use client";
import ProjectList from "./ProjectList";
import Members from "./Members";
import CRM from "./CRM";
import Orders from "./Orders";
import Pay from "./Pay";
import Docs from "./Docs";
import { useState } from "react";
import Inbox from "./Inbox";
import Tasks from "./Tasks";

const LeftSidebar = ({ selectedComponent }) => {
  const [sidebar, setSidebar] = useState(null);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "ProjectList":
        return <ProjectList />;
      case "Members":
        return <Members />;
      case "CRM":
        return <CRM />;
      case "Task":
        return <Tasks />;
      case "Chat":
        return <Inbox />;
      case "Orders":
        return <Orders />;
      case "Pay":
        return <Pay />;
      case "Docs":
        return <Docs />;
      default:
        return null; // or a default component
    }
  };

  const handleSlide = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="w-full bg-gray-100 rounded-lg p-1">
      {renderSelectedComponent()}
    </div>
  );
};

export default LeftSidebar; // Ensure it's a default export
