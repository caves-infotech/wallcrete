"use client";
import { useState } from "react";
import Floors from "./components/Floors";
import ProjectDetail from "./components/ProjectDetail";

export default function DashboardPage() {
  return (
    <div className="hidden border border-gray-300 rounded-lg shadow-md mt-16 lg:block w-1/2 lg:mt-16 lg:ml-auto lg:mr-[19%] h-[88vh]">
      <ProjectDetail />
    </div>
  );
}
