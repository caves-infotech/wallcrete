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

const VerticalMenu = ({ onComponentSelect }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [hoveredComponent, setHoveredComponent] = useState(null);

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
      component: "ProjectList",
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
      component: "ProjectList",
      isLink: true,
      href: "/dashboard",
    },
    {
      name: "Tasks",
      icon: <TaskIcon />,
      component: "ProjectList",
      isLink: true,
      href: "/dashboard",
    },
    {
      name: "Orders",
      icon: <OrderIcon />,
      component: "ProjectList",
      isLink: true,
      href: "/dashboard",
    },
    {
      name: "Pay",
      icon: <PayIcon />,
      component: "ProjectList",
      isLink: true,
      href: "/dashboard",
    },
  ];

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
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
                onMouseEnter={() => setHoveredComponent(item.component)}
                onMouseLeave={() => setHoveredComponent(null)}
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
        <div className="absolute w-80 -ml-2 h-[80vh] top-8 left-20 p-4 bg-white border rounded-lg shadow-lg">
          {hoveredComponent && <ProjectList />}
        </div>
      )}
    </div>
  );
};

export default VerticalMenu;
