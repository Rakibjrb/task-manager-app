import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  const [showBar, setShowBar] = useState(false);

  return (
    <div className="pt-3 px-3 lg:px-0 lg:pt-0">
      <button
        onClick={() => {
          setShowBar(!showBar);
        }}
        className="bg-white p-2 rounded-md absolute z-50 lg:hidden"
      >
        {showBar ? (
          <IoCloseSharp className="text-xl text-black" />
        ) : (
          <FaBarsStaggered className="text-xl text-black" />
        )}
      </button>
      <div className="flex">
        <div className={`${showBar ? "" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className={`hidden lg:block`}>
          <Sidebar />
        </div>
        <div
          className={`bg-black w-full ${
            showBar ? "hidden" : "pt-12 lg:pt-3 lg:pr-2"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
