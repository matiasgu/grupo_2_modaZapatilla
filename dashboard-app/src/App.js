import React from 'react';
import './App.css';
import TotalProductsPanel from './dashboard/TotalProductsPanel';
import TotalUsersPanel from './dashboard/TotalUsersPanel';
import TotalCategoriesPanel from './dashboard/TotalCategoriesPanel';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Inicio de sesión</a></li>
        </ul>
      </nav>
      <main>
        <div className="container">
          <div className="panel">
            <h2>Total Products</h2>
            <p>7</p>
          </div>
          <div className="panel">
            <h2>Total Users</h2>
            <p>4</p>
          </div>
          <div className="panel">
            <h2>Total Categories</h2>
            <p>4</p>
          </div>
        </div>
        <header>
          <h1>Tabla de productos</h1>
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Zapatillas Orange Men</td>
              <td>Nike</td>
              <td>75350</td>
              <td>Hombre</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Zapatillas Invisible White Woman</td>
              <td>Nike</td>
              <td>38653</td>
              <td>Mujer</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Zapatillas Nature Unisex</td>
              <td>Nike</td>
              <td>54654</td>
              <td>Unisex</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Zapatillas Modelo NB Kids</td>
              <td>Adidas</td>
              <td>70000</td>
              <td>Niño</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Zapatillas Modelo Urban Kids</td>
              <td>Nike</td>
              <td>79654</td>
              <td>Niño</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Zapatillas Modelo Zoom Unisex</td>
              <td>Nike</td>
              <td>85457</td>
              <td>Unisex</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Zapatillas Modelo Black Men</td>
              <td>Nike</td>
              <td>94894</td>
              <td>Hombre</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
