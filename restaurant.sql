create database restaurant;
use restaurant;
create table _User (
	Id					int				not null	unique	primary key auto_increment,
    Role_of_user		varchar(30)		not null, 	#Guest vs Admin
    User_Name			varchar(30) 	not null,
    User_Password		varchar(500)		not null,
    Email				varchar(50)		not null	unique,
    Phone				char(10)		not null,
    Address				varchar(100) 	not null,
    passwordResetToken		varchar(500)	
);
create table Product(
	Id					int				not null 	unique	primary key auto_increment,
	Product_Name		varchar(30)		not null,
	Product_Type		varchar(30)		not null,
	Price				float			not null,
	Fund				float			not null,
	Product_Description varchar(1000) 	not null,
	Instock 			int 			not null,
	Image				varchar(500)	not null	# Lấy link url 
);
create table Bill (
	Id					int				not null	unique	primary key auto_increment,
    Buy_Time			date			not null,	#yyyy/mm/dd
    User_Id				int				not null,
    foreign key (User_Id) references _User (Id)
);
create table Cart(
	Bill_Id 			int 			not null,
	Product_Id 			int 			not null,
	Quantity 			int				not null,
    primary key (Bill_Id ,Product_Id),
    foreign key (Bill_Id) references Bill (Id),
    foreign key (Product_Id) references Product (Id)
);
	alter table _User add constraint Check_Role check (Role_of_user = 'Guest' or Role_of_user = 'Admin');
    alter table Product add constraint Check_Price check (Price > Fund);
    alter table Cart add constraint Check_Quantity check (Quantity > 0);
