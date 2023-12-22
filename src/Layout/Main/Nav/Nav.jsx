import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import "./nav.css";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { user, userLogout } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    userLogout()
      .then(() => {
        Swal.fire("Logged out ...");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Something went wrong !!!");
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/features"}>Features</NavLink>
      </li>
      <li>
        <NavLink to={"/benefits"}>Benefits</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      {!user && (
        <Link
          to={"/login"}
          className="bg-green-500 text-center py-2 rounded-md w-full lg:hidden text-black"
        >
          Login
        </Link>
      )}
    </>
  );

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="2000"
      className="max-w-7xl mx-auto py-5 md:py-8 flex items-center justify-between px-4 xl:px-0 text-white"
    >
      <h3 className="text-xl uppercase font-bold">
        Task <span className="text-green-500">Legend</span>
      </h3>
      <div className="flex gap-5 items-center">
        <ul className="hidden gap-5 uppercase font-semibold lg:flex">
          {links}
        </ul>
        <ul
          className={`z-50 ${
            mobileNav ? "" : "hidden"
          } lg:hidden uppercase absolute right-0 top-14 bg-base-300 py-10 px-8 w-[290px] flex flex-col gap-3 rounded-lg`}
        >
          {links}
        </ul>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user image"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] px-2 py-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-4"
            >
              <li>
                <a className="justify-between">
                  {user?.displayName || "User1419"}
                  <span className="badge">User</span>
                </a>
              </li>
              <li>
                <Link to={"/dashboard/manage-task"}>Dashboard</Link>
              </li>
              <li>
                <a onClick={logoutHandler}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <h3 className="font-semibold uppercase hidden lg:block py-2 px-5 text-black bg-green-500 rounded-md hover:bg-gray-400 transition-colors">
              Login
            </h3>
          </Link>
        )}
        <button
          className="lg:hidden"
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
        >
          {mobileNav ? (
            <IoCloseSharp className="text-xl" />
          ) : (
            <FaBarsStaggered className="text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
