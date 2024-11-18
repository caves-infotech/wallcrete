"use client";

import EditDetails from "./EditDetails";
import Inbox from "./Inbox";

const RightSidebar = ({ task, showInbox, onUpdateTask ,onStepsUpdate}) => {
    return (
        <aside className="hidden lg:block fixed w-[18%] border-2 border-gray-300 shadow-lg rounded-xl m-2 right-0 top-16">
            {task ? (
                <EditDetails task={task} onUpdateTask={onUpdateTask} onStepsUpdate={onStepsUpdate}/>
            ) : (
                showInbox && <Inbox />
            )}
        </aside>
    );
};

export default RightSidebar;
