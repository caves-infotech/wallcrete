"use client";

import { all_tasks } from "../../../components/data"; // Ensure this path is correct
import { useEffect, useState } from "react";

const MemberDetailsPage = ({ id }) => {
  const [memberTask, setMemberTask] = useState(null);

  useEffect(() => {

    console.log("Dynamic Route ID:", id);
    if (id) {
      const selectedTask = all_tasks.find((task) => task.id === parseInt(id));
      setMemberTask(selectedTask);
    }
  }, [id]);

  if (!memberTask) {
    return <div>Loading member data...</div>;
  }

  return (
    <div className=" flex flex-col w-[80vw] lg:w-[50vw]  p-2 rounded-xl min-h-[87%] lg:ml-[30%] border border-gray-300 shadow-md mt-20">

      <>
        <div className="flex bg-gray-300 p-2 rounded-lg">
          <div className="flex-1 font-bold">Project</div>
          <div className="flex-1 font-bold">Task</div>
          <div className="flex-1 font-bold">Member</div>
          <div className="flex-1 font-bold">Assign Date</div>
          <div className="flex-1 font-bold">Target Date</div>
          <div className="flex-1 font-bold">Remark</div>
          <div className="flex-1 font-bold">Status</div>
        </div>

        <div
          className="flex w-full bg-gray-200 border border-gray-300 p-2 mt-4 rounded-lg transition-colors duration-300"
          key={memberTask.id}
        >
          <div className="flex-1">{memberTask.project_name}</div>
          <div className="flex-1">{memberTask.task_name}</div>
          <div className="flex-1">{memberTask.member_name}</div>
          <div className="flex-1">{memberTask.assign_date}</div>
          <div className="flex-1">{memberTask.target_date}</div>
          <div className="flex-1">{memberTask.remark}</div>
          <div className="flex-1">{memberTask.status}</div>
        </div>
      </>

    </div>

  );
};

export default MemberDetailsPage;
