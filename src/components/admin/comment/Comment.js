import React from "react";
import Sidebar from "../sidebar/Sidebar";
import CommentDataTable from "./CommentDataTable";

const Comment = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="bg-[#131720] border flex-[6] border-border">
        <div className=" bg-[#131720] flex-1 relative h-full">
          <div className="flex items-center justify-center h-20 border border-border">
            <h1 className="absolute text-4xl left-5">Comment</h1>
          </div>
          <div>
            <div className="absolute flex-1 right-20 top-5">
              <input
                type="text"
                className="absolute right-0 h-10 p-4 text-white outline-none w-[300px] rounded-xl bg-slate-800 "
                placeholder="Tìm kiếm theo từ khóa..."
              />
              <i className="absolute flex items-center justify-center w-10 h-10 ml-5 text-xl text-blue-500 rounded cursor-pointer right-1 fa-solid fa-magnifying-glass bg-primary"></i>
            </div>
          </div>
          <div className="mt-5">
            <CommentDataTable></CommentDataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
