// Code to manage the global state of the application using React Context API.
import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage(); // Ensure `localStorage` has default data if missing
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    localStorage.setItem("employees", JSON.stringify(newUserData.employees)); // Sync employees
    localStorage.setItem("admin", JSON.stringify(newUserData.admin)); // Sync admin
  };

  return (
    <AuthContext.Provider value={{ userData, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
