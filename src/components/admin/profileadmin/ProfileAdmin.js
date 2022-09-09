import React from "react";
import Sidebar from "../sidebar/Sidebar";
import DetailProfile from "./DetailProfile";

const ProfileAdmin = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="bg-[#131720] border flex-[6] border-border">
        <div className=" bg-[#131720] flex-1 relative h-full">
          <div className="flex items-center justify-center h-20 border border-border">
            <h1 className="absolute text-4xl left-5">Profile</h1>
          </div>

          <div className="mt-5">
            <DetailProfile></DetailProfile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
