CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    status BOOLEAN
)