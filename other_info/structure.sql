CREATE DATABASE IF NOT EXISTS 'grupo_5';

USE 'grupo_5';

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstName` TEXT NOT NULL,
   `lastName` TEXT NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `imageProfile` BLOB,
   `id_categoria` ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories_users` (
   `id_user_cat` INT NOT NULL,
   `user_cat_desc` TEXT NOT NULL,
   PRIMARY KEY (`id_user_cat`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `product_name` TEXT NOT NULL,
   `product_desc` VARCHAR(255) NOT NULL,
   `product_image` BLOB,
   `product_price` DOUBLE NOT NULL,
   `product_top_seller` BINARY NOT NULL,
   `product_offer` BINARY NOT NULL,
   `product_discount` DOUBLE NOT NULL,
   `id_product_categoria`  NOT NULL,
   `id_product_color`  NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_categories` (
   `id_product_categoria` INT,
   `categoria_desc` VARCHAR(255),
   PRIMARY KEY (`id_product_categoria`)
);

CREATE TABLE `product_colors` (
   `id_product_color` INT NOT NULL AUTO_INCREMENT,
   `product_color_desc` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id_product_color`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_25f6dbeb-7cc8-48f1-90ba-0013be5d8b9e` FOREIGN KEY (`id_categoria`) REFERENCES `categories_users`(`id_user_cat`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_46085eb6-1050-4ec9-8d06-a9403e2336ea` FOREIGN KEY (`id_product_categoria`) REFERENCES `product_categories`(`id_product_categoria`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_3721cce5-0e4f-4c0f-bad4-64b0e5622a64` FOREIGN KEY (`id_product_color`) REFERENCES `product_colors`(`id_product_color`)  ;
