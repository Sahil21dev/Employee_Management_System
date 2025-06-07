// Desc: This file contains the FailedTask component which is used to display the failed tasks in the TaskList component.
import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="w-[18rem] h-full bg-red-400 rounded-2xl p-4 flex-shrink-0">
      <div className="flex justify-between items-center">
        <span className="p-1 bg-red-500 text-[0.8rem] rounded-md">
          {task.taskCategory}
        </span>
        <h2>{task.taskDate}</h2>
      </div>
      <h1 className="mt-4 text-xl">{task.taskTitle}</h1>
      <p className="mt-2 text-[13px] text-black">{task.taskDescription}</p>
    </div>
  );
};

export default FailedTask;
