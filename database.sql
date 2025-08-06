

create database sample_db;
use sample_db;
create table sampl_id(id int primary key auto_increment,username varchar(10) , password varchar(10), email varchar(80), gender varchar(6));
insert into sampl_id(id, username, password, email, gender) values (1,"hema", "12334","abcd@gmail.com", "fema");