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

<<<<<<< HEAD
              <h2 className="text-xs">Members</h2>
            </li>
          </Link>
          <li
            onClick={() => handleComponentSelect("Chat")}
            className="hidden lg:flex relative w-10 pt-1 h-10 border flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>

            <h2 className="text-xs">Chats</h2>
          </li>

          <Link href="/dashboard" passHref>
            <li className="relative w-10 pt-1 h-10 border  flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 3h12M6 7h12M6 11h12M6 15h12"
                />
              </svg>
              <h2 className="text-xs">CRM</h2>
            </li>
          </Link>

          <Link href="/dashboard/tasks" passHref>
            <li onClick={() => handleComponentSelect("Task")} className="relative w-10 pt-1 h-10 border  flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>

              <h2 className="text-xs">Task</h2>
            </li>
          </Link>

          <Link href="/dashboard" passHref>
            <li className="relative w-10 pt-1 h-10 border  flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <h2 className="text-xs">Orders</h2>
            </li>
          </Link>

          <Link href="/dashboard" passHref>
            <li className="relative w-10 pt-1 h-10 border  flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <h2 className="text-xs">Pay</h2>
            </li>
          </Link>

          <Link href="/documents" passHref>
            <li className="relative w-10 pt-1 h-10 border  flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>

              <h2 className="text-xs">Doc&apos;s</h2>
            </li>
          </Link>
          <Link href="/documents" passHref>
            <li className="relative w-10 pt-1 h-10 border  flex flex-col items-center justify-center shadow-md bg-gray-100 text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>

              <h2 className="text-xs">Profile</h2>
            </li>
          </Link>
          <Link href="/documents" passHref>
            <li className="left-[8px] fixed bottom-5 md:left-4 w-10 pt-1 h-10   flex flex-col items-center justify-center text-slate-600 transition-transform transform hover:scale-110 hover:shadow-lg cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </li>
          </Link>
=======
            return item.isLink ? (
              <Link key={index} href={item.href} passHref>
                {MenuItemContent}
              </Link>
            ) : (
              MenuItemContent
            );
          })}
>>>>>>> 8c32faf2791a6e8ca7547bc58cfb44caec6b89f1
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
