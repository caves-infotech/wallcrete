"use client";

import EditDetails from "./EditDetails";
import Inbox from "./Inbox";

<<<<<<< HEAD
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
=======
const RightSidebar = ({rightsidebar}) => {
  return <Inbox rightsidebar={rightsidebar}/>;
>>>>>>> 8c32faf2791a6e8ca7547bc58cfb44caec6b89f1
};

export default RightSidebar;
