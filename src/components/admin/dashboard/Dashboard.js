import React from "react";
import Widget from "../widget/Widget";
import WidgetBig from "../widget/WidgetBig";

const Dashboard = () => {
  return (
    <div className=" bg-[#131720] flex-1 relative h-full">
      <div className="flex items-center justify-center h-20 border border-border">
        <h1 className="absolute text-4xl left-5">Dashboard</h1>
        <button className="absolute h-10 text-xl bg-blue-600 w-36 right-10 hover:bg-primary rounded-3xl">
          ADD MOVIE
        </button>
      </div>
      <Widget></Widget>
      <WidgetBig></WidgetBig>
    </div>
  );
};

export default Dashboard;
