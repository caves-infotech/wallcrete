"use client";

import { all_tasks } from "../../components/data";

const Page = () => {

    const completedTasks = all_tasks.filter((task) => task.status === "completed");

    return (
        <div className=" flex flex-col w-[80vw] lg:w-[50vw]  p-2 rounded-xl min-h-[87%] lg:ml-[30%] border border-gray-300 shadow-md mt-20">

            {/* Completed Tasks Section */}
            {completedTasks.length > 0 && (
                <div className="">
                    
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
