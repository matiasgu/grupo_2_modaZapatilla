-- Tabla de usuarios
INSERT INTO usuarios (nombre, email, contraseña) VALUES
('Juan Perez', 'juan@example.com', 'contraseña123'),
('Carla Vidal', 'carla@example.com', 'carla456'),
('Anabella Cajal', 'anabella@example.com', 'clave789');

-- Tabla de productos
INSERT INTO productos (nombre, marca, precio, categoria) VALUES
('Zapatillas Orange Men', 'Nike', 75350, 'Hombre'),
('Zapatillas Invisible White Woman', 'Nike', 38653, 'Mujer'),
('Zapatillas Nature Unisex', 'Nike', 54654, 'Unisex'),
('Zapatillas Modelo NB Kids', 'Adidas', 70000, 'Niño'),
('Zapatillas Modelo Urban Kids', 'Nike', 79654, 'Niño'),
('Zapatillas Modelo Zoom Unisex', 'Nike', 85457, 'Unisex'),
('Zapatillas Modelo Black Men', 'Nike', 94894, 'Hombre');

-- Tabla de categorías
INSERT INTO categorias (nombre) VALUES
('Hombre'),
('Mujer'),
('Niño'),
('Unisex');
