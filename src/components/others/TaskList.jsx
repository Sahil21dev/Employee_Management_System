// Desc: TaskList component to display all the tasks in the tasklist in the dashboard page, this component is used to display all the tasks in the tasklist in the dashboard page, it contains the new, active, completed and failed tasks.
import React from "react";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import AcceptTask from "../TaskList/AcceptTask";

const TaskList = ({ data }) => {
  console.log(data.tasks);
  return (
    <div
      id="Tasklist"
      className="w-full h-[18rem] mt-16 px-5 flex gap-6 flex-nowrap overflow-x-auto select-none scroll-smooth"
    >
      {data.tasks.map((task) => {
        if (task.newTask) {
          return <NewTask task={task} />;
        }
        if (task.completedTask) {
          return <CompleteTask task={task} />;
        }
        if (task.failedTask) {
          return <FailedTask task={task} />;
        }
        if (task.activeTask) {
          return <AcceptTask task={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
