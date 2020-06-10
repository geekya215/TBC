create table if not exists user
(
	id int auto_increment
		primary key,
	username varchar(20) not null,
	address varchar(100) not null,
	password varchar(100) not null,
	role varchar(10) not null,
	created_at datetime default CURRENT_TIMESTAMP not null,
	updated_at datetime not null
);

