"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import demoimage from "../../../public/3129492.jpg";

const ProjectCard = ({ project, test }) => {
  return (
    <>
      <div
        key={project.projectId}
        className={` h-24 text-left bg-slate-400  rounded-lg shadow-lg p-2 border border-gray-200 hover:bg-opacity-90 hover:shadow-xl cursor-pointer transition-all duration-200 ease-in-out`}
      >
        <div className={`h-full flex items-center gap-4 `}>
          <div
            className={`${
              test ? "w-[40%]" : "w-full"
            } h-20 rounded-lg overflow-hidden`}
          >
            <Image
              src={demoimage}
              alt="Project Image"
              width={170}
              height={170}
              className="object-cover w-full h-full"
            />
          </div>
          <div className={`flex-1 h-full ${test ? "" : "hidden"}`}>
            <ul className="text-white">
              <li className="text-lg font-semibold truncate">{project.name}</li>
              <li className="text-sm truncate">{project.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
