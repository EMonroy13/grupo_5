CREATE DATABASE IF NOT EXISTS grupo_5;

USE grupo_5;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstName` VARCHAR(255) NOT NULL,
   `lastName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `imageProfile` VARCHAR(255),
   `id_categoria` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users_categories` (
   `id` INT NOT NULL,
   `categorie_desc` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `price` DOUBLE NOT NULL,
   `top_seller` BINARY NOT NULL,
   `offer` BINARY NOT NULL,
   `discount` DOUBLE NOT NULL,
   `id_product_categoria` INT NOT NULL,
   `id_product_color` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_categories` (
   `id` INT,
   `categoria_desc` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_color_desc` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_25f6dbeb-7cc8-48f1-90ba-0013be5d8b9e` FOREIGN KEY (`id_categoria`) REFERENCES `users_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_46085eb6-1050-4ec9-8d06-a9403e2336ea` FOREIGN KEY (`id_product_categoria`) REFERENCES `product_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_3721cce5-0e4f-4c0f-bad4-64b0e5622a64` FOREIGN KEY (`id_product_color`) REFERENCES `product_colors`(`id`)  ;
