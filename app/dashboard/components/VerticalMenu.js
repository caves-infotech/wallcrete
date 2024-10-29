"use client";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  SearchIcon,
  ProjectIcon,
  MemberIcon,
  ChatIcon,
  CRMIcon,
  TaskIcon,
  OrderIcon,
  PayIcon,
} from "./icons.js";
import Link from "next/link";
import ProjectList from "./ProjectList.js";
import Members from "./Members";
import CRM from "./CRM";
import Orders from "./Orders";
import Pay from "./Pay";
import Docs from "./Docs";
import Inbox from "./Inbox";
import Tasks from "./Tasks";
import Search from "./Search";

const VerticalMenu = ({ onComponentSelect }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [isClickActive, setIsClickActive] = useState(false);

  const menuItems = [
    { name: "Home", icon: <HomeIcon />, component: "Home", isLink: false },
    {
      name: "Search",
      icon: <SearchIcon />,
      component: "Search",
      isLink: false,
    },
    {
      name: "Projects",
      icon: <ProjectIcon />,
      component: "ProjectList",
      isLink: false,
    },
    {
      name: "Members",
      icon: <MemberIcon />,
      component: "Members",
      isLink: true,
      href: "/dashboard",
    },
    {
      name: "Chats",
      icon: <ChatIcon />,
      component: "Chat",
      isLink: false,
      showOnLarge: true,
    },
    {
      name: "CRM",
      icon: <CRMIcon />,
      component: "crm",
      isLink: true,
      href: "/dashboard",
    },
    {
      name: "Tasks",
      icon: <TaskIcon />,
      component: "tasks",
      isLink: true,
      href: "/tasks",
    },
    {
      name: "Orders",
      icon: <OrderIcon />,
      component: "orders",
      isLink: true,
      href: "/dashboard",
    },
    {
      name: "Pay",
      icon: <PayIcon />,
      component: "pay                  ",
      isLink: true,
      href: "/dashboard",
    },
  ];

  const renderHoveredComponent = () => {
    switch (hoveredComponent) {
      case "ProjectList":
        return <ProjectList />;
      case "Search":
        return <Search />;
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

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
    setIsClickActive(true);
    onComponentSelect(component);
  };

  return (
    <div className="fixed top-20 lg:top-[4.5rem] lg:left-2 h-[88vh] rounded-lg">
      <div className="hidden lg:block h-14 w-14 ml-[14%]"></div>
      <div className="h-[75vh] md:h-[70vh] mt-0 lg:h-[72vh] overflow-y-auto no-scrollbar px-2 lg:mt-1">
        <ul className="flex flex-col items-center justify-center gap-6">
          {menuItems.map((item, index) => {
            const MenuItemContent = (
              <li
                key={index}
                onClick={() => handleComponentSelect(item.component)}
                onMouseEnter={() =>
                  !isClickActive && setHoveredComponent(item.component)
                }
                onMouseLeave={() => !isClickActive && setHoveredComponent(null)}
                className={`relative w-14 pt-1 h-14 border flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ${
                  item.showOnLarge ? "hidden lg:flex" : ""
                }`}
              >
                {item.icon}
                <h2 className="text-[10px] lg:text-[11px]">{item.name}</h2>
              </li>
            );

            return item.isLink ? (
              <Link key={index} href={item.href} passHref>
                {MenuItemContent}
              </Link>
            ) : (
              MenuItemContent
            );
          })}
        </ul>
      </div>

      {/* Render the hovered component here */}
      {hoveredComponent && (
        <div
          className={`${
            !isClickActive
              ? "absolute w-80 -ml-2 h-[80vh] top-8 left-20 p-4 bg-white border rounded-lg shadow-lg overflow-y-hidden "
              : "hidden"
          }`}
        >
          {renderHoveredComponent()}
        </div>
      )}
    </div>
  );
};

export default VerticalMenu;
