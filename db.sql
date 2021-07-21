create table if not exists attendees (
    id int not null auto_increment primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) not null,
    title varchar(255)
);

load data local infile './attendees.csv' into table attendees fields terminated by ',' optionally enclosed by '"' lines terminated by '\n' ignore 1 rows;

select * from attendees;
