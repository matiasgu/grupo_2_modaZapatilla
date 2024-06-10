// TotalCategoriesPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalCategoriesPanel = () => {
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener el total de categorías
    axios.get("/api/categories")
      .then(response => {
        // Actualizar el estado con el total de categorías obtenido de la respuesta
        setTotalCategories(response.data.meta.total);
      })
      .catch(error => {
        console.error("Error fetching total categories:", error);
      });
  }, []); // El segundo argumento del useEffect, [] , asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className="panel">
      <h2>Total Categories</h2>
      <p>{totalCategories}</p>
    </div>
  );
};

export default TotalCategoriesPanel;
