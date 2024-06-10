// TotalProductsPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalProductsPanel = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener el total de productos
    axios.get("/api/products")
      .then(response => {
        // Actualizar el estado con el total de productos obtenido de la respuesta
        setTotalProducts(response.data.meta.total);
      })
      .catch(error => {
        console.error("Error fetching total products:", error);
      });
  }, []);

  return (
    <div className="panel">
      <h2>Total Products</h2>
      <p>{totalProducts}</p>
    </div>
  );
};

export default TotalProductsPanel;
