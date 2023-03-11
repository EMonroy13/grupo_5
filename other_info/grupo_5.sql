-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2023 a las 20:03:45
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo_5`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `top_seller` binary(1) NOT NULL,
  `offer` binary(1) NOT NULL,
  `discount` double NOT NULL,
  `id_product_categoria` int(11) NOT NULL,
  `id_product_color` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`, `top_seller`, `offer`, `discount`, `id_product_categoria`, `id_product_color`) VALUES
(1, 'Cama Matrimoñal con cajones', 'Cama matrimoñal clasica con cajones espaciosos debajo', 'image-1678469996822.jpg', 120000, 0x31, 0x31, 20, 6, 2),
(2, 'Literas con armario', ' ', 'image-1678147674539.jpg', 120000, 0x31, 0x4e, 20, 6, 2),
(4, 'Escritorio moderno con silla Ergonomica', 'Juego de escritorio con silla ergonomica', 'image-1678551466288.jpg', 220000, 0x31, 0x30, 0, 1, 1),
(5, 'Escritorio bicolor', ' Escritorio moderno bicolor', 'image-1678551549155.jpg', 90000, 0x31, 0x31, 15, 1, 2),
(6, 'Estanteria para pared  de cocina', ' Estanteria simple y moderna', 'image-1678551667484.jpg', 20000, 0x31, 0x31, 10, 3, 2),
(7, 'Armario para cocina', ' Armario para cocina tamaño grande', 'image-1678551720155.jpg', 110000, 0x31, 0x31, 5, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `categoria_desc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product_categories`
--

INSERT INTO `product_categories` (`id`, `categoria_desc`) VALUES
(1, 'oficina'),
(2, 'living'),
(3, 'cocina'),
(4, 'muebles_tv'),
(5, 'gaming'),
(6, 'dormitorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_colors`
--

CREATE TABLE `product_colors` (
  `id` int(11) NOT NULL,
  `product_color_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product_colors`
--

INSERT INTO `product_colors` (`id`, `product_color_desc`) VALUES
(1, 'negro'),
(2, 'blanco'),
(3, 'madera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imageProfile` varchar(255) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_categories`
--

CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL,
  `categorie_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_categories`
--

INSERT INTO `users_categories` (`id`, `categorie_desc`) VALUES
(1, 'admin'),
(2, 'vendedor'),
(3, 'cliente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_46085eb6-1050-4ec9-8d06-a9403e2336ea` (`id_product_categoria`),
  ADD KEY `FK_3721cce5-0e4f-4c0f-bad4-64b0e5622a64` (`id_product_color`);

--
-- Indices de la tabla `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_25f6dbeb-7cc8-48f1-90ba-0013be5d8b9e` (`id_categoria`);

--
-- Indices de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_3721cce5-0e4f-4c0f-bad4-64b0e5622a64` FOREIGN KEY (`id_product_color`) REFERENCES `product_colors` (`id`),
  ADD CONSTRAINT `FK_46085eb6-1050-4ec9-8d06-a9403e2336ea` FOREIGN KEY (`id_product_categoria`) REFERENCES `product_categories` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_25f6dbeb-7cc8-48f1-90ba-0013be5d8b9e` FOREIGN KEY (`id_categoria`) REFERENCES `users_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
