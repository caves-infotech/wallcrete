"use client";
import React, { useState, useEffect } from 'react';

// Static predefined tasks
const predefinedTasks = [
  {
    id: 1,
    task_name: "create web",
  },
  {
    id: 4,
    task_name: "development",
  },
  {
    id: 6,
    task_name: "create app",
  },
  {
    id: 8,
    task_name: "designing",
  },
];

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [taskName, setTaskName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Set predefined tasks when component mounts
  useEffect(() => {
    setTasks(predefinedTasks);
  }, []);

  const openAddModal = () => {
    setModalMode('add');
    setTaskName('');
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    setModalMode('edit');
    setTaskName(tasks[index].task_name);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskName('');
    setEditingIndex(null);
  };

  const addTask = () => {
    const newTask = { id: Date.now(), task_name: taskName };
    setTasks([...tasks, newTask]);
    closeModal();
  };

  const editTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editingIndex ? { ...task, task_name: taskName } : task
    );
    setTasks(updatedTasks);
    closeModal();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (modalMode === 'add') {
        addTask();
      } else {
        editTask();
      }
    }
  };

  const openDeleteConfirm = (index) => {
    setTaskToDelete(index);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDeleteTask = () => {
    setTasks(tasks.filter((_, index) => index !== taskToDelete));
    setIsDeleteConfirmOpen(false);
    setTaskToDelete(null);
  };

  const filteredTasks = tasks.filter(task =>
    task.task_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-[80vw] lg:w-[50vw] p-4 rounded-xl min-h-[87%] lg:ml-[30%] border border-gray-300 shadow-md mt-20">
      <h1 className="text-xl font-bold mb-4">Pre-defined Task</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search pre-defined task..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded flex-1 mr-2"
        />

        <button onClick={openAddModal} className="bg-blue-500 text-white p-2 rounded">
          Add Task +
        </button>
      </div>

      <div className="flex font-semibold p-2 border-b">
        <div className="flex-1">Pre-defined Task</div>
        <div className="w-24 text-center">Actions</div>
      </div>

      <div>
        {filteredTasks.map((task, index) => (
          <div key={task.id} className="flex items-center p-2 border-b">
            <div className="flex-1">{task.task_name}</div>
            <div className="flex space-x-2">
              <button
                onClick={() => openEditModal(index)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => openDeleteConfirm(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-1 bg-gray-600 bg-opacity-50 flex pt-4 z-50 items-start justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white px-6 py-3 rounded shadow-lg w-[80vw] max-w-lg h-58"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-medium">
              {modalMode === 'add' ? 'Add New Task' : 'Edit Task'}
            </h2>
            <hr className="mb-4 mt-2"></hr>

            <label>Enter Task Name</label>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border p-2 rounded w-full my-2"
            />
            <hr className="mt-8"></hr>

            <div className="flex justify-between mt-2">
              <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button
                onClick={modalMode === 'add' ? addTask : editTask}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteConfirmOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsDeleteConfirmOpen(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg max-w-sm w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this task?</p>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={confirmDeleteTask}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>

              <button
                onClick={() => setIsDeleteConfirmOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
