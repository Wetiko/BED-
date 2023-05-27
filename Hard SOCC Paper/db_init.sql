CREATE DATABASE  IF NOT EXISTS `steam_games`;
USE `steam_games`;

-- Create tables

CREATE TABLE `user` (
	`id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
	`categoryID` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` LONGTEXT NOT NULL    
);

CREATE TABLE `games` (
	`game_id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `category_id` INT,
    `name` VARCHAR(255) NOT NULL,
    `price` decimal(10,2) NOT NULL,
    `description` LONGTEXT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(categoryID)
);

CREATE TABLE `interest` (
	`id` INT AUTO_INCREMENT NOT NULL,
    `user_id` INT,
    `category_id` INT,
    PRIMARY KEY (`id`),
    FOREIGN KEY (category_id) REFERENCES category(categoryID),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Insert values
INSERT INTO user (name, email, password) VALUES ('Gwendolen', 'ggatecliffe0@bbb.org', 'VAbxfGZGN'), ('Moore', 'mrafe1@xrea.com', 'RM2Cq1TQmO'), ('Pedro', 'pesom2@vkontakte.ru', '9CwkuiApRaO'), ('Marina', 'mgranham3@aboutads.info', 'z2iBopDv'), ('Jacquetta', 'jgazey4@archive.org', 'tqpQMB8X');

INSERT INTO category (name, description) VALUES ('Action', 'Action games emphasize physical challenges that require hand-eye coordination and motor skill to overcome. They center around the player, who is in control of most of the action. Most of the earliest video games were considered action games; today, it is still a vast genre covering all games that involve physical challenges.');
INSERT INTO category (name, description) VALUES ('Gacha', 'Gacha games are video games that implement the gacha (toy vending machine) mechanic. Similar to loot boxes, gacha games induce players to spend in-game currency to receive a random virtual item. Most of these games are free-to-play mobile games, where the gacha serves as an incentive to spend real-world money');
INSERT INTO category (name, description) VALUES ('Sandbox', 'Sandbox RPG or Open World RPG allow the player a large amount of freedom and usually contain a somewhat more open free-roaming (meaning the player is not confined to a single path restricted by rocks or fences etc.) world.');

INSERT INTO games (category_id, name, price, description) VALUES (3, 'Minecraft', 39.99, 'Minecraft is a sandbox game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language.');
INSERT INTO games (category_id, name, price, description) VALUES (1, 'Overwatch', 79.99,'Overwatch 2 is a free-to-play, team-based action game set in the optimistic future, where every match is the ultimate 5v5 battlefield brawl.');
INSERT INTO games (category_id, name, price, description) VALUES (2, 'Genshin Impact', 5.99,'Genshin Impact is an action role-playing game developed and published by miHoYo.');
INSERT INTO games (category_id, name, price, description) VALUES (2, 'Raid: Shadow Legends', 29.99,'Raid: Shadow Legends is a freemium mobile game developed and published by Israeli game developer Plarium Games, a subsidiary of the gambling company Aristocrat Leisure.');
INSERT INTO games (category_id, name, price, description) VALUES (2, 'AFK Arena', 7.99,'AFK Arena has established itself as one of the finest mobile gacha games thanks, primarily, to its fairness to those who play for free.');
INSERT INTO games (category_id, name, price, description) VALUES (1, 'Valorant', 10.99,'Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Microsoft Windows.');
INSERT INTO games (category_id, name, price, description) VALUES (1, 'Fornite', 49.99,'Fortnite is an online video game developed by Epic Games and released in 2017.');
INSERT INTO games (category_id, name, price, description) VALUES (3, 'Terraria', 29.99,'Terraria is an action-adventure sandbox game developed by Re-Logic. ');
INSERT INTO games (category_id, name, price, description) VALUES (3, 'No Mans Sky', 59.99,'No Mans Sky is an action-adventure survival game developed and published by Hello Games.');

insert into interest (user_id, category_id) values (1, 1);
insert into interest (user_id, category_id) values (1, 2);
insert into interest (user_id, category_id) values (3, 2);
insert into interest (user_id, category_id) values (4, 2);
insert into interest (user_id, category_id) values (2, 3);
insert into interest (user_id, category_id) values (5, 2);
