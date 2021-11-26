-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2021 at 04:06 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `Id` int(11) NOT NULL,
  `Buy_Time` date NOT NULL,
  `User_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`Id`, `Buy_Time`, `User_Id`) VALUES
(25, '2021-02-02', 1),
(26, '2021-02-02', 1),
(27, '2021-02-02', 1),
(28, '2021-02-02', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `Bill_Id` int(11) NOT NULL,
  `Product_Id` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`Bill_Id`, `Product_Id`, `Quantity`) VALUES
(25, 2, 1),
(26, 2, 1),
(27, 2, 2),
(27, 7, 1),
(28, 2, 4),
(28, 7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Id` int(11) NOT NULL,
  `Product_Name` varchar(30) NOT NULL,
  `Product_Type` varchar(30) NOT NULL,
  `Price` float NOT NULL,
  `Fund` float NOT NULL,
  `Product_Description` varchar(1000) NOT NULL,
  `Instock` int(11) NOT NULL,
  `Image` varchar(500) NOT NULL
) ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Id`, `Product_Name`, `Product_Type`, `Price`, `Fund`, `Product_Description`, `Instock`, `Image`) VALUES
(2, 'Cháo yến Yến Việt đậu xanh', 'Cháo', 12000, 8000, 'Là dòng sản phẩm cháo yến ăn liền tiện lợi từ thương hiệu Yến Việt. Cháo yến Yến Việt đậu xanh thịt bằm ly 50g có chứa tổ yến tự nhiên cùng rau thịt tươi sấy thăng hoa mang hương vị đậu xanh thịt bằm tươi ngon và giàu dinh dưỡng là lựa chọn hoàn hảo cho bữa ăn tiện lợi, đơn giản những vẫn đủ chất', 10, 'https://cdn.tgdd.vn/Products/Images/2564/191290/bhx/chao-yen-yenviet-dau-xanh-thit-bam-ly-50g-2-org.jpg'),
(6, 'Thùng 30 gói cháo yến trẻ em Y', 'Cháo', 7000, 5000, 'Dòng sản phẩm cháo yến ăn liền trẻ em tiện lợi từ thương hiệu Yến Việt. 30 gói cháo yến trẻ em Yến Việt Nest IQ thịt bằm 50g chứa tổ yến tự nhiên cùng rau thịt tươi sấy thăng hoa mang hương vị bò bằm bó xôi tươi ngon và giàu dinh dưỡng là lựa chọn hoàn hảo cho bữa ăn tiện lợi và đủ chất', 12, 'https://cdn.tgdd.vn/Products/Images/2564/191289/bhx/thung-chao-yen-yenviet-tre-em-thit-bam-50g-30goi-2-org.jpg'),
(7, 'Cháo sườn Chinsu hộp 420g', 'Cháo', 30000, 20000, 'Là dòng sản phẩm cháo ăn liền của thương hiệu Chin-su. Cháo sườn Chinsu hộp 420g tươi ngon như mới nấu đặc biệt có thêm gói sườn nguyên miếng chất lượng mang đến bữa ăn nhanh chóng, tiện lợi và đảm bảo dinh dưỡng. Sản phẩm cam kết chất lượng, an toàn, không chất bảo quản, màu và mùi nhân tạo', 15, 'https://cdn.tgdd.vn/Products/Images/2564/221705/bhx/chao-suon-chinsu-hop-420g-202005091249329924.jpg'),
(8, 'Mì Hảo Hảo tôm chua cay', 'Mì gói', 3000, 2000, 'Sợi mì vàng dai ngon hòa quyện trong nước súp tôm chua cay Hảo Hảo, đậm đà thấm đẫm từng sợi sóng sánh cùng hương thơm quyến rũ ngất ngây. Mì Hảo Hảo tôm chua cay gói 75g là lựa chọn hấp dẫn không thể bỏ qua đặc biệt là những ngày bận rộn cần bổ sung năng lượng nhanh chóng đơn giản mà vẫn đủ chất', 50, 'https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/thung-30-goi-mi-hao-hao-tom-chua-cay-75g-202110110920304347.JPG'),
(9, 'Bún bò Huế Hằng Nga', 'Bún bò', 25000, 20000, 'Sản phẩm bún ăn liền thương hiệu Hằng Nga được sản xuất từ các thành phần tự nhiên an toàn cho khỏe. 30 gói bún bò Huế Hằng Nga 73g chất lượng thơm ngon, cay hít hà đậm đà vị Huế cho bạn tô bún bò hảo hạng chuẩn vị, cực đậm đà và hấp dẫn, phù hợp cho bữa ăn nhanh tiện lợi và dinh dưỡng', 50, 'https://cdn.tgdd.vn/Products/Images/2963/174711/bhx/bun-hang-nga-bun-bo-hue-75g-thung-30-5-org.jpg'),
(10, 'Bún bò Huế Hằng Nga', 'Bún bò', 25000, 20000, 'Sản phẩm bún ăn liền thương hiệu Hằng Nga được sản xuất từ các thành phần tự nhiên an toàn cho khỏe. 30 gói bún bò Huế Hằng Nga 73g chất lượng thơm ngon, cay hít hà đậm đà vị Huế cho bạn tô bún bò hảo hạng chuẩn vị, cực đậm đà và hấp dẫn, phù hợp cho bữa ăn nhanh tiện lợi và dinh dưỡng', 50, 'https://cdn.tgdd.vn/Products/Images/2963/174711/bhx/bun-hang-nga-bun-bo-hue-75g-thung-30-5-org.jpg'),
(11, 'Bún bò Huế Hằng Nga', 'Bún bò', 25000, 20000, 'Sản phẩm bún ăn liền thương hiệu Hằng Nga được sản xuất từ các thành phần tự nhiên an toàn cho khỏe. 30 gói bún bò Huế Hằng Nga 73g chất lượng thơm ngon, cay hít hà đậm đà vị Huế cho bạn tô bún bò hảo hạng chuẩn vị, cực đậm đà và hấp dẫn, phù hợp cho bữa ăn nhanh tiện lợi và dinh dưỡng', 50, 'https://cdn.tgdd.vn/Products/Images/2963/174711/bhx/bun-hang-nga-bun-bo-hue-75g-thung-30-5-org.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `_user`
--

CREATE TABLE `_user` (
  `Id` int(11) NOT NULL,
  `Role_of_user` varchar(30) NOT NULL,
  `User_Name` varchar(30) NOT NULL,
  `User_Password` varchar(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` char(10) NOT NULL,
  `Address` varchar(100) NOT NULL
) ;

--
-- Dumping data for table `_user`
--

INSERT INTO `_user` (`Id`, `Role_of_user`, `User_Name`, `User_Password`, `Email`, `Phone`, `Address`) VALUES
(1, 'Admin', '123', '123', '123', '123', 'aDFDS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_Id` (`User_Id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`Bill_Id`,`Product_Id`),
  ADD KEY `Product_Id` (`Product_Id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `_user`
--
ALTER TABLE `_user`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `_user`
--
ALTER TABLE `_user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `_user` (`Id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`Bill_Id`) REFERENCES `bill` (`Id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
