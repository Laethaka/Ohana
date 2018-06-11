-- Drops the blogger if it exists currently --
-- DROP DATABASE IF EXISTS ohana_db;
-- -- Creates the "blogger" database --
-- CREATE DATABASE ohana_db;

use ohana_db;
-- select * from Users;

select * from Users where user_password = 'password';