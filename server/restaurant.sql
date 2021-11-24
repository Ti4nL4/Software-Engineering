-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2021 at 06:40 AM
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
(28, '2021-02-02', 1),
(29, '2021-02-02', 1),
(30, '2021-02-02', 1),
(31, '2021-02-02', 1),
(32, '2021-02-02', 1),
(33, '2021-02-02', 1),
(34, '2021-02-02', 1),
(35, '2021-02-02', 1),
(36, '2021-02-02', 1),
(37, '2021-02-02', 1),
(38, '2021-02-02', 1),
(39, '2021-02-02', 1),
(40, '2021-02-02', 1),
(41, '2021-02-02', 1),
(42, '2021-02-02', 1),
(43, '2021-02-02', 1),
(47, '2021-11-22', 1),
(48, '2021-11-22', 1),
(49, '2021-11-22', 1),
(50, '2021-11-22', 1),
(51, '2021-11-22', 1),
(52, '2021-11-22', 1),
(53, '2021-11-22', 1),
(54, '2021-11-22', 1),
(55, '2021-11-22', 1),
(56, '2021-11-22', 1),
(57, '2021-11-22', 1),
(58, '2021-11-22', 1),
(59, '2021-11-22', 1),
(60, '2021-11-22', 1),
(61, '2021-11-22', 1),
(62, '2021-11-22', 1),
(63, '2021-11-22', 1),
(64, '2021-11-22', 1),
(65, '2021-11-22', 1),
(66, '2021-11-22', 1),
(67, '2021-11-22', 1),
(68, '2021-11-22', 1),
(69, '2021-11-22', 1),
(70, '2021-11-22', 1),
(71, '2021-11-22', 1),
(72, '2021-11-22', 1),
(73, '2021-11-22', 1),
(74, '2021-11-22', 1),
(75, '2021-11-22', 1),
(76, '2021-11-22', 1),
(77, '2021-11-22', 1),
(78, '2021-11-22', 1),
(79, '2021-11-22', 1),
(80, '2021-11-22', 1),
(81, '2021-11-22', 1),
(82, '2021-11-22', 1),
(83, '2021-11-22', 1),
(84, '2021-11-22', 1),
(85, '2021-11-22', 1),
(86, '2021-11-22', 1),
(87, '2021-11-22', 1),
(88, '2021-11-23', 1);

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
(28, 7, 3),
(29, 9, 1),
(29, 10, 1),
(29, 11, 1),
(30, 2, 1),
(31, 2, 1),
(32, 2, 1),
(33, 2, 1),
(34, 2, 1),
(35, 2, 4),
(36, 2, 4),
(37, 2, 1),
(40, 7, 1),
(43, 8, 1),
(43, 10, 1),
(47, 7, 1),
(47, 8, 1),
(48, 2, 3),
(64, 6, 1),
(66, 7, 1),
(71, 2, 7),
(73, 2, 7),
(74, 2, 7),
(75, 2, 7),
(76, 2, 7),
(77, 2, 7),
(84, 7, 2),
(85, 9, 2),
(88, 6, 11);

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
(2, 'Cháo yến Yến Việt đậu xanh', 'Cháo', 12000, 8000, 'Là dòng sản phẩm cháo yến ăn liền tiện lợi từ thương hiệu Yến Việt. Cháo yến Yến Việt đậu xanh thịt bằm ly 50g có chứa tổ yến tự nhiên cùng rau thịt tươi sấy thăng hoa mang hương vị đậu xanh thịt bằm tươi ngon và giàu dinh dưỡng là lựa chọn hoàn hảo cho bữa ăn tiện lợi, đơn giản những vẫn đủ chất', 37, 'https://cdn.tgdd.vn/Products/Images/2564/191290/bhx/chao-yen-yenviet-dau-xanh-thit-bam-ly-50g-2-org.jpg'),
(6, 'Thùng 30 gói cháo yến trẻ em Y', 'Cháo', 7000, 5000, 'Dòng sản phẩm cháo yến ăn liền trẻ em tiện lợi từ thương hiệu Yến Việt. 30 gói cháo yến trẻ em Yến Việt Nest IQ thịt bằm 50g chứa tổ yến tự nhiên cùng rau thịt tươi sấy thăng hoa mang hương vị bò bằm bó xôi tươi ngon và giàu dinh dưỡng là lựa chọn hoàn hảo cho bữa ăn tiện lợi và đủ chất', 1000, 'https://cdn.tgdd.vn/Products/Images/2564/191289/bhx/thung-chao-yen-yenviet-tre-em-thit-bam-50g-30goi-2-org.jpg'),
(7, 'Cháo sườn Chinsu hộp 420g', 'Cháo', 30000, 20000, 'Là dòng sản phẩm cháo ăn liền của thương hiệu Chin-su. Cháo sườn Chinsu hộp 420g tươi ngon như mới nấu đặc biệt có thêm gói sườn nguyên miếng chất lượng mang đến bữa ăn nhanh chóng, tiện lợi và đảm bảo dinh dưỡng. Sản phẩm cam kết chất lượng, an toàn, không chất bảo quản, màu và mùi nhân tạo', 11, 'https://cdn.tgdd.vn/Products/Images/2564/221705/bhx/chao-suon-chinsu-hop-420g-202005091249329924.jpg'),
(8, 'Mì Hảo Hảo tôm chua cay', 'Mì gói', 3000, 2000, 'Sợi mì vàng dai ngon hòa quyện trong nước súp tôm chua cay Hảo Hảo, đậm đà thấm đẫm từng sợi sóng sánh cùng hương thơm quyến rũ ngất ngây. Mì Hảo Hảo tôm chua cay gói 75g là lựa chọn hấp dẫn không thể bỏ qua đặc biệt là những ngày bận rộn cần bổ sung năng lượng nhanh chóng đơn giản mà vẫn đủ chất', 49, 'https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/thung-30-goi-mi-hao-hao-tom-chua-cay-75g-202110110920304347.JPG'),
(9, 'Bún bò Huế Hằng Nga', 'Bún bò', 25000, 20000, 'Sản phẩm bún ăn liền thương hiệu Hằng Nga được sản xuất từ các thành phần tự nhiên an toàn cho khỏe. 30 gói bún bò Huế Hằng Nga 73g chất lượng thơm ngon, cay hít hà đậm đà vị Huế cho bạn tô bún bò hảo hạng chuẩn vị, cực đậm đà và hấp dẫn, phù hợp cho bữa ăn nhanh tiện lợi và dinh dưỡng', 48, 'https://cdn.tgdd.vn/Products/Images/2963/174711/bhx/bun-hang-nga-bun-bo-hue-75g-thung-30-5-org.jpg'),
(10, 'Bún bò Huế Hằng Nga', 'Bún bò', 25000, 20000, 'Sản phẩm bún ăn liền thương hiệu Hằng Nga được sản xuất từ các thành phần tự nhiên an toàn cho khỏe. 30 gói bún bò Huế Hằng Nga 73g chất lượng thơm ngon, cay hít hà đậm đà vị Huế cho bạn tô bún bò hảo hạng chuẩn vị, cực đậm đà và hấp dẫn, phù hợp cho bữa ăn nhanh tiện lợi và dinh dưỡng', 50, 'https://cdn.tgdd.vn/Products/Images/2963/174711/bhx/bun-hang-nga-bun-bo-hue-75g-thung-30-5-org.jpg'),
(11, 'Bún bò Huế Hằng Nga', 'Bún bò', 25000, 20000, 'Sản phẩm bún ăn liền thương hiệu Hằng Nga được sản xuất từ các thành phần tự nhiên an toàn cho khỏe. 30 gói bún bò Huế Hằng Nga 73g chất lượng thơm ngon, cay hít hà đậm đà vị Huế cho bạn tô bún bò hảo hạng chuẩn vị, cực đậm đà và hấp dẫn, phù hợp cho bữa ăn nhanh tiện lợi và dinh dưỡng', 50, 'https://cdn.tgdd.vn/Products/Images/2963/174711/bhx/bun-hang-nga-bun-bo-hue-75g-thung-30-5-org.jpg'),
(12, 'Sữa dinh dưỡng ít đường Vinami', 'Sữa', 7000, 5000, 'Được chế biến từ nguồn sữa tươi 100% chứa nhiều dưỡng chất như vitamin A, D3, canxi, DHA,... tốt cho xương và hệ miễn dịch. Sữa tươi Vinamilk là thương hiệu được tin dùng hàng đầu với chất lượng tuyệt vời. Thùng 48 bịch sữa dinh dưỡng ít đường Vinamilk 220ml thơm ngon dễ uống', 50, 'https://cdn.tgdd.vn/Products/Images/2386/162411/bhx/thung-48-bich-sua-dinh-duong-it-duong-vinamilk-220ml-202005081546117823.JPG'),
(13, 'Mực nang túi 200g', 'Hải sản', 80000, 70000, 'Mực nang có thân to, thớ thịt dày, có vị ngọt và giòn hơn các loại mực khác. Vì thế mực nang là nguyên liệu chế biến nhiều món ăn ngon, một số món đặc biệt trong gia đình là mực xào chua ngọt, mực xào sa tế, mực chiên giòn,.... Mua về chế biến cho cả nhà ăn thử ngay nhé.', 50, 'https://cdn.tgdd.vn/Products/Images/8780/238805/bhx/muc-nang-lam-sach-tui-200g-202105081412234829.jpg'),
(14, 'Cá saba tẩm sa tế', 'Hải sản', 80000, 70000, 'Hải sản đông lạnh thương hiệu Mama Food. Cá saba tẩm sa tế đông lạnh Mama Food gói 500g được làm từ thịt cá basa và hỗn hợp gia gồm sả băm, dầu ăn, ớt khô, đường, muối, chất điều vị với liều lượng nêm thếm vừa miệng cho mọi gia đình, phù hợp chế biến món cá nướng thơm lừng hấp dẫn.', 50, 'https://cdn.tgdd.vn/Products/Images/8400/236832/bhx/ca-saba-tam-sa-te-dong-lanh-mama-food-goi-500g-202106031457493285.jpg'),
(15, 'Mực trứng đông lạnh Vipafood', 'Hải sản', 90000, 70000, 'Hải sản đông lạnh chất lượng từ hải sản đông lạnh Vipafood. Hương vị thơm ngon, lượng dinh dưỡng rất cao cùng một số chất khoáng vi lượng rất quý như sắt, kẽm, mangan, selen,...Mực trứng Vipafood đông lạnh khay 300g có thể chế biến thành các món như mực xào, mực nhồi thịt, chả mực, mực nướng sa tế…', 500, 'https://cdn.tgdd.vn/Products/Images/8400/211951/bhx/muc-trung-vipafood-dong-lanh-khay-300g-201910011305082673.jpg'),
(16, 'Mực trứng đông lạnh Vipafood', 'Bún', 30000, 20000, 'Bún nưa được làm từ bột củ Konjac (củ nưa) có hàm lượng chất xơ rất cao, tốt cho tiêu hóa. Bún nưa Vị Nguyên gói 240g đến từ thương hiệu thực phẩm Vị Nguyên phù hợp với mọi lứa tuổi và mọi chế độ ăn kiêng. Có thể dùng như một loại bún tươi, ăn kèm với các món chiên, xào,... hằng ngày nhanh chóng và ...', 500, 'https://cdn.tgdd.vn/Products/Images/9340/244554/bhx/bun-nua-vi-nguyen-goi-240g-202107052311554227.jpg'),
(17, 'Bánh canh Tú Linh', 'Bánh canh', 12000, 5000, 'Bánh canh sợi trắng dai ngon đảm bảo chất lượng vệ sinh. Bánh canh gói 500g tiện lợi cho những món nước lèo hấp dẫn, thơm ngon. Loại bánh canh tươi đóng gói sẵn này hiện nay được nhiều chị em phụ nữ tin dùng chọn mua cho gia đình của mình', 500, 'https://cdn.tgdd.vn/Products/Images/9340/233802/bhx/banh-canh-goi-500g-giao-thuong-hieu-ngau-nhien-202110121522027294.jpeg');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

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
