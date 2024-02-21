import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
