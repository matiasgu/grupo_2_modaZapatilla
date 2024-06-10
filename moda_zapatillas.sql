-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2024 a las 21:15:16
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
  `product_img` varchar(30) DEFAULT NULL,
  `product_stock` int(11) DEFAULT NULL,
  `product_size` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_brand`, `product_detail`, `product_category`, `product_price`, `product_discount`, `product_img`, `product_stock`, `product_size`) VALUES
(1, 'Zapatillas Nike Star Runner 3', 'nike', NULL, 'kids', 70890.6, 20, '01-zapatillas_nike_kids', 48, NULL),
(2, 'Zapatillas adidas Runfalcon 3.0 Hombre', 'adidas', NULL, 'man', 85492.2, NULL, '02_zapatillas_run_adidas_man', 24, NULL),
(3, 'Zapatillas Puma Caven 2.0', 'puma', NULL, 'unisex', 62708.4, NULL, '03_zapatillas_adidas_unisex', 54, NULL),
(4, 'Zapatillas Nike Air Max Sc Mujer', 'nike', NULL, 'woman', 125482, 10, '04-zatillas_nilke_woman', 54, NULL),
(5, 'Zapatillas Nike Borough Low Recraft', 'nike', NULL, 'kids', 78798, 10, '05-zapatillas_nike_kids', 54, NULL),
(6, 'Zapatillas Puma Rebound Layup', 'puma', NULL, 'kids', 80994, NULL, '06-zapatillas_puma_kids', 45, NULL),
(7, 'Zapatillas adidas Advantage', 'adidas', NULL, 'kids', 102101, 20, '07-zapatillas_adidas_kids', 85, NULL),
(8, 'Zapatillas Running Nike Juniper Trail 2', 'adidas', NULL, 'man', 148976, 5, '08_zapatillas_run_adidas_man', 84, NULL),
(9, 'Zapatillas Nike Waffle Debut Se Hombre', 'nike', NULL, 'man', 164211, 10, '09-zapatillas_nike_man', 88, NULL),
(10, 'Zapatillas Nike Air Max Excee', 'nike', NULL, 'woman', 180458, NULL, '10-zapatillas_nike_woman', 58, NULL),
(11, 'Zapatillas Running adidas Duramo Speed', 'adidas', NULL, 'woman', 75849.4, 5, '11-zapatillas_adidas_woman', 78, NULL),
(12, 'Zapatillas Running Puma Pwr Xx Nitro', 'puma', NULL, 'woman', 54785, NULL, '12-zapatillas_adidas_woman', 57, NULL),
(13, 'Zapatillas Puma X-ray Tour', 'puma', NULL, 'unisex', 75975.2, 20, '13_zapatillas_puma_unisex', 47, NULL),
(14, 'Zapatillas adidas Grand Court Lifestyle', 'puma', NULL, 'unisex', 64757, 15, '14_zapatillas_adidas_unisex', 87, NULL),
(15, 'Zapatillas Nike Revolution 6', 'nike', NULL, 'unisex', 91000, NULL, '15_zapatillas_nike_unisex', 54, NULL);

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
(1, 'adm'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopcarts`
--

CREATE TABLE `shopcarts` (
  `shopcart_id` int(8) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `shopcart_date` date NOT NULL,
  `shopcart_total` float NOT NULL,
  `cantidad` int(11) DEFAULT NULL
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
(1, 'Pepito', 'Perez', 'pepi', '12345678', 'pepito@gmail.com', '01-Perez', 'Argentina', NULL, '156584955', 1, '2024-06-08 00:30:26', '2024-06-08 00:30:26', NULL),
(2, 'Mario', 'Bross', 'mario', '12345678', 'mario@gmail.com', '02-Mario', 'Argentina', NULL, '215413323', 2, '2024-06-08 00:30:26', '2024-06-08 00:30:26', NULL),
(3, 'Homero', 'Simpson', 'homero', '12345678', 'homero@gmail.com', '03-Homero', 'Argentina', NULL, '545545225', 2, '2024-06-08 00:30:26', '2024-06-08 00:30:26', NULL),
(4, 'Merlina', 'Adams', 'mer', '12345678', 'mer@gmail.com', '04-Merlina', 'Argentina', NULL, '645152124', 2, '2024-06-08 00:30:26', '2024-06-08 00:30:26', NULL),
(5, 'Arenita', 'Mejillas', 'arenita', '12345678', 'arenita@gmail.com', '05-Arenita', 'Argentina', NULL, '154455224', 2, '2024-06-08 00:30:26', '2024-06-08 00:30:26', NULL),
(6, 'Spider', 'Man', 'spider', 'spider1234', 'spider@gmail.com', '06-spiderman', 'USA', NULL, '45875587', 2, '2024-06-10 19:08:24', '2024-06-10 19:08:24', NULL),
(7, 'Batman', 'Sr. de la noche', 'batman', 'batman1234', 'batman@gmail.com', '07-batman', 'USA', NULL, '479812555', 1, '2024-06-10 19:08:24', '2024-06-10 19:14:25', NULL);

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
  MODIFY `product_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `shopcarts`
--
ALTER TABLE `shopcarts`
  MODIFY `shopcart_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
