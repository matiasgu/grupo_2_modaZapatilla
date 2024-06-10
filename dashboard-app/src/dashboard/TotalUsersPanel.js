import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalUsersPanel = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users")
      .then(response => {
        setTotalUsers(response.data.meta.total);
      })
      .catch(error => {
        console.error("Error fetching total users:", error);
      });
  }, []);

  return (
    <div className="panel">
      <h2>Total Users</h2>
      <p>{totalUsers}</p>
    </div>
  );
};

export default TotalUsersPanel;
