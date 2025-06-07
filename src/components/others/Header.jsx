// Desc: Header component for the dashboard page, this component is used to display the header of the dashboard page, it contains the user name and logout button.
import React from "react";

const Header = ({ data }) => {
  const onClickHandler = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };
  return (
    <div className="w-full  flex items-center justify-between p-2">
      <div>
        <h1 className="text-xl">
          Hello <br />
          <span className="text-4xl">{data.name} 👋</span>
        </h1>
      </div>
      <button
        onClick={onClickHandler}
        className="bg-red-500 py-1 px-3 font-medium rounded-md active:scale-95"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
