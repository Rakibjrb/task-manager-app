import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import "./nav.css";

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
    <li className="lg:hidden bg-green-500 text-center py-2 rounded-md">
      <Link to={"/login"}>Login</Link>
    </li>
  </>
);

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto py-5 flex justify-between px-4 xl:px-0 text-white">
      <h3 className="text-xl uppercase font-bold">
        Task <span className="text-green-500">Legend</span>
      </h3>
      <div className="flex gap-5 items-center">
        <ul className="hidden gap-5 uppercase font-semibold lg:flex">
          {links}
        </ul>
        <ul
          className={`${
            mobileNav ? "" : "hidden"
          } lg:hidden uppercase absolute right-0 top-14 bg-base-300 py-10 px-8 w-[290px] flex flex-col gap-3 rounded-lg`}
        >
          {links}
        </ul>
        <Link to={"/login"}>
          <h3 className="font-semibold uppercase hidden lg:block py-2 px-5 text-black bg-green-500 rounded-md hover:bg-gray-400 transition-colors">
            Login
          </h3>
        </Link>
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
