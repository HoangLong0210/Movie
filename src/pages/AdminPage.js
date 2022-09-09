import React from "react";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Sidebar from "../components/admin/sidebar/Sidebar";

const AdminPage = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="bg-[#131720] border flex-[6] border-border">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default AdminPage;
