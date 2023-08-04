SELECT * FROM role,
INNER JOIN department_id ON department.department_id; = role.id;

SELECT * FROM role JOIN department_names ON department. = department.name


DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE departments(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL NOT NULL,
	department_id INT NOT NULL,
	FOREIGN KEY (department_id)
	REFERENCES departments(id)
	ON DELETE CASCADE
);

CREATE TABLE employees(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
	FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
	manager_id INT,
	FOREIGN KEY (manager_id)
    REFERENCES employees(id) 
    ON DELETE SET NULL
);

INSERT INTO departments(name)
VALUES ("Development"),("Research"),("Human Resources"),("DepartmentFuture");

INSERT INTO roles(title, salary, department_id)
VALUES ('Head Process Engineer', 80000, 1),
('Process Engineer', 50000, 1),
('Head Research Scientists', 180000, 2),
('Genetic Research Scientist', 90000, 2),
('Head of Human Resources', 140000, 3),
('Human Resource Development', 70000, 3),
('Head of Accounting', 150000, 4),
('Accountant', 70000, 4),
('Legal Team Lead', 200000, 5),
('Corporate Lawyer', 150000, 5);


INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Aaron', 'Lam', 1, NULL),
('Josh', 'Jokom', 2, 1),
('Chase', 'Johnson', 3, NULL ),
('Chad', 'Beta', 4, 3),
('Hasan', 'Mohammad', 5, Null),
('Daniel', 'Smith', 6, 5 ),
('Sophie', 'Sarchet', 7, NULL),
('Bonnie', 'Doe', 8, 7),
('John', 'Richards', 9, NULL),
('Chris', 'McIntyre', 10, 9);

SELECT * FROM department;
SELECT id, name FROM departments;