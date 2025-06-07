 // Purpose: Login component for the user to login to the application.
import React, { useState } from "react";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.loginHandler(email, password);
    setemail("");
    setpassword("");
  };
  return (
    <div
      className="flex
    items-center justify-center w-screen h-screen"
    >
      <div className="card w-80 h-2/3 border-none rounded-3xl p-8">
        <h2 className="mt-10 ml-2 text-2xl text-orange-400">Login</h2>
        <form
          className="mt-10 ml-2 flex flex-col"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
            type="email"
            required
            placeholder="Enter your email"
            className="w-60 h-8 p-2 rounded-md shadow-inner shadow-orange-400 bg-inherit border-none placeholder:italic
            placeholder:text-sm
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50
            focus:shadow-lg"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            value={password}
            type="password"
            required
            placeholder="Enter your password"
            className="w-60 h-8 p-2 mt-6 mb-3 rounded-md shadow-inner shadow-orange-400 bg-inherit border-none placeholder:italic
            placeholder:text-sm
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50
            focus:shadow-lg"
          />
          <a href="/" className="text-sm w-auto  text-right">
            Forgot Password ?
          </a>
          <button
            type="submit"
            className="w-60 h-8 mt-6 bg-orange-400 text-white font-semibold rounded-md shadow-lg
            active:scale-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
