// Dashboard.js
import React from "react";
import TotalCategoriesPanel from "./TotalCategoriesPanel";
import TotalProductsPanel from "./TotalProductsPanel";
import TotalUsersPanel from "./TotalUsersPanel";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="panels">
        <TotalCategoriesPanel />
        <TotalProductsPanel />
        <TotalUsersPanel />
      </div>
    </div>
  );
};

export default Dashboard;
