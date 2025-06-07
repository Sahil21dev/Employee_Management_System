// Desc: TaskCounter component to display the task counter in the dashboard page, this component is used to display the task counter in the dashboard page, it contains the count of new, active, completed and failed tasks.
import React from "react";
const TaskCounter = ({ data }) => {
  return (
    <div className=" w-full h-[8rem] p-4 flex  gap-3 mt-5">
      <div className="h-full w-[45%] bg-yellow-500 rounded-md p-[1rem]  text-xl font-semibold ">
        <h1>{data.taskCounts.new}</h1>
        <h1>New Task</h1>
      </div>
      <div className="h-full w-[45%] bg-blue-400 rounded-md p-[1rem] text-xl font-semibold ">
        <h1>{data.taskCounts.active}</h1>
        <h1>Accepted Task</h1>
      </div>
      <div className="h-full w-[45%] bg-green-400 rounded-md p-[1rem] text-xl font-semibold ">
        <h1>{data.taskCounts.completed}</h1>
        <h1>Completed Task</h1>
      </div>
      <div className="h-full w-[45%] bg-red-400 rounded-md p-[1rem] text-xl font-semibold ">
        <h1>{data.taskCounts.failed}</h1>
        <h1>Failed Task</h1>
      </div>
    </div>
  );
};

export default TaskCounter;
