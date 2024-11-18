"use client";
import React, { useState } from "react";
import { all_tasks } from "./data";
import "../styles.css";
import Popups from "./Popup";
import Link from "next/link";

const Task = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [activeButton, setActiveButton] = useState("All");
    const [selectedMember, setSelectedMember] = useState(null); // New state for active member

    const handlePopupButtonClick = () => {
        setIsPopupVisible(true);
    };

    const closePopupModal = () => {
        setIsPopupVisible(false);
    };

    const button = [
        { label: 'All', route: '', content: 'All Content' },
        { label: 'My Day', route: 'myDay', content: 'My Day Content' },
        { label: 'Upcoming', route: 'upcoming', content: 'Upcoming Content' },
        { label: 'Due', route: 'due', content: 'Due Content' },
        { label: 'Completed', route: 'completed', content: 'Completed Content' },
    ];

    const buttons = [
        {
            label: "Projects",
            content: (
                <>
                    <div className="w-[20vw] h-[38vh] overflow-y-auto">
                        {all_tasks.map(task => (
                            <div
                                className="flex items-center justify-center bg-gray-200 border-gray-300 p-2 mt-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                                key={task.id}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                                <span className="w-full">{task.project_name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex items-center my-auto">
                        <button
                            className="w-full items-center mt-4 h-8 border-2 border-gray-300 rounded-lg"
                            onClick={handlePopupButtonClick}
                        >
                            + Add project
                        </button>
                        <div className="items-center flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                                onClick={() => window.location.href = '/dashboard/tasks/predefinedTasks'}>
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                    </div>
                </>
            ),
        },

        {
            label: "Members",
            content: (
                <>
                    <div className="w-[20vw] h-[38vh] overflow-y-auto">
                        {all_tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`flex items-center justify-center w-full p-2 mt-4 rounded-lg transition-colors duration-300
                                ${selectedMember === task.member_name ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} hover:bg-blue-400 hover:text-white`} // Updated style for active member
                                onClick={() => setSelectedMember(task.member_name)} // Set the selected member
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <Link href={`/dashboard/tasks/members/${task.id}`} className="w-full">
                                    {task.member_name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="w-full">
                        <button
                            className="w-full mt-4 h-8 border-2 border-gray-300 rounded-lg"
                            onClick={handlePopupButtonClick}
                        >
                            + Add member
                        </button>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="h-full p-4 rounded-lg shadow-md top-">
            <div className="m-2 w-[90%] flex flex-col items-start ">
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

                {button.map((btn) => (
                    <Link
                        key={btn.label}
                        href={`/dashboard/tasks/${btn.route}`}
                        className={`flex items-center justify-start w-full border-gray-300 p-2 mt-4 rounded-lg hover:bg-blue-400 transition-colors duration-300
                        ${activeButton === btn.label ? "bg-blue-400 text-white" : "bg-gray-200 text-black"}`}
                        onClick={() => setActiveButton(btn.label)}
                    >
                        {btn.label}
                    </Link>
                ))}

                <div className="mt-4 flex w-full bg-gray-200 rounded-lg ">
                    {buttons.map((btn) => (
                        <button
                            key={btn.label}
                            className={`p-2 flex w-1/2 text-center 
                            ${activeButton === btn.label
                                    ? "bg-blue-400 text-white border-b-4 border-b-slate-500"
                                    : "hover:border-b-4 hover:border-b-slate-500 text-black"}`}
                            onClick={() => setActiveButton(btn.label)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                <div className="mt-2">
                    {buttons.find((btn) => btn.label === activeButton)?.content}
                </div>
            </div>

            <Popups
                isModalOpen={isPopupVisible}
                closeModal={closePopupModal}
                type={"createProject"}
            />
        </div>
    );
};

export default Task;
