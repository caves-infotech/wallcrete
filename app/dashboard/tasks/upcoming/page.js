"use client";

import { useState } from "react";
import { all_tasks } from "../../components/data";

const Page = () => {
  const [hoveredTaskId, setHoveredTaskId] = useState(null);

  const [completedTasks, setCompletedTasks] = useState(
    all_tasks.filter((task) => task.status === "completed")
  );
  const [pendingTasks, setPendingTasks] = useState(
    all_tasks.filter((task) => task.status === "pending")
  );

  function handleToggleComplete(id) {
    const task = all_tasks.filter((task) => task.id === id)[0];
    if (task.status == "completed") {
      task.status = "pending";
      const remainingCompletedArray = all_tasks
        .filter((task) => task.id !== id)
        .filter((task) => task.status === "completed");
      setCompletedTasks([...remainingCompletedArray]);

      const remainingPendingArray = all_tasks
        .filter((task) => task.id !== id)
        .filter((task) => task.status === "pending");
      setPendingTasks([...remainingPendingArray, task]);
    } else {
      task.status = "completed";
      const remainingCompletedArray = all_tasks
        .filter((task) => task.id !== id)
        .filter((task) => task.status === "completed");
      setCompletedTasks([...remainingCompletedArray, task]);

      const remainingPendingArray = all_tasks
        .filter((task) => task.id !== id)
        .filter((task) => task.status === "pending");
      setPendingTasks([...remainingPendingArray]);
    }

    console.log("completedTasks", completedTasks);
    console.log("pendingTasks", pendingTasks);
  }

  const today = new Date();
  const cuu_date = today.toISOString().split("T")[0];


  return (
    <div className=" flex flex-col w-[80vw] lg:w-[50vw]  p-2 rounded-xl min-h-[87%] lg:ml-[30%] border border-gray-300 shadow-md mt-20">

      {pendingTasks.filter((task) => task.assign_date > cuu_date).length > 0 && (
        <>
          <div className="flex bg-gray-300 p-2 rounded-lg">
            <div className="flex-1 font-bold">Select</div>
            <div className="flex-1 font-bold">Project</div>
            <div className="flex-1 font-bold">Task</div>
            <div className="flex-1 font-bold">Member</div>
            <div className="flex-1 font-bold">Assign Date</div>
            <div className="flex-1 font-bold">Target Date</div>
            <div className="flex-1 font-bold">Remark</div>
            <div className="flex-1 font-bold">Status</div>
          </div>

          {pendingTasks
            .filter((task) => task.assign_date > cuu_date)
            .map((task) => (
              <div
                className="flex w-full bg-gray-200 border border-gray-300 p-2 mt-4 rounded-lg transition-colors duration-300"
                key={task.id}
              >
                <div className="flex-1 relative flex">
                  <div
                    onClick={() => handleToggleComplete(task.id)}
                    className={`w-6 h-6 border-2 border-gray-400 items-center justify-center rounded-full flex transition-colors duration-300 cursor-pointer ${hoveredTaskId === task.id ? "bg-white" : "bg-transparent"
                      }`}
                    onMouseEnter={() => setHoveredTaskId(task.id)}
                    onMouseLeave={() => setHoveredTaskId(null)}
                  >
                    {hoveredTaskId === task.id && (
                      <span className="text-green-500 text-lg">✔</span>
                    )}
                  </div>
                </div>

                <div className="flex-1">{task.project_name}</div>
                <div className="flex-1">{task.task_name}</div>
                <div className="flex-1">{task.member_name}</div>
                <div className="flex-1">{task.assign_date}</div>
                <div className="flex-1">{task.target_date}</div>
                <div className="flex-1">{task.remark}</div>
                <div className="flex-1">{task.status}</div>
              </div>
            ))}
        </>
      )}

      {/* Completed Tasks Section */}
      {completedTasks.length > 0 && (
        <div className="mt-4">
          <span className="font-bold text-gray-500 ">Completed Tasks</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <div className="flex bg-gray-300 p-2 rounded-lg">
            <div className="flex-1 font-bold">Select</div>
            <div className="flex-1 font-bold">Project</div>
            <div className="flex-1 font-bold">Task</div>
            <div className="flex-1 font-bold">Member</div>
            <div className="flex-1 font-bold">Assign Date</div>
            <div className="flex-1 font-bold">Target Date</div>
            <div className="flex-1 font-bold">Remark</div>
            <div className="flex-1 font-bold">Status</div>
          </div>

          {completedTasks.map((completedTask) => (
            <div
              className="flex w-full bg-gray-200 border border-gray-300 p-2 mt-4 rounded-lg transition-colors duration-300"
              key={completedTask.id}
            >
              <div className="flex-1 relative flex">
                <div
                  className={`w-6 h-6 border-2 border-gray-400 items-center justify-center rounded-full flex bg-white`}
                  onClick={() => handleToggleComplete(completedTask.id)}
                >
                  <span className="text-green-500 text-lg">✔</span>
                </div>
              </div>
              <div className="flex-1">{completedTask.project_name}</div>
              <div className="flex-1">{completedTask.task_name}</div>
              <div className="flex-1">{completedTask.member_name}</div>
              <div className="flex-1">{completedTask.assign_date}</div>
              <div className="flex-1">{completedTask.target_date}</div>
              <div className="flex-1">{completedTask.remark}</div>
              <div className="flex-1">{completedTask.status}</div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Page;
