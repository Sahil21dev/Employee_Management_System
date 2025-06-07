// Main App component:
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const Authdata = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [loggedInUserData, setloggedInUserData] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setloggedInUserData(parsedUser.data);
    }
  }, []);
  const LoginHandler = (email, password) => {
    if (
      Authdata &&
      Authdata.userData.admin.find(
        (emp) => emp.email === email && emp.password === password
      )
    ) {
      const admin = Authdata.userData.admin.find(
        (emp) => emp.email === email && emp.password === password
      );
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
      setUser("admin");
      setloggedInUserData(admin);
    } else if (
      Authdata &&
      Authdata.userData.employees.find(
        (emp) => emp.email === email && emp.password === password
      )
    ) {
      const employee = Authdata.userData.employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setUser("employee");
      setloggedInUserData(employee);
    } else alert("Invalid Credentials");
  };
  return (
    <div>
      {!user ? <Login loginHandler={LoginHandler} /> : ""}
      {user === "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : (
        ""
      )}
    </div>
  );
};
export default App;
