create table if not exists information
(
	id int auto_increment
		primary key,
	data json not null,
	mark_address varchar(100) not null,
	confirm_address varchar(100) null,
	created_at datetime default CURRENT_TIMESTAMP not null,
	confirm_at datetime null,
	confirm tinyint(1) default 0 not null
);

