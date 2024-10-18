"use client";
import { useState } from "react";
import Floors from "./components/Floors";
import ProjectDetail from "./components/ProjectDetail";

export default function DashboardPage() {
  return (
    <div className="m-0 lg:block w-1/2 lg:mt-16 lg:ml-auto lg:mr-72">
      <ProjectDetail />
      <Floors isReversed={false} />
      {/*
      <ProjectDetail />
      <Floors isReversed={true} />
      <ProjectDetail />
      <Floors isReversed={false} />

      <ProjectDetail />
      <Floors isReversed={true} /> */}
    </div>
  );
}
