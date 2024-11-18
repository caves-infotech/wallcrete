<<<<<<< HEAD
import { useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js

const Members = ({ all_tasks }) => {
  const [selectedMember, setSelectedMember] = useState(null); // Track selected member

  // Filter tasks based on the selected member
  const filteredTasks = selectedMember
    ? all_tasks.filter((task) => task.member_name === selectedMember)
    : all_tasks; // If no member is selected, show all tasks

  const handleMemberClick = (memberName) => {
    setSelectedMember(memberName); // Set the selected member
  };

  return (
    <div>
      {/* Members List */}
      <div className="w-[20vw] h-[38vh] overflow-y-auto">
        {all_tasks.map((task) => (
          <div
            className="flex items-center justify-center w-full bg-gray-200 border-gray-300 p-2 mt-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
            key={task.id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <Link href="#" className="w-full" onClick={() => handleMemberClick(task.member_name)}>
              {task.member_name}
            </Link>
          </div>
        ))}
      </div>

      {/* Display tasks for the selected member */}
      {selectedMember && (
        <div className="w-full mt-4">
          <h3 className="font-bold">Tasks for {selectedMember}</h3>
          <div className="mt-4">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="bg-gray-200 p-2 mt-2 rounded-lg border border-gray-300"
              >
                <p>Project: {task.project_name}</p>
                <p>Task: {task.task_name}</p>
                <p>Assign Date: {task.assign_date}</p>
                <p>Status: {task.status}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Button to add a member */}
      <div className="w-full">
        <button
          className="w-full mt-4 h-8 border-2 border-gray-300 rounded-lg"
          onClick={handlePopupButtonClick}
        >
          + Add member
        </button>
      </div>
    </div>
  );
=======
import React from "react";

const Members = () => {
  return <div></div>;
>>>>>>> 8c32faf2791a6e8ca7547bc58cfb44caec6b89f1
};

export default Members;
