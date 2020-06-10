create table if not exists university_mapping
(
	id int auto_increment
		primary key,
	university_address varchar(100) not null,
	student_address varchar(100) not null,
	created_at datetime default CURRENT_TIMESTAMP not null
);

