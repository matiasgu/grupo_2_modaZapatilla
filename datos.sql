-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2024 a las 14:50:09
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

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'customer'),
(2, 'admin'),
(3, 'gestor');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `user`, `password`, `email`, `image`, `country`, `address`, `phone`, `role_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Pepito', 'Perez', 'pepito', '1234', 'pepito@gmail.com', '01-Perez', 'Argentina', NULL, NULL, 3, '2024-06-07 06:56:27', '2024-06-07 06:57:33', NULL),
(2, 'Mario', 'Bross', 'mario', '1234', 'mario@gmail.com', '02-Mario', 'Argentina', NULL, NULL, 2, '2024-06-07 06:56:27', '2024-06-07 06:57:46', NULL),
(3, 'Homero', 'Simpson', 'homero', '1234', 'homero@gmail.com', '03-Homero', 'Argentina', NULL, NULL, 1, '2024-06-07 06:56:27', '2024-06-07 06:57:54', NULL),
(4, 'Merlina', 'Adams', 'mer', '1234', 'mer@gmail.com', '04-Merlina', 'Argentina', NULL, NULL, 1, '2024-06-07 06:56:27', '2024-06-07 06:58:01', NULL),
(5, 'Arenita', 'Mejillas', 'arenita', '1234', 'arenita@gmail.com', '05-Arenita', 'Argentina', NULL, NULL, 1, '2024-06-07 06:56:27', '2024-06-07 06:58:08', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
