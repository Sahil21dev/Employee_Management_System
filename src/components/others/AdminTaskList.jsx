// Desc: This file contains the AdminTaskList component which is used to display the task list of all the employees in the admin dashboard.
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdminTaskList = () => {
  const data = useContext(AuthContext);
  return (
    <div className="w-full h-auto bg-zinc-900 p-3 mt-5 " id="AdminTask">
      <div className="bg-orange-400 py-2 px-4 flex justify-between rounded">
        <h1 className="ml-1">Employee Name</h1>
        <h1>New Task</h1>
        <h1>Accepted Task</h1>
        <h1>Completed</h1>
        <h1>Failed</h1>
      </div>
      <div className="p-1 h-auto " id="scrollable">
        {data.userData.employees.map((employee, idx) => {
          return (
            <div
              key={idx}
              className="border-emerald-600 border-[2px] py-2 px-4 flex justify-between rounded mt-3"
            >
              <h1 className="text-[15px]">{employee.name}</h1>
              <h1 className="text-[15px]">{employee.taskCounts.new}</h1>
              <h1 className="text-[15px]">{employee.taskCounts.active}</h1>
              <h1 className="text-[15px]">{employee.taskCounts.completed}</h1>
              <h1 className="text-[15px]">{employee.taskCounts.failed}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTaskList;
