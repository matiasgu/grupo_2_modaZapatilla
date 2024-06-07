-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2024 a las 14:29:34
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
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'customer'),
(2, 'admin'),
(3, 'gestor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopcarts`
--

CREATE TABLE `shopcarts` (
  `shopcart_id` int(8) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `shopcart_date` date NOT NULL,
  `shopcart_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `user`, `password`, `email`, `image`, `country`, `address`, `phone`, `role_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Pepito', 'Perez', 'pepito', '1234', 'pepito@gmail.com', '01-Perez', 'Argentina', NULL, NULL, 3, '2024-06-07 06:56:27', '2024-06-07 06:57:33', NULL),
(2, 'Mario', 'Bross', 'mario', '1234', 'mario@gmail.com', '02-Mario', 'Argentina', NULL, NULL, 2, '2024-06-07 06:56:27', '2024-06-07 06:57:46', NULL),
(3, 'Homero', 'Simpson', 'homero', '1234', 'homero@gmail.com', '03-Homero', 'Argentina', NULL, NULL, 1, '2024-06-07 06:56:27', '2024-06-07 06:57:54', NULL),
(4, 'Merlina', 'Adams', 'mer', '1234', 'mer@gmail.com', '04-Merlina', 'Argentina', NULL, NULL, 1, '2024-06-07 06:56:27', '2024-06-07 06:58:01', NULL),
(5, 'Arenita', 'Mejillas', 'arenita', '1234', 'arenita@gmail.com', '05-Arenita', 'Argentina', NULL, NULL, 1, '2024-06-07 06:56:27', '2024-06-07 06:58:08', NULL),
(6, 'aa', 'aa', 'aa', '$2b$10$.q2OFh7hJb8/64eLjYzKveSbh04TNCJM1FRNdyCpBLQVkYb13U3NG', 'aa@aa.com', NULL, 'Argentina', NULL, '11', 1, '2024-06-07 09:37:39', '2024-06-07 09:37:39', NULL),
(7, 'bb', 'bb', 'bb', '$2b$10$2SfZO6t4IsnZmnWos3prVu7YKdp5Qy.FQRJkvMiWUzwcW2b0OcQjW', 'bb@bb.com', NULL, 'Argentina', NULL, '123123', 1, '2024-06-07 09:39:15', '2024-06-07 09:39:15', NULL),
(8, 'cc', 'cc', 'cc', '$2b$10$ZqF3fcgMLV1WfuN8zdzlCugWIOGF.vPyAnDr24GT3t.6VlNNKSnHe', 'cc@cc.com', 'img-1717753463082.png', 'Argentina', NULL, '123123123', 1, '2024-06-07 09:44:23', '2024-06-07 09:44:23', NULL),
(9, 'dd', 'dd', 'dd', '$2b$10$BBmU60.qB5lPjf/XT8FMG.4LAji1p2mtPsiGZn02kE9ClZ7PaCfHe', 'dd@dd.com', 'img-1717754881881.png', 'Argentina', 'san salvador de jujuy', '123123', 1, '2024-06-07 10:08:01', '2024-06-07 10:08:01', NULL),
(10, 'eee', 'ee', 'ee', '$2b$10$dVQ.ye/5T5oCN./KpLFtHeEtQDd9W336qBu63rv33p5vikHTdaDIW', 'ee@ee.com', 'img-1717756904159.png', 'Argentina', 'san salvador de jujuy', '123123', 1, '2024-06-07 10:41:44', '2024-06-07 10:41:44', NULL);

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
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shopcarts`
--
ALTER TABLE `shopcarts`
  ADD PRIMARY KEY (`shopcart_id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

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
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `shopcarts`
--
ALTER TABLE `shopcarts`
  MODIFY `shopcart_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
