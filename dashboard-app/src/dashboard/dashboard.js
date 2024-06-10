import React from 'react';
import TotalCategoriesPanel from './TotalCategoriesPanel';
import TotalProductsPanel from './TotalProductsPanel';
import TotalUsersPanel from './TotalUsersPanel';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="my-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <TotalCategoriesPanel />
        </div>
        <div className="col-md-4">
          <TotalProductsPanel />
        </div>
        <div className="col-md-4">
          <TotalUsersPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
