// Desc: This file contains the AcceptTask component which is used to display the task details in the TaskList component.
import React from "react";

const AcceptTask = ({ task }) => {
  return (
    <div className="w-[18rem] h-full bg-blue-400 rounded-2xl p-4 flex-shrink-0 relative">
      <div className="flex justify-between items-center">
        <span className="p-1 bg-red-500 text-[0.8rem] rounded-md">
          {task.taskCategory}
        </span>
        <h2>{task.taskDate}</h2>
      </div>
      <h1 className="mt-4 text-xl">{task.taskTitle}</h1>
      <p className="mt-2 text-[13px] text-black">{task.taskDescription}</p>
      <div className="flex items-center justify-between gap-2 absolute bottom-8">
        <button className="w-[7rem] py-3 px4 bg-green-400 mt-4 rounded-md active:scale-95">
          Completed
        </button>
        <button className="w-[8rem] py-3 px4 bg-red-400 mt-4 rounded-md active:scale-95">
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
