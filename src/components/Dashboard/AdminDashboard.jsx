// Desc: Admin Dashboard component for the admin user, this component is used to display the admin dashboard, it contains the header, create task and admin task list components.
import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AdminTaskList from "../others/AdminTaskList";

const AdminDashboard = ({ data }) => {
  return (
    <div className="p-8 h-screen bg-inherit text-white overflow-auto">
      <Header data={data} />
      <CreateTask />
      <AdminTaskList />
    </div>
  );
};

export default AdminDashboard;
