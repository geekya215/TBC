create table if not exists enterprise_mapping
(
	id int auto_increment
		primary key,
	enterprise_address varchar(100) not null,
	employee_address varchar(100) not null,
	created_at datetime default CURRENT_TIMESTAMP not null
);

