import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full text-white text-2xl fixed top-0 z-[999] bg-black">
      <div className="flex items-center justify-between h-[70px]">
        <div className="flex items-center justify-center cursor-pointer gap-x-10">
          <img
            src="https://cdn.dribbble.com/users/4542449/screenshots/14435668/artboard_8.png"
            alt=""
            className="h-[50px] mr-5"
            onClick={() => navigate("/")}
          />
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Movies
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Series
          </NavLink>
          {/* <NavLink
            to="/genres"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Genres
          </NavLink> */}
          <NavLink
            to="/mylist"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            My List
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Service
          </NavLink>
        </div>
        <div className="flex items-center mr-5">
          <span>KID</span>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-[30px] h-[30px] rounded object-cover cursor-pointer mx-5"
          />
          <div className="mr-20">
            <Link
              to="/profile"
              className="ml-5 transition-all ease-in-out delay-150 bg-black rounded hover:text-primary "
            >
              Profile
            </Link>
            <Link
              to="/login"
              className="ml-5 transition-all ease-in-out delay-150 bg-black rounded hover:text-primary "
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
