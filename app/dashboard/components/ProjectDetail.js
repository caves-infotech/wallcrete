"use client";
import React from "react";
import { useMyContext } from "./Context";

const ProjectDetail = () => {
  const { data } = useMyContext();

  return (
    <div className="h-24 p-2 border-2 border-gray-300 rounded-xl  ">
      <div>
        <h1>Project Name: {data.name || "-"}</h1>
        <h2>
          Members:
          {data.members && data.members.length > 0 ? (
            data.members.map((e, index) => (
              <h3
                key={index}
                className="inline mx-1 border border-gray-400 px-2 rounded-lg "
              >
                {e.name}
              </h3> // Display each member's name
            ))
          ) : (
            <span> No members available</span> // If no members are present
          )}
        </h2>
      </div>
    </div>
  );
};

export default ProjectDetail;
