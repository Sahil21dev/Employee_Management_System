// Desc: NewTask component which is used to display the new tasks in the TaskList component.
import React from "react";

const NewTask = ({ task }) => {
  return (
    <div className="w-[18rem] h-full bg-yellow-500 rounded-2xl p-4 flex-shrink-0 relative">
      <div className="flex justify-between items-center">
        <span className="p-1 bg-red-500 text-[0.8rem] rounded-md">
          {task.taskCategory}
        </span>
        <h2>{task.taskDate}</h2>
      </div>
      <h1 className="mt-4 text-xl">{task.taskTitle}</h1>
      <p className="mt-2 text-[13px] text-black">{task.taskDescription}</p>
      <button className="w-[15rem] py-3 px4 bg-blue-400 mt-4 rounded-md active:scale-95 absolute bottom-8">
        Accept
      </button>
    </div>
  );
};

export default NewTask;
