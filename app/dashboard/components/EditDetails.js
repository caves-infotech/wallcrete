"use client";

import { useState, useEffect, useMemo } from "react";
import { toast } from 'react-toastify';
import { all_tasks } from "../components/data";

const EditDetails = ({ task, onUpdateTask, onStepsUpdate }) => {
    const [formData, setFormData] = useState({});
    const [reminders, setReminders] = useState({});
    const [sound] = useState(new Audio('/alert.wav'));
    const [steps, setSteps] = useState([]);
    const [newStep, setNewStep] = useState("");
    const [completedCount, setCompletedCount] = useState(0); // Step count state

    const availableTaskNames = useMemo(() => [...new Set(all_tasks.map(task => task.task_name))], []);
    const availableMemberNames = useMemo(() => [...new Set(all_tasks.map(task => task.member_name))], []);

    useEffect(() => {
        if (task) {
            setFormData({ ...task });
            setSteps(task.steps || []);
            updateCompletedCount(task.steps || []); // Initialize completed count
        }
    }, [task]);

    useEffect(() => {
        if (!reminders[formData.id]) return;

        const interval = setInterval(() => {
            const currentTime = new Date();
            const reminderTime = new Date(reminders[formData.id]);

            if (currentTime.getTime() >= reminderTime.getTime() && currentTime.getTime() < reminderTime.getTime() + 1000) {
                sound.play().catch(error => console.error('Error playing sound:', error));
                toast.success("Reminder: " + formData.task_name, {
                    position: 'top-center',
                    theme: 'dark',
                    autoClose: 5000,
                });
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [reminders, sound, formData.task_name, formData.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = () => {
        if (task) onUpdateTask({ ...formData, steps });
    };

    const handleDateTimeChange = (e) => {
        const { value } = e.target;
        setReminders((prevReminders) => ({
            ...prevReminders,
            [formData.id]: value,
        }));
    };

    const handleInputChange = (event) => {
        setNewStep(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (newStep.trim() !== "") {
                const newSteps = [
                    ...steps,
                    { id: steps.length, text: newStep, stepStatus: "pending" }
                ];
                setSteps(newSteps);
                onStepsUpdate(task.id, newSteps); // Notify the parent component
                setNewStep(""); // Clear input
            }
        }
    };

    const handleToggleComplete = (id) => {
        setSteps((prevSteps) => {
            return prevSteps.map((step) => {
                if (step.id === id) {
                    const updatedStatus = step.stepStatus === "completed" ? "pending" : "completed";
                    return { ...step, stepStatus: updatedStatus };
                }
                return step;
            });
        });
    };

    const updateCompletedCount = (stepsArray) => {
        const count = stepsArray.filter(step => step.stepStatus === "completed").length;
        setCompletedCount(count);
    };

    useEffect(() => {
        updateCompletedCount(steps); // Update count whenever steps change
    }, [steps]);

    return (
        <div className="h-[88vh] px-4 pb-5">
            <span className="block my-3 font-semibold text-lg">
                {formData.project_name}
            </span>

            <span className="block my-3">
                Completed Steps: {completedCount} / {steps.length}
            </span>

            <div className="flex align-center">
                <div className="flex flex-col w-full">
                    {steps.map((step) => (
                        <div key={step.id} className="flex items-center hover:bg-gray-300 p-2">
                            <div
                                onClick={() => handleToggleComplete(step.id)}
                                className={`w-6 h-6 border-2 mt-1 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer 
                                    ${step.stepStatus === "completed" ? " border-gray-400" : "border-gray-400"}`}
                            >
                                {step.stepStatus === "completed" && (
                                    <span className="text-green-500 text-lg">✔</span>
                                )}
                            </div>
                            <div className={`ml-2 ${step.stepStatus === "completed" ? "line-through" : ""}`}>
                                {step.text}
                            </div>
                        </div>
                    ))}

                    <input
                        type="text"
                        value={newStep}
                        onChange={(e) => setNewStep(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="+ Add Step"
                        className="w-full mb-2 bg-inherit focus:outline-none border border-gray-300 rounded-lg p-2"
                    />
                </div>
            </div>

            <div>
                <label className="block">Task Name:</label>
                <select
                    name="task_name"
                    value={formData.task_name || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                >
                    <option value="">Select a Task</option>
                    {availableTaskNames.map((taskName, index) => (
                        <option key={index} value={taskName}>
                            {taskName}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block">Member Name:</label>
                <select
                    name="member_name"
                    value={formData.member_name || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                >
                    <option value="">Select a Member</option>
                    {availableMemberNames.map((memberName, index) => (
                        <option key={index} value={memberName}>
                            {memberName}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block">Target Date:</label>
                <input
                    type="date"
                    name="target_date"
                    value={formData.target_date || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                />
            </div>

            <div>
                <label className="block">Remark:</label>
                <input
                    type="text"
                    name="remark"
                    value={formData.remark || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                />
            </div>

            <div>
                <label className="block">Reminder</label>
                <input
                    id={formData.id}
                    type="datetime-local"
                    name="reminder_date"
                    required
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                    value={reminders[formData.id] || ""}
                    onChange={handleDateTimeChange}
                    onBlur={handleBlur}
                />
            </div>

        </div>
    );
};

export default EditDetails;
