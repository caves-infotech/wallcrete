"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; 

import { all_tasks } from "../components/data";
import RightSidebar from "../components/RightSidebar";
import CreatableSelect from "react-select/creatable";
import MyContext from "../components/Context";

const TaskList = ({ tasks, onToggleComplete, onSelectTask, completed, onDragStart, onDrop, onDragOver }) => {
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedTask, setSelectedTask] = useState(null);
    const [isMemberListVisible, setIsMemberListVisible] = useState(false); // Controls visibility of the member list

    const availableMembers = all_tasks
        .map((task) => task.member_name) // Get member names
        .filter((value, index, self) => self.indexOf(value) === index)
    console.log("availableMembers", availableMembers);

    const { addToMyDay } = useContext(MyContext);
    const contextMenuRef = useRef(null); // Create a reference to the context menu
    const router = useRouter();

    const handleRightClick = (e, task) => {
        e.preventDefault();
        setSelectedTask(task);
        setContextMenuPosition({ x: e.clientX, y: e.clientY });
        setContextMenuVisible(true);
    };

    const handleAddToMyDay = (selectedTask) => {
        addToMyDay(selectedTask);
        setContextMenuVisible(false);
    };

    const handleClickOutside = (e) => {
        if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
            setContextMenuVisible(false);
            setIsMemberListVisible(false);
        }
    };

    const handleSelectMember = (member) => {
        const updatedTasks = tasks.map((task) =>
            task.id === selectedTask.id ? { ...task, member_name: member } : task
        );
        onSelectTask(updatedTasks);

        // After selecting a member, redirect to the MemberDetailsPage
        router.push(`/dashboard/tasks/members/${selectedTask.id}`);
        setContextMenuVisible(false);
        setIsMemberListVisible(false); // Hide the member list
    };

    const handleDeleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setContextMenuVisible(false);
            // setPendingTasks((prev) => prev.filter((task) => task.id !== id));
            // setCompletedTasks((prev) => prev.filter((task) => task.id !== id));
            if (selectedTask && selectedTask.id === id) {
                setSelectedTask(null);
            }
        }
    };

    // UseEffect to listen for clicks outside the context menu
    useEffect(() => {
        if (contextMenuVisible) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside); // Cleanup
        };
    }, [contextMenuVisible]);

    return (
        <>
            {tasks.map((task, index) => (
                <div
                    className={`flex w-full bg-gray-200 border border-gray-300 p-2 mt-4 rounded-lg transition-colors duration-300 ${completed ? 'cursor-default' : 'cursor-pointer'}`}
                    key={task.id}
                    onClick={!completed ? () => onSelectTask(task) : undefined}
                    draggable={!completed}
                    onDragStart={(e) => onDragStart(e, index)}
                    onDrop={(e) => onDrop(e, index)}
                    onDragOver={onDragOver}
                    onContextMenu={(e) => handleRightClick(e, task)}
                >
                    <div className="flex-1 relative flex">
                        <div
                            className={`w-6 h-6 border-2 border-gray-400 items-center justify-center rounded-full flex ${completed ? 'bg-white' : 'bg-transparent'} cursor-pointer`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleComplete(task.id);
                            }}
                        >
                            {completed && <span className="text-green-500 text-lg">✔</span>}
                        </div>
                    </div>

                    <div className="flex-1">{task.project_name}</div>
                    <div className="flex-1">{task.task_name}</div>
                    <div className="flex-1">{task.member_name}</div>
                    <div className="flex-1">{task.assign_date}</div>
                    <div className="flex-1">{task.target_date}</div>
                    <div className="flex-1">{task.remark}</div>
                    <div className="flex-1">{task.status}</div>
                    {/* <div className="flex-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDeleteTask(task.id);
                            }}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div> */}

                    {
                        task.status === "pending" && contextMenuVisible &&
                        (
                            <div
                                ref={contextMenuRef}
                                className="absolute bg-white border border-gray-300 shadow-md rounded-lg w-[180px] h-[200px]"
                                style={{
                                    left: `${contextMenuPosition.x}px`,
                                    top: `${contextMenuPosition.y}px`,
                                }}
                            >
                                <ul>
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
                                        onClick={() => handleAddToMyDay(selectedTask)}
                                    >
                                        Add to My Day
                                    </li>
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
                                        onClick={() => setIsMemberListVisible(true)}
                                    >
                                        Move task to...
                                    </li>
                                    <li
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
                                        onClick={() => handleDeleteTask (selectedTask.id) }
                                    >
                                       Delete Task
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                    {/* Show available members if "Move task to..." is clicked */}
                    {isMemberListVisible && (
                        <div className="absolute bg-white border border-gray-300 shadow-md rounded-md w-[180px] h-[220px]" style={{ left: `${contextMenuPosition.x + 180}px`, top: `${contextMenuPosition.y}px` }}>
                            <ul>
                                {availableMembers.map((member) => (
                                    <li
                                        key={member} // Unique key for each member
                                        className="px-4 py-2 cursor-pointer text-black hover:bg-gray-200 flex items-center"
                                        onClick={() => handleSelectMember(member)} // Assign task to member
                                    >
                                        {member} {/* Display member name */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

const Page = () => {
    const [completedTasks, setCompletedTasks] = useState(all_tasks.filter((task) => task.status === "completed"));
    const [pendingTasks, setPendingTasks] = useState(all_tasks.filter((task) => task.status === "pending"));
    const [selectedTask, setSelectedTask] = useState(null);
    const [showInbox, setShowInbox] = useState(true);
    const [sound] = useState(new Audio('/task.wav'));
    const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        task_name: "",
        project_name: "",
        member_name: "",
        assign_date: "",
        target_date: "",
        remark: "",
        status: "pending"
    });

    const [projects, setProjects] = useState(
        [...new Set(all_tasks.map((task) => task.project_name))]
    );

    const filteredPendingTasks = pendingTasks.filter(
        (task) =>
            task.task_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.project_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.member_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredCompletedTasks = completedTasks.filter(
        (task) =>
            task.task_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.project_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.member_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const projectOptions = projects.map((projectName) => ({
        value: projectName,
        label: projectName,
    }));

    const handleSelectChange = (selectedOption) => {
        if (selectedOption) {
            console.log("Selected project:", selectedOption);
        }
    };

    const handleCreate = (inputValue) => {
        const newProject = { value: inputValue, label: inputValue };
        setProjects((prevProjects) => [...prevProjects, inputValue]);

        console.log("New project added:", newProject);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddTask = () => {
        if (!newTask.task_name || !newTask.project_name || !newTask.member_name || !newTask.assign_date || !newTask.target_date) {
            alert("Please fill all the fields.");
            return;
        }

        const newTaskData = {
            ...newTask,
            id: pendingTasks.length + 1,
        };

        setPendingTasks([...pendingTasks, newTaskData]);
        closeModal();
        setNewTask({
            task_name: "",
            project_name: "",
            member_name: "",
            assign_date: "",
            target_date: "",
            remark: "",
            status: "pending"
        });
    };

    const handleToggleComplete = (id) => {
        const taskIndex = all_tasks.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            const updatedTask = { ...all_tasks[taskIndex], status: all_tasks[taskIndex].status === "completed" ? "pending" : "completed" };
            all_tasks[taskIndex] = updatedTask;

            if (updatedTask.status === "completed") {
                setPendingTasks((prev) => prev.filter((task) => task.id !== id));
                setCompletedTasks((prev) => [...prev, updatedTask]);
            } else {
                setCompletedTasks((prev) => prev.filter((task) => task.id !== id));
                setPendingTasks((prev) => [...prev, updatedTask]);
            }
            sound.play();
        }
    };

    const handleComponentSelect = (task) => {
        setSelectedTask(task);
        setShowInbox(false);
    };

    const handleUpdateTask = (updatedTask) => {
        setPendingTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        setCompletedTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        setSelectedTask(updatedTask);
    };

    const handleStepsUpdate = (taskId, steps) => {
        setPendingTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, steps } : task)));
        setCompletedTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, steps } : task)));
        if (selectedTask && selectedTask.id === taskId) {
            setSelectedTask((prev) => ({ ...prev, steps }));
        }
    };

    const handleDeleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            onDeleteTask(id);
            setSelectedTask(null); // Reset selected task
            setContextMenuVisible(false); // Hide context menu
        }
    };
    

    const handleDragStart = (e, index) => {
        setDraggedTaskIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, dropIndex) => {
        e.preventDefault();

        const updatedTasks = [...pendingTasks];
        const draggedTask = updatedTasks.splice(draggedTaskIndex, 1)[0];
        updatedTasks.splice(dropIndex, 0, draggedTask);

        setPendingTasks(updatedTasks);
        setDraggedTaskIndex(null);
    };

    return (
        <>
            <div className="flex flex-col w-[80vw] lg:w-[50vw] p-2 rounded-xl min-h-[87%] lg:ml-[30%] border border-gray-300 shadow-md mt-20">
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search task..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-2 rounded flex-1 mr-2"
                    />

                    <button className="bg-blue-500 text-white p-2 rounded" onClick={openModal}>
                        Add New Task +
                    </button>
                </div>

                {filteredPendingTasks.length > 0 && (
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
                            {/* <div className="flex-1 font-bold">Action</div> */}
                        </div>

                        <TaskList
                            tasks={filteredPendingTasks}
                            onToggleComplete={handleToggleComplete}
                            onSelectTask={handleComponentSelect}
                            // onDeleteTask={handleDeleteTask}
                            onDragStart={handleDragStart}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        />
                    </>
                )}

                {filteredCompletedTasks.length > 0 && (
                    <div className="mt-4">
                        <span className="font-bold text-gray-500">Completed Tasks</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 inline"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
                            {/* <div className="flex-1 font-bold">Action</div> */}

                        </div>
                        <TaskList tasks={filteredCompletedTasks} onToggleComplete={handleToggleComplete} completed={true} />
                    </div>
                )}

                <RightSidebar
                    task={selectedTask}
                    onUpdateTask={handleUpdateTask}
                    onStepsUpdate={handleStepsUpdate}
                />

                {isModalOpen && (
                    <div className="fixed inset-10 flex items-center justify-center z-90 ">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
                            <h2 className="text-xl mb-4">Add New Task</h2>

                            <label>Project</label>
                            <CreatableSelect
                                options={projectOptions}
                                onChange={handleSelectChange}
                                onCreateOption={handleCreate}
                                placeholder="Select or type a new project"
                                isClearable
                                className="rounded w-full mb-4"
                            />

                            <label>Project</label>
                            <select
                                name="project_name"
                                value={newTask.project_name}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full mb-4"
                            >
                                <option value="">Select a project</option>
                                {[
                                    ...new Set(
                                        [...pendingTasks, ...completedTasks].map((task) => task.project_name)
                                    ),
                                ].map((projectName, index) => (
                                    <option key={index} value={projectName}>
                                        {projectName}
                                    </option>
                                ))}
                            </select>

                            <label>Task</label>
                            <select
                                name="task_name"
                                value={newTask.task_name}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full mb-4"
                            >
                                <option value="">Select a Task</option>
                                {[
                                    ...new Set(
                                        [...pendingTasks, ...completedTasks].map((task) => task.task_name)
                                    ),
                                ].map((taskName, index) => (
                                    <option key={index} value={taskName}>
                                        {taskName}
                                    </option>
                                ))}
                            </select>

                            <label>Member</label>
                            <select
                                name="member_name"
                                value={newTask.member_name}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full mb-4"
                            >
                                <option value="">Select a member</option>
                                {[
                                    ...new Set(
                                        [...pendingTasks, ...completedTasks].map((task) => task.member_name)
                                    ),
                                ].map((mamberName, index) => (
                                    <option key={index} value={mamberName}>
                                        {mamberName}
                                    </option>
                                ))}
                            </select>

                            <label>Choose Assign Date</label>
                            <input
                                type="date"
                                name="assign_date"
                                value={newTask.assign_date}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full mb-4"
                            />

                            <label>Choose Target Date</label>
                            <input
                                type="date"
                                name="target_date"
                                value={newTask.target_date}
                                onChange={handleInputChange}
                                className="border p-2 rounded w-full mb-4"
                            />

                            <label>Remark</label>
                            <textarea
                                name="remark"
                                value={newTask.remark}
                                onChange={handleInputChange}
                                placeholder="Remark"
                                className="border p-2 rounded w-full mb-4"
                            />

                            <div className="flex flex-1 w-full">
                                <button onClick={closeModal} className="bg-gray-300 flex-1 text-black p-2 rounded ">
                                    Cancel
                                </button>
                                <button onClick={handleAddTask} className="bg-blue-500 flex-1 text-white p-2 rounded">
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Page;
