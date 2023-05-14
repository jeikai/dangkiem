-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2023 at 10:46 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dangkiem`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `driverId` int(11) DEFAULT NULL,
  `plateNumber` varchar(255) DEFAULT NULL,
  `manufacture` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `registerDate` datetime DEFAULT NULL,
  `registerCity` varchar(255) DEFAULT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `driverId`, `plateNumber`, `manufacture`, `model`, `color`, `registerDate`, `registerCity`, `purpose`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'XYZ-5678', 'Honda', 'Civic', 'Red', '2022-07-06 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(2, 2, 'DEF-9012', 'Mazda', 'CX-5', 'Black', '2022-07-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(3, 3, 'GHI-3456', 'Ford', 'Focus', 'Blue', '2022-08-07 00:00:00', 'Da Nang', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(4, 4, 'JKL-7890', 'Toyota', 'Corolla', 'White', '2022-07-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(5, 5, 'MNO-1234', 'Honda', 'Accord', 'Silver', '2022-07-14 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(6, 6, 'PQR-5678', 'Nissan', 'Altima', 'Black', '2022-07-17 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(7, 7, 'STU-9012', 'Hyundai', 'Sonata', 'Gray', '2022-07-22 00:00:00', 'Da Nang', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(8, 8, 'VWX-3456', 'Toyota', 'Rav4', 'Blue', '2022-02-04 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(9, 9, 'YZA-7890', 'Honda', 'Pilot', 'White', '2022-01-19 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(10, 10, 'BCD-1234', 'Mitsubishi', 'Outlander', 'Silver', '2022-01-15 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(11, 11, 'EFG-5678', 'Toyota', 'Vios', 'Black', '2022-07-18 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(12, 12, 'HIJ-9012', 'Honda', 'City', 'Red', '2022-12-25 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(13, 13, 'KLM-3456', 'Ford', 'Ranger', 'Gray', '2022-11-28 00:00:00', 'Da Nang', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(14, 14, 'NOP-7890', 'Mazda', '3', 'White', '2022-01-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(15, 15, 'QRS-1234', 'Toyota', 'Innova', 'Silver', '2022-01-14 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(16, 16, 'TUV-5678', 'Nissan', 'Sentra', 'Black', '2021-06-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(17, 17, 'WXY-9012', 'Hyundai', 'Tucson', 'Blue', '2020-07-06 00:00:00', 'Da Nang', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(18, 1, 'ZAB-3456', 'Toyota', 'Fortuner', 'White', '2020-07-08 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(19, 2, 'CDE-7890', 'Honda', 'Fit', 'Red', '2019-07-06 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(20, 3, 'FGH-1234', 'Mitsubishi', 'Xpander', 'Silver', '2018-07-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(21, 4, 'IJK-5678', 'Toyota', 'Corolla', 'Black', '2018-09-06 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(22, 5, 'LMN-9012', 'Ford', 'Explorer', 'Blue', '2021-09-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(23, 6, 'OPQ-3456', 'Hyundai', 'Accent', 'Gray', '2021-12-25 00:00:00', 'Da Nang', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(24, 7, 'RST-7890', 'Kia', 'Sorento', 'White', '2017-07-06 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(25, 8, 'UVW-1234', 'Mazda', 'CX-5', 'Red', '2019-01-09 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(26, 9, 'XYZ-5978', 'Toyota', 'Yaris', 'Silver', '2021-07-03 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(27, 10, 'ABC-9012', 'Honda', 'Civic', 'Black', '2021-03-07 00:00:00', 'Da Nang', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(28, 11, 'DEF-3456', 'Nissan', 'Kicks', 'Blue', '2021-03-22 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(29, 12, 'GHI-7890', 'Hyundai', 'Santa Fe', 'White', '2021-04-18 00:00:00', 'Ho Chi Minh City', 'Personal', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(30, 13, 'JKL-1234', 'Toyota', 'RAV4', 'Gray', '2020-01-14 00:00:00', 'Hanoi', 'Business', '2023-05-12 08:45:17', '2023-05-12 08:45:17');

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `driverName` varchar(255) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `driverName`, `dateOfBirth`, `address`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyễn Thành Long', '1990-01-15', 'Số 5, đường Nguyễn Du, phường 7, quận 3, TP. HCM', '0901111222', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(2, 'Trần Thị Mai', '1995-03-20', 'Số 15, đường Nguyễn Huệ, phường Bến Nghé, quận 1, TP. HCM', '0902222333', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(3, 'Lê Văn An', '1988-05-25', 'Số 8, đường Ngô Tất Tố, phường 22, quận Bình Thạnh, TP. HCM', '0903333444', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(4, 'Phạm Văn Đông', '1992-06-10', 'Số 12, đường Lê Thánh Tôn, phường Bến Nghé, quận 1, TP. HCM', '0904444555', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(5, 'Ngô Thị Thanh', '1985-09-05', 'Số 20, đường Nam Kỳ Khởi Nghĩa, phường Bến Nghé, quận 1, TP. HCM', '0905555666', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(6, 'Vũ Thị Ngọc', '1998-12-31', 'Số 30, đường Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TP. HCM', '0906666777', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(7, 'Nguyễn Văn Huy', '1991-02-14', 'Số 25, đường Cách Mạng Tháng 8, phường 7, quận 3, TP. HCM', '0907777888', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(8, 'Lê Thị Hồng', '1983-04-28', 'Số 10, đường Nguyễn Cư Trinh, phường Phạm Ngũ Lão, quận 1, TP. HCM', '0908888999', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(9, 'Trần Văn Tài', '1994-07-02', 'Số 35, đường Điện Biên Phủ, phường 17, quận Bình Thạnh, TP. HCM', '0909999000', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(10, 'Trần Thị Bình', '1993-02-15', 'Số 10, đường Nguyễn Trãi, phường Thanh Xuân, quận Thanh Xuân, Hà Nội', '0915555666', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(11, 'Phạm Văn Cấn', '1988-05-05', 'Số 15, đường Lê Duẩn, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội', '0902222777', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(12, 'Đỗ Thị Danh', '1997-11-12', 'Số 3, đường Lý Thường Kiệt, phường Lê Lợi, quận Hải Châu, Đà Nẵng', '0988888999', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(13, 'Lê Văn Quyền', '1990-09-01', 'Số 12, đường Ngô Quyền, phường Ngô Quyền, quận Hải Phòng, Hải Phòng', '0936666777', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(14, 'Trần Văn Diệu', '1985-04-30', 'Số 5, đường Hoàng Diệu, phường Thanh Bình, quận Hải Châu, Đà Nẵng', '0967777888', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(15, 'Nguyễn Thị Vương', '1992-07-09', 'Số 6, đường Hùng Vương, phường Hải Châu 1, quận Hải Châu, Đà Nẵng', '0974444555', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(16, 'Trần Văn Lợi', '1994-12-25', 'Số 8, đường Lê Lợi, phường Thanh Bình, quận Hải Châu, Đà Nẵng', '0983333444', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(17, 'Nguyễn Văn Huệ', '1989-10-17', 'Số 7, đường Nguyễn Huệ, phường Phú Hội, quận Huế, Thừa Thiên Huế', '0914444555', '2023-05-12 08:45:17', '2023-05-12 08:45:17');

-- --------------------------------------------------------

--
-- Table structure for table `registers`
--

CREATE TABLE `registers` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `carId` varchar(255) DEFAULT NULL,
  `registerDate` varchar(255) DEFAULT NULL,
  `expireDate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registers`
--

INSERT INTO `registers` (`id`, `userId`, `carId`, `registerDate`, `expireDate`, `createdAt`, `updatedAt`) VALUES
(1, '2', '1', '2022-06-02', '2023-06-02', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(2, '2', '2', '2022-09-05', '2023-09-05', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(3, '2', '3', '2023-10-26', '2023-10-26', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(4, '2', '4', '2023-10-26', '2023-10-26', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(5, '2', '5', '2023-11-09', '2023-11-09', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(6, '2', '6', '2022-05-06', '2023-05-06', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(7, '2', '7', '2022-12-19', '2023-12-19', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(8, '2', '8', '2022-11-30', '2023-11-30', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(9, '2', '9', '2022-07-10', '2023-07-10', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(10, '2', '10', '2022-06-13', '2023-06-13', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(11, '2', '11', '2022-08-07', '2023-08-07', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(12, '2', '12', '2022-10-14', '2023-10-14', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(13, '2', '13', '2022-11-20', '2023-11-20', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(14, '2', '14', '2022-09-24', '2023-09-24', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(15, '2', '15', '2022-04-20', '2023-04-20', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(16, '2', '16', '2022-09-06', '2023-09-06', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(17, '2', '17', '2022-08-08', '2023-08-08', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(18, '2', '18', '2022-11-05', '2023-11-05', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(19, '2', '19', '2022-04-21', '2023-04-21', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(20, '2', '20', '2022-07-18', '2023-07-18', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(21, '2', '21', '2022-05-21', '2023-05-21', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(22, '2', '22', '2022-12-06', '2023-12-06', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(23, '2', '23', '2022-10-29', '2023-10-29', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(24, '2', '24', '2022-03-20', '2023-03-20', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(25, '2', '25', '2022-05-24', '2023-05-24', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(26, '2', '26', '2022-10-13', '2023-10-13', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(27, '2', '27', '2022-06-17', '2023-06-17', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(28, '2', '28', '2022-06-20', '2023-06-20', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(29, '2', '29', '2022-08-28', '2023-08-28', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(30, '2', '30', '2022-09-30', '2023-09-30', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(31, '2', '31', '2022-11-27', '2023-11-27', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(32, '2', '32', '2022-12-18', '2023-12-18', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(33, '2', '33', '2022-06-08', '2023-06-08', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(34, '2', '34', '2022-08-24', '2023-08-24', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(35, '2', '35', '2022-07-11', '2023-07-11', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(36, '2', '36', '2022-06-26', '2023-06-26', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(37, '2', '37', '2022-09-03', '2023-09-03', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(38, '2', '38', '2022-11-02', '2023-11-02', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(39, '2', '39', '2022-11-25', '2023-11-25', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(40, '2', '40', '2022-06-01', '2023-06-01', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(41, '2', '41', '2022-12-13', '2023-12-13', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(42, '2', '42', '2022-08-17', '2023-08-17', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(43, '2', '43', '2022-08-27', '2023-08-27', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(44, '2', '44', '2022-05-20', '2023-05-20', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(45, '2', '45', '2022-07-06', '2023-07-06', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(46, '2', '46', '2022-04-22', '2023-04-22', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(47, '2', '47', '2022-10-19', '2023-10-19', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(48, '2', '48', '2022-08-12', '2023-08-12', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(49, '2', '49', '2022-06-24', '2023-06-24', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(50, '2', '50', '2022-07-31', '2023-07-31', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(51, '2', '51', '2022-09-14', '2023-09-14', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(52, '2', '52', '2022-12-02', '2023-12-02', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(53, '2', '53', '2022-11-10', '2023-11-10', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(54, '2', '54', '2022-11-10', '2023-11-10', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(55, '2', '55', '2022-09-22', '2023-09-22', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(56, '2', '56', '2022-12-30', '2023-12-30', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(57, '2', '57', '2022-11-21', '2023-11-21', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(58, '2', '58', '2022-05-09', '2023-05-09', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(59, '2', '59', '2022-10-04', '2023-10-04', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(60, '2', '60', '2022-12-22', '2023-12-22', '2023-05-12 08:45:17', '2023-05-12 08:45:17');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230402141211-create-user.js'),
('migration-create-car.js'),
('migration-create-driver.js'),
('migration-create-register.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rolebit` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `rolebit`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Cục đăng kiểm Việt Nam', 'cucdangkiemvn', 'c12345.', '1', 'Số 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội.', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(2, 'Trung tâm đăng kiểm Hà Nội 1', 'hanoi1', 'hn112345.', '0', 'Số 1, Lê Đức Thọ, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(3, 'Trung tâm đăng kiểm Hà Nội 2', 'ttdkhanoi2', 'hn212345.', '0', 'Số 10, ngõ 61, đường Nguyễn Chánh, phường Trung Hòa, quận Cầu Giấy, Hà Nội.', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(4, 'Trung tâm đăng kiểm thành phố Hồ Chí Minh 1', 'hcm1', 'ttdkhcm112345.', '0', 'Số 151 đường D1, phường 25, quận Bình Thạnh, TP. Hồ Chí Minh.', '2023-05-12 08:45:17', '2023-05-12 08:45:17'),
(5, 'Trung tâm đăng kiểm thành phố Đà nẵng', 'ttdkdn', 'dn12345.', '0', 'Số 41-43 đường Duy Tân, quận Hải Châu, thành phố Đà Nẵng.', '2023-05-12 08:45:17', '2023-05-12 08:45:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `registers`
--
ALTER TABLE `registers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
