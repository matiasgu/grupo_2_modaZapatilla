import React from 'react';
import './App.css';
import TotalProductsPanel from './dashboard/TotalProductsPanel';
import TotalUsersPanel from './dashboard/TotalUsersPanel';
import TotalCategoriesPanel from './dashboard/TotalCategoriesPanel';

function App() {
  return (
    <div className="App">
      <TotalProductsPanel />
      <TotalUsersPanel />
      <TotalCategoriesPanel />
    </div>
  );
}

export default App;
