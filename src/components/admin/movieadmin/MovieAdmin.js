import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import MovieDataTable from "./MovieDataTable.js";

const MovieAdmin = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="bg-[#131720] border flex-[6] border-border">
        <div className=" bg-[#131720] flex-1 relative h-full">
          <div className="flex items-center justify-center h-20 border border-border">
            <h1 className="absolute text-4xl left-5">Movie</h1>
          </div>
          <div>
            <div className="absolute flex-1 right-20 top-5">
              {/* <input
                type="text"
                className="h-10 p-4 text-white outline-none w-68 rounded-xl bg-slate-800  absolute right-[700px]"
                placeholder="Tìm kiếm theo tên phim..."
              />
              <i className="justify-center flex items-center ml-5 text-xl text-blue-500 cursor-pointer fa-solid fa-magnifying-glass absolute right-[670px] w-10 h-10 rounded bg-primary"></i> */}
              <Link
                to="add"
                className="flex items-center justify-center h-10 text-xl bg-blue-600  w-36 hover:bg-primary rounded-3xl"
              >
                ADD MOVIE
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <MovieDataTable></MovieDataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieAdmin;
