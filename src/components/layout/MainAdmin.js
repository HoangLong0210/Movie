import React, { Fragment } from "react";
import Sidebar from "../admin/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainAdmin = () => {
  return (
    <div>
      <Fragment>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </Fragment>
    </div>
  );
};

export default MainAdmin;
