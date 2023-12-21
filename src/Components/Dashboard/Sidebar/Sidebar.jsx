import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { MdBookmarkAdd } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import useAuth from "../../../Hooks/useAuth";

const userlinks = (
  <>
    <li>
      <NavLink
        className="text-xl flex items-center gap-3"
        to="/dashboard/manage-task"
      >
        <BiTask className="text-3xl" /> Manage Tasks
      </NavLink>
    </li>
    <li>
      <NavLink
        className="text-xl flex items-center gap-3"
        to="/dashboard/add-task"
      >
        <MdBookmarkAdd className="text-3xl" /> Add Task
      </NavLink>
    </li>
  </>
);

const Sidebar = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    userLogout();
    navigate("/");
  };

  return (
    <div className="sticky top-0 left-0 p-4 w-[320px] lg:w-80 lg:mr-3 h-screen bg-gray-600 text-white">
      <div className="min-h-screen relative pt-7">
        <ul className="space-y-6 px-5">{userlinks}</ul>
        <div className="absolute bottom-16 px-5 w-full">
          <Link to="/" className="text-xl flex items-center gap-3">
            <FaShop className="text-3xl" /> Go Home
          </Link>
          <button
            onClick={handleLogout}
            className="text-xl flex items-center gap-3 mt-5"
          >
            <LuLogOut className="text-3xl" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
