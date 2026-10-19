import { Outlet } from "react-router-dom";
import React from "react";

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;