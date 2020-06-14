create table if not exists talent
(
	id int auto_increment
		primary key,
	real_name varchar(100) not null,
	address varchar(100) not null,
	sex varchar(10) not null,
	birthday datetime not null,
	mobile varchar(11) not null,
	description varchar(100) not null,
	created_at datetime default CURRENT_TIMESTAMP not null,
	updated_at datetime not null,
	constraint talent_address_uindex
		unique (address)
);

