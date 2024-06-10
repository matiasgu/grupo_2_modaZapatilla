// TotalUsersPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalUsersPanel = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener el total de usuarios
    axios.get("/api/users")
      .then(response => {
        // Actualizar el estado con el total de usuarios obtenido de la respuesta
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
