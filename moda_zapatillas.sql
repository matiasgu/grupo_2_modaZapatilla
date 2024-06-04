-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-06-2024 a las 02:03:21
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `moda_zapatillas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproducts`
--

CREATE TABLE `cartproducts` (
  `cartproduct_id` int(8) NOT NULL,
  `product_id` int(11) NOT NULL,
  `shopcart_id` int(11) NOT NULL,
  `cartproduct_amount` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` int(8) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_brand` varchar(50) NOT NULL,
  `product_detail` varchar(100) DEFAULT NULL,
  `product_category` varchar(50) NOT NULL,
  `product_price` float NOT NULL,
  `product_discount` int(3) DEFAULT NULL,
  `product_img` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_brand`, `product_detail`, `product_category`, `product_price`, `product_discount`, `product_img`) VALUES
(1, 'Zapatillas Nike Star Runner 3', 'nike', NULL, 'kids', 70890.6, NULL, '01-zapatillas_nike_kids'),
(2, 'Zapatillas adidas Runfalcon 3.0 Hombre', 'adidas', 'Estas versátiles zapatillas de running Adidas son perfectas para correr en el parque y después tomar', 'man', 85492.2, 10, '02_zapatillas_run_adidas_man'),
(3, 'Zapatillas Puma Caven 2.0', 'puma', NULL, 'unisex', 62708.4, NULL, '03_zapatillas_adidas_unisex'),
(4, 'Zapatillas Nike Air Max Sc Mujer', 'nike', NULL, 'woman', 125482, 20, '04-zatillas_nilke_woman'),
(5, 'Zapatillas Nike Borough Low Recraft', 'nike', NULL, 'kids', 78798, 15, '05-zapatillas_nike_kids'),
(6, 'Zapatillas Puma Rebound Layup', 'puma', NULL, 'kids', 80994, NULL, '06-zapatillas_puma_kids'),
(7, 'Zapatillas adidas Advantage', 'adidas', NULL, 'kids', 102101, 5, '07-zapatillas_adidas_kids'),
(8, 'Zapatillas Running Nike Juniper Trail 2', 'adidas', NULL, 'man', 148976, 10, '08_zapatillas_run_adidas_man'),
(9, 'Zapatillas Nike Waffle Debut Se Hombre', 'nike', NULL, 'man', 164211, 5, '09-zapatillas_nike_man'),
(10, 'Zapatillas Nike Air Max Excee', 'nike', NULL, 'woman', 180458, 15, '10-zapatillas_nike_woman'),
(11, 'Zapatillas Running adidas Duramo Speed', 'adidas', NULL, 'woman', 75849.4, 5, '11-zapatillas_adidas_woman'),
(12, 'Zapatillas Running Puma Pwr Xx Nitro', 'puma', NULL, 'woman', 954785, NULL, '12-zapatillas_adidas_woman'),
(13, 'Zapatillas Puma X-ray Tour', 'puma', NULL, 'unisex', 75975.2, NULL, '13_zapatillas_puma_unisex'),
(14, 'Zapatillas adidas Grand Court Lifestyle', 'puma', NULL, 'unisex', 64757, 20, '14_zapatillas_adidas_unisex'),
(15, 'Zapatillas Nike Revolution 6', 'nike', NULL, 'unisex', 91000, NULL, '15_zapatillas_nike_unisex'),
(22, 'Zapatillas Running Nike React Infinity 3', 'nike', '', 'woman', 180000, 0, '16_zapatillas_nike_woman.jpg'),
(23, 'Zapatillas Training Air Max Alpha Trainer 5 ', 'nike', '', 'man', 150000, NULL, '17_zapatillas_nike_man.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopcarts`
--

CREATE TABLE `shopcarts` (
  `shopcart_id` int(8) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shopcart_date` date NOT NULL,
  `shopcart_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(4) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_lastname` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(10) NOT NULL,
  `user_adress` varchar(50) DEFAULT NULL,
  `user_category` varchar(8) NOT NULL,
  `user_image` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_lastname`, `user_email`, `user_password`, `user_adress`, `user_category`, `user_image`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Pepito', 'Perez', 'pepito@gmail.com', '1234', NULL, 'adm', '01-Perez', NULL, NULL, NULL),
(2, 'Mario', 'Bross', 'mario@gmail.com', '1234', NULL, 'usr', '02-Mario', NULL, NULL, NULL),
(3, 'Homero', 'Simpson', 'homero@gmail.com', '1234', NULL, 'usr', '03-Homero', NULL, NULL, NULL),
(4, 'Merlina', 'Adams', 'mer@gmail.com', '1234', NULL, 'usr', '04-Merlina', NULL, NULL, NULL),
(5, 'Arenita', 'Mejillas', 'arenita@gmail.com', '1234', NULL, 'usr', '05-Arenita', NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cartproducts`
--
ALTER TABLE `cartproducts`
  ADD PRIMARY KEY (`cartproduct_id`),
  ADD KEY `shopcart_id` (`shopcart_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indices de la tabla `shopcarts`
--
ALTER TABLE `shopcarts`
  ADD PRIMARY KEY (`shopcart_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cartproducts`
--
ALTER TABLE `cartproducts`
  MODIFY `cartproduct_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `shopcarts`
--
ALTER TABLE `shopcarts`
  MODIFY `shopcart_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cartproducts`
--
ALTER TABLE `cartproducts`
  ADD CONSTRAINT `cartproducts_ibfk_1` FOREIGN KEY (`shopcart_id`) REFERENCES `shopcarts` (`shopcart_id`),
  ADD CONSTRAINT `cartproducts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Filtros para la tabla `shopcarts`
--
ALTER TABLE `shopcarts`
  ADD CONSTRAINT `shopcarts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
