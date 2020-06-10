create table if not exists enterprise
(
	id int auto_increment
		primary key,
	address varchar(100) not null,
	site varchar(50) not null,
	telephone varchar(30) not null,
	description varchar(100) not null,
	created_at datetime default CURRENT_TIMESTAMP not null,
	updated_at datetime not null
);

