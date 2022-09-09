import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#131720] flex-1 relative h-full">
      <div className="flex items-center justify-center h-20 border border-border">
        <img
          src="https://cdn.dribbble.com/users/4542449/screenshots/14435668/artboard_8.png"
          alt=""
          className="absolute left-0 h-20 cursor-pointer w-28"
          onClick={() => navigate("/admin")}
        />
      </div>
      <div className="flex items-center justify-center h-20 text-xl border border-border">
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="object-cover w-10 h-10 mr-5 rounded cursor-pointer"
        />
        <span className="mr-12"> Hoàng Long</span>
        <i className="cursor-pointer fa-solid fa-right-from-bracket"></i>
      </div>
      <div className="text-2xl cursor-pointer">
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin")}
        >
          <i className="mr-5 fa-solid fa-house"></i>
          <span>Dashboard</span>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/movie")}
        >
          <i className="mr-5 fa-solid fa-film"></i>
          <li>Movie</li>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/service")}
        >
          <i className="mr-5 fa-brands fa-servicestack"></i>
          <li>Service</li>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/famousperson")}
        >
          <i className="mr-5 fa-solid fa-user-secret"></i>
          <span>Famous Person</span>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/episode")}
        >
          <i className="mr-5 fa-solid fa-user-tie"></i>
          <span>Episode</span>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/viewer")}
        >
          <i className="mr-5 fa-solid fa-user-large"></i>
          <span>Viewer</span>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/comment")}
        >
          <i className="mr-5 fa-solid fa-comment-dots"></i>
          <span>Comment</span>
        </button>
        <button
          className="m-0 p-0 list-none flex py-5 border-b-[1px] border-border pl-10"
          onClick={() => navigate("/admin/profile")}
        >
          <i className="mr-5 fa-solid fa-circle-user"></i>
          <span>Profile</span>
        </button>
      </div>
      <div className="h-full mt-[165px] text-base">
        © SnowBall, 2022. Create by Phan Đình Hoàng Long
      </div>
    </div>
  );
};

export default Sidebar;
