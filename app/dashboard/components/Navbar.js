"use client";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import { useState } from "react";

const Navbar = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (text) => {
    setTooltip(text);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <nav className="lg:flex xl:fixed flex w-full h-14 p-2 border-2 shadow-md rounded-md items-center justify-start bg-white">
      <div className="relative h-10 w-10">
        <Image
          src={logo}
          alt="Archbeez Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="hidden md:block text-xl text-[#495E57] ml-2">
        wall of creation
      </h1>
      <h1 className="text-xl text-[#495E57] ml-2 md:hidden">wallcreat</h1>
      <div
        className="mr-2 lg:bg-transparent lg:flex lg:h-10 w-10 rounded-full ml-auto lg:mr-6 items-center justify-center cursor-pointer"
        onMouseEnter={() => handleMouseEnter("login")}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      {tooltip === "login" && (
        <span className="w-24 text-md absolute right-20 bg-gray-700 text-white text-xs rounded-md p-1">
          login / logout
        </span>
      )}
    </nav>
  );
};

export default Navbar;
