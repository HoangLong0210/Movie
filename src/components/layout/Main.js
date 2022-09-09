import React, { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
