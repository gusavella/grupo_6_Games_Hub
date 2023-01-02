-- MySQL Workbench Forward Engineering
/*
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
*/
-- -----------------------------------------------------
-- Schema gamesHub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gamesHub
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gamesHub`  ;
CREATE SCHEMA IF NOT EXISTS `gamesHub` DEFAULT CHARACTER SET utf8 ;
USE `gamesHub` ;

-- -----------------------------------------------------
-- Table `gamesHub`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`categories` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `gamesHub`.`sections`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`sections` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`sections` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));
/*
CREATE UNIQUE INDEX `section_UNIQUE` ON `gamesHub`.`sections` (`name` ASC) VISIBLE;
*/

-- -----------------------------------------------------
-- Table `gamesHub`.`products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`products` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `value` FLOAT NOT NULL,
  `discount` FLOAT NOT NULL,
  `final_value` FLOAT NOT NULL,
  `category_id` INT NOT NULL,
  `section_id` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`category_id`)
    REFERENCES `gamesHub`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_sections1`
    FOREIGN KEY (`section_id`)
    REFERENCES `gamesHub`.`sections` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

/*
CREATE INDEX `fk_products_categories1_idx` ON `gamesHub`.`products` (`category_id` ASC) VISIBLE;

CREATE INDEX `fk_products_sections1_idx` ON `gamesHub`.`products` (`section_id` ASC) VISIBLE;
*/

-- -----------------------------------------------------
-- Table `gamesHub`.`consoles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`consoles` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`consoles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));
/*
CREATE UNIQUE INDEX `consoles_UNIQUE` ON `gamesHub`.`consoles` (`name` ASC) VISIBLE;
*/

-- -----------------------------------------------------
-- Table `gamesHub`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`roles` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `gamesHub`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`users` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `names` VARCHAR(200) NOT NULL,
  `surnames` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `role_id` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_USERS_roles1`
    FOREIGN KEY (`role_id`)
    REFERENCES `gamesHub`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
/*
CREATE UNIQUE INDEX `email_UNIQUE` ON `gamesHub`.`users` (`email` ASC) VISIBLE;

CREATE INDEX `fk_USERS_roles1_idx` ON `gamesHub`.`users` (`role_id` ASC) VISIBLE;
*/

-- -----------------------------------------------------
-- Table `gamesHub`.`orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`orders` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `total` FLOAT NOT NULL,
  `user_id` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cart_USERS1`
    FOREIGN KEY (`user_id`)
    REFERENCES `gamesHub`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
/*
CREATE INDEX `fk_cart_USERS1_idx` ON `gamesHub`.`orders` (`USERS_id` ASC) VISIBLE;
*/

-- -----------------------------------------------------
-- Table `gamesHub`.`products_consoles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`products_consoles` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`products_consoles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `console_id` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_products_has_consoles_games1`
    FOREIGN KEY (`product_id`)
    REFERENCES `gamesHub`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_consoles_consoles1`
    FOREIGN KEY (`console_id`)
    REFERENCES `gamesHub`.`consoles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
/*
CREATE INDEX `fk_products_has_consoles_consoles_idx` ON `gamesHub`.`products_consoles` (`console_id` ASC) VISIBLE;

CREATE INDEX `fk_products_has_consoles_products_idx` ON `gamesHub`.`products_consoles` (`product_id` ASC) VISIBLE;
*/

-- -----------------------------------------------------
-- Table `gamesHub`.`orders_products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gamesHub`.`orders_products` ;

CREATE TABLE IF NOT EXISTS `gamesHub`.`orders_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `value` FLOAT NOT NULL,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `delete_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_orders_products_orders1`
    FOREIGN KEY (`order_id`)
    REFERENCES `gamesHub`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_products_games1`
    FOREIGN KEY (`product_id`)
    REFERENCES `gamesHub`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
/*
CREATE INDEX `fk_orders_products_orders1_idx` ON `gamesHub`.`orders_products` (`order_id` ASC) VISIBLE;

CREATE INDEX `fk_orders_games_products1_idx` ON `gamesHub`.`orders_products` (`product_id` ASC) VISIBLE;
*/
/*
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
*/