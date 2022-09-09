import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ServiceDataTable from "./ServiceDataTable";

const ServiceAdmin = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="bg-[#131720] border flex-[6] border-border">
        <div className=" bg-[#131720] flex-1 relative h-full">
          <div className="flex items-center justify-center h-20 border border-border">
            <h1 className="absolute text-4xl left-5">Service</h1>
          </div>
          <div>
            <div className="absolute flex-1 right-20 top-5">
              <button className="h-10 text-xl bg-blue-600 w-36 hover:bg-primary rounded-3xl">
                ADD SERVICE
              </button>
            </div>
          </div>
          <ServiceDataTable></ServiceDataTable>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdmin;
