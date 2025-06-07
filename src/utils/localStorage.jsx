// Desc: Local Storage functions to set and get data
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    const employees = [
      {
        id: 1,
        name: "Rahul",
        email: "rahul@example.com",
        password: "123",
        tasks: [
          {
            taskTitle: "Complete Project Report",
            taskDescription:
              "Prepare and submit the final project report by the end of the week.",
            taskDate: "2024-12-29",
            taskCategory: "Documentation",
            assignTo: "Rahul",
            activeTask: false,
            completedTask: false,
            failedTask: false,
            newTask: true,
          },
          {
            taskTitle: "Code Review",
            taskDescription:
              "Review the codebase for module X and provide feedback.",
            taskDate: "2024-12-28",
            taskCategory: "Development",
            assignTo: "Rahul",
            activeTask: false,
            completedTask: true,
            failedTask: false,
            newTask: false,
          },
          {
            taskTitle: "Team Meeting",
            taskDescription: "Attend the weekly team meeting.",
            taskDate: "2024-12-27",
            taskCategory: "Management",
            assignTo: "Rahul",
            activeTask: false,
            completedTask: true,
            failedTask: false,
            newTask: false,
          },
        ],
        taskCounts: { active: 0, completed: 2, failed: 0, new: 1 },
      },
      {
        id: 2,
        name: "Priya",
        email: "priya@example.com",
        password: "123",
        tasks: [
          {
            taskTitle: "Design Mockups",
            taskDescription:
              "Create wireframes and mockups for the new feature.",
            taskDate: "2024-12-30",
            taskCategory: "Design",
            assignTo: "Priya",
            activeTask: false,
            completedTask: false,
            failedTask: false,
            newTask: true,
          },
          {
            taskTitle: "Client Presentation",
            taskDescription: "Prepare slides and present to the client.",
            taskDate: "2024-12-29",
            taskCategory: "Presentation",
            assignTo: "Priya",
            activeTask: false,
            completedTask: true,
            failedTask: false,
            newTask: false,
          },
        ],
        taskCounts: { active: 0, completed: 1, failed: 0, new: 1 },
      },
      {
        id: 3,
        name: "Amit",
        email: "amit@example.com",
        password: "123",
        tasks: [
          {
            taskTitle: "Fix Bugs in Module Y",
            taskDescription: "Debug and resolve issues in Module Y.",
            taskDate: "2024-12-28",
            taskCategory: "Development",
            assignTo: "Amit",
            activeTask: false,
            completedTask: false,
            failedTask: false,
            newTask: true,
          },
          {
            taskTitle: "Write Test Cases",
            taskDescription: "Write and execute test cases for new feature Z.",
            taskDate: "2024-12-29",
            taskCategory: "Quality Assurance",
            assignTo: "Amit",
            activeTask: false,
            completedTask: true,
            failedTask: false,
            newTask: false,
          },
          {
            taskTitle: "Update Documentation",
            taskDescription: "Update the user manual with new features.",
            taskDate: "2024-12-30",
            taskCategory: "Documentation",
            assignTo: "Amit",
            activeTask: false,
            completedTask: false,
            failedTask: true,
            newTask: false,
          },
        ],
        taskCounts: { active: 0, completed: 1, failed: 1, new: 1 },
      },
      {
        id: 4,
        name: "Anita",
        email: "anita@example.com",
        password: "123",
        tasks: [
          {
            taskTitle: "Research New Tech",
            taskDescription:
              "Research the feasibility of integrating new technology.",
            taskDate: "2024-12-30",
            taskCategory: "Research",
            assignTo: "Anita",
            activeTask: false,
            completedTask: false,
            failedTask: false,
            newTask: true,
          },
          {
            taskTitle: "Conduct Workshop",
            taskDescription: "Host a workshop on best coding practices.",
            taskDate: "2024-12-27",
            taskCategory: "Training",
            assignTo: "Anita",
            activeTask: false,
            completedTask: true,
            failedTask: false,
            newTask: false,
          },
        ],
        taskCounts: { active: 0, completed: 1, failed: 0, new: 1 },
      },
      {
        id: 5,
        name: "Rohit",
        email: "rohit@example.com",
        password: "123",
        tasks: [
          {
            taskTitle: "Plan Team Outing",
            taskDescription: "Organize and schedule the upcoming team outing.",
            taskDate: "2024-12-31",
            taskCategory: "Management",
            assignTo: "Rohit",
            activeTask: false,
            completedTask: false,
            failedTask: false,
            newTask: true,
          },
          {
            taskTitle: "Update Financial Records",
            taskDescription:
              "Ensure all financial transactions are up-to-date.",
            taskDate: "2024-12-28",
            taskCategory: "Finance",
            assignTo: "Rohit",
            activeTask: false,
            completedTask: true,
            failedTask: false,
            newTask: false,
          },
          {
            taskTitle: "Prepare Budget Report",
            taskDescription:
              "Compile and prepare the budget report for the next quarter.",
            taskDate: "2024-12-29",
            taskCategory: "Finance",
            assignTo: "Rohit",
            activeTask: true,
            completedTask: false,
            failedTask: false,
            newTask: false,
          },
        ],
        taskCounts: { active: 1, completed: 1, failed: 0, new: 1 },
      },
    ];
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    const admin = [
      {
        id: 0,
        name: "Kiran",
        email: "kiran@example.com",
        password: "123",
      },
    ];
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
