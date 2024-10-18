"use client";
import { useMyContext } from "./Context";
import Image from "next/image";
import demoimage from "../../../public/3129492.jpg";

const ProjectCard = ({ project, test }) => {
  const { setData } = useMyContext();
  // Function to send details
  const sendDetails = (project) => {
    setData(project);
  };
  return (
    <>
      <div
        key={project.projectId}
        className={`mt-4 h-24 text-left bg-slate-400  rounded-lg shadow-lg p-2 border border-gray-200 hover:bg-opacity-90 hover:shadow-xl cursor-pointer transition-all duration-200 ease-in-out`}
      >
        <div className={`h-full flex items-center gap-4 `}>
          <div
            className={`${
              test ? "w-full" : "w-2/5"
            } h-20 rounded-lg overflow-hidden`}
          >
            <Image
              src={"/lskjf"}
              alt={project.name}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className={`flex-1 h-full ${test ? "hidden" : ""}`}>
            <ul className="text-white">
              <li className="text-lg font-semibold truncate">{project.name}</li>
              <li className="text-sm truncate">{project.location}</li>
              <li className="pl-12 lg:pl-16">
                <button
                  className="w-28 h-8 text-sm lg:w-24 lg:h-7 border border-slate-500 bg-slate-500 rounded-lg z-50 "
                  onClick={(e) => {
                    e.stopPropagation();
                    sendDetails(project);
                  }}
                >
                  view designs
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
