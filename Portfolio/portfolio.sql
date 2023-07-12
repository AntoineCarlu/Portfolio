-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db_portfolio
-- Généré le : mer. 12 juil. 2023 à 12:42
-- Version du serveur : 8.0.33
-- Version de PHP : 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `portfolio`
--

-- --------------------------------------------------------

--
-- Structure de la table `Admin`
--

CREATE TABLE `Admin` (
  `User_id` bigint NOT NULL,
  `User_Name` bigint DEFAULT NULL,
  `User_Password` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Education`
--

CREATE TABLE `Education` (
  `Education_id` bigint NOT NULL,
  `Education_title` varchar(155) DEFAULT NULL,
  `Education_infos` varchar(255) DEFAULT NULL,
  `Education_descr` varchar(255) DEFAULT NULL,
  `Education_date` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Experience`
--

CREATE TABLE `Experience` (
  `Experience_id` bigint NOT NULL,
  `Experience_title` varchar(155) DEFAULT NULL,
  `Experience_infos` varchar(255) DEFAULT NULL,
  `Experience_descr` varchar(255) DEFAULT NULL,
  `Experience_date` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Projects`
--

CREATE TABLE `Projects` (
  `Project_id` bigint NOT NULL,
  `Project_link` varchar(255) DEFAULT NULL,
  `Project_img` blob,
  `Project_descr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Skills`
--

CREATE TABLE `Skills` (
  `Skill_id` bigint NOT NULL,
  `Skill_name` varchar(155) DEFAULT NULL,
  `Skill_pourcent` int DEFAULT NULL,
  `Skill_category` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`User_id`);

--
-- Index pour la table `Education`
--
ALTER TABLE `Education`
  ADD PRIMARY KEY (`Education_id`);

--
-- Index pour la table `Experience`
--
ALTER TABLE `Experience`
  ADD PRIMARY KEY (`Experience_id`);

--
-- Index pour la table `Projects`
--
ALTER TABLE `Projects`
  ADD PRIMARY KEY (`Project_id`);

--
-- Index pour la table `Skills`
--
ALTER TABLE `Skills`
  ADD PRIMARY KEY (`Skill_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `User_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Education`
--
ALTER TABLE `Education`
  MODIFY `Education_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Experience`
--
ALTER TABLE `Experience`
  MODIFY `Experience_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Projects`
--
ALTER TABLE `Projects`
  MODIFY `Project_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Skills`
--
ALTER TABLE `Skills`
  MODIFY `Skill_id` bigint NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
