INSERT INTO department(names)
VALUES ("Development"),("Research"),("Human Resources"),("Accounting"),("Legal");

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


INSERT INTO employee(first_name, last_name, role_id, manager_id)
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

