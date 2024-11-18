"use client";
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState("Shared Data");
  const [myDayTasks, setMyDayTasks] = useState([]);

  const addToMyDay = (task) => {
    setMyDayTasks((prevTasks) => [...prevTasks, task]);

    console.log("tasks",task)
  };

  return (
    <MyContext.Provider value={{ data, setData, myDayTasks, addToMyDay }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
