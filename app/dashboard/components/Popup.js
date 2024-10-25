"use client";
import React, { useState } from "react";

const Popups = ({ isModalOpen, closeModal, type, onSubmit }) => {
  const [newFloor, setNewFloor] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedConsultants, setSelectedConsultants] = useState([]);
  const [selectedOwners, setSelectedOwners] = useState([]);
  const [selectedDistributors, setSelectedDistributors] = useState([]);
  const [projectName, setProjectName] = useState("");

  // Predefined members
  const predefinedMembers = [
    { id: 1, name: "Alice", role: "owner" },
    { id: 2, name: "Bob", role: "consultant" },
    { id: 3, name: "Charlie", role: "member" },
    { id: 4, name: "David", role: "owner" },
    { id: 5, name: "Eva", role: "member" },
    { id: 6, name: "Alice2", role: "distributor" },
    { id: 7, name: "Bob2", role: "distributor" },
    { id: 8, name: "Charlie2", role: "member" },
    { id: 9, name: "David2", role: "consultant" },
    { id: 10, name: "Eva2", role: "member" },
  ];

  const predefinedDesigns = [
    { id: 600, name: "Working drawing" },
    { id: 601, name: "Furniture drawing" },
    { id: 602, name: "Structural drawing" },
    { id: 603, name: "Electrical layout" },
    { id: 604, name: "Plumbing layout" },
    { id: 605, name: "Ceiling layout" },
    { id: 606, name: "Documents" },
    { id: 607, name: "Quotation" },
    { id: 608, name: "Boqs" },
    { id: 609, name: "Orders" },
    { id: 610, name: "Reports" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine all selected members (IDs)
    const allSelectedMembers = [
      ...selectedMembers,
      ...selectedConsultants,
      ...selectedOwners,
      ...selectedDistributors,
    ];

    // Map through selected member IDs and find full details
    const selectedMemberDetails = allSelectedMembers
      .map((id) => {
        const member = predefinedMembers.find((member) => member.id === id);
        return member
          ? { id: member.id, name: member.name, role: member.role }
          : null;
      })
      .filter(Boolean); // Filter out null values

    console.log("Selected Members: ", selectedMemberDetails);

    // Create a project ID (you can replace this with your own method for generating project IDs)
    const projectId = generateProjectId(); // Replace this with your actual method

    // Prepare the design object to be included
    const selectedDesigns = predefinedDesigns.map((design) => ({
      id: design.id,
      name: design.name,
    }));

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.selectedMembers = selectedMemberDetails; // Add detailed members info to the form data
    data.projectId = projectId; // Add the newly created project ID
    data.selectedDesigns = selectedDesigns; // Add the designs to the form data

    if (onSubmit) {
      onSubmit(data);
      closeModal();
    }

    console.log("Form Data:", data);
  };

  // Sample function to generate project ID (replace this with your logic)
  const existingProjectIds = new Set(); // Initialize with already created IDs if any

  const generateProjectId = () => {
    let projectId;
    do {
      const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
      const randomLetter = String.fromCharCode(
        65 + Math.floor(Math.random() * 26)
      ); // Generate a random uppercase letter (A-Z)
      projectId = `${randomLetter}${randomNumber}`; // Concatenate letter and number
    } while (existingProjectIds.has(projectId)); // Keep generating until a unique ID is found

    existingProjectIds.add(projectId); // Add the new project ID to the set
    return projectId; // Return the unique project ID
  };

  const handleMemberChange = (e, role) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedIds = selectedOptions.map((option) => parseInt(option.value));

    if (role === "member") {
      setSelectedMembers(selectedIds);
    } else if (role === "consultant") {
      setSelectedConsultants(selectedIds);
    } else if (role === "owner") {
      setSelectedOwners(selectedIds);
    } else if (role === "distributor") {
      setSelectedDistributors(selectedIds);
    }
  };

  // Handle member removal
  const handleRemoveMember = (id, role) => {
    if (role === "member") {
      setSelectedMembers(selectedMembers.filter((memberId) => memberId !== id));
    } else if (role === "consultant") {
      setSelectedConsultants(
        selectedConsultants.filter((memberId) => memberId !== id)
      );
    } else if (role === "owner") {
      setSelectedOwners(selectedOwners.filter((memberId) => memberId !== id));
    } else if (role === "distributor") {
      setSelectedDistributors(
        selectedDistributors.filter((memberId) => memberId !== id)
      );
    }
  };

  const getTitle = () => {
    switch (type) {
      case "assignUser":
        return "Assign User";
      case "createProject":
        return "Create Project";
      case "createFloor":
        return "Create Floor";
      default:
        return "Title";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "assignUser":
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Assign User
            </h3>
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  >
                    <option value="">Select role</option>
                    <option value="moderator">Moderator</option>
                    <option value="creator">Creator</option>
                    <option value="client">Client</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            </form>
          </>
        );
      case "createProject":
        return (
          <>
            <form
              className="p-4 md:p-5 bg-white shadow-md rounded-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 mb-4 w-full">
                <div className="col-span-1">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-800"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Project name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Side - 5 Select Boxes */}
                  <div className="space-y-4">
                    {/* Team Members */}
                    <div>
                      <label
                        htmlFor="assignMembers"
                        className="block mb-2 text-sm font-medium text-gray-800"
                      >
                        Team Members
                      </label>
                      <select
                        name="assignMembers"
                        id="assignMembers"
                        multiple
                        onChange={(e) => handleMemberChange(e, "member")}
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        {predefinedMembers
                          .filter((member) => member.role === "member")
                          .map((member) => (
                            <option key={member.id} value={member.id}>
                              {member.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Consultants */}
                    <div>
                      <label
                        htmlFor="assignConsultants"
                        className="block mb-2 text-sm font-medium text-gray-800"
                      >
                        Consultants
                      </label>
                      <select
                        name="assignConsultants"
                        id="assignConsultants"
                        multiple
                        onChange={(e) => handleMemberChange(e, "consultant")}
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        {predefinedMembers
                          .filter((member) => member.role === "consultant")
                          .map((member) => (
                            <option key={member.id} value={member.id}>
                              {member.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Owners */}
                    <div>
                      <label
                        htmlFor="assignOwners"
                        className="block mb-2 text-sm font-medium text-gray-800"
                      >
                        Owners
                      </label>
                      <select
                        name="assignOwners"
                        id="assignOwners"
                        multiple
                        onChange={(e) => handleMemberChange(e, "owner")}
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        {predefinedMembers
                          .filter((member) => member.role === "owner")
                          .map((member) => (
                            <option key={member.id} value={member.id}>
                              {member.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Contractors */}
                    <div>
                      <label
                        htmlFor="assignContractor"
                        className="block mb-2 text-sm font-medium text-gray-800"
                      >
                        Contractor
                      </label>
                      <select
                        name="assignContractor"
                        id="assignContractor"
                        multiple
                        onChange={(e) => handleMemberChange(e, "contractor")}
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        {predefinedMembers
                          .filter((member) => member.role === "contractor")
                          .map((member) => (
                            <option key={member.id} value={member.id}>
                              {member.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Suppliers */}
                    <div>
                      <label
                        htmlFor="assignSuppliers"
                        className="block mb-2 text-sm font-medium text-gray-800"
                      >
                        Suppliers
                      </label>
                      <select
                        name="assignSuppliers"
                        id="assignSuppliers"
                        multiple
                        onChange={(e) => handleMemberChange(e, "supplier")}
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        {predefinedMembers
                          .filter((member) => member.role === "supplier")
                          .map((member) => (
                            <option key={member.id} value={member.id}>
                              {member.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Right Side - Selected Members Table */}
                  <div className="col-span-1 mt-2">
                    <h4 className="text-sm font-medium text-gray-800">
                      Selected Members
                    </h4>
                    <table className="min-w-full mt-2 border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-800">
                            Name
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-800">
                            Role
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-800">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ...selectedMembers,
                          ...selectedDistributors,
                          ...selectedConsultants,
                          ...selectedOwners,
                        ].map((id) => {
                          const member = predefinedMembers.find(
                            (member) => member.id === id
                          );
                          return member ? (
                            <tr key={id} className="border-b border-gray-200">
                              <td className="px-4 py-2 text-sm text-gray-800">
                                {member.name}
                              </td>
                              <td className="px-4 py-2 text-sm text-gray-800">
                                {member.role}
                              </td>
                              <td className="px-4 py-2 text-sm text-gray-800">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleRemoveMember(id, member.role)
                                  }
                                  className="text-red-600 hover:text-red-800"
                                >
                                  &times; Remove
                                </button>
                              </td>
                            </tr>
                          ) : null;
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create Project
                </button>
              </div>
            </form>
          </>
        );
      case "createFloor":
        return (
          <>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create Floor
            </h3>
            {/* Include your project creation form here */}
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              {/* Add form fields for project creation */}
              <div className="grid gap-4 mb-4 grid-cols-1">
                <div className="col-span-1">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Floor Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Floor name"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex="1"
          className="fixed inset-0 z-999999999 flex justify-center items-center bg-gray-900 bg-opacity-75"
        >
          <div className="relative p-4 w-full max-w-[60rem] max-h-[80%] z-[1000]">
            <div className="relative bg-gray-100  rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-black ">
                  {getTitle()}
                </h3>

                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Render the content based on type here */}
              {renderContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popups;
