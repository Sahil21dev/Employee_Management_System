// CreateTask Component for the admin user, this component is used to create a new task, it contains a form with input fields for task title, date, description, assign to and category.
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, updateUserData } = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!userData) return;

    const newTask = {
      taskTitle,
      taskDate,
      taskDescription,
      assignTo,
      taskCategory,
      newTask: true,
      activeTask: false,
      completedTask: false,
      failedTask: false,
    };

    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            new: emp.taskCounts.new + 1,
          },
        };
      }
      return emp;
    });

    updateUserData({ ...userData, employees: updatedEmployees });

    // Clear form fields
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setAssignTo("");
    setTaskCategory("");
  };

  return (
    <div className="w-full h-auto bg-zinc-900">
      <form
        onSubmit={submitHandler}
        className="w-full h-full p-3 flex items-start justify-between gap-6"
      >
        <div className="w-1/3 h-full px-5">
          <div className="mt-3">
            <h1>Task Title</h1>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Enter Task Title"
              className="placeholder:text-slate-400 p-2 rounded w-full bg-inherit border"
            />
          </div>
          <div className="mt-3">
            <h1>Date</h1>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="text-slate-400 p-2 rounded w-full bg-inherit border"
            />
          </div>
          <div className="mt-3">
            <h1>Assign To</h1>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Enter Employee Name"
              className="placeholder:text-slate-400 p-2 rounded w-full bg-inherit border"
            />
          </div>
          <div className="mt-3">
            <h1>Category</h1>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              type="text"
              placeholder="Design, Developer, etc"
              className="placeholder:text-slate-400 p-2 rounded w-full bg-inherit border"
            />
          </div>
        </div>
        <div className="w-1/3 h-full p-2">
          <div>
            <h1>Description</h1>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter Task Description"
              className="w-full h-[15rem] p-2 rounded-md border bg-inherit"
            />
          </div>
          <div>
            <button className="w-full bg-orange-400 p-2 rounded-md mt-2">
              Submit Button
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
