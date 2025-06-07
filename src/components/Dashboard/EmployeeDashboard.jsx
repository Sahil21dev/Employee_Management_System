// Desc: Employee Dashboard Component for the employee user, this component is used to display the employee dashboard, it contains the header, task counter and task list components.
import React from "react";
import Header from "../others/Header";
import TaskCounter from "../others/TaskCounter";
import TaskList from "../others/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="text-white p-8">
      <Header data={data} />
      <TaskCounter data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
